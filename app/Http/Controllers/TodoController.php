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

    function restore( int $id){
        Todo::findOrFail($id)->fill([
            'completed' => false
        ])->update();

        return back()->with('status', _('!To do restored¡') );
    }

    function complete( int $id){
        Todo::findOrFail($id)->fill([
            'completed' => true
        ])->update();

        return back()->with('status', _('!To do completed¡') );
    }

    function destroy( int $id){
        $todo = Todo::findOrFail($id);
        $todo->delete();

        return back()->with('status', _('!To do deleted¡') );
    }
}
