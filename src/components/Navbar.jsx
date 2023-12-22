
import "./Navbar.css"
import React, { useEffect, useState } from "react";
import { sectionIds } from "./sectionIds";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [activeLInk, setActiveLink] = useState("hero");
  const [isSrolled, setScrolled] = useState(false);
  const [navshow,setnavshow]=useState(true)


  const scrollToSection = (sectionIds) => {
    let ul = document.querySelector("ul");
    ul.classList.toggle("activenav")
    const elem = document.getElementById(sectionIds);
    if (elem) {
      const marginTop = 0;
      const scrollY =
        elem.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollY, behavior: "smooth" });
    }
  };

  const deterMineActiveSection = () => {
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom>=120) {
          setActiveLink(sectionIds[i]);
          break;
        }
      }
    }
  };

  useEffect(() => {
    // ul nav show 
    const handlescrol = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
       setScrolled(false)
      }
      deterMineActiveSection()
    };

    window.addEventListener("scroll",handlescrol);
    return ()=>{
        window.removeEventListener("scroll",handlescrol)
    }
  },[]);

const ulNavShow=()=>{
 let ul = document.querySelector("ul");
 ul.classList.toggle("activenav")
}
  return (
    <nav>
       <div className="logo">Abul <span>hasan.</span></div>
      <div className="nav-menu">
      <i class="ri-menu-2-line" onClick={()=>ulNavShow()}></i>
      </div>
          <ul>

            {sectionIds.map((item, i) => {
              return (
                <Link key={i} to="/" className="">
                  {" "}
                  <li
                    className={activeLInk === item ? "active" : "alway"}
                    key={i}
                    onClick={() => scrollToSection(item)}
                  >
                    {item}
                  </li>

                </Link>
              );
            })}
          </ul>
          <button  className="nav-btn">
contact me
          </button>
    </nav>
  );
};

export default Navbar;
