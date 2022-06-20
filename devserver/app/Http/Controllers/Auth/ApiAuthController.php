<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\User;
use App\Complaints;
use App\Message;
use App\Community;
use App\Notifications;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use DB;
use Carbon\Carbon;
use Mail;
use DateTime;
use Carbon\CarbonPeriod;


class ApiAuthController extends Controller
{
    
    public function register (Request $request) {
        
        $data = $request->toArray();
        
        if($request->type == 'pickupPerson')
        {
            /* in case of pickup person &  propertyManager */
            $validator = Validator::make($request->all(), [
    	        'name' => 'required|string|max:255',
    	        'email' => 'required|string|email|max:255|unique:users',
    	        'password' => 'required|string|min:6',
    	        'confirmPassword' => 'required|min:6|same:password',
    	        'community' => 'required|string|max:255',
    	        'phoneNo' => 'required|numeric|digits:10',
    
    	    ]);
        }
        else if($request->type == 'propertyManager')
        {
            /* in case of pickup person &  propertyManager */
            $validator = Validator::make($request->all(), [
    	        'name' => 'required|string|max:255',
    	        'email' => 'required|string|email|max:255|unique:users',
    	        'password' => 'required|string|min:6',
    	        'confirmPassword' => 'required|min:6|same:password',
    	        'community' => 'required|string|max:255',
    	        'phoneNo' => 'required|numeric|digits:10',
    	    ]);
    	    
    	    $pickupperson =  User::select('id')->where('community', $request->community)->where('role','pickupPerson')->first();
    	    $data['pickup_person'] = $pickupperson->id;
        }
        else
        {
            /* in case of residents */
            $validator = Validator::make($request->all(), [
    	        'name' => 'required|string|max:255',
    	        'email' => 'required|string|email|max:255|unique:users',
    	        'password' => 'required|string|min:6',
    	        'confirmPassword' => 'required|min:6|same:password',
    	        'community' => 'required|string|max:255',
    	        'apartmentNo' => 'required|string|max:255',
    	        'buildingNo' => 'required|string|max:255',
    	        'phoneNo' => 'required|numeric|digits:10',
    
    	    ]);
    	    $pickupperson =  User::select('id')->where('community', $request->community)->where('role','pickupPerson')->first();
    	    $data['pickup_person'] = $pickupperson->id;
        }
        
        if ($validator->fails())
	    {
	        return response(['errors' => $validator->errors()->all() , 'status' =>'422' ], 200);
	    }
	    
	    
	    
	    $data['password'] = Hash::make($data['password']);
	    $data['remember_token'] = Str::random(10);
	    $user = User::create($data);
	    $token = $user->createToken('Laravel Password Grant Client')->accessToken;
	    $response = ['token' => $token , 'status' =>'200' ];
	    
	    return response($response, 200);
	}

	public function login (Request $request) {
	    $validator = Validator::make($request->all(), [
	        'email' => 'required|string|email|max:255',
	        'password' => 'required|string|min:6',
	    ]);
	    if ($validator->fails())
	    {
	        return response(['errors'=>$validator->errors()->all(), 'status' =>'422'], 200);
	    }
	    
	    $role = $request->type == '' ? 'user' : $request->type;
	    $fcmToken = $request->fcmToken == '' ? '' : $request->fcmToken;
	    
        $user = User::where('email', $request->email)->where('role','=', $role)->first();
	    if ($user) {
	        if (Hash::check($request->password, $user->password)) {
	            $token = $user->createToken('Laravel Password Grant Client')->accessToken;
	            
            	User::where('id','=', $user->id )->update(['fcmToken'	=>	$fcmToken]);
	            
	            switch ($user->role) {
                    case "user":
                        $user_data = [
        					'name' => $user->name,
        					'email' => $user->email,
        					'apartmentComplex' => $user->apartmentComplex,
        					'community' => $user->community,
        					'apartmentNo' => $user->apartmentNo,
        					'buildingNo' => $user->buildingNo,
        					'phoneNo' => $user->phoneNo,
        					'pushNotification' => $user->pushNotification,
        					'vwd_valletid' => '',
        					'vwd_valletName' => ''
        				];
        				if(	$data = DB::table('users')
                                    ->select('name', 'id')
                                    ->where('id' , '=', $user->pickup_person)
                                    ->first()
                        ){
        				    $user_data['vwd_valletid'] = $data->id;
        				    $user_data['vwd_valletName'] = $data->name;
        				}
                        break;
                        
                    case "pickupPerson":
                        $user_data = [
        					'name' => $user->name,
        					'email' => $user->email,
        					'community' => $user->community,
        					'phoneNo' => $user->phoneNo,
        					'pushNotification' => $user->pushNotification
        				];
                        break;
                    case "propertyManager":
                        $user_data = [
        					'name' => $user->name,
        					'email' => $user->email,
        					'community' => $user->community,
        					'phoneNo' => $user->phoneNo,
        					'pushNotification' => $user->pushNotification,
        					'vwd_valletid' => '',
        					'vwd_valletName' => ''
        				];
        				if(	$data = DB::table('users')
                                    ->select('name', 'id')
                                    ->where('id' , '=', $user->pickup_person)
                                    ->first()
                        ){
        				    $user_data['vwd_valletid'] = $data->id;
        				    $user_data['vwd_valletName'] = $data->name;
        				}
                        break; 
                    case "admin":
                        $user_data = [
        					'name' => $user->name,
        					'email' => $user->email,
        					'community' => $user->community,
        					'phoneNo' => $user->phoneNo,
        				];
                        break;
                    default:
                        $user_data = [
        					'name' => $user->name,
        					'email' => $user->email,
        					'community' => $user->community,
        					'phoneNo' => $user->phoneNo,
        				];
                }
	            
	            $response = ["data" => $user_data, 'token' => $token , 'status' =>'200' , 'userId' => $user->id];
	            return response($response, 200);
	        } else {
	            $response = ["errors" => ["Password mismatch"] , 'status' =>'422'];
	            return response($response, 200);
	        }
	    } else {
	        $response = ["errors" =>['User does not exist'] , 'status' =>'422'];
	        return response($response, 200);
	    }
	}

	public function logout (Request $request) {
	    $token = $request->user()->token();
	    $token->revoke();
	    $response = ['message' => 'You have been successfully logged out!'];
	    return response($response, 200);
	}

