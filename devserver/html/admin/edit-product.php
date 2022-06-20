<?php include('inc/header.php') ?>
<?php include('inc/sidebar.php') ?>
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="row">
            <!-- Users -->
            <div class="col-md-12">
                <div class="card card-table">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="card-title">Edit Product</h4>
                        <a href="products.php" class="btn btn-default btnwhite">Back To Products</a>
                    </div>
                    <div class="card-body">
                        <div class="padBox">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="profile_user profile_userpro">
                                        <div class="card">
                                            <div class="card-body text-center">
                                                <div class="user-image ">
                                                    <img src="assets/img/pro3.png">
                                                    <label for="user-img"><i class="fas fa-edit"></i></label>
                                                    <input id="user-img" name="user-img" style="display:none" type="file">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Product Name</label>
                                                <input class="form-control" type="text" value="Quest 2 Headset">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Category</label>
                                                <select class="form-control">
                                                    <option>Select Category</option>
                                                    <option>Gaming</option>
                                                    <option>Digital Games</option>
                                                    <option>Digital Media</option>
                                                    <option>Digital Services</option>
                                                    <option>Gift Card</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Price</label>
                                                <input class="form-control" type="text" value="$34">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        <button class="btn btn-success" type="submit">Save Changes</button>
                                    </div>
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