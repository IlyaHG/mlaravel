<?php

namespace App\Http\Controllers;

use App\Providers\OpenWeatherServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class WeatherController extends Controller
{
    protected $OpenWeatherServiceProvider;

    public function __construct(OpenWeatherServiceProvider $openWeatherService)
    {
        $this->openWeatherService = $openWeatherService;
    }

    public function getWeatherData()
    {
       return $weatherData = $this->openWeatherService->getWeatherByCity('Ivanovo');
    }
}
