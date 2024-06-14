
import './App.css';
import CatImages from "./First-component";

function App() {
  return (
    <section>

      < CatImages Description = "Desc1"  AboutPictures = "Cute Animal1"   ImageLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZLc4iwPSqgF8UnVeOVo12kzMoZSTOpRkEw&s" />

      < CatImages Description = "Desc2"  AboutPictures = "Cute Animal2"ImageLink = "https://img.freepik.com/free-photo/puppy-that-is-walking-snow_1340-37228.jpg" />

      < CatImages Description = "Desc3"  AboutPictures = "Cute Animal3" ImageLink = "https://i.pinimg.com/736x/7c/54/08/7c54088453f340db4bded92d22b67ef8.jpg" />

      < CatImages Description = "Desc4"  AboutPictures = "Cute Animal4" ImageLink = "https://t3.ftcdn.net/jpg/07/17/33/40/360_F_717334058_zZu41aMmrR0CvBxI3WLbWRjrqFyLAdW1.jpg" />

      < CatImages Description = "Desc5"  AboutPictures = "Cute Animal5" ImageLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYDmYNyRzoZheVVmDPUWynWSVrjmftv8wfg&s" />
      

      <CatImages Description = "Desc6"  AboutPictures = "Cute Animal5" ImageLink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZYDmYNyRzoZheVVmDPUWynWSVrjmftv8wfg&s">
        <p>This is a para inside component</p>
      </CatImages>

    </section>
  );
}

export default App;

