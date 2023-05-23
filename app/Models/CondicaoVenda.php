<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class CondicaoVenda extends Model
{


    protected $table = 'CondicaoVenda';
     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [

        'id',
        'descricao',
        'created_at',
        'updated_at',
    ];


}

