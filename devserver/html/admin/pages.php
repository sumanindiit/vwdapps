<?php include('inc/header.php') ?>
    <?php include('inc/sidebar.php') ?>   
    <div class="page-wrapper">
        <div class="content container-fluid">
            <div class="row">
                <!-- Users -->
                <div class="col-md-12">
                    <div class="card card-table">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title">All Pages</h4>
                            <a href="add-page.php" class="btn btn-default btnwhite">Add Page</a>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-hover table-center mb-0 datatable">
                                    <thead>
                                        <tr>
                                            <th>Sr. No</th>
                                            <th>Title</th>
                                            <th>Last Modified Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>About Us</td>
                                            <td>Nov 19, 2021</td>
                                            <td>
                                                <a href="edit-page.php" class="btn btn-sm bg-success-light">
                                                    <i class="far fa-edit mr-1"></i>
                                                </a>
                                                <a href="javascript: void(0)"  data-toggle="modal" data-target="#deletemodal" class="btn btn-sm bg-danger-light delete_review_comment">
                                                    <i class="far fa-trash-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Contact</td>
                                            <td>Nov 19, 2021</td>
                                            <td>
                                                <a href="edit-page.php" class="btn btn-sm bg-success-light">
                                                    <i class="far fa-edit mr-1"></i>
                                                </a>
                                                <a href="javascript: void(0)"  data-toggle="modal" data-target="#deletemodal" class="btn btn-sm bg-danger-light delete_review_comment">
                                                    <i class="far fa-trash-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Privacy Policy</td>
                                            <td>Nov 19, 2021</td>
                                            <td>
                                                <a href="edit-page.php" class="btn btn-sm bg-success-light">
                                                    <i class="far fa-edit mr-1"></i>
                                                </a>
                                                <a href="javascript: void(0)"  data-toggle="modal" data-target="#deletemodal" class="btn btn-sm bg-danger-light delete_review_comment">
                                                    <i class="far fa-trash-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Terms & Conditions</td>
                                            <td>Nov 19, 2021</td>
                                            <td>
                                                <a href="edit-page.php" class="btn btn-sm bg-success-light">
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