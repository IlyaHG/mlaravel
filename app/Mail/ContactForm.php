<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactForm extends Mailable
{
    use Queueable, SerializesModels;

    protected $formData = [];

    public function __construct($formData)
    {
        $this->formData =$formData;
    }

    public function build()
    {
        return $this->view('mail.contact_mail_form')->with(['formData'=>$this->formData]);
    }
}
