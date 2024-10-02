<?php 

$disksString = file_get_contents('database/data.json');
$disksArray = json_decode($disksString, true);

$disks = [];

foreach ($disksArray as $singleDisk) {
    $disks[] = $singleDisk;
}

	
header('Content-Type: application/json');
 
echo json_encode($disks);

?>