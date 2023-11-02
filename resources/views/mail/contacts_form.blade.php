@extends('layout.layout')
@section('title','Наши контакты')
@section('content')
    @include('partials.navbar')
    <div class="row">
        <div class="col-xl-6 mx-auto">
            <div id="panel-1" class="panel">
                <div class="panel-container">
                    @error('email')
                    <div class="alert alert-danger"> {{$message}}
                    </div>
                    @enderror

                    @if(session()->has('success'))
                        <div class="alert alert-success">
                            {{session()->get('success')}}
                            {{session()->forget('success')}}
                        </div>
                    @endif
                    <div class="panel-hdr">
                        <h2 class="text-center">Можете связаться с Нами!</h2>
                    </div>

                    <form action="{{route('contacts_process')}}" method="post">
                        @csrf

                        <div class="panel-content">
                            <!-- username -->
                            <div class="form-group ">
                                <label class="form-label" >E-mail</label>
                                <input type="text" name="email" class="form-control @error('email') border-danger @enderror"
                                       placeholder="E-mail">
                            </div>

                            <div class="form-group">
                                <label class="form-label" >Ваше Имя</label>
                                <input type="hidden" name='id' value="{{auth()->id()}}">
                                <input type="text" name="name" class="form-control @error('email') border-danger @enderror"
                                           placeholder="{{auth()->user()->name}}">
                            </div>

                            <div class="form-group">
                                <label class="form-label" >Текст сообщения</label>
                                <input type="text" name="text" class="form-control @error('email') border-danger @enderror"
                                       placeholder="Ваше Сообщение">
                            </div>

                            <div class="text-center">
                                <button class="btn btn-info">Отправить сообщение</button>
                            </div>


                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    @include('partials.search_script')
@endsection
