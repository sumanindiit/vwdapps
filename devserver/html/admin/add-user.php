<?php include('inc/header.php') ?>
    <?php include('inc/sidebar.php') ?>   
    <div class="page-wrapper">
        <div class="content container-fluid">
            <div class="row">
                <!-- Users -->
                <div class="col-md-12">
                    <div class="card card-table">
                        <div class="card-header d-flex justify-content-between align-items-center">
                            <h4 class="card-title">Add User</h4>
                            <a href="users.php" class="btn btn-default btnwhite">Back To Users</a>
                        </div>
                        <div class="card-body">
                            <div class="padBox">
                                <form>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <h1>Basic Information</h1>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>Name</label>
                                              <input class="form-control" type="text" placeholder="Enter Name">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>Email Address</label>
                                              <input class="form-control" type="email" placeholder="Enter Email Address">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>Phone Number</label>
                                              <input class="form-control" type="text" placeholder="Enter Phone Number">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>Address</label>
                                              <input class="form-control" type="text" placeholder="Enter Address">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>Town / City</label>
                                              <input class="form-control" type="text" placeholder="Enter Town / City">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>State</label>
                                              <input class="form-control" type="text" placeholder="Enter State">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>Zip Code</label>
                                              <input class="form-control" type="text" placeholder="Enter Zip Code">
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
                                                <h1>Add Password</h1>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>New Password</label>
                                              <input class="form-control" type="password" placeholder="Enter New Password">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                              <label>Confirm New Password</label>
                                              <input class="form-control" type="password" placeholder="Enter Confirm New Password">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                      <button class="btn btn-primary" type="submit">Submit</button>
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