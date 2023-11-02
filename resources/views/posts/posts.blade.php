@extends('layout.layout')
@section('title', 'Посты')
@include('partials.navbar')
@section('content')
    <main id="js-page-content" role="main" class="page-content mt-3">
        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-podcast'></i> Посты
            </h1>
        </div>

        @if(session()->has('success'))
            {{session('success')}}
            {{session()->forget('success')}}
        @endif

        @if(session()->has('error'))
            <div class="alert alert-danger">
                {{session('error')}}
                {{session()->forget('error')}}
            </div>
        @endif


        <div class="container">
            <div class="row justify-content-center">
                @foreach($posts as $post)
                    <div class="col-md-4">
                        <div class="card" style="width: 18rem;">
                            <img src="/storage/images/PostsImages/{{$post->thumbnail}}" class="card-img-top" alt="...">
                            <div class="card-body d-flex flex-column align-items-center">
                                <h5 class="card-title">{{$post->title}}</h5>
                                <p class="card-text">{{$post->preview}}</p>
                                <a href="{{route('posts.post',$post->id)}}" class="btn btn-primary btn-block">
                                    Посмотреть
                                </a>
                                <a href="{{route('delete_post',$post->id)}}" class="btn btn-danger btn-block">
                                    Удалить
                                </a>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    {{$posts->links()}}

@endsection
