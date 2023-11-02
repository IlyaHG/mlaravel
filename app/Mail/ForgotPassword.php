<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ForgotPassword extends Mailable
{
    use Queueable, SerializesModels;

    protected $formData;
    protected $userName;

    public function __construct($formData,$userName)
    {
        $this->formData = $formData;
        $this->userName = $userName;
    }

    public function build()
    {
      return $this->view('mail.forgot_mail_form')->with([
          'formData'=>$this->formData,
          'userName'=>$this->userName
          ]);
    }
}
