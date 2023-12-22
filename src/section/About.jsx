import React from "react";
import "./SECTIONCSS/About.css";
const About = () => {
  const viewAllproject=()=>{
    window.open("https://www.mozilla.org/", "mozillaTab");
  }
  return (
    <section id="about" className="about">
        <div class="about-title">
        <h1>
          About <span>Me</span>
        </h1>
      </div>
     <div className="about-body">
     <div class="about-img">
        <img
          src="https://images.rawpixel.com/image_png_500/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvMzY2LW1ja2luc2V5LTIxYTc3MzYtZm9uLWwtam9iNjU1LnBuZw.png"
          alt=""
        />
      </div>
      <div class="about-text">
        <h2>
          I am Web Designer
          <span>
            <br />& Web Developer
          </span>
        </h2>
        <div class="exp-agea">
          <p class="exp">
            Experience <span>1 Years</span>
          </p>
          <p class="exp">
            Specialty <span>Project Desing, Developer</span>
          </p>
          <p class="exp">
            Address: <span> Mymensingh, Bangladesh</span>
          </p>
          <p class="exp">
            Email: <span> abulhasan7bd@gmail.com</span>
          </p>
          <p class="exp">
            Phone: <span> 01851697580</span>
          </p>
          <p class="exp">
            Frelancer: <span> Available</span>
          </p>
          <a href="#" class="btn about-button" onClick={()=>viewAllproject()}>
          View All Projects
        </a>
        </div>
      
      </div>
     </div>
    </section>
  );
};

export default About;
