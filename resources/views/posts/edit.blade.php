@extends('layout.layout')
@section('title','Изменение поста')
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
                        <h2 class="text-center">Ваш пост</h2>
                    </div>

                    <form action="{{route('edit_process',$post->id)}}" method="post" enctype="multipart/form-data">
                        @csrf

                        <div class="panel-content">
                            <!-- username -->
                            <div class="form-group ">
                                <label class="form-label" >Заголовок</label>
                                <input type="text" name="title" class="form-control @error('email') border-danger @enderror" value="{{$post->title}}">
                            </div>

                            <div class="form-group">
                                <label class="form-label" >Краткое описание</label>
                                <input type="text" name="preview" class="form-control @error('email') border-danger @enderror" value="{{$post->preview}}">
                            </div>

                            <div class="form-group">
                                <label class="form-label" >Содержание</label>
                                <input type="text" name="description" class="form-control @error('email') border-danger @enderror" value="{{$post->description}}">
                            </div>

                            <div class="form-group">
                                <img src="/storage/images/PostsImages/{{$post->thumbnail}}" alt="Картинка вашего поста" class="img-responsive" width="200">
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="example-fileinput">Картинка поста</label>
                                <input type="file" name="image" id="example-fileinput" class="form-control-file">
                            </div>

                            <div class="text-center">
                                <button class="btn btn-info">Отправить сообщение</button>
                            </div>

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

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    @include('partials.search_script')
@endsection
