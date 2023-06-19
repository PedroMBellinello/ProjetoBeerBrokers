<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Item extends Model
{

    protected $table = 'Item';



    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [


        'cd_Item',
        'descricao',
        'situacao',
        'cd_fabricante',
        'beer_pack',
        'peso',
        'largura_caixa',
        'altura_caixa',
        'comprimento_caixa',
        'revenda',
        'digital',
        'item_anual_zerado',
        'cd_ggrupo',
        'item_tbp',
        'item_anual',
        'item_semestral'
    ];
}