	public function updateProfile(Request $request)
	{
	    if($request->type == 'pickupPerson')
        {
            $validator = Validator::make($request->all(), [
    	        'name' => 'required|string|max:255',
    	        'email' => 'required|string|email|max:255|unique:users,email,'.$request->userId,
    	        'phoneNo' => 'required|numeric|digits:10',
    	        'community' => 'required|string|max:255'
    	    ]);
        }
        else
        {
            $validator = Validator::make($request->all(), [
    	        'name' => 'required|string|max:255',
    	        'email' => 'required|string|email|max:255|unique:users,email,'.$request->userId,
    	        'community' => 'required|string|max:255',
    	        'apartmentNo' => 'required|string|max:255',
    	        'buildingNo' => 'required|string|max:255',
    	        'phoneNo' => 'required|numeric|digits:10'
    	    ]);
        }
	    
	 	
	    if ($validator->fails())
	    {
	        return response(['errors' => $validator->errors()->all() , 'status' =>'422' ], 200);
	    }

	    $user = User::updateOrCreate(['id' => $request->userId],$request->all());

	    $token  = '';
	    
	    switch ($user->role) {
            case "user":
                $user_data = [
				    'name' => $user->name,
					'email' => $user->email,
					'apartmentComplex' => $user->apartmentComplex,
					'community' => $user->community,
					'apartmentNo' => $user->apartmentNo,
					'buildingNo' => $user->buildingNo,
					'phoneNo' => $user->phoneNo,
					'pushNotification' => $user->pushNotification,
					'vwd_valletid' => '',
					'vwd_valletName' => ''
				];
				if(	$data = DB::table('users')
                            ->select('name', 'id')
                            ->where('id' , '=', $user->pickup_person)
                            ->first()
                ){
				    
				    $user_data['vwd_valletid'] = $data->id;
				    $user_data['vwd_valletName'] = $data->name;
				}
                break;
            case "pickupPerson":
                $user_data = [
					'name' => $user->name,
					'email' => $user->email,
					'community' => $user->community,
					'phoneNo' => $user->phoneNo,
					'pushNotification' => $user->pushNotification
				];
                break;
            case "propertyManager":
                $user_data = [
					'name' => $user->name,
					'email' => $user->email,
					'community' => $user->community,
					'phoneNo' => $user->phoneNo,
				];
                break; 
            case "admin":
                $user_data = [
					'name' => $user->name,
					'email' => $user->email,
					'community' => $user->community,
					'phoneNo' => $user->phoneNo,
				];
                break;
            default:
                $user_data = [
					'name' => $user->name,
					'email' => $user->email,
					'community' => $user->community,
					'phoneNo' => $user->phoneNo,
				];
        }

		if(!$user->wasRecentlyCreated && $user->wasChanged()){
		    // updateOrCreate performed an update
		    $response = ['token' => $token , 'data' => $user_data ,  'status' =>'200' ];
		}

		if(!$user->wasRecentlyCreated && !$user->wasChanged()){
		    // updateOrCreate performed nothing, row did not change
		    $response = ['errors' => ['The data is up to date.'] , 'data' => $user_data , 'status' =>'422' ];
		}

		if($user->wasRecentlyCreated){
		   // updateOrCreate performed create
			$response = ['token' => $token , 'data' => $user_data,  'status' =>'200' ];
		}

	    return response($response, 200);
	}

	public function updatePassword(Request $request)
	{
		$id            			=   $request->userId;	
		$current_password		=   $request->currentPassword;
		$new_password			=   $request->password;
		$confirm_password		=   $request->confirmPassword;


		$user = User::where('id', $id)->first();

		$customerInfo = array("email" => $user->email, "password" => $current_password);

		if(Hash::check($request->currentPassword, $user->password)) 
		{
			if (!empty($new_password) && empty($confirm_password))
            {
                $message = "Confirm password is required.";
                return response(['errors' => $message , 'status' =>'422' ], 200);
            }
            else if (!empty($confirm_password) && empty($new_password))
            {
                $message = "New password is required.";
                return response(['errors' => $message , 'status' =>'422' ], 200);
            }
         	else if (!empty($confirm_password) && !empty($new_password))
            {
                if ($confirm_password == $new_password)
                {
             		User::where('id','=', $id )->update(['password'	=>	Hash::make($request->password)]);
					$message = "Password has been updated successfully";
					return response(['errors' => $message , 'status' =>'200' ], 200);
                }
                else
                {
                    $message = "Please enter confirm password same as new password.";
                   return response(['errors' => $message , 'status' =>'422' ], 200);
                }
            }
            else
            {
            	$message = "Error occured when try to update password. Please try again ";
                   return response(['errors' => $message , 'status' =>'422' ], 200);
            }

		}
		else
		{
			$message = ['The current password you entered does not match our records, Please try again.'];
			return response(['errors' => $message , 'status' =>'422' ], 200);
		}

	}


	public function get_user_data(Request $request)
	{

		if(!empty($request->user_id))
		{
			$user = User::where('id', $request->user_id)->first();

			if ($user) {

				$user_data = [
					'name' => $user->name,
					'email' => $user->email,
					'apartmentComplex' => $user->apartmentComplex,
					'apartmentNo' => $user->apartmentNo,
					'buildingNo' => $user->buildingNo,
					'phoneNo' => $user->phoneNo,
					'pushNotification' => $user->pushNotification,
				];

				return response(["data" => $user_data , 'status' =>'200'], 200);

			}else{
				return response(["errors" =>['User does not exist'] , 'status' =>'422'], 200);
			}

		}
		else
		{
			return response(["errors" =>['User does not exist'] , 'status' =>'422'], 200);
		}

	}

	public function updatePushNotificationStatus(Request $request)
	{
	    if($request->pushNotification)
	    {
	        $notify =1;
	    }
	    else
	    {
	        $notify =0;
	    }
	    
		
	    $updated = User::where('id', $request->userId)->update(['pushNotification' =>"$notify"]);

	    $user = User::where('id', $request->userId)->first();
	    
	    $token  = '';
	    
	    switch ($user->role) {
            case "user":
               $user_data = [
					'name' => $user->name,
					'email' => $user->email,
					'apartmentComplex' => $user->apartmentComplex,
					'community' => $user->community,
					'apartmentNo' => $user->apartmentNo,
					'buildingNo' => $user->buildingNo,
					'phoneNo' => $user->phoneNo,
					'pushNotification' => $user->pushNotification,
					'vwd_valletid' => '',
					'vwd_valletName' => ''
				];
				if(	$data = DB::table('users')
                            ->select('name', 'id')
                            ->where('id' , '=', $user->pickup_person)
                            ->first()
                ){
				    
				    $user_data['vwd_valletid'] = $data->id;
				    $user_data['vwd_valletName'] = $data->name;
				}
                break;
            case "pickupPerson":
                $user_data = [
					'name' => $user->name,
					'email' => $user->email,
					'community' => $user->community,
					'phoneNo' => $user->phoneNo,
					'pushNotification' => $user->pushNotification
				];
                break;
            case "propertyManager":
                $user_data = [
					'name' => $user->name,
					'email' => $user->email,
					'community' => $user->community,
					'phoneNo' => $user->phoneNo,
				];
                break; 
            case "admin":
                $user_data = [
					'name' => $user->name,
					'email' => $user->email,
					'community' => $user->community,
					'phoneNo' => $user->phoneNo,
				];
                break;
            default:
                $user_data = [
					'name' => $user->name,
					'email' => $user->email,
					'community' => $user->community,
					'phoneNo' => $user->phoneNo,
				];
        }
	    
		$response = ['token' => $token , 'data' => $user_data ,  'status' =>'200' ];
		
	    return response($response, 200);
		
	}

	public function getPageData(Request $request)
	{

		if($request->pageSlug)
		{
		    
			$page_data = DB::table('posts')->where('slug' , '=', $request->pageSlug)->first();

		    $page_data = [
				'title' => $page_data->title,
				'content' => $page_data->content
			];
			
			$response = ['data' => $page_data ,  'status' =>'200' ];
			
		    return response($response, 200);
		}
		else
		{
			return response(["errors" =>['Page does not exist']  ,  'status' =>'422' ], 200);
		}


	}

