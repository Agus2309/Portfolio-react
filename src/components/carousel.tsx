
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Carousel = () => {
  return (
    <div className="w-full h-[50rem]"> {/* Ajusta la altura según sea necesario */}
      <AwesomeSlider>
        <div>
          <img src='img/projects/csv2.png' alt="Background" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src='img/projects/first.png' alt="Image 2" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src='path/to/your/image3.jpg' alt="Image 3" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src='path/to/your/image4.jpg' alt="Image 4" className="w-full h-full object-cover" />
        </div>
      </AwesomeSlider>
    </div>
  );
};

export default Carousel;
