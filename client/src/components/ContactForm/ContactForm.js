import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="container" style={{ marginBottom: "50px" }}>
      <form className="contact-form">
        <h1 style={{ textAlign: "center" }} className="wher">
          Get In Touch
        </h1>
        {/* field */}
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">person</i>
            <input className="validate" type="text" name="name" id="name" />
            <label htmlFor="name">Name</label>
          </div>
        </div>
        {/* field */}
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">email</i>
            <input
              className="validate"
              type="email"
              name="email"
              id="contactEmail"
            />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        {/* field */}
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">message</i>
            <textarea
              className="materialize-textarea"
              data-length="10"
              id="textarea2"
            ></textarea>
            <label htmlFor="textarea2">Message</label>
          </div>
        </div>

        <button
          className="send-button btn blue-grey darken-2 white-text waves-effect waves-light"
          style={{ width: "45%", marginLeft: "25%" }}
          type="submit"
          name="action"
        >
          Submit
          <i style={{ fontSize: "15px" }} className="material-icons right">
            send
          </i>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
