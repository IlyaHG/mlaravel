<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentForm;
use App\Http\Requests\CreatePostFromRequest;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function showPostsForm()
    {

        $posts = Post::orderBy('created_at', "DESC")->paginate(3);
        return view('posts.posts', ['posts' => $posts]);
    }

    public function showPostForm($id)
    {
        $post = Post::findOrFail($id);
        $user = $post->user;// Зачем тут дополнительная переменная, у тебя же есть связь
        return view('posts.post', ['post' => $post, 'user' => $user]);
    }


    public function comment($id, CommentForm $request)
    {

        $post = Post::findOrFail($id);

        $post->comment()->create($request->validated());

        return redirect(route('posts.post', $id));
    }

    public function showCreatePostForm($id)
    {
        $user = User::find($id);
        if ((auth()->id() == $user->id) || auth()->user()->IsAdmin == 'true') {
        return view('posts.create');
        } else {
            session()->put('error', 'У вас нет прав писать пост от лица другого пользователя');
            return redirect(route('home'));
        }
    }
    public function create_post($id, CreatePostFromRequest $request)
    {
            $postData = $request->validated();
        
            //$postImage = $request->file('image');
            //$postImageName = uniqid() . "." . $postImage->extension();
            //$postImage->storeAs('public/images/PostsImages', $postImageName);
            //$postData['thumbnail'] = $postImageName;
        //Без всего этого тоже можно обойтись, метод store() сам всё сгенерит и сохранит куда надо, но
        //при условии что в env в FILESYSTEM_DISK=public 

            $postData['thumbnail'] = $request->file('image')->store();
            $postData['user_id'] = $request->user_id;

            $user = User::find($id);

            $post = new Post($postData);
            $user->posts()->save($post);

            session()->put('success', ' Пост успешно создан');
            return redirect(route('posts'));

        }
        public function deletePost($id)
        {
            $post = Post::find($id);
            if((auth()->id() == $post->user->id) || auth()->user()->IsAdmin == 'true'){

                if(file_exists(public_path('storage/images/PostImages/'.$post->thumbnail))){
                    unlink(public_path('storage/images/PostImages/'. $post->thumbnail));
                }
                $post->delete();
                return redirect(route('posts'));
            }else{
                session()->put('error','У вас нет прав на удаление этого поста');
                return redirect(route('posts'));
            }
        }
}
