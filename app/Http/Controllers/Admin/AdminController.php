<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUserFormRequest;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function showCreateUserForm()
    {
        return view('foradmin.create_user');
    }

    public function create_user_process(CreateUserFormRequest $request)
    {
        if($request->status == "Онлайн"){
            $status = "success";
        }elseif($request->status == "Отошел"){
            $status = 'warning';
        }else{
            $request->status == "Не беспокоить";
            $status = 'danger';
        }

        $avatar = $request->avatar;
        $avatarName = uniqid().".".$avatar->extension();
        $avatar->move(public_path('storage/images/avatars'),$avatarName);

        User::create([
            "name"=>$request->name,
            "email"=>$request->email,
            "password"=>bcrypt($request->password),
            "data-filter-tag"=> $request->email,
            "status" => $status,
            "avatar" => $avatarName,
            "phone" => "Your number",
            "address" => "Your address",
            "instagram" => "instagram",
            "telegram" =>"telegram",
            "vk" =>"vk",
            "isAdmin"=>'no',
            "role"=>"role",
        ]);
        session()->put('success','Пользователь создан успешно');
        return redirect(route('home'));


    }
}
