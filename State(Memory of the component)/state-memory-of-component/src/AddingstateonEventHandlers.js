import {useState} from "react";

function displayOnBody(){

    const [text , updateText] = useState("");

    function updateVal(e){
        // console.log(e.target);
        updateText(e.target.value);
    }
    return (

        <>

            {/* <input type="text" onChange={updateVal} /> */}

            <input type="text" onChange={ (e) => {updateText(e.target.value)} } />
            <br />

            <span>{text}</span>
        </>

    );
}

export default displayOnBody;