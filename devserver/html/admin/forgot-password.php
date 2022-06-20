<?php include('inc/header.php') ?> 
    <style>
        .header {
            display: none;
        }
        .main-wrapper
        {
            padding: 0;
        }
    </style>
    <div class="login-page">
        <div class="login-body container">
            <div class="loginbox">
                <div class="login-right-wrap">
                    <div class="account-header">
                        <div class="account-logo text-center mb-4">
                            <a href="index.html">
                                <img src="assets/img/logo.png" alt="" class="img-fluid">
                            </a>
                        </div>
                    </div>
                    <div class="login-header text-center">
                        <h3>FORGOT PASSWORD</h3>
                    </div>
                    <form action="http://localhost/haven(admin)/index.php">
                        <div class="form-group">
                            <label class="control-label">Email</label>
                            <input class="form-control" type="text" placeholder="Enter your Email ID">
                        </div>
                        <div class="text-center">
                            <button class="btn btn-primary btn-block account-btn" type="submit">Reset Passowrd</button>
                        </div>
                    </form>
                    <div class="text-center forgotpass mt-4">Remember your password?<a href="login.php">Login</a></div>
                </div>
            </div>
        </div>
    </div>
</div>
      
<?php include('inc/footer.php') ?>