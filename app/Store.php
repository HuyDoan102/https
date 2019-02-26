<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    protected $fillable = [
        'email', 'name', 'address', 'phone', 'lat', 'lng', 'description', 'open_hour', 'close_hour'
    ];
}
