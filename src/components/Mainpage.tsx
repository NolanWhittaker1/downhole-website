import Navbar from "./Navbar";
import "./Mainpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Mainpage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <section data-aos="fade-left" style={{ backgroundColor: "blue" }}>
        Timothy Notland
      </section>
      <section
        data-aos="fade-left"
        style={{ backgroundColor: "black", color: "white" }}
      >
        Massimo Notland
      </section>
    </>
  );
}

export default Mainpage;
