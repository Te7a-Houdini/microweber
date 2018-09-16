<?php

$loadedModule = mw()->url_manager->param('load_module');

$menuItem = mw()->url_manager->param('view');

$holder_cls = false;

if ($loadedModule != false) {
    $holder_cls = mw()->url_manager->slug($loadedModule);
} elseif ($menuItem != false) {
    $holder_cls = mw()->url_manager->slug($menuItem);
}

?>

<div class="mw-ui-col admin-content-column <?php print  $holder_cls ?>">
    <?php

            if ($loadedModule != false) {
                include('parse-module.php');
            } else {
                include('parse-module-menu-item.php');
            }
    ?>
</div>
