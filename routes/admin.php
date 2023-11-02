<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


    Route::get('/login',[App\Http\Controllers\Admin\AuthController::class,'index'])->name('login');
    Route::post('/login_process',[App\Http\Controllers\Admin\AuthController::class,'login'])->name('login_process');

Route::middleware("auth:admin")->group(function () {
    Route::get('logout', [App\Http\Controllers\Admin\AuthController::class,'logout'])->name('logout');

    
});
