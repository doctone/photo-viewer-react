import React, { useState } from "react";

export function Counter(props){
    const [clickCount, setCount] = useState(0);

    const clicker = () => {
        setCount(clickCount+1);
    }
    return (
        <div>
            <h2> I have been clicked {clickCount} times!</h2>
            <button onClick={clicker}>Click me!</button>

        </div>
    )
}