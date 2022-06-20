<?php 
    $activePage = basename($_SERVER['PHP_SELF'], ".php");
?>
<div class="sidebar" id="sidebar">
    <div class="sidebar-logo">      
        <a href="index.php">
            <img src="assets/img/logo.png" class="img-fluid" alt="">
        </a>
    </div>
    <div class="sidebar-inner slimscroll">
        <div id="sidebar-menu" class="sidebar-menu">
            <ul>
                <li class="<?= ($activePage == 'index') ? 'active':''; ?>">
                    <a href="index.php"><i class="fas fa-columns"></i> <span>Dashboard</span></a>
                </li>
                <li class="<?= ($activePage == 'users') ? 'active':''; ?>">
                    <a href="users.php"><i class="fas fa-users"></i> <span>Users</span></a>
                </li>
                <li class="<?= ($activePage == 'products') ? 'active':''; ?>">
                    <a href="products.php"><i class="fas fa-archive"></i> <span>Products</span></a>
                </li>
                <li class="<?= ($activePage == 'services') ? 'active':''; ?>">
                    <a href="services.php"><i class="fas fa-cog"></i> <span>Services</span></a>
                </li>
                <li class="<?= ($activePage == 'orders') ? 'active':''; ?>">
                    <a href="orders.php"><i class="fas fa-truck"></i> <span>Orders</span></a>
                </li>
                <li class="<?= ($activePage == 'bookinglist') ? 'active':''; ?>">
                    <a href="bookinglist.php"><i class="far fa-calendar-check"></i> <span>Booking List</span></a>
                </li>
                <li class="<?= ($activePage == 'faqs') ? 'active':''; ?>">
                    <a href="faqs.php"><i class="fas fa-question"></i> <span>FAQs</span></a>
                </li>
                <li class="<?= ($activePage == 'notifications') ? 'active':''; ?>">
                    <a href="notifications.php"><i class="fas fa-bell"></i> <span>Notifications</span></a>
                </li>
                <li class="<?= ($activePage == 'feedback') ? 'active':''; ?>">
                    <a href="feedback.php"><i class="fas fa-comment-alt"></i> <span>Feedback</span></a>
                </li>
                <li class="<?= ($activePage == 'pages') ? 'active':''; ?>">
                    <a href="pages.php"><i class="fas fa-file-alt"></i> <span>Pages</span></a>
                </li>
                <li class="<?= ($activePage == 'profile') ? 'active':''; ?>">
                    <a href="profile.php"><i class="fas fa-user-cog"></i> <span>Profile Settings</span></a>
                </li>
                
                <!--   <li class="submenu">
                    <a href="#"><i class="fab fa-wpforms"></i> <span> Forms </span> <span class="menu-arrow"></span></a>
                    <ul style="display: none;">
                        <li><a href="form-basic-inputs.html">Basic Inputs </a></li>
                        <li><a href="form-input-groups.html">Input Groups </a></li>
                        <li><a href="form-horizontal.html">Horizontal Form </a></li>
                        <li><a href="form-vertical.html"> Vertical Form </a></li>
                        <li><a href="form-mask.html"> Form Mask </a></li>
                        <li><a href="form-validation.html"> Form Validation </a></li>
                    </ul>
                </li> -->
            </ul>
        </div>
    </div>
</div>