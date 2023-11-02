@extends('layout.layout')
@section('title', 'Профиль')
    @section('content')
@include('partials.navbar')

        <main id="js-page-content" role="main" class="page-content mt-3">
            <div class="subheader">
                <h1 class="subheader-title">
                    <i class='subheader-icon fal fa-user'></i> {{$user->name}}
                </h1>
            </div>
            <div class="row">
              <div class="col-lg-6 col-xl-6 m-auto">
                    <!-- profile summary -->
                    <div class="card mb-g rounded-top">
                        <div class="row no-gutters row-grid">
                            <div class="col-12">
                                <div class="d-flex flex-column align-items-center justify-content-center p-4">
                                    @if(session()->has('success'))
                                        <div class="alert alert-info">
                                        {{session()->get('success')}}
                                        {{session()->forget('success')}}
                                        </div>
                                    @endif
                                    <img src="/storage/images/avatars/{{$user->avatar}}" class="rounded-circle shadow-2 img-thumbnail" alt="">
                                    <h5 class="mb-0 fw-700 text-center mt-3">
                                        {{$user->name}}
                                        <small class="text-muted mb-0">{{$user->address}}</small>
                                    </h5>

                                    <div class="container mt-4">
                                        <div class="row d-flex justify-content-center">
                                            <div class="col-md-3 mb-3 text-center">
                                                <a href="{{route("upload_avatar",$user->id)}}" class="btn btn-info btn-block">Установить аватар</a>
                                            </div>
                                        </div>
                                        <div class="row d-flex justify-content-center">
                                            <div class="col-md-3 mb-3 text-center">
                                                <a href="{{route('user.change_password',$user->id)}}" class="btn btn-info btn-block">Изменить пароль</a>
                                            </div>
                                        </div>
                                        <div class="row d-flex justify-content-center">
                                            <div class="col-md-3 mb-3 text-center">
                                                <a href="{{route('user.edit',$user->id)}}" class="btn btn-info btn-block">Редактировать</a>
                                            </div>
                                        </div>
                                        <div class="row d-flex justify-content-center">
                                            <div class="col-md-3 mb-3 text-center">
                                                <a href="{{route('user.delete',$user->id)}}" class="btn btn-danger btn-block" onclick="return confirm('Вы уверены?');">Удалить Профиль</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-4 text-center demo">
                                        <a href="{{$user->instagram}}" class="fs-xl" style="color:#C13584">
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                        <a href="{{$user->vk}}" class="fs-xl" style="color:#4680C2">
                                            <i class="fab fa-vk"></i>
                                        </a>
                                        <a href="{{$user->telegram}}" class="fs-xl" style="color:#0088cc">
                                            <i class="fab fa-telegram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="p-3 text-center">
                                    <a href="tel:{{$user->phone}}" class="mt-1 d-block fs-sm fw-400 text-dark">
                                        <i class="fas fa-mobile-alt text-muted mr-2"></i> +1 317-456-2564</a>
                                    <a href="mailto:{{$user->email}}" class="mt-1 d-block fs-sm fw-400 text-dark">
                                        <i class="fas fa-mouse-pointer text-muted mr-2"></i> {{$user->email}}</a>
                                    <address class="fs-sm fw-400 mt-4 text-muted">
                                        <i class="fas fa-map-pin mr-2"></i> {{$user->address}}
                                    </address>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </main>
        @endsection
    </body>

    <script src="../../public/js/vendors.bundle.js"></script>
    <script src="../../public/js/app.bundle.js"></script>
    <script>

        $(document).ready(function()
        {

        });

    </script>
</html>
