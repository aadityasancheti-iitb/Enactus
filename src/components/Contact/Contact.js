import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import "./Contact.css"; // Import the updated CSS file

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear the error when the user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the required fields
    let formIsValid = true;
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
      formIsValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      // Send email with EmailJS
      emailjs
        .send(
          "service_ph4wbzf",
          "template_r9994tr",
          formData,
          "U4qa4YDJD2YkZhT92"
        )
        .then(
          (result) => {
            alert("Form submitted successfully!");
            console.log(result.text);
            // Optionally reset the form fields
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            alert("Error submitting form");
            console.log(error.text);
          }
        );
    } else {
      alert("Please fill out the required fields.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            We value your input and would love to hear from you. Whether you’re
            seeking information about our Enactus initiatives, exploring
            partnership opportunities, or just want to share your thoughts,
            we’re here and ready to engage.
          </p>
          <div className="contact-details">
            {/* <p>
              <strong>Phone:</strong> +91
            </p> */}
            <p>
              <strong>Email:</strong> enactusiitb@gmail.com
            </p>
          </div>
          <div className="social-media">
            <p>
              <strong>Social Media</strong>
            </p>
            <a href="https://www.instagram.com/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name *"
                required
                className={`form-control ${
                  errors.firstName ? "input-error" : ""
                }`}
              />
              {errors.firstName && (
                <span className="error-text">{errors.firstName}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="form-control"
              />
            </div>
          </div>

          <div className="form-group full-width">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email *"
              required
              className={`form-control ${errors.email ? "input-error" : ""}`}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group full-width">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="form-control"
              rows="5"
            />
          </div>

          <button type="submit" className="submit-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export { Contact };
