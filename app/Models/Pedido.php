<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Pedido extends Model
{


    protected $table = 'Pedido';
     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [

        'id',
        'cliente_id',
        'endereco_id',
        'statusPedido_id',
        'dt_pedido',
        'condicaoVenda_id',
        'tp_frete',
        'observacoes',
        'vl_mercadorias',
        'vl_frete',
        'vl_pedido',
        'created_at',
        'updated_at',
    ];


}

