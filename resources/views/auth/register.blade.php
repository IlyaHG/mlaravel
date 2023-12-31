@extends('layout.login_layout')
@section('title',"Регистрация")
@section('content')
    <div class="page-wrapper auth">
        <div class="page-inner bg-brand-gradient">
            <div class="page-content-wrapper bg-transparent m-0">
                <div class="height-10 w-100 shadow-lg px-4 bg-brand-gradient">
                    <div class="d-flex align-items-center container p-0">
                        <div
                            class="page-logo width-mobile-auto m-0 align-items-center justify-content-center p-0 bg-transparent bg-img-none shadow-0 height-9 border-0">
                            <a href="javascript:void(0)"
                               class="page-logo-link press-scale-down d-flex align-items-center">
                                <img src="../../img/logo.png" alt="SmartAdmin WebApp" aria-roledescription="logo">
                                <span class="page-logo-text mr-1">Учебный проект</span>
                            </a>
                        </div>
                        <span class="text-white opacity-50 ml-auto mr-2 hidden-sm-down">
                            Уже зарегистрированы?
                        </span>
                        <a href="{{route('login')}}" class="btn-link text-white ml-auto ml-sm-0">
                            Войти
                        </a>
                    </div>
                </div>
                <div class="flex-1"
                     style="background: url(../../public/img/svg/pattern-1.svg) no-repeat center bottom fixed; background-size: cover;">
                    <div class="container py-4 py-lg-5 my-lg-5 px-4 px-sm-0">
                        <div class="row">
                            <div class="col-xl-12">
                                <h2 class="fs-xxl fw-500 mt-4 text-white text-center">
                                    Регистрация
                                    <small class="h3 fw-300 mt-3 mb-5 text-white opacity-60 hidden-sm-down">
                                        Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает
                                        сосредоточиться.
                                        <br>
                                        По своей сути рыбатекст является альтернативой традиционному lorem ipsum

                                    </small>
                                </h2>
                            </div>
                            <div class="col-xl-6 ml-auto mr-auto">
                                <div class="card p-4 rounded-plus bg-faded">

                                    <form id="js-login" novalidate="" action="{{route('register_process')}}"
                                          method="POST">
                                        @csrf

                                        <div class="form-group">
                                            <label class="form-label" for="emailverify">Имя</label>
                                            <input type="email" name="name" class="form-control @error('name') border-danger @enderror" placeholder="Ваше Имя">
                                            <div class="invalid-feedback">Заполните поле.</div>
                                        </div>
                                        @error('name')
                                        <p class="text-danger">{{$message}}</p>
                                        @enderror

                                        <div class="form-group">
                                            <label class="form-label" for="emailverify">Email</label>
                                            <input type="email" name="email"  class="form-control @error('email') border-danger @enderror"
                                                   placeholder="Эл. адрес">
                                            <div class="invalid-feedback">Заполните поле.</div>
                                            <div class="help-block">Эл. адрес будет вашим логином при авторизации</div>
                                        </div>

                                        @error('email')
                                        <p class="text-danger"> {{$message}}</p>
                                        @enderror

                                        <div class="form-group">
                                            <label class="form-label" for="userpassword">Пароль <br></label>
                                            <input type="password" name="password" class="form-control @error('password') border-danger @enderror"
                                                   placeholder="Ваш пароль" required>
                                            <div class="invalid-feedback">Заполните поле.</div>
                                        </div>

                                        @error('password')
                                        <p class="text-danger"> {{$message}}</p>
                                        @enderror


                                        <div class="form-group">
                                            <label class="form-label" for="userpassword">Повторите пароль <br></label>
                                            <input type="password" name="password_confirmation" class="form-control @error('password_confirm') border-danger @enderror"
                                                   placeholder="Повторите ваш пароль">
                                            <div class="invalid-feedback">Заполните поле.</div>
                                        </div>

                                        @error('password_confirm')
                                        <p class="text-danger"> {{$message}}</p>
                                        @enderror

                                        <div class="row no-gutters">
                                            <div class="col-md-4 ml-auto text-right">
                                                <button id="js-login-btn" type="submit"
                                                        class="btn btn-block btn-danger btn-lg mt-3">Регистрация
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="../../public/js/vendors.bundle.js"></script>
    <script>
        $("#js-login-btn").click(function (event) {

            // Fetch form to apply custom Bootstrap validation
            var form = $("#js-login")

            if (form[0].checkValidity() === false) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.addClass('was-validated');
            // Perform ajax submit here...
        });

    </script>
@endsection

