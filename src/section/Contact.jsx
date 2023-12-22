import React, { useEffect, useState } from "react";
import "./SECTIONCSS/Contact.css";
import imghand from "../assets/hand-shake.svg"
const data = {
  name: "",
  email: "",
  message: "",
};
const Contact = () => {
  const [value, setValue] = useState(data);
  const [errors, setErrors] = useState({});
  const [issubmit, sitisubmit] = useState(false);
  const [name,setName]=useState(null)
  const hgandleValueChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const formDataHandeling = (e) => {
    e.preventDefault();
    setErrors(vlaidate(value));
    sitisubmit(true);
    setValue(data);
    setName(value.name)

  };
  const vlaidate = (values) => {
    const errors = {};
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.name) {
      errors.name = "Username is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "this is not valid email format";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }

    return errors;
  };
 
  return (
    <section className="contact" id="contact">
       <div class="about-title">
        <h1>
          Contact <span>Me</span>
        </h1>
      </div>
      <div className="contact-form">
        <form onSubmit={formDataHandeling}>
          {Object.keys(errors).length === 0 && issubmit ? (
            <h1 style={{color:"green",padding:"10px"}}><img className="svgHand" src={imghand} alt="" />Thank you Mr: {name} your message succesfully send</h1>
          ) : null}
          <input
            value={value.name}
            type="text"
            placeholder="Your Name"
            onChange={hgandleValueChange}
            name="name" required
          />
          {errors ? <p style={{color:"red"}}>{errors.name}</p> : null}
          <input
            value={value.email}
            type="email"
            onChange={hgandleValueChange}
            name="email"
            required
            placeholder="Email address"
          />
          {errors ? <p style={{color:"red",padding:"5px"}}>{errors.email}</p> : null}

          <textarea
            value={value.message}
            required
            name="message"
            placeholder="Write Message Here.."
            cols="30"
            rows="10"
            onChange={hgandleValueChange}
          ></textarea>
          {errors ? <p style={{color:"red"}}>{errors.message}</p> : null}
          <button className="send-btn" type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
