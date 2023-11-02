@extends('layout.login_layout')
@section('title','Авторизация')
@section('content')
    <div class="blankpage-form-field">
        <div
            class="page-logo m-0 w-100 align-items-center justify-content-center rounded border-bottom-left-radius-0 border-bottom-right-radius-0 px-4">
            <a href="javascript:void(0)" class="page-logo-link press-scale-down d-flex align-items-center">
                <img src="../../img/logo.png" alt="SmartAdmin WebApp" aria-roledescription="logo">
                <span class="page-logo-text mr-1">Учебный проект</span>
                <i class="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
            </a>
        </div>
        <div class="card p-4 border-top-left-radius-0 border-top-right-radius-0">

            @if(session()->has('success'))
                <div class="alert alert-success">
                    {{session()->get('success')}}
                    {{session()->forget('success')}}
                </div>
            @endif

            <form action="{{route('login_process')}}" method="Post">
                @csrf
                <div class="form-group">
                    <label class="form-label" for="username">Email</label>
                    <input type="email" name="email" id="username"
                           class="form-control @error('email') border-danger @enderror" placeholder="Эл. адрес"
                           value="">
                </div>

                @error('email')
                <p class="text-danger"> {{$message}}</p>
                @enderror

                <div class="form-group">
                    <label class="form-label" for="password">Пароль</label>
                    <input type="password" name="password" id="password"
                           class="form-control @error('password') border-danger @enderror " placeholder="Пароль">
                </div>
                @error('password')
                <p class="text-danger"> {{$message}}</p>
                @enderror

                <div class="text-center">
                    <button type="submit" class="btn btn-default btn-inline-block">Войти</button>
                </div>
            </form>
            <div class="text-center">
                <a href="{{route('forgot_password')}}">Забыли пароль?</a>
            </div>
        </div>
        <div class="blankpage-footer text-center">
            Нет аккаунта? <a href="{{route('register')}}"><strong>Зарегистрироваться</strong></a>
        </div>
    </div>


    @include('partials.video')
@endsection
