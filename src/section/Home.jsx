import React from "react";
import "./SECTIONCSS/Home.css";

const Home = () => {
  return (
    <section id="home">
      <div class="main-content">
       <div className="my-information">
       <h4>Hi, There!</h4>
        <h1>
          I'm <span>Abul Hasan</span>
        </h1>
        <p>
        I'm a dedicated MERN stack developer. My expertise lies in building efficient solutions with MongoDB, Express.js, React.js, and Node.js. 
        </p>
        <div class="social">
          <a href="#">
            <i class="ri-facebook-fill"></i>
          </a>
          <a href="#">
            <i class="ri-instagram-line"></i>
          </a>
          <a href="#">
            <i class="ri-twitter-fill"></i>
          </a>
          <a href="#">
            <i class="ri-youtube-fill"></i>
          </a>
        </div>
        <div class="main-btn">
          <a href="#" class="btn">
            Hire me
          </a>
          <a href="#" class="btn btn2">
            Dwonload
          </a>
        </div>
        
       </div>
       <div className="my-image">
            <img className="homeimage" src="https://img.freepik.com/free-photo/portrait-smiling-handsome-man-eyeglasses_171337-4853.jpg?size=626&ext=jpg&ga=GA1.1.528698405.1699612148&semt=sph" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
