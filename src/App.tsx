import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import About from "./components/About";



function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <section className="mt-4 mb-15" id="home">
          <div className="mx-auto border rounded-xl max-w-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            <h1 className="p-5 text-center text-white font-black text-9xl"> Welcome! </h1>
          </div>
        </section>
        <section className="mt-10" id="about">
          <About />
        </section>
        <section id="projects" className="pt-3 mt-6">
          <Projects />
        </section>
        <section className="mt-10 mb-8">
          <Technologies />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
