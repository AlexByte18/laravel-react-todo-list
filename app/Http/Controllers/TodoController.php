<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Inertia\Inertia;
use Inertia\Response;

class TodoController extends Controller
{

    public function index() : Response{
        $todos = Todo::select(['id', 'text', 'completed'])
                    ->orderBy('completed')
                    ->orderByDesc('id')
                    ->get();

        return Inertia::render('Todos/TodoList', [
            'todos' => $todos->toArray(),
            'status' => session('status')
        ]);
    }
}
