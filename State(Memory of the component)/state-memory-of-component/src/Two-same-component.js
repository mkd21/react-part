import { useState } from "react";

function dualComponent(){
    
    const [x , updateX] = useState(10);
    const [y , updateY] = useState(10);

    return (
    <>

        <span>value of x is: {x}</span>
        <br />
        <span>value of y is: {y}</span>
        <br />

        <button onClick={ () => updateX(x + 1)} >
            click to update the value of X
        </button>
        <br />

        <button onClick={ () => { updateY(y + 1) } }>
            click to update the value of Y
        </button>

        <br />
        <br />
    </>

    );
}

export default dualComponent;