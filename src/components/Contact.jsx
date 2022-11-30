import React, { useState } from "react";
import Modal from "./Modal";
import { send } from "emailjs-com";

import "../styles/Contact.css";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });
  const [show, setShow] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(toSend));

    if (Object.keys(validate(toSend)).length !== 0) return;
    
    send("service_55jrpfm", "template_godv4w7", toSend, "GJ9P6oOGLVejrXCje")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setShow(true);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setToSend({ ...toSend, [name]: value });
  };

  const handleOnClick = () => {
    setShow(false);
    setToSend({
      from_name: "",
      message: "",
      reply_to: "",
    });
  };

  const validate = (values) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.from_name) {
      errors.from_name = "Please provide a name";
    }
    if (!values.message) {
      errors.message = "Please provide a message";
    }
    if (!values.reply_to) {
      errors.reply_to = "The email you entered is incorrect";
    } else if (!regexEmail.test(values.reply_to)) {
      errors.reply_to = "Please provide a valid email address.";
    }
    return errors;
  };

  return (
    <div className="contact">
      <div className="container">
        <div>
          <p className="navigation">Contact</p>
          <p className="description">
            Submit the form below or shoot me an email -
            kanaszewskadominika@gmail.com
          </p>
        </div>
        <form className="main">
          <input
            className="from_name"
            type="text"
            name="from_name"
            placeholder="Your name"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <p className="error">{formErrors.from_name}</p>
          <textarea
            className="message"
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
          />
          <p className="error">{formErrors.message}</p>
          <input
            className="reply_to"
            type="email"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <p className="error">{formErrors.reply_to}</p>
          <button className="contact" type="submit" onClick={handleOnSubmit}>
            Let's Collaborate
          </button>
        </form>
      </div>
      {show ? (
        <Modal show={show} onClose={handleOnClick}>
          <p>Your message has been successfully sent.</p>
        </Modal>
      ) : null}
    </div>
  );
};

export default Contact;
