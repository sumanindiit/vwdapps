<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notifications extends Model
{
    protected $table = 'notifications';
     
    //
 	protected $fillable = [
        'type', 'content', 'read_status','from_userId','to_userId'
    ];
    
    
    
}
