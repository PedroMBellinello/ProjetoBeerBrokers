<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class ItemParceiro extends Model
{

    protected $connection= 'aws';

    protected $table = 'ItemParceiro';

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'cd_item',
        'flag',
        'url_img'
    ];
}
