

import React from 'react'
import { Head, useForm } from '@inertiajs/inertia-react'
import Authenticated from '@/Layouts/Authenticated'
import ValidationErrors from '@/Components/ValidationErrors'
import TodoStatus from '@/Components/Todos/TodoStatus'
import TodoForm from '@/Components/Todos/TodoForm'

export default function TodoList(props){

    const { data, setData, post, put, delete: destroy, errors, reset } = useForm({
        todo: '',
    })

    const submitTodo = async () =>{

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
                </div>
            </div>
        </Authenticated>
    );
}
