function Todolist(props){
    
    // console.log(props.todo.data);
    return (

        <li> {props.todoItems} </li>

    );
}

function Todo(props)
{
    let todos = props.todoItems.map( (val) => <Todolist key = {val.id} todoItems = {val.data} /> );

    // props.todoItems.map( (val) =>{
    //     console.log(val.id);
    //     console.log(val.data);
    // })

    // console.log(todos);

    return (

        <ul>
            {todos}
        </ul>
    );
}


export default Todo;