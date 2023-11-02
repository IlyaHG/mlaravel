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
    Route::get('deleteProfile/{id}',[UserController::class,'deleteUser'])->name('user.delete');

    Route::get('/profile/{id}/edit', [UserController::class, 'showEditForm'])->name('user.edit');
    Route::post('/profile/edit_process/{id}', [UserController::class, 'edit'])->name('edit_process');

    Route::get('/change_password/{id}', [UserController::class, 'showChangePasswordForm'])->name('user.change_password');
    Route::post('/change_password_process/{id}', [UserController::class, 'changePassword_process'])->name('change_password_process');

    Route::get('/status/{id}', [UserController::class, 'showStatusForm'])->name('status');
    Route::post('/profile/status_process/{id}', [UserController::class, 'status'])->name('status_process');

    Route::get('/uploadAvatar/{id}', [UserController::class, 'showUploadAvatarForm'])->name('upload_avatar');
    Route::post('/uploadAvatar_process/{id}', [UserController::class, 'uploadAvatarProcess'])->name('upload_avatar_process');

    Route::get('/create_post/user/{id}', [PostController::class, 'showCreatePostForm'])->name('posts.create');
    Route::post('/create_post_process/{id}', [PostController::class, 'create_post'])->name('create_process');


    Route::get('/posts', [PostController::class, 'showPostsForm'])->name('posts');
    Route::get('/posts/{id}', [PostController::class, 'showPostForm'])->name('posts.post');
    Route::post('/posts/comment/{id}', [PostController::class, 'comment'])->name('comment');
    Route::get('/delelePost/{id}', [PostController::class, 'deletePost'])->name('delete_post');

    Route::get('/create_user', [\App\Http\Controllers\Admin\AdminController::class, 'showCreateUserForm'])->name('create_user');
    Route::post('/create_user_process', [\App\Http\Controllers\Admin\AdminController::class, 'create_user_process'])->name('create_user_process');



});

Route::middleware('guest')->group(function () {

    Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
    Route::post('/login_process', [AuthController::class, 'login'])->name('login_process');

    Route::get('/register', [AuthController::class, 'showRegisterForm'])->name('register');
    Route::post('/register_process', [AuthController::class, 'register'])->name('register_process');

    Route::get('/forgot', [AuthController::class, 'showForgotForm'])->name('forgot_password');
    Route::post('/forgot_process', [AuthController::class, 'forgot'])->name('forgot_process');

    Route::get('/contacts',[IndexController::class, 'showContactForm'])->name('contacts');
    Route::post('/contacts_process',[IndexController::class, 'contacts_process'])->name('contacts_process');


});







