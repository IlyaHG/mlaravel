<?php

namespace App\Providers;

use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register()
    {
        $this->app->bind(OpenWeatherServiceProvider::class, function ($app) {
            return new OpenWeatherServiceProvider('92ef8b6ec0963401d10e62eb2da52d73');
        });
    }
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Paginator::useBootstrap();
    }
}
