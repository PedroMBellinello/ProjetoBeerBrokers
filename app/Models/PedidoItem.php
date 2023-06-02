<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class PedidoItem extends Model
{


    protected $table = 'PedidoItem';
     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [

        'id',
        'pedido_id',
        'SKU',
        'qt_produto',
        'vl_unitario',
        'vl_total',
        'observacoes',
        'created_at',
        'updated_at',
    ];


}

