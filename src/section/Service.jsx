import React from "react";
import "./SECTIONCSS/Service.css"
const Service = () => {
  return <section id="service" className="service">
         <div class="about-title">
        <h1>
          My <span>Service</span>
        </h1>
      </div>
      <div class="services-content">
        <div class="box">
        <img className="service-comp-img" src="https://img.freepik.com/free-vector/man-sysadmine-computer-programmer-working-computer_575670-70.jpg?size=626&ext=jpg&ga=GA1.1.528698405.1699612148&semt=sph" alt="" />
          <h3>Web Desing</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dicta
            incidunt
          </p>
          <a href="#">DownLoad now <i class="ri-arrow-right-line"></i></a>
        </div>
        <div class="box">
        <img className="service-comp-img" src="https://img.freepik.com/free-vector/designer-concept-illustration_114360-686.jpg?size=626&ext=jpg&ga=GA1.1.528698405.1699612148&semt=ais" alt="" />
          <h3>Ui/Ux Desing</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dicta
            incidunt
          </p>
          <a href="#">DownLoad now <i class="ri-arrow-right-line"></i></a>
        </div>
        <div class="box">
          <img className="service-comp-img" src="https://img.freepik.com/free-vector/hand-drawn-man-working-from-home_23-2148818123.jpg?w=740&t=st=1703234016~exp=1703234616~hmac=6cb7ba2b6bd42ae719ce2cc8802417ba1e21014bc6475004af2b43f62e9fc4ec" alt="" />
          <h3>Web Developer</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo dicta
            incidunt
          </p>
          <a href="#">DownLoad now <i class="ri-arrow-right-line"></i></a>
        </div>
      </div>
  </section>;
};

export default Service;
