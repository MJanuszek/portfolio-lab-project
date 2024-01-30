import React, { useState } from "react";
import "../styles/ContactForm.scss";

function ContactForm() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSend, setIsSend] = useState(false);

  //name - Imię powinno być jednym wyrazem
  //email - Email powinien być poprawny
  //message - Wiadomość musi mieć conajmniej 120 znaków
  function validate() {
    const isNameValid = /^[A-Za-z]+$/.test(formInfo.name);
    if (!isNameValid) {
      // alert("Imię powinno być jednym wyrazem.");
      setValidationErrors({ ...validationErrors, name: "Imię niewłaściwe" });
      return false;
    }
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      formInfo.email
    );
    if (!isEmailValid) {
      // alert("Email powinien być poprawny.");
      setValidationErrors({ ...validationErrors, email: "Niewłaściwy email" });
      return false;
    }
    const isMessageValid = formInfo.message.length >= 2;
    if (!isMessageValid) {
      // alert("Wiadomość musi mieć conajmniej 120 znaków.");
      setValidationErrors({
        ...validationErrors,
        message: "Wiadomość zbyt krótka",
      });
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
          console.log("here:::", "Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      // to display info about form submit:::
      setIsSend(true);
      // info will disappear after 6s::::
      setTimeout(() => {
        setIsSend(false);
      }, 6000);
    }
  }
  return (
    <>
      <div className="contact-form" id="contact-form">
        <div className="contact-info">
          <h1 className="form-title">Skontaktuj się z nami</h1>
          <div className="decoration"></div>
          <div className="infoAboutSend">
            {isSend ? (
              <p style={{ color: "green", fontSize: "28px" }}>
                Wiadomość została wysłana
              </p>
            ) : null}
          </div>
          <form
            action="/submitForm"
            method="post"
            onSubmit={handleSubmit}
            className="form-contant-info"
          >
            <div className="name-email">
              <div className="form-group">
                <label htmlFor="name">Wpisz swoje imię:</label>
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
                    if (validationErrors.name) {
                      setValidationErrors({ ...validationErrors, name: "" });
                    }
                  }}
                />
                {validationErrors.name && (
                  <div className="error-message">{validationErrors.name}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Wpisz swój email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  onChange={(event) => {
                    setFormInfo((prevInfo) => ({
                      ...prevInfo,
                      email: event.target.value,
                    }));
                  }}
                />
                {validationErrors.email && (
                  <div className="error-message">{validationErrors.email}</div>
                )}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Napisz swoją wiadomość:</label>
              <br />
              <textarea
                className="form-message"
                id="message"
                required
                name="message"
                onChange={(event) => {
                  setFormInfo((prevInfo) => ({
                    ...prevInfo,
                    message: event.target.value,
                  }));
                }}
                placeholder="napisz swoją wiadomość..."
              ></textarea>
              {validationErrors.message && (
                <div className="error-message">{validationErrors.message}</div>
              )}
            </div>

            <button type="submit" className="submit-btn">
              Wyślij
            </button>
          </form>
        </div>
        <div className="footer">
          <p>Copyright by Coders Lab</p>
          <div className="fb-icon"></div>
          <div className="ig-icon"></div>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
