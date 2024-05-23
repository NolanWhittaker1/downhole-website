import Navbar from "./Navbar";
import "./Mainpage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import tim from "./timothy.png";

function Mainpage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <section style={{ backgroundColor: "white" }}>
        <span data-aos="fade-right" data-aos-duration="1500" className="shadow">
          <h1>Buy our batteries :3</h1>
          <p>
            I love downhole battery. I love downhole Battery I love downhole
            battery. I love downhole Battery I love downhole battery. I love
            downhole Battery I love downhole battery. I love downhole Battery
          </p>
        </span>
        <img
          src="/timothy.png"
          alt="Logo"
          data-aos="fade-left"
          data-aos-duration="1500"
          className="shadow"
        />
      </section>
    </>
  );
}

export default Mainpage;
