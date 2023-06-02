<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class StatusPedido extends Model
{


    protected $table = 'StatusPedido';
     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [

        'descricao',
        'created_at',
        'updated_at',
    ];


}

