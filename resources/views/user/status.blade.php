@extends('layout.layout')
@section('title','Смена статуса')
@section('content')
    @include('partials.navbar')

    <main id="js-page-content" role="main" class="page-content mt-3">
        <div class="subheader">
            <h1 class="subheader-title">
                <i class='subheader-icon fal fa-sun'></i> Установить статус
            </h1>
        </div>
        <form action="{{route('status_process',$user->id)}}" method="Post">
            @csrf
            <div class="row">
                <div class="col-xl-6">
                    <div id="panel-1" class="panel">
                        <div class="panel-container">
                            <div class="panel-hdr">
                                <h2>Установка текущего статуса</h2>
                            </div>
                            <div class="panel-content">
                                <div class="row">
                                    <div class="col-md-4">
                                        <!-- status -->
                                        <div class="form-group">
                                            <label class="form-label" for="example-select">Выберите статус</label>
                                            <select  name="status" class="form-control" id="example-select">
                                                <option>Онлайн</option>
                                                <option>Отошел</option>
                                                <option>Не беспокоить</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mt-3 d-flex flex-row-reverse">
                                        <input hidden="{{$user->id}}">
                                        <button class="btn btn-warning" type="submit">Set Status</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </form>
    </main>
    @include('partials.search_script')
@endsection
