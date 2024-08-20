// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "./Footer.css";
// import { FaInstagram, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <Container>
//         <Row>
//           <Col md={4} className="footer-left">
//             <img
//               src="/logo_white.png"
//               alt="Enactus Logo"
//               className="footer-logo"
//             />
//             <p>
//               <span>
//                 <span className="footer-highlight">En</span>
//                 <span className="footer-highlight2">trepreneurial</span>
//               </span>
//               <br />
//               Having the perspective to see an opportunity and the talent to
//               create value from that opportunity.
//             </p>
//             <p>
//               <span className="footer-highlight">Act</span>
//               <span className="footer-highlight2">ion</span>
//               <br />
//               The willingness to do something and the commitment to see it
//               through even when the outcome is not guaranteed.
//             </p>
//             <p>
//               <span className="footer-highlight">Us</span>
//               <br />A group of people who see themselves connected in some
//               important way; individuals that are part of a greater whole.
//             </p>
//           </Col>
//           <Col md={4} className="footer-center">
//             <h4>Enactus IIT Bombay</h4>
//           </Col>
//           <Col md={4} className="footer-right">
//             <h4>Connect with us</h4>
//             <p>
//               Join the conversation and connect with us on our social media
//               handles.
//             </p>
//             <div className="footer-icons">
//               <a
//                 href="https://www.instagram.com/enactusiitb/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaInstagram size={32} />
//               </a>
//               <a
//                 href="https://www.linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedin size={32} />
//               </a>
//             </div>
//             <p className="footer-email">
//               Contact us:{" "}
//               <a href="mailto:enactusiitb@gmail.com">enactusiitb@gmail.com</a>
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export { Footer };

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={4} className="footer-left">
            <img
              src="/logo_white.png"
              alt="Enactus Logo"
              className="footer-logo"
            />
          </Col>
          <Col md={4} className="footer-center">
            <p>
              <span>
                <span className="footer-highlight">En</span>
                <span className="footer-highlight2">trepreneurial</span>
              </span>
              <br />
              Having the perspective to see an opportunity and the talent to
              create value from that opportunity.
            </p>
            <p>
              <span className="footer-highlight">Act</span>
              <span className="footer-highlight2">ion</span>
              <br />
              The willingness to do something and the commitment to see it
              through even when the outcome is not guaranteed.
            </p>
            <p>
              <span className="footer-highlight">Us</span>
              <br />A group of people who see themselves connected in some
              important way; individuals that are part of a greater whole.
            </p>
          </Col>
          <Col md={4} className="footer-right">
            <h4>Connect with us</h4>
            <p>
              Join the conversation and connect with us on our social media
              handles.
            </p>
            <div className="footer-icons">
              <a
                href="https://www.instagram.com/enactusiitb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={32} />
              </a>
              <a
                href="https://www.linkedin.com/company/enactus-iit-bombay/mycompany/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={32} />
              </a>
            </div>
            <p className="footer-email">
              Contact us:{" "}
              <a href="mailto:enactusiitb@gmail.com">enactusiitb@gmail.com</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { Footer };
