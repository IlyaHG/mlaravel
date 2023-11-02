@extends('layout.layout')
@section('title','Забыли пароль')
@section('content')
    <div class="row mt-5">
        <div class="col-xl-3 mx-auto">
            <div id="panel-1" class="panel">
                <div class="panel-container">

                    <div class="panel-hdr">
                        <h2 class="text-center">Забыли пароль?</h2>
                    </div>

                    <form action="{{route('forgot_process')}}" method="post">
                        @csrf
                        <div class="panel-content">
                            <!-- username -->
                            <div class="form-group ">
                                <label class="form-label" >Введите E-mail, который привязан к аккаунту</label>
                                <input type="text" name="email" class="form-control @error('email') border-danger @enderror"
                                       placeholder="E-mail">
                            </div>

                            <div class="text-center">
                                <button class="btn btn-info">Восстановить пароль</button>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    @include('partials.search_script')
@endsection
