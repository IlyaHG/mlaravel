<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentForm;
use App\Http\Requests\CreatePostFromRequest;
use App\Http\Requests\EditPostFormRequest;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PostController extends Controller
{
    public function show_posts_form()
    {
        $posts = Post::orderBy('created_at', "DESC")->paginate(3);
        return view('posts.posts', ['posts' => $posts]);
    }

    public function show_post_form($id)
    {
        $post = Post::findOrFail($id);
        $user = $post->user;
        return view('posts.post', ['post' => $post, 'user' => $user]);
    }


    public function comment($id, CommentForm $request)
    {

        $post = Post::findOrFail($id);

        $post->comment()->create($request->validated());

        return redirect(route('posts.post', $id));
    }

    public function delete_post($id, User $user)
    {
        $post = Post::find($id);
        if (!($user->admin_or_author(auth()->id(), $post->user_id))) {
            session()->put('error', 'У вас нет прав на удаление этого поста');
            return redirect(route('posts'));
        }
        $post->delete_image($post->thumbnail);
        $post->delete();

        return redirect(route('posts'));
    }


    public function show_create_post_form($id, User $user)
    {
        if (!$user->admin_or_current(auth()->id(), $id)) {
            session()->put('error', 'У вас нет прав писать пост от лица другого пользователя');
            return redirect(route('home'));
        }
        return view('posts.create');
    }

    public function create_post($id, CreatePostFromRequest $request)
    {
        $postData = $request->validated();
        $postImage = $request->file('image');

        $postImage->store('public/images/PostsImages', $postData);
        $postData['thumbnail'] = $postImage->hashName();

        $user = User::find($id);

        $post = new Post($postData);
        $user->posts()->save($post);

        return redirect(route('posts'));

    }


    public function show_edit_form($id, User $user)
    {
        $post = Post::find($id);

        if (!($user->admin_or_author(auth()->id(), $post->user_id))) {
            session()->put('error', 'У вас нет прав на редактирование этого поста');
            return redirect(route('posts'));
        }
        return view('posts.edit', ['user' => $user, 'post' => $post]);

    }

    public function edit_post($id, EditPostFormRequest $request)
    {
        $post = Post::find($id);

        $post->delete_image($post->thumbnail);

        $postData = $request->validated();
        $postImage = $request->file('image');
        $postImage->store('public/images/PostsImages', $postData);
        $postData['thumbnail'] = $postImage->hashName();

        DB::table('posts')
            ->where('id', $id)
            ->update([
                'title' => $request->title,
                'preview' => $request->preview,
                'description' => $request->description,
                'thumbnail' => $postImage->hashName()]);


        session()->put('success', 'Пост успешно обновлен');
        return redirect(route('posts.edit', $id));
    }

}
