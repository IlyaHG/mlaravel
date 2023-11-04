<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
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
        "isAdmin",
        "role",
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

    public function posts()
    {
        return $this->hasMany(Post::class)->orderBy('created_at');
    }

    public function IsAdmin($id)
    {
        $user = User::find($id);

        if ($user->IsAdmin == 'true') {
            return true;
        } else {
            return false;
        }

    }

    public function IsAuthor($user_id, $post_user_id)
    {
        if ($user_id == $post_user_id) {
            return true;
        } else {
            return false;
        }
    }

    public function is_current_user($user_id)
    {
        if (auth()->id() == $user_id) {
            return true;
        } else {
            return false;
        }
    }

    public function delete_user_avatar($image_name)
    {
        if (file_exists(public_path('storage/images/avatars/' . $image_name))) {
            unlink(public_path('storage/images/avatars/' . $image_name));
        }
    }

    public function admin_or_current($auth_id, $user_id)
    {
        if ($this->IsAdmin($auth_id) || $this->is_current_user($user_id)) {
            return true;
        } else {
            return false;
        }
    }

    public function admin_or_author($auth_id, $post_user_id)
    {
        if ($this->IsAdmin($auth_id) || $this->IsAuthor($auth_id, $post_user_id)) {
            return true;
        } else {
            return false;

        }
    }
}
