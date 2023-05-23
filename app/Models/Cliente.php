<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{


    protected $table = 'Cliente';
     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'user_id',
        'cnpj',
        'razao',
        'fantasia',
        'insc_estadual',
        'incs_municipal',
        'email',
        'fone',
        'observacao',
        'created_at',
        'updated_at',
    ];


}
