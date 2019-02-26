<?php

use Faker\Generator as Faker;

$factory->define(App\Store::class, function (Faker $faker) {
    return [
        'email' => $faker->companyEmail,
        'name' => $faker->name,
        'address' => $faker->address,
        'phone' => $faker->phoneNumber,
        'lat' => $faker->latitude($min = -90, $max = 90),
        'lng' => $faker->longitude($min = -180, $max = 180),
        'description' => $faker->text(50),
        'open_hour' => $faker->time($format = 'h:i', $max = 'now') . ' ' . $faker->amPm($max = 'now'),
        'close_hour' => $faker->time($format = 'h:i', $max = 'now') . ' ' . $faker->amPm($max = 'now'),
    ];
});
