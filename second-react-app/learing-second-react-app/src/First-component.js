import "./cat_img.css";
import Desc from "./Description";

function catImages()
{
    return (
        <div className="cat_image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYDmYNyRzoZheVVmDPUWynWSVrjmftv8wfg&s"/>
            <h2>Cute Cat</h2>
            <Desc />
        </div>
    );
}

export default catImages;