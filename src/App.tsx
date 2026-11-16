import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Events from "./pages/Events";

export default function App() {
    return (
      <div className="app">
        <Navbar />

        <main className="main-content">
          <Home />
          <AboutMe />
          <Projects />
          <Events />
          <Contact />
        </main>

        <Footer />
      </div>
    );
}
