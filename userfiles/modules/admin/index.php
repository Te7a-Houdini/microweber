<?php include(__DIR__ . DS . 'header.php'); ?>

<?php if (is_admin() == false): ?>
    <module type="users/login" template="admin"/>

<?php

else:
    include('views/index/load-module.php');

 endif;

 include(__DIR__ . DS . 'footer.php');
