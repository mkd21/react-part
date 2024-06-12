

/*
        <div>
            <section>
                <p> </p>
                <img src = "" alt = "">
            </section>
        </div>
*/

// let parentContainer = React.createElement("div" , {className : "parentContainerCls" , id : "ParentId"} , 
//     React.createElement("section" , {} ,[
//         React.createElement("p" , {key : 1} , "I am paragraph  tag"),

//         React.createElement("img" , {key : 2 , src : "https://www.patterns.dev/img/reactjs/react-logo@3x.svg"})

//     ]));

// let normalElement = document.querySelector("#root");
// let elementToRoot = ReactDOM.createRoot(normalElement);

// elementToRoot.render(parentContainer);


// section ke andar p and img tag hai toh uske liye ek array pass kr skte hai section ke children wala Option me 

// array jab v pass krnge to uska ek unique prop me key jaroor hona chahiye 



                // NOW DIFFERENT STRUCTURE 


/*
        <div>
            <section>
                <p> </p>
                <img src = "" alt = "">
            </section>

            <section>
                <p> </p>
                <img src = "" alt = "">
            </section>

        </div>
*/

let parentContainer = React.createElement("div" , {className : "parentContainerCls" , id : "ParentId"} , 
    [ // ye bracket aur 

        React.createElement("section" , {key : 1} ,[   // ye bracket section 1 ka hai

            React.createElement("p" , {key : 1} , "I am paragraph  tag"),                                           // style ke liye key value pair me likhna hoga
            React.createElement("img" , {key : 2 , src : "https://www.patterns.dev/img/reactjs/react-logo@3x.svg" , style : {width: 200 , height : 200}})

        ]) , // ye bracket bhi section 1 ka hai

        React.createElement("section" , {key : 2} ,[   // ye bracket section 2 ka hai

            React.createElement("p" , {key : 1} , "I am paragraph  tag"),
            React.createElement("img" , {key : 2 , src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWwWcHpya-SzuqZL8A0EDfnQPpo0Z3BQCCw&s"})

        ])   // ye bracket bhi section 2 ka hai

    ]  // ye bracket parent div wala array ke liye hai. Jo ki 2 section ke hold kr rha hai
);

let normalElement = document.querySelector("#root");
let elementToRoot = ReactDOM.createRoot(normalElement);

elementToRoot.render(parentContainer);