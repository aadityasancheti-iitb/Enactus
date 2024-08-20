// import React, { useState } from "react";
// import "./Contact.css"; // Import the updated CSS file

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({
//     name: "",
//     email: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" }); // Clear the error when the user starts typing
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate the required fields
//     let formIsValid = true;
//     let newErrors = {};

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//       formIsValid = false;
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//       formIsValid = false;
//     }

//     setErrors(newErrors);

//     if (formIsValid) {
//       // Proceed with form submission if the form is valid
//       const response = await fetch("/.netlify/functions/submitForm", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert("Form submitted successfully!");
//         // Optionally reset the form fields
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         alert("Error submitting form");
//       }
//     } else {
//       alert("Please fill out the required fields.");
//     }
//   };

//   return (
//     <div className="contact-container">
//       <form onSubmit={handleSubmit} className="contact-form">
//         <h2>Contact Us</h2>

//         <div className="form-group">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             required
//             className={`form-control ${errors.name ? "input-error" : ""}`}
//           />
//           {errors.name && <span className="error-text">{errors.name}</span>}
//         </div>

//         <div className="form-group">
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             required
//             className={`form-control ${errors.email ? "input-error" : ""}`}
//           />
//           {errors.email && <span className="error-text">{errors.email}</span>}
//         </div>

//         <div className="form-group">
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             className="form-control"
//             rows="5" // Added this to give the textarea a reasonable height
//           />
//         </div>

//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export { Contact };
import React, { useState } from "react";
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
      // Proceed with form submission if the form is valid
      const response = await fetch("/.netlify/functions/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        // Optionally reset the form fields
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        alert("Error submitting form");
      }
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
            <p>
              <strong>Phone:</strong> +91
            </p>
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
