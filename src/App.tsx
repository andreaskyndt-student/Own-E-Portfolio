import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export default function App() {
    return (
      <div className="app">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />

          <Route path="*" element={
            <section className="not-found">
              <h1>Page Not Found</h1>
              <p>The page you are looking for does not exist.</p>
            </section>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    );
}