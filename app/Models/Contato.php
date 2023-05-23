<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Contato extends Model
{


    protected $table = 'ContatoCliente';
     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [

        'id',
        'cliente_id',
        'nome_contato',
        'fone',
        'email',
        'observacao',
        'created_at',
        'updated_at',
    ];


}

