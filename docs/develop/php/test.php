<?php
 
$redis = new Redis();
//Connecting to Redis
$redis->connect('localhost', 6379);
 
if ($redis->ping()) {
        echo "PONGn";
}
 
?>
