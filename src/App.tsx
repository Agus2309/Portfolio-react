import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";


const name = "Jorge";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <section className="text-white text-center flex flex-col justify-center items-center" id="home">
          <div>
            <h5 className="text-xl mr-24">Hi, I'm</h5>
            <h1 className="text-6xl">{name}</h1>
          </div>
          <div>
            <p className="mt-2">Fullstack Web Developer</p>
          </div>
        </section>
        <section className="mt-6">
          <Projects />
        </section>
        <section className="mt-6 mb-6">
          <Technologies />
        </section>
      </div>
      <Footer />
    </>
  )
}

export default App
