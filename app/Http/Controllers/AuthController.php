<?php

namespace App\Http\Controllers;

use App\Http\Requests\AuthFormRequest;
use App\Http\Requests\ForgotFormRequest;
use App\Http\Requests\RegisterFormRequest;
use App\Mail\ForgotPassword;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Laravel\Socialite\Facades\Socialite;


class AuthController extends Controller
{
    public function show_login_form()
    {
        return view('auth.login');
    }
    public function login (AuthFormRequest $request)
    {
        $data = ([
            'email' => $request->email,
            'password'=>$request->password
        ]);
        $user = User::where('email', $request->email)->first();

        if(auth('web')->attempt($data)){
            return redirect(route('profile', $user->id));
        }
        return redirect(route('login'))->withErrors(["email" => "Пользователь не найден, либо данные введены неправильно"]);
    }

    public function show_register_form()
    {
        return view('auth.register');
    }
    public function register(RegisterFormRequest $request)
    {

        User::create([
            "name"=>$request->name,
            "email"=>$request->email,
            "password"=>bcrypt($request->password),
            "data-filter-tag"=> $request->email,
            "status" => 'success',
            "avatar" => "0",
            "phone" => "0",
            "address" => "0",
            "instagram" => "instagram",
            "telegram" =>"telegram",
            "vk" =>"vk",
            "is_admin"=>'no',
            "role"=>"role",
        ]);
        session()->put('success','Регистрация успешна');
        return redirect(route('login'));
    }

    public function logout()
    {
        auth("web")->logout();
        return redirect(route('login'));
    }

    public function show_forgot_form()
    {
        return view('auth.forgot_form');
    }
    public function forgot(ForgotFormRequest $request)
    {
        $newPassword = uniqid();

        $user = User::where('email',$request->email)->first();
        $user->update(['password' => bcrypt($newPassword)]);
        $userName =$user->name;

        Mail::to($request->email)->send(new ForgotPassword($newPassword,$userName));
        session()->put('success','Ваш пароль был изменен, зайдите на указанный электронный адрес');
        return redirect(route('login'));
    }


    public function github()
    {
        return Socialite::driver('github')->redirect();
    }

    public function githubCallback(): \Illuminate\Http\RedirectResponse
    {
        $githubUser = Socialite::driver('github')->stateless()->user();

        $user = User::query()->updateOrCreate([
            'github_id' => $githubUser->id,
        ], [
            'name' => $githubUser->name,
            'email' => $githubUser->email,
            'password'=>bcrypt(str()->random(20)),
            'github_token' => $githubUser->token,
            'github_refresh_token' => $githubUser->refreshToken,
        ]);

        auth()->login($user);
        return redirect()
            ->intended(route('profile', $user->id));
    }
}
