<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
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

    public function store(){
        $this->validate(request(), [
            "todo"  => "required|min:unique:todos,text"
        ]);

        Todo::create([
            'todo' => request('todo'),
            'completed' => 'false'
        ]);

        return back()->with('status', _('!To do created¡') );
    }
}
