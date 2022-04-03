

import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import Authenticated from '@/Layouts/Authenticated'


export default function TodoList(props){
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
                </div>
            </div>
        </Authenticated>
    );
}
