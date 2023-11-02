<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreatePostFromRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth('web')->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required','min:2','string'],
            'preview' => ['required'],
            'description' => ['required'],
            'thumbnail' => ['image'],
            'user_id'=>['required']
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge(['user_id'=>auth('web')->id()]);
    }
}
