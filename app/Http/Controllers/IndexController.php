<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Mail\ContactForm;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class IndexController extends Controller
{
    public function index()
    {
        $users = User::get();
        return view('users', ['users'=>$users]);
    }

    public function showContactForm()
    {
        return view('mail.contacts_form');
    }
    public function contacts_process(ContactRequest $request)
    {

        Mail::to('kurat.ilya@gmail.com')->send(new ContactForm($request->validated()));
        session()->put('success','Сообщение отправлено');
        return redirect(route('contacts'));
    }
}
