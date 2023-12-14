<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Tests\TestCase;

class UserTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_create(): void
    {
        $user = User::factory()->create([
            'id' => 5,
            'name' => 'Ilya',
            'email' => 'kas@ex.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            "data-filter-tag" => 'Ilya',
            "status" => 'success',
            "avatar" => "0",
            "phone" => fake()->phoneNumber(),
            "address" => fake()->streetAddress(),
            "instagram" => "instagram",
            "telegram" => "telegram",
            "is_admin" => 'no',
            "vk" => "vk",
            "role" => "role"
        ]);

        $this->assertDatabaseHas('users', ['id' => 5]);
    }

    public function test_user_delete(): void
    {
        $user = User::factory()->create([
            'id' => 6,
            'name' => 'Ilya',
            'email' => 'kas@ex.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            "data-filter-tag" => 'Ilya',
            "status" => 'success',
            "avatar" => "0",
            "phone" => fake()->phoneNumber(),
            "address" => fake()->streetAddress(),
            "instagram" => "instagram",
            "telegram" => "telegram",
            "is_admin" => 'no',
            "vk" => "vk",
            "role" => "role"
        ]);

        $this->assertDatabaseHas('users', ['id' => 6]);

        $this->actingAs($user)
            ->get('/users');

        $this->delete("/delete_profile/$user->id");

        $this->assertDatabaseMissing('users', ['id' => $user->id]); // Ensure the user is deleted from the database
    }

    public function test_user_edit(): void
    {
        $user = User::factory()->create([
            'id' => 6,
            'name' => 'Ilya',
            'email' => 'kas@ex.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            "data-filter-tag" => 'Ilya',
            "status" => 'success',
            "avatar" => "0",
            "phone" => fake()->phoneNumber(),
            "address" => fake()->streetAddress(),
            "instagram" => "instagram",
            "telegram" => "telegram",
            "is_admin" => 'no',
            "vk" => "vk",
            "role" => "role"
        ]);

        $user = User::find(6);

        $data = ([
            'name' => 'test',
            'role' => 'test',
            'phone' => 'test',
            'address' => 'test',
            'vk' => 'test',
            'instagram' => 'test',
            'telegram' => 'test'
        ]);
        $status = 'test_status';


        $user->edit(6, $data, $status);

        $this->assertDatabaseHas('users',['name'=>'test', 'status'=>'test_status'
        ]);
    }
}
