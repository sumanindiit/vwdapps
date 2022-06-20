<?php include('inc/header.php') ?>
    <?php include('inc/sidebar.php') ?>   
    <div class="page-wrapper">
        <div class="content container-fluid">
            <div class="row">
                <!-- Users -->
                <div class="col-md-12">
                    <div class="card card-table">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title">Edit User</h4>
                            <a href="users.php" class="btn btn-default btnwhite">Back To Users</a>
                        </div>
                        <div class="card-body">
                            <div class="padBox">
                                <form>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>Name</label>
                                              <input class="form-control" type="text" value="John Smith">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>Email Address</label>
                                              <input class="form-control" type="email" value="john@gmail.com">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>Phone Number</label>
                                              <input class="form-control" type="text" value="123456789">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>Address</label>
                                              <input class="form-control" type="text" value="123 Town Street, California">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>Town / City</label>
                                              <input class="form-control" type="text" value="New York">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>State</label>
                                              <input class="form-control" type="text" value="Alaska">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>Zip Code</label>
                                              <input class="form-control" type="text" value="123456">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Country / Region</label>
                                                <select class="form-control">
                                                    <option>Select Country</option>
                                                    <option>Afghanistan</option>
                                                    <option>Albania</option>
                                                    <option>Algeria</option>
                                                    <option>American Samoa</option>
                                                    <option>Andorra</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row mt-3">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <h1>Change Password</h1>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                              <label>Old Password</label>
                                              <input class="form-control" type="password" value="123456789">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>New Password</label>
                                              <input class="form-control" type="password" value="123456789">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>Confirm New Password</label>
                                              <input class="form-control" type="password" value="123456789">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                      <button class="btn btn-success" type="submit">Save Changes</button>
                                    </div>
                                </form>
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