	public function getComplaints(Request $request)
	{
	    
		if($request->userId)
		{
		    $search_item =  $request->has('search') ? $request->get('search') : '';
		    
		    
		    $totalCount = Complaints::where('userId' , '=', $request->userId)
	                    ->where(function ($query) use($search_item) {
            			    if(!empty($search_item))
            			    {
            			        return $query->where('title', 'like', "%{$search_item}%");
            			    }
                        })
	                    ->count();
		    
			$data = [];
			
			$page = $request->has('start') ? $request->get('start') : 0;
            $limit = $request->has('recordsPerPage') ? $request->get('recordsPerPage') : 7;

			$page_data = DB::table('complaints')
            			->where('userId' , '=', $request->userId)
            			->where(function ($query) use($search_item) {
            			    if(!empty($search_item))
            			    {
            			        return $query->where('title', 'like', "%{$search_item}%");
            			    }
                        })
            			->limit($limit)
            			->offset($page)
            			->orderBy('id', 'DESC')
            			->get();
            			

			foreach ($page_data as $key => $value) {

				$image_link =  $value->image == "" ? url('/complaint/demo.png') : url('/complaint').'/'.$value->image;

				$data[] = [
				    'id' => $value->id,
					'title' => $value->title,
					'content' => $value->content,
					'image' => $image_link,
				];
			}
			
			if($totalCount > 0)
			{
			    $response = ['data' => $data , 'total' => $totalCount,  'status' =>'200' ];
			}
			else
			{
			    $response = ['data' => $data , 'total' => $totalCount, "errors" =>['No Compaints Found.'], 'status' =>'422' ];
			}

		    
			
		    return response($response, 200);
		}
		else
		{
			return response(["errors" =>['No Compaints Found.']  ,  'status' =>'422' ], 200);
		}
	}
	
	public function getComplaintDetail(Request $request)
	{
	    if($request->complaintId)
		{
			$page_data = DB::table('complaints')->where('id' , '=', $request->complaintId)->first();
			
			switch ($page_data->status) {
              case 1:
                $status = 'Pending';
                break;
              case 2:
                $status = 'In Progress';
                break;
              case 3:
                $status = 'Completed';
                break;
              default:
                $status = 'Pending';
            }
            
            $created_date = Carbon::createFromFormat('Y-m-d H:i:s', $page_data->created_at)->format('d M Y , H:i A');
			
			
			$image_link =  $page_data->image == "" ? url('/complaint/demo.png') : url('/complaint').'/'.$page_data->image;
			$data = [
					'title' => $page_data->title,
					'content' => $page_data->content,
					'image' => $image_link,
					'status' => $status,
					'post_date' => $created_date
				];

		    $response = ['data' => $data ,  'status' =>'200' ];
			
		    return response($response, 200);
		}
		else
		{
			return response(["errors" =>['No Compaints Found.']  ,  'status' =>'422' ], 200);
		}
	}

	public function addComplaint(Request $request)
	{
		
		$user_id = $request->userId;
		$title = $request->title;
		$content = $request->content;

		if ($request->file('file'))
        {
            $image = $request->file('file');
            $imagename = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/complaint');
            $image->move($destinationPath, $imagename);
            $path1 = $imagename;

           	if(Complaints::create(
            	[
            		'title' => $title,
            		'content' => $content,
            		'image' => $path1,
            		'userId' => $user_id,
            		'status' => 1,
            	]))
           	{
           	    
           	    
           	    
           		return response(['message' => 'Compaint Added successfully.' ,  'status' =>'200' ], 200);
           	}
           	else
           	{
           		return response(["errors" =>['Some Error Occured. Please try again.']  ,  'status' =>'422' ], 200);
           	}

        }
        else
        {
        	if(Complaints::create(
            	[
            		'title' => $title,
            		'content' => $content,
            		'userId' => $user_id,
            		'status' => 1,
            	]))
           	{
           		return response(['message' => 'Compaint Added successfully.' ,  'status' =>'200' ], 200);
           	}
           	else
           	{
           		return response(["errors" =>['Some Error Occured. Please try again.']  ,  'status' =>'422' ], 200);
           	}

        }

	}

	public function sendMessage(Request $request)
	{
	    $from_id = $request->userId;
	    $to_id = $request->toId;
		$message = $request->message;
		$type = $request->type == '' ? 'sender' : $request->type;
		
		if ($request->file('file'))
        {
            $image = $request->file('file');
            $imagename = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/messages');
            $image->move($destinationPath, $imagename);
            $path1 = $imagename;

           	if(Message::create(
            	[
            		'to_id' => $to_id,
            		'from_id' => $from_id,
            		'message' => $path1,
            		'type' => $type,
            		'typo' => 1,
            	]))
           	{
           		return response(['message' => 'Added successfully.' ,  'status' =>'200' ], 200);
           	}
           	else
           	{
           		return response(["errors" =>['Some Error Occured. Please try again.']  ,  'status' =>'422' ], 200);
           	}

        }
        else
        {
        	if(Message::create(
            	[
            		'to_id' => $to_id,
            		'from_id' => $from_id,
            		'message' => $message,
            		'type' => $type,
            		'typo' => 0,
            	]))
           	{
           		return response(['message' => 'Added successfully.' ,  'status' =>'200' ], 200);
           	}
           	else
           	{
           		return response(["errors" =>['Some Error Occured. Please try again.']  ,  'status' =>'422' ], 200);
           	}

        }
	}
	
/************************
**  @integer type: 1 for user to vallet, 
*                  2 for complaints , 
*                  3 for vallet to user
*   
* 
*************************/	
	
	public function saveNotifications(Request $request)
	{
	    $from_id = $request->userId;
	    $to_id = $request->toId;
		$message = $request->message;
		$type = $request->type;
		
		if(Notifications::create(
        	[
        		'type' => $type,
        		'from_userId' => $from_id,
        		'content' => $message,
        		'to_userId' => $to_id
        	]))
       	{
       		return response(['message' => 'Sent successfully.' ,  'status' =>'200' ], 200);
       	}
       	else
       	{
       		return response(["errors" =>['Some Error Occured. Please try again.']  ,  'status' =>'422' ], 200);
       	}
		
	}
	
