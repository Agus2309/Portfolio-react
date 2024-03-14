import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/contact";
import { Element, Link } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';
import { useEffect, useState } from "react";
import { FaArrowDown, FaJava } from "react-icons/fa";

const welcomes = ["Welcome!"];
const icons = [<FaJava/>] //<MdJavascript/>, <MdPhp/> ]
const name = 'Jorge';

function App() {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const languageInterval = setInterval(() => {
      setCurrentLanguageIndex(prevIndex => (prevIndex + 1) % welcomes.length);
    }, 3000);

    const iconInterval = setInterval(() => {
      setCurrentIconIndex(prevIndex => (prevIndex + 1) % icons.length);
    }, 5000);

    return () => {
      clearInterval(languageInterval);
      clearInterval(iconInterval);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen min-w-full">
        <Element name="home" id="home">
            <div
              className="bg-cover bg-center pb-20"
              style={{
                height: '100vh',
                backgroundImage: `url('/background2.jpg')`,
              }}
            >
              <Navbar/>
              <ScrollAnimation animateIn="fadeInDown" duration={1}>
                <section className="mt-24 mb-24">
                  <div className="ml-8 text-white xl:flex xl:justify-around">
                    <div className="xxxs:flex">
                      <div>
                        <h1 className="text-4xl xl:text-8xl lg:text-8xl md:text-8xl sm:text-8xl xxs:text-8xl font-semibold xxxs:mb-2">{welcomes[currentLanguageIndex]}</h1>
                        <p className="font-semibold text-2xl xl:text-5xl">I'm {name},</p>
                        <p className="font-semibold xl:text-4xl text-xl">a Fullstack Web Developer</p>
                      </div>
                      <div className="ml-2 text-9xl">
                        {icons[currentIconIndex]}
                      </div>
                    </div>
                    <div className="text-center xxxs:mt-12 xxxs:">
                        <p className="xl:text-5xl text-3xl font-bold">This is my Portfolio</p>
                        <div className="max-w-96 mx-auto flex justify-center items-center container bg-black p-3 rounded-xl xl:mt-5 xxxs:mt-5 xxxs:max-w-60 xxxs:text-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                            <Link to="about" smooth={true} duration={900} className="text-white hover:text-gray-300 text-2xl font-semibold">See my work</Link>
                            <FaArrowDown className="mt-1 ml-5"/>
                        </div>
                    </div>
                  </div>
                </section>
              </ScrollAnimation>
            </div>
          </Element>
        <div className="container mx-auto">
          <Element name="about">
            <section className="pt-5 mt-10" id="about">
              <ScrollAnimation animateIn="fadeInLeft" duration={1}>
                <About />
              </ScrollAnimation>
            </section>
          </Element>
          <Element name="projects">
            <section id="projects" className="pt-6 mt-6">
              <ScrollAnimation animateIn="fadeInRight" duration={1}>
                <Projects />
              </ScrollAnimation>
            </section>
          </Element>
          <Element name="technologies">
            <section id="technologies" className="pt-5 mt-10 mb-8">
              <ScrollAnimation animateIn="fadeInLeft" duration={1}>
                <Technologies />
              </ScrollAnimation>
            </section>
          </Element>
          <Element name="contact">
            <section id="contact" className="pt-5 mt-10 mb-8">
              <ScrollAnimation animateIn="fadeInUp" duration={1}>
                <Contact />
              </ScrollAnimation>
            </section>
          </Element>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
