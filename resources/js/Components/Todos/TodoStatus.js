import { divide } from "lodash";
import React from "react";

export default function TodoStatus({
    message,
    color: string = "green",

}) {
    const className = `w-full mb-2 px-4  py-2 text-${color}-600 bg-${color} text-center rounded`

    return (
        <div className="flex justify-center mt-2">
            <div className={ className }>
                { messsage }
            </div>
        </div>
    )
}
