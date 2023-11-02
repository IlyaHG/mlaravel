@extends('layout.layout')
@section('title','Редактирование профиля')
@section('content')
    @include('partials.navbar')

    <main id="js-page-content" role="main" class="page-content mt-12">
        <div class="subheader text-center">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-plus-circle'></i> Редактировать
            </h1>
        </div>

        <form action="{{route('edit_process',$user->id)}}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="row">
                <div class="col-xl-6 mx-auto">
                    <div id="panel-1" class="panel">
                        <div class="panel-container">
                            <div class="panel-hdr">
                                <h2 class="text-center">Общая информация</h2>
                            </div>
                            <div class="panel-content">
                                <!-- username -->
                                <div class="form-group">
                                    <label class="form-label" for="simpleinput_name">Ваше Имя</label>
                                    <input type="text" name="name" id="simpleinput_name" class="form-control"
                                           value="{{$user->name}}">
                                </div>

                                <!-- title -->
                                <div class="form-group">
                                    <label class="form-label" for="simpleinput_role">Ваша Роль в команде</label>
                                    <input type="text" name="role" id="simpleinput_role" class="form-control"
                                           value="{{$user->role}}">
                                </div>

                                <!-- tel -->
                                <div class="form-group">
                                    <label class="form-label" for="simpleinput_phone">Номер телефона</label>
                                    <input type="text" name="phone" id="simpleinput_phone" class="form-control"
                                           value="{{$user->phone}}">
                                </div>

                                <!-- address -->
                                <div class="form-group">
                                    <label class="form-label" for="simpleinput_address">Адрес</label>
                                    <input type="text" name="address" id="simpleinput_address" class="form-control"
                                           value="{{$user->address}}">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div class="col-xl-12">
                <div id="panel-1" class="panel">
                    <div class="panel-container">
                        <div class="panel-hdr">
                            <h2>Социальные сети</h2>
                        </div>
                        <div class="panel-content">
                            <div class="row">
                                <div class="col-md-4">
                                    <!-- vk -->
                                    <div class="input-group input-group-lg bg-white shadow-inset-2 mb-2">
                                        <div class="input-group-prepend">
                                                <span class="input-group-text bg-transparent border-right-0 py-1 px-3">
                                                    <span class="icon-stack fs-xxl">
                                                        <i class="base-7 icon-stack-3x" style="color:#4680C2"></i>
                                                        <i class="fab fa-vk icon-stack-1x text-white"></i>
                                                    </span>
                                                </span>
                                        </div>
                                        <input type="text" name="vk"
                                               class="form-control border-left-0 bg-transparent pl-0"
                                               value="{{$user->vk}}">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <!-- telegram -->
                                    <div class="input-group input-group-lg bg-white shadow-inset-2 mb-2">
                                        <div class="input-group-prepend">
                                                <span class="input-group-text bg-transparent border-right-0 py-1 px-3">
                                                    <span class="icon-stack fs-xxl">
                                                        <i class="base-7 icon-stack-3x" style="color:#38A1F3"></i>
                                                        <i class="fab fa-telegram icon-stack-1x text-white"></i>
                                                    </span>
                                                </span>
                                        </div>
                                        <input type="text" name="telegram"
                                               class="form-control border-left-0 bg-transparent pl-0"
                                               value="{{$user->telegram}}">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <!-- instagram -->
                                    <div class="input-group input-group-lg bg-white shadow-inset-2 mb-2">
                                        <div class="input-group-prepend">
                                                <span class="input-group-text bg-transparent border-right-0 py-1 px-3">
                                                    <span class="icon-stack fs-xxl">
                                                        <i class="base-7 icon-stack-3x" style="color:#E1306C"></i>
                                                        <i class="fab fa-instagram icon-stack-1x text-white"></i>
                                                    </span>
                                                </span>
                                        </div>
                                        <input type="text" name="instagram"
                                               class="form-control border-left-0 bg-transparent pl-0"
                                               value="{{$user->instagram}}">
                                    </div>
                                </div>
                                <div class="col-md-6 mt-3 d-flex flex-row-reverse">
                                    <button class="btn btn-success" type="submit">Добавить Данные</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>
        </form>

        @if($errors->any())
            <div class="alert alert-danger" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                @foreach($errors->all() as $error)
                    {{ $error }}<br/>
                @endforeach
            </div>
        @endif
    </main>
    @include('partials.search_script')
@endsection
