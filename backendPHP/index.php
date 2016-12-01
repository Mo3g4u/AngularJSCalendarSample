<?php

include './vendor/autoload.php';

use Mo3g4u\Calendar\Calendar;

$year = isset($_GET['year']) ? $_GET['year'] : 0;
$month = isset($_GET['month']) ? $_GET['month'] : 0;
$calendar = new Calendar($year, $month);
$dates = $calendar->datesChunk();
echo json_encode($dates);
