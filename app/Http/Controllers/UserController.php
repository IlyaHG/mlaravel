<?php

namespace App\Http\Controllers;

use App\Http\Requests\changePasswordFormRequest;
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

    public function delete($id)
    {
        $user = User::find($id);
        if (!$user->admin_or_current(auth()->id(),$id)) {
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

    public function status(Request $request)
    {
        define('Онлайн', 'success');
        define('Отошел', 'warning');
        define('Не беспокоить', 'danger');

        if ($request->status == "Онлайн") {
            $status = "success";
        } elseif ($request->status == "Отошел") {
            $status = 'warning';
        } else {
            $request->status == "Не беспокоить";
            $status = 'danger';
        }

        $user = User::find($request->id);
        $user->status = $status;
        $user->save();

        session()->put('success', 'Статус успешно изменен');
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

        $validatedData = $request->validate([
            'name' => ['string'],
            'role' => ['string'],
            'phone' => ['string'],
            'address' => ['string'],
            'vk' => ['string'],
            'instagram' => ['string'],
            'telegram' => ['string']]);

        User::find($id)->update(array_merge($validatedData, ['status' => $status]));
        session()->put('success', 'Профиль успешно обновлен');
        return redirect(route('home'));


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
//dd($new_avatar->store('/images/avatars/'));

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
        if (!Hash::check($request->current_password, $user->password)) {
            return back()->withErrors(['current_password' => 'Текущий пароль неверный']);
        }

        $user->password = Hash::make($request->password);
        $user->save();

        session()->put('success', 'Профиль успешно обновлен');
        return redirect(route('profile', $user->id));
    }


}


