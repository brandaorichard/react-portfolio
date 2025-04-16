import { Footer } from "./components/Footer";
import { Navbar } from "./components/NavBar";
import { About } from "./pages/About";
import { Hero } from "./pages/Hero";
import { Portfolio } from "./pages/Portfolio";
import { Stack } from "./pages/Stack";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Portfolio />
      <Footer />
    </>
  )
}

export default App;