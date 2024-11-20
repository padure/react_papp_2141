<?php

namespace App\Middleware;

use Slim\Middleware\ErrorMiddleware;
use Slim\Exception\HttpNotFoundException;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Message\ResponseInterface as Response;
use Slim\App;

class AppMiddleware
{
    public function __construct(App $app)
    {
        $this->app = $app;
    }

    public function addErrorHandling()
    {
        $errorMiddleware = $this->app->addErrorMiddleware(true, true, true);

        $errorMiddleware->setErrorHandler(
            HttpNotFoundException::class,
            function (Request $request, HttpNotFoundException $exception, bool $displayErrorDetails) {
                $response = $this->app->getResponseFactory()->createResponse();
                $response->getBody()->write(json_encode([
                    'error' => 'Ruta solicitată nu a fost găsită.',
                    'status' => 404
                ]));
                return $response->withHeader('Content-Type', 'application/json')->withStatus(404);
            }
        );
    }
}
