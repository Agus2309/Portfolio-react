import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/contact";
import { Element } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';
import { useEffect, useState } from "react";
import { FaJava } from "react-icons/fa";
import { MdJavascript, MdPhp } from "react-icons/md";

const welcomes = ["Welcome!", "Bienvenido!", "Bem-vindo!", "Benvenuto!", "Willkommen!"];
const icons = [<FaJava/>, <MdJavascript/>, <MdPhp/> ]
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
            <section className="mt-24 mb-24">
              <div className="ml-8 text-white flex">
                <div>
                  <h1 className="text-4xl lg:text-8xl md:text-8xl sm:text-8xl xxs:text-8xl font-semibold">{welcomes[currentLanguageIndex]}</h1>
                  <p className="text-2xl">I'm {name},</p>
                  <p className="text-lg">a Fullstack Web Developer</p>
                </div>
                <div className="ml-2 text-9xl">
                  {icons[currentIconIndex]}
                </div>
              </div>
            </section>
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
