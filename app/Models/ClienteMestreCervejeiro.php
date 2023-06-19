<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClienteMestreCervejeiro extends Model
{


    protected $table = 'Cliente';
     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'cnpj',
    ];


}
