import React, { useState } from "react";
import "../styles/ContactForm.scss";

function ContactForm() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  //name - Imię powinno być jednym wyrazem
  //email - Email powinien być poprawny
  //message - Wiadomość musi mieć conajmniej 120 znaków
  function validate() {
    const isNameValid = /^[A-Za-z]+$/.test(formInfo.name);
    if (!isNameValid) {
      alert("Imię powinno być jednym wyrazem.");
      return false;
    }
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      formInfo.email
    );
    if (!isEmailValid) {
      alert("Email powinien być poprawny.");
      return false;
    }
    const isMessageValid = formInfo.message.length >= 120;
    if (!isMessageValid) {
      alert("Wiadomość musi mieć conajmniej 120 znaków.");
      return false;
    }
    console.log(formInfo.name, formInfo.email, formInfo.message);
    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInfo),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          // Handle the response data here
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      // if end
    }
  }
  return (
    <>
      <div className="contact-form" id="contact-form">
        <div className="contact-info">
          <h1>Skontaktuj się z nami</h1>
          <div className="decoration"></div>
          <form action="/submitForm" method="post" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Imię:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={(event) => {
                  setFormInfo((prevInfo) => ({
                    ...prevInfo,
                    name: event.target.value,
                  }));
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(event) => {
                  setFormInfo((prevInfo) => ({
                    ...prevInfo,
                    email: event.target.value,
                  }));
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Wiadomość:</label>
              <textarea
                id="message"
                name="message"
                onChange={(event) => {
                  setFormInfo((prevInfo) => ({
                    ...prevInfo,
                    message: event.target.value,
                  }));
                }}
              ></textarea>
            </div>

            <button type="submit">Wyślij</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
