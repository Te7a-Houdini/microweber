<?php
$loadedModule = module_name_decode($loadedModule);

if (is_module($loadedModule)) {
    print '<module type="' . $loadedModule . '" view="admin"  backend="true" id="mw-main-module-backend" />';
} else {
    print "No module found {$loadedModule}";
}