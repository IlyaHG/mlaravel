<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentForm extends FormRequest
{
    public function authorize()
    {
        return auth('web')->check();
    }

    public function rules(): array
    {

        return [
            "comment" => ["required", "string"],
            "user_id" => ["required", "exists:users,id"]
        ];
    }

    public function prepareForValidation()
    {
        $this->merge(["user_id"=>auth("web")->id()]);
    }
}
