<?php
    namespace App\Middleware;
    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;

    class RouteMiddleware
    {
        public function boot(Request $request, Response $response)
        {
            return $response->withStatus(204);
        }
    }