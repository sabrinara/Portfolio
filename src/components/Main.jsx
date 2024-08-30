import { useEffect, useRef, useState } from "react";
import { PacmanLoader } from "react-spinners";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Intro from "./Intro";
import Footer from "./Footer";
import Experience from "./Experience";
import Skills from "./Skills";
import Project from "./Project";
import Project2 from "./Project2";
import Project1 from "./Project1";
import Education from "./Education";
import Contact from "./Contact";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const relX = ev.clientX - rect.left;
      const relY = ev.clientY - rect.top;
      setMousePosition({ x: relX, y: relY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <PacmanLoader color="#469bea" size={30} />
      </div>
    );
  }

  return (
    <div ref={containerRef}>
      <NavBar />
      <Banner />
      <Intro />
      <Skills />
      {/* <Experience /> */}
      <Project1 />
      <Project2 />
      <Project />
      <Education />
      <Contact />
      <Footer />
      <div
        className="mouse-gradient"
        style={{
          top: mousePosition.y,
          left: mousePosition.x,
        }}
      />
      <style >{`
        .mouse-gradient {
          position: absolute;
          width: 200px; /* Adjust the size of the gradient */
          height: 200px; /* Adjust the size of the gradient */
          background-image: radial-gradient(
            circle farthest-side at center,
            #1250aa 0%,
            transparent 100%
          );
          opacity: 0.4;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 9999;
        }
      `}</style>
    </div>
  );
};

export default Main;
