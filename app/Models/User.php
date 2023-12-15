<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Notifications\Notifiable;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Hash;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    #Status
    const STATUS_ONLINE = 'success';
    const STATUS_AWAY = 'warning';
    const STATUS_DO_NOT_DISTURB = "danger";
    protected $fillable = [
        'name',
        'email',
        'password',
        "data-filter-tag",
        "status",
        "avatar",
        "phone",
        "address",
        "instagram",
        "telegram",
        "vk",
        "is_admin",
        "role",
        "github_id",
        "github_token",
        "github_refresh_token"
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];


    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    # Users relations
    public function posts(): HasMany
    {
        return $this->hasMany(Post::class)->orderBy('created_at');
    }


    # User changes

    public function edit(
        $id,
        $data,
        $status
    ): Application|Redirector|RedirectResponse|\Illuminate\Contracts\Foundation\Application {
        User::find($id)->update(array_merge($data, ['status' => $status]));
        session()->put('success', 'Профиль успешно обновлен');
        return redirect(route('home'));
    }

    public function delete_User($id)
    {
        $user = $this->find($id);
        if (!$user->admin_or_current(auth()->id(), $id)) {
            session()->put('error', 'У вас нет прав на удаление пользователя');
            return redirect(route('home'));
        }

        if ($user->is_admin(auth()->id())) {
            $user->delete_user_avatar($user->thumbnail);
            $user->delete();
            session()->put('success', 'Пользователь успешно удален');
            return redirect(route('home'));
        }
        $user->delete_user_avatar($user->thumbnail);
        $user->delete();

        return redirect(route('login'));
    }

    public function change_status($id, $status)
    {
        $user = $this->find($id);

        if (!$user->admin_or_current(auth()->id(), $id)) {
            session()->put('error', 'У вас нет прав на изменение статуса пользователя');
            return redirect(route('home'));
        }

        if ($status == "Онлайн") {
            $status = self::STATUS_ONLINE;
        } elseif ($status == "Отошел") {
            $status = self::STATUS_AWAY;
        } else {
            $status == "Не беспокоить";
            $status = self::STATUS_DO_NOT_DISTURB;
        }

        $user->status = $status;
        $user->save();

        session()->put('success', 'Статус успешно изменен');
    }

    public function change_password($id,$current_password,$newPassword)
    {
        $user = User::find($id);
        if (!Hash::check($current_password, $user->password)) {
            return back()->withErrors(['current_password' => 'Текущий пароль неверный']);
        }

        $user->password = Hash::make($newPassword);
        $user->save();

        session()->put('success', 'Профиль успешно обновлен');

    }


    # Users privileges functions
    public function is_admin($id): bool
    {
        $user = User::find($id);

        if ($user->is_admin == 'true') {
            return true;
        } else {
            return false;
        }
    }

    public function is_author($user_id, $post_user_id): bool
    {
        if ($user_id == $post_user_id) {
            return true;
        } else {
            return false;
        }
    }

    public function is_current_user($user_id): bool
    {
        if (auth()->id() == $user_id) {
            return true;
        } else {
            return false;
        }
    }

    public function delete_user_avatar($image_name): void
    {
        if (file_exists(public_path('storage/images/avatars/' . $image_name))) {
            unlink(public_path('storage/images/avatars/' . $image_name));
        }
    }

    public function admin_or_current($auth_id, $user_id): bool
    {
        if ($this->is_admin($auth_id) || $this->is_current_user($user_id)) {
            return true;
        } else {
            return false;
        }
    }

    public function admin_or_author($auth_id, $post_user_id): bool
    {
        if ($this->is_admin($auth_id) || $this->is_author($auth_id, $post_user_id)) {
            return true;
        } else {
            return false;
        }
    }


}
