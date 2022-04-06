

import React from 'react'
import { Head, useForm } from '@inertiajs/inertia-react'
import Authenticated from '@/Layouts/Authenticated'
import ValidationErrors from '@/Components/ValidationErrors'
import TodoStatus from '@/Components/Todos/TodoStatus'
import TodoForm from '@/Components/Todos/TodoForm'
import TodoItem from '@/Components/Todos/TodoItem'

export default function TodoList(props){

    const { data, setData, post, put, delete: destroy, errors, reset } = useForm({
        todo: '',
    })

    const submitTodo = async () =>{
        await post ( route("todos.store"), {
            preserveScroll: true,
            onSuccess: () => reset( "todo" ),
        })
    }

    const restore = async id => {
        await put( route('todos.restore', { id }), {
            preserveScroll: true,
        })
    }

    const complete = async id => {
        await put( route('todos.complete', { id }), {
            preserveScroll: true,
        })
    }

    const remove = async id => {
        await destroy( route('todos.destroy', { id }), {
            preserveScroll: true,
        })
    }

    return (
        <Authenticated
        auth={props.auth}
        errors = { props.errors }
        header = { <h2 className='font-semibold text-xl text-gray-800 leading-tight'>To Do List</h2> }
        >
            <Head title='To Do List'/>

            <div className='h-100 w-full flex items-center justify-center bg-teal-lightest font -sans'>
                <div className='bg-white rounded shadow p-6 m-4 w-full lg-w-2/4 lg:max-w-lg'>
                    <h1 className='text-grey-darkest text-center'>To Do List</h1>

                    <div className='mb-4'>
                        <ValidationErrors errors={errors} />
                        {
                            props.status && <TodoStatus message={props.status} />
                        }
                    </div>

                    <div className='mb-4'>
                        <TodoForm
                            setData={setData}
                            fromData={FormData}
                            addTodo={submitTodo}
                        />
                    </div>

                    <div>
                        {
                            props.todos.lenght === 0 &&
                            <TodoStatus color='red' message='no hay nada que hacer' />
                        }

                        {
                            props.todos.map( todo => {
                                const className = todo.completed ? 'w-full line-throught text-green-500' : 'w-full text-grey-darkest';

                                return (
                                    <TodoItem
                                        key={ todo.id }
                                        todo={ todo }
                                        className={ className }
                                        onRestore={() => restore(todo.id)}
                                        onComplete={() => complete(todo.id)}
                                        onRemove={() => remove(todo.id)}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}
