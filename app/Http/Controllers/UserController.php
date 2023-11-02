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
        return view('user.profile',['user'=>$user]);
    }
    public function deleteUser($id)
    {

       $user = User::find($id);
        if((auth()->id() == $user->id) || auth()->user()->IsAdmin == 'true'){

            if(file_exists(public_path('storage/images/avatars/'.$user->avatar))){
                unlink(public_path('storage/images/avatars/'.$user->avatar));
            }
            $user->delete();
            return redirect(route('login'));
        }else{
            session()->put('error','У вас нет прав на удаление пользователя');
            return redirect(route('home'));
        }

    }

//    Статус
    public function showStatusForm ($id)
    {
        $user = User::find($id);
        if((auth()->id() == $user->id) || auth()->user()->IsAdmin == 'true') {
            return view('user.status', ['user' => $user]);
        }else{
            session()->put('error','У вас нет прав на смену статуса другим пользователям');
            return redirect(route('home'));
        }
    }

    public function status(Request $request)
    {

        if($request->status == "Онлайн"){
             $status = "success";
        }elseif($request->status == "Отошел"){
             $status = 'warning';
        }else{
            $request->status == "Не беспокоить";
             $status = 'danger';
        }
     $user = User::find($request->id);
        $user->status = $status;
        $user->save();

        session()->put('success','Статус успешно изменен');
        return redirect(route('home'));
    }


// Редактирование Профиля
    public function  showEditForm($id)
    {
        $user = User::find($id);
        if((auth()->id() == $user->id) || auth()->user()->IsAdmin == 'true') {
            return view('user.edit', ['user' => $user]);
        }else {
            session()->put('error', 'У вас нет прав на редактирование данных другого пользователя');
            return redirect(route('home'));
        }
    }
    public function  edit($id,Request $request)
    {

            if ($request->status == "Онлайн") {
                $status = "success";
            } elseif ($request->status == "Отошел") {
                $status = 'warning';
            } else {
                $request->status == "Не беспокоить";
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

    public function  showUploadAvatarForm($id)
    {
        $user = User::find($id);
        if((auth()->id() == $user->id) || auth()->user()->IsAdmin == 'true') {

            return view('user.upload_avatar', ['user' => $user]);
        }else{
            session()->put('error','У вас нет прав на смену аватара другого пользователя');
            return redirect(route('home'));
        }
    }
    public function  uploadAvatarProcess($id,Request $request)
    {
        $user = User::find($id);
        if(file_exists(public_path('storage/images/avatars/'.$user->avatar))){
          unlink(public_path('storage/images/avatars/'.$user->avatar));
        }

        $avatar = $request->avatar;
        $avatarName = uniqid().".".$avatar->extension();
        $avatar->move(public_path('storage/images/avatars'),$avatarName);

        $user->update(['avatar'=>$avatarName]);
        session()->put('success','Аватар установлен успешно');
        return redirect()->back();


    }
// Смена Пароля

    public function showChangePasswordForm($id)
    {
        $user = User::find($id);
        if((auth()->id() == $user->id) || auth()->user()->IsAdmin == 'true') {
       return view('user.change_password',['user'=>$user]);
    }else{
            session()->put('error','У вас нет прав');
            return redirect(route('home'));
        }
    }
    protected function changePassword_process($id,changePasswordFormRequest $request)
    {
        $user =  User::find($id);
        if(!Hash::check($request->current_password,$user->password)){
            return back()->withErrors(['current_password'=>'Текущий пароль неверный']);
        }

        $user->password = Hash::make($request->password);
        $user->save();

        session()->put('success','Профиль успешно обновлен');
        return redirect(route('profile',$user->id));
    }

}


