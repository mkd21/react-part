import "./cat_img.css";
import Desc from "./Description";

function catImages(props)        // props object hai. toh usko destructure krke v likh skte hai. yaad rakhna
{   
    console.log(props.children);
    const customStyle = {"fontSize" : "24px", color : "orange", textShadow : "2px 3px 8px black" };

    return (

        <div className="cat_image">
            <img src = {props.ImageLink} />

            {/* <h2 style={ {fontSize : "24px", color : "orange"} }> {AboutPictures} </h2> */}

            <h2 style={ customStyle }> {props.AboutPictures} </h2>

            {/* <Desc desc = "description" /> */}
                        {/* OR */}
            <Desc desc = {props.Description} />  // this will access the value from it's parent component that is APP.js 

            {props.children}             // this is a way to access the jsx that is passed from parent comp. to child comp.

        </div>

    );
}

export default catImages;