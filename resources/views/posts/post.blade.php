@extends('layout.layout')
@section('title', 'Пост')
@include('partials.navbar')
@section('content')


        <div class="subheader mt-5 ml-3">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-podcast'></i> Автор - {{$post->user->name}}
            </h1>
        </div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <img src="/storage/images/avatars/{{$post->thumbnail}}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title text-center">{{$post->title}}</h5>
                            <p class="card-text text-center">{{$post->preview}}</p>
                            <p class="card-text text-center">{{$post->description}}</p>
                        </div>
                    </div>

                    <div class="mt-4">
                        <h5>Комментарии</h5>

                        @foreach($post->comment as $comment)
                            <div class="card mb-3">
                                <div class="card-body">
                                    <h3 class="text-info font-weight-bold-light text-left">{{$comment->user->name}}</h3>
                                    <p class="card-text">{{$comment->comment}}</p>
                                </div>
                            </div>
                        @endforeach

                        <form class="mt-4" action="{{route('comment',$post->id)}}" method="post">
                            @csrf
                            <div class="form-group">

                                @error('comment')
                                <p class="text-danger"> {{$message}}</p>
                                @enderror

                                <label for="comment">Оставьте свой комментарий</label>
                                <input type="text" name="comment" class="form-control  @error('comment') border-danger @enderror" id="comment" placeholder="Введите комментарий">
                            </div>
                            <button type="submit" class="btn btn-primary">Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

@endsection
