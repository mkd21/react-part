import {useState} from "react";

// let x = 4;

function state(){
    let x = 4;
    const [count , updateCount] = useState(4);

    function updateX(){
        console.log(x);
        return x += 1;
    }

    return (

        <div>
            <span>Value of x is: {x}</span>
            <br />
            <span>Value of Count is : {count} </span>

            <br />

            <button onClick= { () => x += 1 }>Click to update X</button>
            <br />
            <button onClick= { () =>{updateCount(count + 1)} }>Click to update Count</button>
        </div>

    );
}

export default state;