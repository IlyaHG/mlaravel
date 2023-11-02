<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateUserFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        if(auth()->user()->IsAdmin == 'true'){
            return true;
        }else{
            return false;
        }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' =>['required','string'],
            'role' =>['required', 'string'],
            'phone' => ['required', 'string'],
            'address' => ['required', 'string'],
            'email' => ['required','email',"unique:users,email"],
            'password' => ['required'],
            'status' => ['required','string'],
            'avatar' => ['required','file'],
            'vk' => ['required','string'],
            'telegram' => ['required','string'],
            'instagram' => ['required','string'],
        ];
    }
}
