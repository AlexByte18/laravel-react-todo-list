import React from "react";

import Input from "@/Components/Input";

export default function TodoForm({
    formData,
    setData,
    addTodo,
}){
    const handleSubmit = (e) => {
        e.preventDefault()
        if( FormData.todo.length < 2 ){
            alert( 'Completa la tarea  antes de publicarla')
            return
        }

        addTodo()
    }

    return(
        <form onSubmit = { handleSubmit} autoComplete='off'>
            <Input
                value={ FormData.todo}
                className="shadow appearance-none border rounded w-fill py-2 py-3 mr-4 test-gray-darker"
                isFocused={ true }
                handleChange = { e => setData("todo", e.target.value) }
            />
        </form>
    )
}
