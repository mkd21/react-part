import {useState} from "react";
import Todolist from "./TodoLists";

function addTodo(){

    const [text , updateText] = useState("");
    const [arr , upDateArr] = useState([]);
    
    function arrayUpdate(){
        upDateArr([...arr , text]);
    }
    
    return (

        <>
           <input type="text" placeholder = "Enter the tasks.." onChange={ (e)=> {updateText(e.target.value)}}/>
           <button onClick={arrayUpdate}>click to add todo</button>

           <Todolist list = {arr} />

        </>
    );
}


export default addTodo;