import Footer from "./components/Footer"
import Navbar from "./components/Navbar"


function App() {

  return (
    <>
    <div className="min-h-screen">
      <Navbar />
      <section className="mt-20">
        <div className="pl-5">
          <h5>Hi, im </h5>
          <h1 className="text-6xl">this is an example</h1>
        </div>
      </section>
      <section className="mt-6 mb-3">
        <button>Click me</button>
      </section>
      <Footer />
    </div>
    </>
  )
}

export default App
