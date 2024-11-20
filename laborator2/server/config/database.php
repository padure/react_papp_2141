<?php
return [
    'driver'    => 'mysql',
    'host'      => $_ENV['DATABASE_HOST'],
    'database'  => $_ENV['DATABASE_NAME'],
    'username'  => $_ENV['DATABASE_USER'],
    'password'  => $_ENV['DATABASE_PASS'],
    'charset'   => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix'    => '',
];