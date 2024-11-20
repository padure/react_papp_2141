<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;
use Slim\Factory\AppFactory;
use Illuminate\Database\Capsule\Manager as Capsule;
use App\Middleware\AppMiddleware;
use App\Middleware\CorsMiddleware;

// Încărcarea variabilelor de mediu
$dotenv = Dotenv::createImmutable(__DIR__ . '/..');
$dotenv->load();

// Configurarea bazei de date
$capsule = new Capsule;
$capsule->addConnection(require __DIR__ . '/../config/database.php');
$capsule->setAsGlobal();
$capsule->bootEloquent();

$app = AppFactory::create();

// Middleware de rutare
$app->addRoutingMiddleware();

// Middleware pentru erori
$appMiddleware = new AppMiddleware($app);
$appMiddleware->addErrorHandling();

// Adăugați middleware-ul CORS
$app->add(new CorsMiddleware([$_ENV['ALLOWED_ORIGINS']] ?? []));

// Definirea rutelor
require __DIR__ . '/../routes/web.php';

$app->run();
