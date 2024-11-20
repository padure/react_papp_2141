<?php
    use Slim\Routing\RouteCollectorProxy;
    use App\Controllers\ProductController;
    use App\Middleware\RouteMiddleware;

    $app->options('/{routes:.+}', [RouteMiddleware::class, 'boot']);
    
    $app->group('/products', function (RouteCollectorProxy $group) {
        $group->get('', [ProductController::class, 'index']);
        $group->post('', [ProductController::class, 'create']);
        $group->get('/{id}', [ProductController::class, 'show']);
        $group->put('/{id}', [ProductController::class, 'update']);
        $group->delete('/{id}', [ProductController::class, 'delete']);
    });