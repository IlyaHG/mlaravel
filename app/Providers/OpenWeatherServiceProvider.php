<?php

namespace App\Providers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\ServiceProvider;

class OpenWeatherServiceProvider extends ServiceProvider
{
   protected $apiKey;

   public function __construct($apiKey)
   {
      $this->apiKey = $apiKey;
   }

    public function getWeatherByCity($city)
    {
        $response = Http::get('http://api.openweathermap.org/data/2.5/weather', [
            'q' => $city,
            'appid' => $this->apiKey,
            'units' => 'metric',
            'lang' => 'ru'
        ]);

        $weatherData = $response->json();

        return $weatherData;
    }

}
