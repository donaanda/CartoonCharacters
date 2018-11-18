<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");

require_once('mysql_credentials.php');

$query = 'SELECT * FROM `cartoon_character`';

$result = mysqli_query($connection, $query);

$output = [
    'success' => false,
    'data' => []
];

if (mysqli_num_rows($result) > 0) {
    $output['success'] = true;
    while ($row = mysqli_fetch_assoc($result)) {
        $output['data'][] = $row;
    }
}

$json_output = json_encode($output);
print($json_output);
?>