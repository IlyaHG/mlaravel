<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EditFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function prepareForValidation()
    {
        auth()->check();
    }

    public function rules(): array
    {
        return
            [
            'name' => ['string'],
            'role' => ['string'],
            'phone'=> ['string'],
            'address'=> ['string'],

            'email'=> ["string"],
            'password'=> ['string'],
            'status'=> ['string'],
            'avatar'=> ['image'],

            'vk'=> ['string'],
            'instagram'=> ['string'],
            'telegram'=> ['string']];
    }
}
