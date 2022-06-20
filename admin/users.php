<?php include('inc/header.php') ?>
    <?php include('inc/sidebar.php') ?>   
    <div class="page-wrapper">
        <div class="content container-fluid">
            <div class="row">
                <!-- Users -->
                <div class="col-md-12">
                    <div class="card card-table">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title">All Users</h4>
                            <a href="add-user.php" class="btn btn-default btnwhite">Add Users</a>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-hover table-center mb-0 datatable">
                                    <thead>
                                        <tr>
                                            <th>Sr. No</th>
                                            <th>Name</th>
                                            <th>Email Address</th>
                                            <th>Phone Number</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>John Smith</td>
                                            <td>john@gmail.com</td>
                                            <td>123456789</td>
                                            <td>
                                                <a href="view-user.php" class="btn btn-sm bg-info-light">
                                                    <i class="far fa-eye mr-1"></i>
                                                </a>
                                                 <a href="edit-user.php" class="btn btn-sm bg-success-light">
                                                    <i class="far fa-edit mr-1"></i>
                                                </a>
                                                <a href="javascript: void(0)"  data-toggle="modal" data-target="#deletemodal" class="btn btn-sm bg-danger-light delete_review_comment">
                                                    <i class="far fa-trash-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>John Smith</td>
                                            <td>john@gmail.com</td>
                                            <td>123456789</td>
                                            <td>
                                                <a href="view-user.php" class="btn btn-sm bg-info-light">
                                                    <i class="far fa-eye mr-1"></i>
                                                </a>
                                                 <a href="edit-user.php" class="btn btn-sm bg-success-light">
                                                    <i class="far fa-edit mr-1"></i>
                                                </a>
                                                <a href="javascript: void(0)"  data-toggle="modal" data-target="#deletemodal" class="btn btn-sm bg-danger-light delete_review_comment">
                                                    <i class="far fa-trash-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>John Smith</td>
                                            <td>john@gmail.com</td>
                                            <td>123456789</td>
                                            <td>
                                                <a href="view-user.php" class="btn btn-sm bg-info-light">
                                                    <i class="far fa-eye mr-1"></i>
                                                </a>
                                                 <a href="edit-user.php" class="btn btn-sm bg-success-light">
                                                    <i class="far fa-edit mr-1"></i>
                                                </a>
                                                <a href="javascript: void(0)"  data-toggle="modal" data-target="#deletemodal" class="btn btn-sm bg-danger-light delete_review_comment">
                                                    <i class="far fa-trash-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>John Smith</td>
                                            <td>john@gmail.com</td>
                                            <td>123456789</td>
                                            <td>
                                                <a href="view-user.php" class="btn btn-sm bg-info-light">
                                                    <i class="far fa-eye mr-1"></i>
                                                </a>
                                                 <a href="edit-user.php" class="btn btn-sm bg-success-light">
                                                    <i class="far fa-edit mr-1"></i>
                                                </a>
                                                <a href="javascript: void(0)"  data-toggle="modal" data-target="#deletemodal" class="btn btn-sm bg-danger-light delete_review_comment">
                                                    <i class="far fa-trash-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>John Smith</td>
                                            <td>john@gmail.com</td>
                                            <td>123456789</td>
                                            <td>
                                                <a href="view-user.php" class="btn btn-sm bg-info-light">
                                                    <i class="far fa-eye mr-1"></i>
                                                </a>
                                                 <a href="edit-user.php" class="btn btn-sm bg-success-light">
                                                    <i class="far fa-edit mr-1"></i>
                                                </a>
                                                <a href="javascript: void(0)"  data-toggle="modal" data-target="#deletemodal" class="btn btn-sm bg-danger-light delete_review_comment">
                                                    <i class="far fa-trash-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
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