<div class="weather-widget">
    <h1>Город: {{$weatherData['name']}}</h1>
    <p>Температура: {{ round($weatherData['main']['temp']) }} градусов Цельсия</p>
    <p>Описание: {{ $weatherData['weather']['0']['description'] }}</p>
</div>