	public function getNotifications(Request $request)
	{
	    $userId = $request->userId;
	    if($request->userId)
	    {
	     
	     	$page = $request->has('start') ? $request->get('start') : 0;
            $limit = $request->has('recordsPerPage') ? $request->get('recordsPerPage') : 7;
            
            $notifications = DB::table('notifications')
                    ->join('users', 'users.id', '=', 'notifications.from_userId')
                    ->select('users.name','users.phoneNo','users.email', 'users.community', 'users.apartmentComplex', 'users.apartmentNo', 'users.buildingNo', 'users.id as residentID','notifications.read_status', 'notifications.from_userId', 'notifications.type','notifications.content','notifications.updated_at as time')
                    //->where('notifications.type','=',1)
                    ->where('notifications.to_userId','=',$userId)
                    ->orderBy('notifications.id', 'Desc')
                    ->limit($limit)
        			->offset($page)
                    ->get();
	        
	       if(count($notifications)>0)
	       {
	           return response(['data' => $notifications ,  'status' =>'200' ], 200);
	       }
	       else
	       {
	           	return response(["errors" =>['No notifications found.']  ,  'status' =>'422' ], 200);
	       }
	       
	       
	    }
	}
	
	
	public function forgotPassword(Request $request)
	{
	    if($request->email)
	    {
	       $role = $request->type == '' ? 'user' : $request->type;

	       if($user = User::where('email', $request->email)->where('role','=', $role)->first())
	       {
	            $otp = rand(100000,999999);
	            
                $updateotp = User::where('email','=',$request->email)->update(['otp' => $otp]);
                
                
                $html = '<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
                          <div style="margin:50px auto;width:70%;padding:20px 0">
                            <div style="border-bottom:1px solid #eee">
                              <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Veterans Waste Disposal</a>
                            </div>
                            <p style="font-size:1.1em">Hi, '.$user->name.'</p>
                            <p>Use the following OTP to complete your forgot password procedures. OTP is valid for 5 minutes</p>
                            <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">'.$otp.'</h2>
                            <p style="font-size:0.9em;">Regards,<br />VWD</p>
                            <hr style="border:none;border-top:1px solid #eee" />
                            <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
                              <p>Veterans Waste Disposal</p>
                            </div>
                          </div>
                        </div>';
                
                $subject = 'VWD - Reset Password';
                
                $data = array(
                    'name'=>$user->name, 
                    'email'=>$request->email, 
                    'messageeeee'=>$html               
                );

                Mail::send('email', $data, function($message)use($subject) {
                 $message->to('sumanindiit@gmail.com', 'VWD')->subject
                    ($subject);
                });
                
                if (Mail::failures()) {
                    return response(["errors" =>["Unable to send OTP, Please try again!!"] ,  'status' =>'422' ], 200);
                }
                else
                {
                    return response(['message' => 'OTP sent on your email address!' ,  'email' => $request->email, 'status' =>'200' ], 200);
                }
	           
	           
	       }
	       else
	       {
	           	return response(["errors" =>["Email doesn't exists in our system!"]  ,  'status' =>'422' ], 200);
	       }
	       
	       
	    }
	    else
	    {
	        return response(["errors" =>['Invalid Request.']  ,  'status' =>'422' ], 200);
	    }
	}
	
	public function verifyOTP(Request $request)
	{
	    if($request->otp && $request->otp_id)
	    {
	        if (User::where('email', '=', $request->otp_id)->where('otp', '=', $request->otp)->exists()) {
                return response(['message' => 'OTP verified!' ,  'email' => $request->otp_id, 'otp' => $request->otp,  'status' =>'200' ], 200);
            }
            else
            {
                return response(["errors" =>['Invalid OTP!'] ,  'email' => $request->email, 'status' =>'422' ], 200);
            }
	    }
	    else
	    {
	        return response(["errors" =>['Invalid Request.']  ,  'status' =>'422' ], 200);
	    }
	}
	
	public function resetPassword(Request $request)
	{
        $otp           			=   $request->otp;	
		$email		            =   $request->otp_id;
		$new_password			=   $request->password;
		$confirm_password		=   $request->confirmPassword;
		
		
		if (User::where('email', '=', $request->otp_id)->where('otp', '=', $request->otp)->exists()) {
		    
		    if (!empty($new_password) && empty($confirm_password))
            {
                $message = "Confirm password is required.";
                return response(['errors' => $message , 'status' =>'422' ], 200);
            }
            else if (!empty($confirm_password) && empty($new_password))
            {
                $message = "New password is required.";
                return response(['errors' => $message , 'status' =>'422' ], 200);
            }
         	else if (!empty($confirm_password) && !empty($new_password))
            {
                if ($confirm_password == $new_password)
                {
             		User::where('email','=', $email )->update(['password'	=>	Hash::make($request->password)]);
					$message = "Password has been updated successfully";
					return response(['errors' => $message , 'status' =>'200' ], 200);
                }
                else
                {
                    $message = "Please enter confirm password same as new password.";
                   return response(['errors' => $message , 'status' =>'422' ], 200);
                }
            }
            else
            {
            	$message = "Error occured when try to update password. Please try again ";
                   return response(['errors' => $message , 'status' =>'422' ], 200);
            }
        }
        else
        {
            return response(["errors" =>['Invalid Request!'] ,  'email' => $request->email, 'status' =>'422' ], 200);
        }
		
	}
	
	public function getCommunities(Request $request)
	{
	    
       if($community =  Community::select('title','slug','id')->get())
       {
           return response(['data' => $community ,  'status' =>'200' ], 200);
       }
       else
       {
       	    return response(["errors" =>['No Community found.']  ,  'status' =>'422' ], 200);
       }
	       
	}
	
	public function getUsersCommunities(Request $request)
	{
	    
    	$community =  Community::whereIn('id', function($query){
                                    $query->select('community')
                                    ->from(with(new User)->getTable())
                                    ->where('community','!=', 0)
                                    ->where('role', 'pickupPerson');
                                })
                                ->select('title','slug','id')
                                ->get();
	    
       if(!empty($community))
       {
           return response(['data' => $community ,  'status' =>'200' ], 200);
       }
       else
       {
       	    return response(["errors" =>['No Community found.']  ,  'status' =>'422' ], 200);
       }
	       
	}
	
	public function getPickupPersonCommunities(Request $request)
	{
	    
    	$community =  Community::whereNotIn('id', function($query){
                                    $query->select('community')
                                    ->from(with(new User)->getTable())
                                    ->where('community','!=', 0)
                                    ->where('role', 'pickupPerson');
                                })
                                ->select('title','slug','id')
                                ->get();
	    
       if(!empty($community))
       {
           return response(['data' => $community ,  'status' =>'200' ], 200);
       }
       else
       {
       	    return response(["errors" =>['No Community found.']  ,  'status' =>'422' ], 200);
       }
	       
	}
	
	
	public function getPickupPersonComplaints(Request $request)
	{
	    $complaintType = $request->status == '' ? 1 :  $request->status;
        $search_item =  $request->has('search') ? $request->get('search') : '';
	     
	    if($request->userId)
		{
            
		    $totalCount = DB::table('users')
                    ->join('complaints', 'users.id', '=', 'complaints.userId')
                    ->join('community', 'users.community', '=', 'community.id')
                    ->select('users.name','users.email', 'users.community', 'users.apartmentComplex', 'users.apartmentNo', 'users.buildingNo', 'users.id as residentID','complaints.id as complaintID', 'complaints.title as complainttitle', 'complaints.content as complaintContent','community.title as communityTitle')
                    ->where('users.pickup_person','=',$request->userId)
                    ->where(function ($query) use($search_item) {
        			    if(!empty($search_item))
        			    {
        			        return $query->where('complaints.title', 'like', "%{$search_item}%");
        			    }
                    })
                    ->where('complaints.status','=',$complaintType)->count();
		    
			
			$page = $request->has('start') ? $request->get('start') : 1;
			
            $limit = $request->has('recordsPerPage') ? $request->get('recordsPerPage') : 7;
            
            $page_data = DB::table('users')
                    ->join('complaints', 'users.id', '=', 'complaints.userId')
                    ->join('community', 'users.community', '=', 'community.id')
                    ->select('users.name','users.phoneNo','users.email', 'users.community', 'users.apartmentComplex', 'users.apartmentNo', 'users.buildingNo', 'users.id as residentID','complaints.id as complaintID', 'complaints.title as complainttitle', 'complaints.content as complaintContent','community.title as communityTitle')
                    ->where('users.pickup_person','=',$request->userId)
                    ->where(function ($query) use($search_item) {
        			    if(!empty($search_item))
        			    {
        			        return $query->where('complaints.title', 'like', "%{$search_item}%");
        			    }
                    })
                    ->where('complaints.status','=',$complaintType)
                    ->limit($limit)
        			->offset($page)
        			->orderBy('complaints.created_at', 'Desc')
                    ->get();
            
		    $response = ['data' => $page_data , 'total' => $totalCount,  'status' =>'200' ];
			
		    return response($response, 200);
		}
		else
		{
			return response(["errors" =>['No Compaints Found.']  ,  'status' =>'422' ], 200);
		}
	    
	}
	
