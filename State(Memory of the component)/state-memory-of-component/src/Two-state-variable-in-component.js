import { useState } from "react";

function funk(){
    
    const [x , updateX] = useState(10);
    const [y , updateY] = useState(10);

    return (
    <>
        <h1>Here, both the variable are State Variables. Not the Normal Variable</h1>
        <span>value of x is: {x}</span>
        <br />
        <span>value of y is: {y}</span>
        <br />

        <button onClick={ () => updateX(x + 1) }>
            click to update the value of X
        </button>
        <br />

        <button onClick={ () => { updateY(y + 1) } }>
            click to update the value of Y
        </button>
    </>

    );
}

export default funk;