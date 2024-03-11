
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import { Element } from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';

const name = 'Jorge';

function App() {
  return (
    <>
      <div className="min-h-screen min-w-full">
        <Element name="home" id="home">
          <div
            className="bg-cover bg-center pb-20 "
            style={{
              height: '100vh',
              backgroundImage: `url('/background.jpg')`,
            }}
          >
            <Navbar/>
            <section className="mt-24 mb-24">
              <div className="ml-8 text-white">
                <h1 className="text-4xl lg:text-8xl md:text-8xl sm:text-8xl xxs:text-8xl">Welcome!</h1>
                <p className="text-2xl">I'm {name}</p>
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
