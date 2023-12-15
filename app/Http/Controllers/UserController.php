<?php

namespace App\Http\Controllers;

use App\Http\Requests\ChangePasswordFormRequest;
use App\Http\Requests\EditFormRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Testing\Fluent\Concerns\Has;

class UserController extends Controller
{

// Профиль - Удаление

    public function profile($id)
    {

        $user = User::find($id);
        return view('user.profile', ['user' => $user]);
    }

    public function delete_user($id)
    {
        $user = User::find($id);

        $user->delete_User($id);

        return redirect(route('login'));
    }

//    Статус
    public function show_status_form($id)
    {

        $user = User::find($id);
        if (!$user->admin_or_current(auth()->id(),$id))  {
            session()->put('error', 'У вас нет прав на смену статуса другим пользователям');
            return redirect(route('home'));
        }
        return view('user.status', ['user' => $user]);
    }

    public function change_status(Request $request)
    {
        $user_id = $request->id;
        $new_status = $request->status;

        $user = User::find($user_id);

        $user->change_status($user_id,$new_status);

        return redirect(route('home'));

    }


// Редактирование Профиля
    public function show_edit_form($id)
    {
        $user = User::find($id);
        if (!$user->admin_or_current(auth()->id(),$id)) {

            session()->put('error', 'У вас нет прав на редактирование данных другого пользователя');
            return redirect(route('home'));
        }
        return view('user.edit', ['user' => $user]);

    }

    public
    function edit($id, Request $request)
    {

        if ($request->status == User::STATUS_ONLINE) {
            $status = "success";
        } elseif ($request->status == User::STATUS_AWAY) {
            $status = 'warning';
        } else {
            $request->status == User::STATUS_DO_NOT_DISTURB;
            $status = 'danger';
        }

        $data = $request->validate([
            'name' => ['string'],
            'role' => ['string'],
            'phone' => ['string'],
            'address' => ['string'],
            'vk' => ['string'],
            'instagram' => ['string'],
            'telegram' => ['string']]);

        $user=User::find($id);
        return $user->edit($user->id, $data,$status);

    }

// Установка Аватара

    public
    function show_upload_avatar_form($id)
    {
        $user = User::find($id);

        if (!$user->admin_or_current(auth()->id(),$id)) {
            session()->put('error', 'У вас нет прав на смену аватара другого пользователя');
            return redirect(route('home'));
        }
        return view('user.upload_avatar', ['user' => $user]);

    }

    public
    function upload_avatar_process($id, Request $request)
    {
        $user = User::find($id);

        $user->delete_user_avatar($user->avatar);

        $new_avatar = $request->file('avatar');

        $new_avatar->store('/images/avatars/');
        $user->update(['avatar' => $new_avatar->hashName()]);

        session()->put('success', 'Аватар установлен успешно');
        return redirect()->back();
    }

// Смена Пароля

    public
    function show_change_password_form($id)
    {
        $user = User::find($id);
        if (!$user->admin_or_current(auth()->id(),$id)) {
            session()->put('error', 'У вас нет прав');
            return redirect(route('home'));
        }
        return view('user.change_password', ['user' => $user]);

    }

    protected
    function change_password_process($id, ChangePasswordFormRequest $request)
    {
        $user = User::find($id);
        $current_password = $request->current_password;
        $new_password = $request->new_password;

        $user->change_password($user->id,$current_password,$new_password);
        return redirect(route('profile', $user->id));
    }


}


