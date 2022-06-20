<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Complaints extends Model
{
    //
 	protected $fillable = [
        'title', 'content', 'image','userId','status'
    ];
}
