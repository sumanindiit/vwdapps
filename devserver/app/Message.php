<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $table = 'message';
     
    //
 	protected $fillable = [
        'to_id', 'from_id', 'message','type','read_status','typo'
    ];
}
