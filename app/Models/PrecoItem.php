<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;




class PrecoItem extends Model{


    protected $table = 'PrecoItem';
     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [

        'cd_item',
        'cd_estado',
        'vl_unitario',
        'dt_envio',

     
    ];


}

