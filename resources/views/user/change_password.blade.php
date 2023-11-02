@extends('layout.layout')
@section('title','Смена пароля')
@section('content')
    @include('partials.navbar')
    <main id="js-page-content" role="main" class="page-content mt-3">
        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-lock'></i> Смена пароля
            </h1>
        </div>
       @if($errors->has('current_password'))
        <div class="col-xl-6 alert alert-danger btn-inline-block">
            {{$errors->first('current_password')}}
        </div>
       @endif




        <form action="{{route('change_password_process',$user->id)}}" method="POST">
            @csrf
            <div class="row">
                <div class="col-xl-6">
                    <div id="panel-1" class="panel">
                        <div class="panel-container">
                            <div class="panel-hdr">
                                <h2>Обновление эл. адреса и пароля</h2>
                            </div>
                            <div class="panel-content">
                                <!-- email -->
                                <div class="form-group">
                                    <label class="form-label" for="email">Email</label>
                                    <input type="email" name="email" id="email" class="form-control" value="{{$user->email}}">
                                </div>
                                <!-- Old password -->

                                <div class="form-group">
                                    <label class="form-label" for="current_password">Текущий пароль</label>
                                    <input type="password"  name="current_password" id="current_password" class="form-control">
                                </div>

                                <!-- password -->
                                <div class="form-group">
                                    <label class="form-label" for="password">Новый пароль</label>
                                    <input type="password"  name="password" id="password" class="form-control">
                                </div>

                                <!-- password confirmation-->
                                <div class="form-group">
                                    <label class="form-label" for="password_confirmation">Подтвердите новый пароль</label>
                                    <input type="password" name="password_confirmation" id="password_confirmation" class="form-control">
                                </div>


                                <div class="col-md-12 mt-3 d-flex flex-row-reverse">
                                    <button class="btn btn-warning" type="submit">Изменить</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    </main>
@include('partials.footer')
@endsection
