<?php include('inc/header.php') ?>
    <?php include('inc/sidebar.php') ?>   
    <div class="page-wrapper">
        <div class="content container-fluid">
            <div class="row">
                <!-- Users -->
                <div class="col-md-12">
                    <div class="card card-table">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title">View Feedback</h4>
                            <a href="feedback.php" class="btn btn-default btnwhite">Back To Feedback</a>
                        </div>
                        <div class="card-body">
                            <div class="viewBox padBox">
                                <div class="row">
                                    <div class="col-md-4">
                                       <div class="profile_user profile_userpro">
                                          <div class="card">
                                             <div class="card-body text-center">
                                                <div class="user-image ">
                                                   <img src="assets/img/1.jpg" class="rounded-circle whnone" />
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>

                                    <div class="col-md-8">
                                        <table class="table table-bordered">
                                            <tr>
                                                <th> User Name </th>
                                                <td> James Anderson </td>
                                            </tr>
                                            <tr>
                                                <th> Store Name </th>
                                                <td> Online Store </td>
                                            </tr>
                                            <tr>
                                                <th> Rating </th>
                                                <td> 
                                                    <div class="stardiv">
                                                       <i class="fa fa-star"></i>
                                                       <i class="fa fa-star"></i>
                                                       <i class="fa fa-star"></i>
                                                       <i class="far fa-star"></i>
                                                       <i class="far fa-star"></i>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th> Description </th>
                                                <td class="text-wrap"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem. </td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Of Users -->
            </div>
        </div>
    </div>
</div>
      
<?php include('inc/footer.php') ?>