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
}
