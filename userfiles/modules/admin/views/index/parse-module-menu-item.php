<?php

$menuItemFilePath = __DIR__ . DS . $menuItem . '.php';
$menuItemFilePath = str_replace('..', '', $menuItemFilePath);

if (is_file($menuItemFilePath)) {
    include($menuItemFilePath);
} else {
    $loadedModule = module_name_decode($menuItem);

    if ($loadedModule == 'modules') {
        $loadedModule = 'admin/modules';
    }

    if ($loadedModule != '' and is_module($loadedModule)) {
        print '<module type="' . $loadedModule . '" view="admin"  backend="true" id="mw-main-module-backend" />';
    } else {
        include(__DIR__ . DS . 'dashboard.php');
    }
}
