<?php

require_once('mysql_credentials.php');

$query = 'SELECT * FROM `cartoon_character`';

$result = mysqli_query($connection, $query);

$output = [
    'success' => false,
    'data' => []
];
?>