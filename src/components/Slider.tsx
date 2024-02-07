
import Slider from 'react-slick';
import { FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'; // Import your desired icons

interface CustomSettings {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  speed: number;
  cssEase: string;
  arrows: boolean;
}

const IconSlider = () => {
  const settings: CustomSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Change this value to control the speed of sliding
    speed: 1000, // Change this value to control the speed of sliding
    cssEase: 'linear', // Make sure it moves smoothly
    arrows: false
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
            <FaReact className="icon" key="react" />
        </div>
        <div>
            <FaNodeJs className="icon" key="node" />
        </div>
        <div>
            <FaHtml5 className="icon" key="html" />
        </div>
      </Slider>
    </div>
  );
};

export default IconSlider;
