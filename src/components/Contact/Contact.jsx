import "./contact.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Roll from 'react-reveal/Roll';

function Contact() {
  const input = {
    from_name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [message, setMessage] = useState(false);
  const [data, setData] = useState(input);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value, // Sintaxis ES6 para actualizar la key correspondiente
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs
      .sendForm(
        "service_l4od97y",
        "template_r10wt7y",
        form.current,
        "WdtZ692dLESZTLMpg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setData(input);
  };

  return (
    <div className="contact" id="contact">
      <Roll>
      <div className="left">
        <img src="assets/pagina.jpg" alt="contact" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={form} onChange={(e) => handleChange(e)} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Name"
            value={data.from_name}
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={data.email}
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone number"
            value={data.phone}
          />
          <textarea
            placeholder="Message"
            name="message"
            value={data.message}
            required
          ></textarea>
          <button type="submmit">Send</button>
          {message && <span>Thanks, I''ll reply ASAP :)</span>}
        </form>
      </div>
      </Roll>
    </div>
  );
}

export default Contact;
