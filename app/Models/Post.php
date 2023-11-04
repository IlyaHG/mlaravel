<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'preview',
        'description',
        'thumbnail'
    ];
    public function comment()
    {
        return $this->hasMany(Comment::class)->orderBy('created_at');
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function delete_image($image_name)
    {
        if (file_exists(public_path('storage/images/PostImages/' . $image_name))) {
            unlink(public_path('storage/images/PostImages/' . $image_name));
        }
    }
}