	public function getPropertyManagerComplaints(Request $request)
	{
	    $complaintType = $request->status == '' ? 1 :  $request->status;
	    $community = $request->community;
	    
        $search_item =  $request->has('search') ? $request->get('search') : '';
	    if($request->userId)
		{
            
		    $totalCount = DB::table('users')
                    ->join('complaints', 'users.id', '=', 'complaints.userId')
                    ->join('community', 'users.community', '=', 'community.id')
                    ->select('users.name','users.email', 'users.community', 'users.apartmentComplex', 'users.apartmentNo', 'users.buildingNo', 'users.id as residentID','complaints.id as complaintID', 'complaints.title as complainttitle', 'complaints.content as complaintContent','community.title as communityTitle')
                    ->where('users.community','=',$community)
                    ->where(function ($query) use($search_item) {
        			    if(!empty($search_item))
        			    {
        			        return $query->where('complaints.title', 'like', "%{$search_item}%");
        			    }
                    })
                    //->where('users.id', '!=', $request->userId)
                    ->where('complaints.status','=',$complaintType)->count();
		    
			$data = [];
			
			$page = $request->has('start') ? $request->get('start') : 1;
            $limit = $request->has('recordsPerPage') ? $request->get('recordsPerPage') : 7;
            
            $page_data = DB::table('users')
                    ->join('complaints', 'users.id', '=', 'complaints.userId')
                    ->join('community', 'users.community', '=', 'community.id')
                    ->select('users.name','users.phoneNo','users.email', 'users.community', 'users.apartmentComplex', 'users.apartmentNo', 'users.buildingNo', 'users.id as residentID','complaints.id as complaintID', 'complaints.title as complainttitle', 'complaints.content as complaintContent','community.title as communityTitle')
                    ->where('users.community','=',$community)
                    ->where(function ($query) use($search_item) {
        			    if(!empty($search_item))
        			    {
        			        return $query->where('complaints.title', 'like', "%{$search_item}%");
        			    }
                    })
                    //->where('users.id', '!=', $request->userId)
                    ->where('complaints.status','=',$complaintType)
                    ->limit($limit)
        			->offset($page)
                    ->get();
            
		    $response = ['data' => $page_data , 'total' => $totalCount,  'status' =>'200' ];
			
		    return response($response, 200);
		}
		else
		{
			return response(["errors" =>['No Compaints Found.']  ,  'status' =>'422' ], 200);
		}
	    
	}

    
    public function getPickupPersonChatsList(Request $request){
        if($request->userId)
		{
		    $chatList = [];
		    
		    $userIds = [];
		    
		    
            $exceptUserIds =  DB::select('SELECT DISTINCT(users.userIds)
                                            FROM
                                            (
                                                SELECT to_id as userIds, created_at FROM message  where to_id = "'.$request->userId.'" or  from_id = "'.$request->userId.'"
                                                UNION
                                                SELECT from_id as userIds, created_at FROM message where to_id = "'.$request->userId.'" or  from_id = "'.$request->userId.'" 
                                            ) users
                                            WHERE users.userIds != '.$request->userId.' order by users.created_at desc');
           
            if(count($exceptUserIds) > 0)
            {
                foreach($exceptUserIds as $userId)
                {
                    array_push($userIds, $userId->userIds);
                }
            }
            
           
            array_unique($userIds);
            
            
            if(!empty($userIds))
            {
                foreach($userIds as $key => $value)
                {
                    $userData = User::where('id' , $value)->first();
                    $lastMessageData = DB::table('message')->where('to_id', $value)->orWhere('from_id',$value)->orderBy('created_at', 'Desc')->first();
                    $chatList[] = ['name' => $userData->name, 'email' => $userData->email,'from_id' =>$value, 'message' =>$lastMessageData->message , 'created_at' => $lastMessageData->created_at ];
                }
            }
		    
		    /*
		    
		               
            $chatList = DB::table('users')
                        ->join('message', 'message.from_id', '=', 'users.id')
                        ->select('users.name','users.email', 'message.from_id' ,'message.message','message.created_at')
                        ->where(function ($query)use($request) {
            			     return $query->where('message.to_id', $request->userId)->orWhere('message.from_id',$request->userId);
                        })
                        ->groupBy('message.from_id','message.to_id')
                        ->orderBy('message.created_at', 'Desc')
                        ->get();*/
                        
            if(count($chatList)>0)
            {
                $response = ['data' => $chatList , 'status' =>'200' ];
            }
            else
            {
                $response = ["errors" =>['No Chats Found.']  ,  'status' =>'422' ];
            }
            
			
		    return response($response, 200);                       
                                    
		}
	    else
		{
			return response(["errors" =>['No Chats Found.']  ,  'status' =>'422' ], 200);
		}
    }
    
    
    public function updateComplaintStatus(Request $request)
    {
        if($request->complaintID)
		{
		    
		    $updated = Complaints::where('id' , '=', $request->complaintID)->update(['status' => "$request->status"]);

			$response = ['token' => '' , 'data' => [] ,  'status' =>'200' ];
			
		    return response($response, 200);
		}
    }
    
    
    
	public function getAllResidents(Request $request)
	{
	    if($request->userId)
		{
		    $searchItem =  $request->has('search') ? $request->get('search') : '';
		    
		    $totalCount = DB::table('users')
                    ->join('community', 'users.community', '=', 'community.id')
                    ->select('users.phoneNo','users.name','users.email', 'users.community', 'users.apartmentComplex', 'users.apartmentNo', 'users.buildingNo', 'users.id as residentID','community.title as communityTitle')
                    ->where('users.pickup_person','=',$request->userId)
                    ->where(function ($query) use($searchItem) {
        			    if(!empty($searchItem))
        			    {
        			        return $query->where('users.name', 'like', "%{$searchItem}%");
        			    }
                    })
                    ->count();
		    
			$page_data = [];
			
			$page   = $request->has('start') ? $request->get('start') : 1;
            $limit  = $request->has('recordsPerPage') ? $request->get('recordsPerPage') : 7;
            
            $page_data = DB::table('users')
                    ->join('community', 'users.community', '=', 'community.id')
                    ->select('users.phoneNo','users.name','users.email', 'users.community', 'users.apartmentComplex', 'users.apartmentNo', 'users.buildingNo', 'users.id as residentID','community.title as communityTitle')
                    ->where('users.pickup_person','=',$request->userId)
                    ->where(function ($query) use($searchItem) {
        			    if(!empty($searchItem))
        			    {
        			        return $query->where('users.name', 'like', "%{$searchItem}%");
        			    }
                    })
                    ->limit($limit)
        			->offset($page)
        			->orderBy('users.id', 'DESC')
                    ->get();
                    
            if($totalCount > 0)
			{
			    $response = ['data' => $page_data , 'total' => $totalCount,  'status' =>'200' ];
			}
			else
			{
			    $response = ['data' => $page_data , 'total' => $totalCount, "errors" =>['No Residents Found.'], 'status' =>'422' ];
			}        
            
		    return response($response, 200);
		}
		else
		{
			return response(["errors" =>['No Residents Found.']  ,  'status' =>'422' ], 200);
		}
	    
	}
	
	public function getResidentMessages(Request $request)
	{
	    if($request->fromId)
		{
		    $user_id = $request->fromId;
		    
		    if($data = User::where('id' , '=', $user_id)->first())
		    {
	            $user_data = [
    		        'id'    => $data->id,
    				'name'  => $data->name,
    				'email' => $data->email
    			];
    			
    			$messages = DB::table('message')
                			->select('typo','message','read_status','type as typ',DB::raw('DATE_FORMAT(created_at, "%h:%i %p") as time'))
                			->where(function ($query) use ($request , $user_id , $data) {
                                $query->where('from_id' , '=', $user_id);
                                $query->Where('to_id','=',$data->pickup_person);
                            })
                            ->orWhere(function ($query) use ($request , $user_id , $data) {
                                $query->where('to_id' , '=', $user_id);
                                $query->Where('from_id','=',$data->pickup_person);
                            })
                			->limit(10)
                			->orderBy('id', 'Desc')
                			->get()
                			->toArray();
                			
                $response = ['data' => ['message'=>array_reverse($messages),'user'=>$user_data] ,   'status' =>'200' ];			
		        
		    }
		    else
		    {
		        $response = ["errors" =>['No Message Found.']  ,  'status' =>'422' ];
		    }
		    
	    	return response($response, 200);
		    
		}
	}
	
	
	public function getValletInfo(Request $request)
	{
	    if($request->userId)
		{
		    
		    $user_id = $request->userId;
		    
		    if($data = User::where('id' , '=', $user_id)->first())
		    {
		        $vData = DB::table('users')
                        ->select('name', 'id','email')
                        ->where('id' , '=', $data->pickup_person)
                        ->first();
                                    
	            $vallet_data = [
    		        'id'    => $vData->id,
    				'name'  => $vData->name,
    				'email' => $vData->email
    			];
    			
    			$messages = DB::table('message')
                			->select('typo','message','read_status','type as typ',DB::raw('DATE_FORMAT(created_at, "%h:%i %p") as time'))
                			->where(function ($query) use ($request , $user_id , $data) {
                                $query->where('from_id' , '=', $user_id);
                                $query->Where('to_id','=',$data->pickup_person);
                            })
                            ->orWhere(function ($query) use ($request , $user_id , $data) {
                                $query->where('to_id' , '=', $user_id);
                                $query->Where('from_id','=',$data->pickup_person);
                            })
                			->limit(10)
                			->orderBy('id', 'Desc')
                			->get()
                			->toArray();
                			
                $response = ['data' => ['message'=>array_reverse($messages),'user'=>$vallet_data] ,   'status' =>'200' ];			
		        
		    }
	    	else
	    	{
	    	    $response = ["errors" =>['No vallet assigned.']  ,  'status' =>'422' ];
	    	}
	    	
	    	return response($response, 200);
		}
	}
	
	public function getPropertyManagerNotifications(Request $request)
	{
	    $userId = $request->userId;
	    $community = $request->community;
	    if($request->userId)
	    {
	        
	        $totalCount = DB::table('notifications')
                        ->join('users', 'users.id', '=', 'notifications.from_userId')
                        ->where('users.community','=',$community)
                        ->where('users.id', '!=', $request->userId)
            			->orderBy('notifications.id', 'Desc')
                        ->count();
                    
	     	$page = $request->has('start') ? $request->get('start') : 1;
            $limit = $request->has('recordsPerPage') ? $request->get('recordsPerPage') : 7;
            
            $notifications = DB::table('notifications')
                    ->join('users', 'users.id', '=', 'notifications.from_userId')
                    ->select('users.name','users.phoneNo','users.email', 'users.community', 'users.apartmentComplex', 'users.apartmentNo', 'users.buildingNo', 'users.id as residentID','notifications.read_status', 'notifications.from_userId', 'notifications.type','notifications.content','notifications.updated_at as time')
                    ->where('users.community','=',$community)
                    ->where('users.id', '!=', $request->userId)
                    ->limit($limit)
        			->offset($page)
        			->orderBy('notifications.id', 'Desc')
                    ->get();
	        
	       if(count($notifications) > 0)
	       {
	           return response(['data' => $notifications ,  'total' => $totalCount,  'status' =>'200' ], 200);
	       }
	       else
	       {
	           	return response(["errors" =>['No notifications found.']  ,  'status' =>'422' ], 200);
	       }
	       
	       
	    }
	}
	
	public function getDashboardDataPropertyManager(Request $request)
	{
	    $complaintType = $request->status == '' ? 1 :  $request->status;
	    $complaintType = $request->requestedtype == '' ? 'week' :  $request->requestedtype;
	    $community = $request->community;
	    if($request->userId)
		{
		    $myComplaintsData = [];
		    $myComplaintsDataf = [];
		    
	        switch ($complaintType) {
                case "week":
                    $complaintsCount = DB::table('users')
                            ->join('complaints', 'users.id', '=', 'complaints.userId')
                            ->join('community', 'users.community', '=', 'community.id')
                            ->where('users.community','=',$community)
                            ->where('users.id', '!=', $request->userId)
                            ->whereBetween('complaints.created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                            ->count();
                            
        		    $mycomplaintsCount = DB::table('complaints')
                            			->where('userId' , '=', $request->userId)
                            			->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                            			->count();
                    
                    
                    $period = CarbonPeriod::create(Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek());

                    // Iterate over the period
                    foreach ($period as $date) {
                        $range[$date->format("l")] = 0;
                    }
                            			
                    $data =  Complaints::select(DB::raw("(COUNT(*)) as count"),DB::raw("DAYNAME(created_at) as dayname"))
                                        ->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                                        ->whereYear('created_at', date('Y'))
                                        ->where('userId' , '=', $request->userId)
                                        ->groupBy('dayname')
                                        ->get();
                                        
                    foreach($data as $val){
                      $dbData[$val->dayname] = $val->count;
                    }
                    
                    $myComplaintsData = array_replace($range, $dbData);
                    
                    $pendingComplaints = DB::table('users')
                                        ->join('complaints', 'users.id', '=', 'complaints.userId')
                                        ->join('community', 'users.community', '=', 'community.id')
                                        ->where('users.community','=',$community)
                                        ->where('users.id', '!=', $request->userId)
                                        ->whereBetween('complaints.created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                                        ->where('complaints.status' , '=' , 1)
                                        ->count();
                    
                    $completedComplaints = DB::table('users')
                                        ->join('complaints', 'users.id', '=', 'complaints.userId')
                                        ->join('community', 'users.community', '=', 'community.id')
                                        ->where('users.community','=',$community)
                                        ->where('users.id', '!=', $request->userId)
                                        ->whereBetween('complaints.created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                                        ->where('complaints.status' , '=' , 3)
                                        ->count();
                    
                    
                    break;
                case "month":
                    $complaintsCount = DB::table('users')
                            ->join('complaints', 'users.id', '=', 'complaints.userId')
                            ->join('community', 'users.community', '=', 'community.id')
                            ->where('users.community','=',$community)
                            ->where('users.id', '!=', $request->userId)
                            ->whereMonth('complaints.created_at', date('m'))
                            ->whereYear('complaints.created_at', date('Y'))
                            ->count();
                            
        		    $mycomplaintsCount = DB::table('complaints')
                            			->where('userId' , '=', $request->userId)
                            			->whereMonth('created_at', date('m'))
                                        ->whereYear('created_at', date('Y'))
                            			->count();
                            			
                            			
                     
                    $myComplaintsDataf =  Complaints::select(DB::raw("(COUNT(*)) as count"),DB::raw("updated_at as dayname"))
                                        ->whereMonth('complaints.updated_at', date('m'))
                                        ->whereYear('complaints.updated_at', date('Y'))
                                        ->where('userId', '=', $request->userId)
                                        ->groupBy('dayname')
                                        ->get()
                                        ->groupBy(function($date) {
                                            
                                            $created_at = Carbon::parse($date->dayname);
                                           
                                            $start = $created_at->startOfWeek()->format('d-M-Y');
                                            $end = $created_at->endOfWeek()->format('d-M-Y');
                                            
                                            return "{$start} - {$end}";
                                        }); 
                    
                    $period = CarbonPeriod::create(Carbon::now()->startOfMonth(), Carbon::now()->endOfMonth());

                    // Iterate over the period
                    foreach ($period as $date) {
                        $range['Week '.$date->format("W")] = 0;
                    }                    
                    
                    $data =  Complaints::select(DB::raw("(COUNT(*)) as count"),DB::raw("updated_at as dayname"))
                                        ->whereMonth('complaints.updated_at', date('m'))
                                        ->whereYear('complaints.updated_at', date('Y'))
                                        ->where('userId', '=', $request->userId)
                                        ->groupBy('dayname')
                                        ->get()
                                        ->groupBy(function($date) {
                                            return 'Week '.Carbon::parse($date->dayname)->format('W');
                                        }); 
                                        
                    foreach($data as $key => $val){
                        $dbData[$key] = $val[0]->count;
                     
                    }
                      
                    $myComplaintsData = array_replace($range, $dbData);                  
                                    
                                        
                    $pendingComplaints = DB::table('users')
                                        ->join('complaints', 'users.id', '=', 'complaints.userId')
                                        ->join('community', 'users.community', '=', 'community.id')
                                        ->where('users.community','=',$community)
                                        ->where('users.id', '!=', $request->userId)
                                        ->whereMonth('complaints.created_at', date('m'))
                                        ->whereYear('complaints.created_at', date('Y'))
                                        ->where('complaints.status' , '=' , 1)
                                        ->count();
                    
                    $completedComplaints = DB::table('users')
                                        ->join('complaints', 'users.id', '=', 'complaints.userId')
                                        ->join('community', 'users.community', '=', 'community.id')
                                        ->where('users.community','=',$community)
                                        ->where('users.id', '!=', $request->userId)
                                        ->whereMonth('complaints.created_at', date('m'))
                                        ->whereYear('complaints.created_at', date('Y'))
                                        ->where('complaints.status' , '=' , 3)
                                        ->count(); 
                    
                    break;
                case "year":
                    $complaintsCount = DB::table('users')
                            ->join('complaints', 'users.id', '=', 'complaints.userId')
                            ->join('community', 'users.community', '=', 'community.id')
                            ->where('users.community','=',$community)
                            ->where('users.id', '!=', $request->userId)
                            ->whereYear('complaints.created_at', date('Y'))
                            ->count();
                            
        		    $mycomplaintsCount = DB::table('complaints')
                            			->where('userId' , '=', $request->userId)
                            			->whereYear('created_at', date('Y'))
                            			->count();
                            			
                    $period = CarbonPeriod::create(Carbon::now()->startOfYear(), Carbon::now()->endOfYear());

                    // Iterate over the period
                    foreach ($period as $date) {
                        $range[$date->format("F")] = 0;
                    }      
                    
                    $data =  Complaints::select(DB::raw("(COUNT(*)) as count"),DB::raw("MONTHNAME(created_at) as dayname"))
                            ->whereYear('created_at', date('Y'))
                            ->where('userId' , '=', $request->userId)
                            ->groupBy('dayname')
                            ->get();
                                        
                    foreach($data as $val){
                      $dbData[$val->dayname] = $val->count;
                    }
                    
                    $myComplaintsData = array_replace($range, $dbData);
                            			
                    $pendingComplaints = DB::table('users')
                                        ->join('complaints', 'users.id', '=', 'complaints.userId')
                                        ->join('community', 'users.community', '=', 'community.id')
                                        ->where('users.community','=',$community)
                                        ->where('users.id', '!=', $request->userId)
                                        ->whereYear('complaints.created_at', date('Y'))
                                        ->where('complaints.status' , '=' , 1)
                                        ->count();
                    
                    $completedComplaints = DB::table('users')
                                        ->join('complaints', 'users.id', '=', 'complaints.userId')
                                        ->join('community', 'users.community', '=', 'community.id')
                                        ->where('users.community','=',$community)
                                        ->where('users.id', '!=', $request->userId)
                                        ->whereYear('complaints.created_at', date('Y'))
                                        ->where('complaints.status' , '=' , 3)
                                        ->count();                    
                                			
                
                    break;
                default:
                    $complaintsCount = DB::table('users')
                            ->join('complaints', 'users.id', '=', 'complaints.userId')
                            ->join('community', 'users.community', '=', 'community.id')
                            ->where('users.community','=',$community)
                            ->where('users.id', '!=', $request->userId)
                            ->whereBetween('complaints.created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                            ->count();
                            
        		    $mycomplaintsCount = DB::table('complaints')
                            			->where('userId' , '=', $request->userId)
                            			->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                            			->count();
                    
                    $period = CarbonPeriod::create(Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek());

                    // Iterate over the period
                    foreach ($period as $date) {
                        $range[$date->format("l")] = 0;
                    }
                            			
                    $data =  Complaints::select(DB::raw("(COUNT(*)) as count"),DB::raw("DAYNAME(created_at) as dayname"))
                                        ->whereBetween('created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                                        ->whereYear('created_at', date('Y'))
                                        ->where('userId' , '=', $request->userId)
                                        ->groupBy('dayname')
                                        ->get();
                    foreach($data as $val){
                      $dbData[$val->dayname] = $val->count;
                    }
                    
                    $myComplaintsData = array_replace($range, $dbData);
                    
                    $pendingComplaints = DB::table('users')
                                        ->join('complaints', 'users.id', '=', 'complaints.userId')
                                        ->join('community', 'users.community', '=', 'community.id')
                                        ->where('users.community','=',$community)
                                        ->where('users.id', '!=', $request->userId)
                                        ->whereBetween('complaints.created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                                        ->where('complaints.status' , '=' , 1)
                                        ->count();
                    
                    $completedComplaints = DB::table('users')
                                        ->join('complaints', 'users.id', '=', 'complaints.userId')
                                        ->join('community', 'users.community', '=', 'community.id')
                                        ->where('users.community','=',$community)
                                        ->where('users.id', '!=', $request->userId)
                                        ->whereBetween('complaints.created_at', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])
                                        ->where('complaints.status' , '=' , 3)
                                        ->count();
            }
            
            $mycomplaintsLabel = [];
            $mycomplaintsValue = [];
            
            if(!empty($myComplaintsData))
            {
                foreach($myComplaintsData as $key => $value){
                    $mycomplaintsLabel[] = $key;
                    $mycomplaintsValue[] = $value;
                }
            }
            
		    $response = ['data'=> [ 
		        'myComplaintsData'      => $myComplaintsData ,
	            'mycomplaintsLabel'     => $mycomplaintsLabel,
		        'mycomplaintsValue'     => $mycomplaintsValue,
		        'pendingComplaints'     => $pendingComplaints,
		        'completedComplaints'   => $completedComplaints
		        ], 'complaintsCount'    => $complaintsCount,  'mycomplaintscount' => $mycomplaintsCount, 'debug' => $myComplaintsDataf,  'status' =>'200' ];
			
		    return response($response, 200);
		}
	
	}
	
	
	public function sendPickUpNotification(Request $request)
    {
        
        $firebaseToken = User::whereNotNull('fcmToken')
                        ->where('pickup_person',$request->userId)
                        ->where('pushNotification','=','1')
                        ->pluck('fcmToken')
                        ->all();
        $response = [];                
        if(!empty($firebaseToken))
        {
            $SERVER_API_KEY = 'AAAAtrMqLfw:APA91bFPKGAWa_Y9abJdvV9Xop6rtHsPW9jWisobB4McBysidSOy9RxD3nsTUUGkrJ8uX9sYz1XuivPsk5tLekAo3xw_9mgFPgVcdrIFMeYFOQCtGNGJwoG0psXAzCCV8qb9l36NZ1px';
  
            $data = [
                "registration_ids" => $firebaseToken,
                "notification" => [
                    "title" => $request->title,
                    "body" => $request->body,  
                ]
            ];
            $dataString = json_encode($data);
        
            $headers = [
                'Authorization: key=' . $SERVER_API_KEY,
                'Content-Type: application/json',
            ];
        
            $ch = curl_init();
          
            curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);
                   
            $response = curl_exec($ch);
            
        }
        
        return response($response, 200);
  
    }
    
    
    public function sendresidentPushNotifications(Request $request)
    {
        /* get user community here */
        if( $request->title == 'Complaints')
        {
            self::sendNotificationToPropertyManager(['userId' => $request->userId,'title' => $request->title, 'body' => $request->body  ]);
            
            Notifications::create(
                    	[
                    		'type' => 2,
                    		'from_userId' => $request->userId,
                    		'content' => $request->body,
                    		'to_userId' => $request->toId
                    	]);
        }
        
        $firebaseToken = User::whereNotNull('fcmToken')
                        ->where('id',$request->toId)
                        ->where('pushNotification','=','1')
                        ->pluck('fcmToken')
                        ->all();
                        
                        

        //$SERVER_API_KEY = 'AAAAtrMqLfw:APA91bFPKGAWa_Y9abJdvV9Xop6rtHsPW9jWisobB4McBysidSOy9RxD3nsTUUGkrJ8uX9sYz1XuivPsk5tLekAo3xw_9mgFPgVcdrIFMeYFOQCtGNGJwoG0psXAzCCV8qb9l36NZ1px';
        $SERVER_API_KEY = 'AAAAi_-7pUo:APA91bFuolX7IVhlT3l5ZImFIQiKlQCoMrh7kQkkeI_0C0BCmFxZcBQZi4TI2kXvqIf8KQKWIQpHDPcHtf8n9yEd4w4cJKse50ATfqKOSjKH505TsWeQRnrl897Nb_wVypd_FGLSXOfL';
        $data = [
            "registration_ids" => $firebaseToken,
            "notification" => [
                "title" => $request->title,
                "body" => $request->body,  
            ]
        ];
        $dataString = json_encode($data);
    
        $headers = [
            'Authorization: key=' . $SERVER_API_KEY,
            'Content-Type: application/json',
        ];
    
        $ch = curl_init();
      
        curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);
               
        $response = curl_exec($ch);
  
        return response($response, 200);
    }
    
    public function sendNotificationToPropertyManager($data = array())
    {
        /* get user community here */
        
        $checkCommunity = User::where('id',$data['userId'])->first();
        $communityId = $checkCommunity->community;
        
        $firebaseToken = User::whereNotNull('fcmToken')
                        ->where('community', $communityId)
                        ->where('role', 'propertyManager')
                        ->pluck('fcmToken')
                        ->all();
                        
        Notifications::create(
                    	[
                    		'type' => 2,
                    		'from_userId' => $data['userId'],
                    		'content' => $data['body'],
                    		'to_userId' => $checkCommunity->id
                    	]);

        //$SERVER_API_KEY = 'AAAAtrMqLfw:APA91bFPKGAWa_Y9abJdvV9Xop6rtHsPW9jWisobB4McBysidSOy9RxD3nsTUUGkrJ8uX9sYz1XuivPsk5tLekAo3xw_9mgFPgVcdrIFMeYFOQCtGNGJwoG0psXAzCCV8qb9l36NZ1px';
        $SERVER_API_KEY = 'AAAAFVTP4xE:APA91bEYNk_RqxD9WpSYVKOLrZjOm5khLx6xIaGA-UQiR9NRyPKHz-BYE1mfrvUtAx9YmOXepd0yrQUOVnzOZNiY0Gv4ISkVUYoarTwUrqoFv_ByNQ3xNF0NB4CnkTkZqqEOTqJB4Hjj';
        $data = [
            "registration_ids" => $firebaseToken,
            "notification" => [
                "title" => $data['title'],
                "body" => $data['body'],  
            ]
        ];
        $dataString = json_encode($data);
    
        $headers = [
            'Authorization: key=' . $SERVER_API_KEY,
            'Content-Type: application/json',
        ];
    
        $ch = curl_init();
      
        curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);
               
        $response = curl_exec($ch);
  
        return response($response, 200);
    }
    
    
    
    public function cleanUserFCMToken(Request $request)
    {
        if(!empty($request->userId))
		{
		    User::where('id','=', $request->userId )->update(['fcmToken'	=>	'']);
		    return response(["errors" =>['Logout successfully'] , 'status' =>'422'], 200);
		}
		else
		{
			return response(["errors" =>['User does not exist'] , 'status' =>'422'], 200);
		}
    }
    
    public function sendPickUpNotificationSingleUser(Request $request)
    {
        $firebaseToken = User::whereNotNull('fcmToken')
                        ->where('pickup_person',$request->userId)
                        ->where('id',$request->receiverId)
                        ->where('pushNotification','=','1')
                        ->pluck('fcmToken')
                        ->all();
                        
        Notifications::create(
                    	[
                    		'type' => 3,
                    		'from_userId' => $request->userId,
                    		'content' => $request->body,
                    		'to_userId' => $request->receiverId
                    	]);
        
        
                        
        $response = [];                
        if(!empty($firebaseToken))
        {
            $SERVER_API_KEY = 'AAAAtrMqLfw:APA91bFPKGAWa_Y9abJdvV9Xop6rtHsPW9jWisobB4McBysidSOy9RxD3nsTUUGkrJ8uX9sYz1XuivPsk5tLekAo3xw_9mgFPgVcdrIFMeYFOQCtGNGJwoG0psXAzCCV8qb9l36NZ1px';
  
            $data = [
                "registration_ids" => $firebaseToken,
                "notification" => [
                    "title" => $request->title,
                    "body" => $request->body,  
                ]
            ];
            $dataString = json_encode($data);
        
            $headers = [
                'Authorization: key=' . $SERVER_API_KEY,
                'Content-Type: application/json',
            ];
        
            $ch = curl_init();
          
            curl_setopt($ch, CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send');
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $dataString);
                   
            $response = curl_exec($ch);
            
        }
        
        return response($response, 200);
    }
    
   
	
	
	
  

	
}
