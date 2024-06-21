// import TodoItems from "./Todo-items";
import Componentlist from "./Rendering-component-list";


function App() {

  let Todos = [   {id : 1 , data : "Task1"} , 
                  {id : 2 , data : "Task2"} , 
                  {id : 3 , data : "Task3"}
              ];

  return (
    <>
      {/* <TodoItems /> */}

      <Componentlist todoItems = {Todos} />

    </>
  )
}

export default App