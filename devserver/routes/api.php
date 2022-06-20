<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {

    return $request->user();
});

Route::group(['middleware' => ['cors', 'json.response']], function () {
    
    // public routes
    Route::post('/login', 'Auth\ApiAuthController@login')->name('login.api');
    Route::post('/register','Auth\ApiAuthController@register')->name('register.api');
    Route::post('/logout', 'Auth\ApiAuthController@logout')->name('logout.api');

    Route::post('/updateProfile', 'Auth\ApiAuthController@updateProfile')->name('updateProfile.api');
    Route::post('/updatePassword', 'Auth\ApiAuthController@updatePassword')->name('updatePassword.api');
    Route::post('/updatePushNotificationStatus', 'Auth\ApiAuthController@updatePushNotificationStatus')->name('updatePushNotificationStatus.api');

    Route::post('/getPageData', 'Auth\ApiAuthController@getPageData')->name('getPageData.api');

    Route::post('/getComplaints', 'Auth\ApiAuthController@getComplaints')->name('getComplaints.api');
    Route::post('/getComplaintDetail', 'Auth\ApiAuthController@getComplaintDetail')->name('getComplaintDetail.api');
    Route::post('/addComplaint', 'Auth\ApiAuthController@addComplaint')->name('addComplaint.api');
    
    Route::post('/getValletInfo', 'Auth\ApiAuthController@getValletInfo')->name('getValletInfo.api');
    
    Route::post('/sendMessage', 'Auth\ApiAuthController@sendMessage')->name('sendMessage.api');
    
    Route::post('/user_data', 'Auth\ApiAuthController@get_user_data')->name('user_data.api');
    
    Route::post('/saveNotifications', 'Auth\ApiAuthController@saveNotifications')->name('saveNotifications.api');
    Route::post('/getNotifications', 'Auth\ApiAuthController@getNotifications')->name('getNotifications.api');
    
    Route::post('/forgotPassword', 'Auth\ApiAuthController@forgotPassword')->name('forgotPassword.api');
    Route::post('/verifyOTP', 'Auth\ApiAuthController@verifyOTP')->name('verifyOTP.api');
    Route::post('/resetPassword', 'Auth\ApiAuthController@resetPassword')->name('resetPassword.api');
    
    Route::post('/getCommunities', 'Auth\ApiAuthController@getCommunities')->name('getCommunities.api');
    
    Route::post('/getUsersCommunities', 'Auth\ApiAuthController@getUsersCommunities')->name('getUsersCommunities.api');
    Route::post('/getPickupPersonCommunities', 'Auth\ApiAuthController@getPickupPersonCommunities')->name('getPickupPersonCommunities.api');
    Route::post('/cleanUserFCMToken', 'Auth\ApiAuthController@cleanUserFCMToken')->name('cleanUserFCMToken.api');
    Route::post('/sendPickUpNotificationSingleUser', 'Auth\ApiAuthController@sendPickUpNotificationSingleUser')->name('sendPickUpNotificationSingleUser.api');
    
    
    
    
    Route::post('/getPickupPersonComplaints', 'Auth\ApiAuthController@getPickupPersonComplaints')->name('getPickupPersonComplaints.api');
    Route::post('/getPropertyManagerComplaints', 'Auth\ApiAuthController@getPropertyManagerComplaints')->name('getPropertyManagerComplaints.api');
    Route::post('/getPickupPersonChatsList', 'Auth\ApiAuthController@getPickupPersonChatsList')->name('getPickupPersonChatsList.api');
    Route::post('/updateComplaintStatus', 'Auth\ApiAuthController@updateComplaintStatus')->name('updateComplaintStatus.api');
    Route::post('/getAllResidents', 'Auth\ApiAuthController@getAllResidents')->name('getAllResidents.api');
    Route::post('/getResidentMessages', 'Auth\ApiAuthController@getResidentMessages')->name('getResidentMessages.api');
    Route::post('/getPropertyManagerNotifications', 'Auth\ApiAuthController@getPropertyManagerNotifications')->name('getPropertyManagerNotifications.api');
    Route::post('/getDashboardDataPropertyManager', 'Auth\ApiAuthController@getDashboardDataPropertyManager')->name('getDashboardDataPropertyManager.api');
    
    
    
    Route::post('/sendPickUpNotification', 'Auth\ApiAuthController@sendPickUpNotification')->name('sendPickUpNotification.api');
    
    
    Route::post('/sendresidentPushNotifications', 'Auth\ApiAuthController@sendresidentPushNotifications')->name('sendresidentPushNotifications.api');
    
    
    
});
