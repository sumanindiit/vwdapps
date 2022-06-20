<?php include('inc/header.php') ?>
<?php include('inc/sidebar.php') ?>
<div class="page-wrapper">
    <div class="content container-fluid">
        <div class="row">
            <!-- Users -->
            <div class="col-md-12">
                <div class="card card-table">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h4 class="card-title">Edit FAQs</h4>
                        <a href="faqs.php" class="btn btn-default btnwhite">Back</a>
                    </div>
                    <div class="card-body">
                        <div class="padBox">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Questions</label>
                                                <input class="form-control" type="text" value="How do I make a purchase ?">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Answers</label>
                                                <textarea class="form-control h-auto" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." rows="7"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label>Type</label>
                                                <select id="types" class="custom-select custom-select-sm form-control form-control-sm">
                                                  <option value="Buyer">Buyer</option>
                                                  <option value="Seller">Seller</option>
                                                </select>
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