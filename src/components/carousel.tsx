import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { useTranslation } from 'react-i18next';

const Carousel = () => {
    const { t } = useTranslation();
    return (
        <>  
            <div>
                <p className='xl:text-5xl xxxs:text-3xl text-white font-semibold mb-8 ml-3 text-right'>{t('projects.title')}</p>
            </div>
            <div className="w-full h-[50rem]">
                <AwesomeSlider>
                    <div>
                        <img src='img/projects/csv2.png' alt="Background" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <img src='img/projects/first.png' alt="Image 2" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <img src='img/projects/second.png' alt="Image 3" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <img src='img/projects/third.png' alt="Image 4" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <img src='path/to/your/image4.jpg' alt="Image 4" className="w-full h-full object-cover" />
                    </div>
                </AwesomeSlider>
            </div>
        </>
  );
};

export default Carousel;
