let rootElement = document.querySelector("#root");

let element1 = React.createElement("h1" , {className : "cls" , id : "headerId"} , "I am header 1 created using React...");

let root = ReactDOM.createRoot(rootElement);

root.render(element1);