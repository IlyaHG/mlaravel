<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\IndexController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth')->group(function () {

    Route::get('/home', [IndexController::class, 'index'])->name('home');
    Route::get('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::get('/profile/{id}', [UserController::class, 'profile'])->name('profile');
    Route::get('delete_profile/{id}',[UserController::class,'delete'])->name('user.delete');

    Route::get('/profile/{id}/edit', [UserController::class, 'show_edit_form'])->name('user.edit');
    Route::post('/profile/edit_process/{id}', [UserController::class, 'edit'])->name('edit_process');

    Route::get('/change_password/{id}', [UserController::class, 'show_change_password_form'])->name('user.change_password');
    Route::post('/change_password_process/{id}', [UserController::class, 'change_password_process'])->name('change_password_process');

    Route::get('/status/{id}', [UserController::class, 'show_status_form'])->name('status');
    Route::post('/profile/status_process/{id}', [UserController::class, 'status'])->name('status_process');

    Route::get('/upload_avatar/{id}', [UserController::class, 'show_upload_avatar_form'])->name('upload_avatar');
    Route::post('/upload_avatar_process/{id}', [UserController::class, 'upload_avatar_process'])->name('upload_avatar_process');

    Route::get('/create_post/user/{id}', [PostController::class, 'show_create_form'])->name('posts.create');
    Route::post('/create_post_process/{id}', [PostController::class, 'create'])->name('create_process');


    Route::get('/posts', [PostController::class, 'show_all_posts'])->name('posts');
    Route::get('/posts/{id}', [PostController::class, 'show_form'])->name('posts.post');
    Route::post('/posts/comment/{id}', [PostController::class, 'comment'])->name('comment');

    Route::get('/post_edit/{id}', [PostController::class, 'show_edit_form'])->name('posts.edit');
    Route::post('/post_edit_process/{id}', [PostController::class, 'edit_post'])->name('post_edit_process');

    Route::get('/delele_post/{id}', [PostController::class, 'delete_post'])->name('delete_post');

    Route::get('/create_user', [\App\Http\Controllers\Admin\AdminController::class, 'show_create_user_form'])->name('create_user');
    Route::post('/create_user_process', [\App\Http\Controllers\Admin\AdminController::class, 'create_user_process'])->name('create_user_process');



});

Route::middleware('guest')->group(function () {

    Route::get('/login', [AuthController::class, 'show_login_form'])->name('login');
    Route::post('/login_process', [AuthController::class, 'login'])->name('login_process');

    Route::get('/register', [AuthController::class, 'show_register_form'])->name('register');
    Route::post('/register_process', [AuthController::class, 'register'])->name('register_process');

    Route::get('/forgot', [AuthController::class, 'show_forgot_form'])->name('forgot_password');
    Route::post('/forgot_process', [AuthController::class, 'forgot'])->name('forgot_process');

    Route::get('/contacts',[IndexController::class, 'show_contact_form'])->name('contacts');
    Route::post('/contacts_process',[IndexController::class, 'contacts_process'])->name('contacts_process');


});







