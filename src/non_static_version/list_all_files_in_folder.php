<?php
$arr = array();



function listFolderFiles($dir){
   

    global $arr;
    $ffs = scandir($dir);

    unset($ffs[array_search('.', $ffs, true)]);
    unset($ffs[array_search('..', $ffs, true)]);

    // prevent empty ordered elements
    if (count($ffs) < 1)
        return;

    echo '<ol>';
    foreach($ffs as $ff){
        echo '<li>'.$ff;
       // array_push($arr, $ff);
        if(is_dir($dir.'/'.$ff)) listFolderFiles($dir.'/'.$ff);
         array_push($arr, $dir.'/'.$ff);
        echo '</li>';
    }
    echo '</ol>';
}

listFolderFiles('Movies');




echo json_encode($arr);
?>
