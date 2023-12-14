<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Str;
use Tests\TestCase;

class UsersPageTest extends TestCase
{

    use RefreshDatabase;

    public function testHomePageStatus(): void
    {
        $user = User::factory()->create([
            'id'=>10,
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            "data-filter-tag" =>fake()->name(),
            "status" => 'success',
            "avatar" => "0",
            "phone" => fake()->phoneNumber(),
            "address" => fake()->streetAddress(),
            "instagram" => "instagram",
            "telegram" =>"telegram",
            "is_admin"=>'no',
            "vk" =>"vk",
            "role"=>"role",
        ]);

        // Аутентификация пользователя
        $this->actingAs($user)
            ->get('/home')
            ->assertStatus(200);

    }

}
