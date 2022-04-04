import React from "react";


export default function TodoItem({
    todo,
    className,
    onRestore,
    onComplete,
    onRemove
}) {

    return (
        <div className="flex mb-4 items-center">
            <p className={ className }>
                { todo.text }
            </p>

            { todo.completed === true &&
                <button onClick={ onRestore }
                className="flex-no-shrick p-2 ml-4 mr-2 brder-2 rounded hover:text-white text-grey-200 border-grey"
                >
                    Deshacer
                </button>
            }

            { !todo.completed === true &&
                <button onClick={ onComplete }
                className="flex-no-shrick p-2 ml-4 mr-2 brder-2 rounded hover:text-white text-grey-200 border-grey"
                >
                    Completar
                </button>
            }

            <button onClick={ onRemove }
                className="flex-no-shrick p-2 ml-4 mr-2 brder-2 rounded hover:text-white text-grey-200 border-grey"
                >
                Eliminar
            </button>
        </div>
    )

}
