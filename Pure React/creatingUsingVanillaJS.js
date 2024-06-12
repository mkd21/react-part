const div = document.createElement("div");
div.className = "parentDiv";
div.id = "parentDiv_id";

const section = document.createElement("section");
const para = document.createElement("p");
const imgTag = document.createElement("img");

imgTag.src = "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png";


// document.body.appendChild(div);

// div.appendChild(section);
// section.appendChild(para);
// para.textContent = "I am paragraph";
// section.appendChild(imgTag);


// above code for 

/*
        <div>
            <section>
                <p> </p>
                <img src = "" alt = "">
            </section>
        </div>
 */


// for this the js code is

/*
        <div>
            <section></section> 
            <p></p> 
            <img src = "" alt = "">
        </div>
 */


div.append(section , para , imgTag);
para.textContent = "I am paragraph";
document.body.appendChild(div);