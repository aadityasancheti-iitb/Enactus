// import React, { useState } from "react";
// import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
// import "./Home.css";

// const Home = () => {
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const projects = [
//     {
//       title: "Project 1",
//       description:
//         "Description of Project 1. This project focuses on solving X problem through Y solution.",
//       image: "https://via.placeholder.com/300x200",
//       background: "https://via.placeholder.com/1500x500", // background image
//     },
//     {
//       title: "Project 2",
//       description:
//         "Description of Project 2. This project focuses on solving X problem through Y solution.",
//       image: "https://via.placeholder.com/300x200",
//       background: "https://via.placeholder.com/1500x500", // background image
//     },
//     {
//       title: "Project 3",
//       description:
//         "Description of Project 3. This project focuses on solving X problem through Y solution.",
//       image: "https://via.placeholder.com/300x200",
//       background: "https://via.placeholder.com/1500x500", // background image
//     },
//   ];

//   return (
//     <div>
//       <Carousel className="enactus-carousel mt-10">
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://via.placeholder.com/1500x500"
//             alt="First slide"
//           />
//           <Carousel.Caption>
//             <h1 className="carousel-caption-text">
//               Empowering through Entrepreneurship
//             </h1>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://via.placeholder.com/1500x500"
//             alt="Second slide"
//           />
//           <Carousel.Caption>
//             <h1 className="carousel-caption-text">
//               Innovation for a Better Tomorrow
//             </h1>
//           </Carousel.Caption>
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             className="d-block w-100"
//             src="https://via.placeholder.com/1500x500"
//             alt="Third slide"
//           />
//           <Carousel.Caption>
//             <h1 className="carousel-caption-text">
//               Building Sustainable Futures
//             </h1>
//           </Carousel.Caption>
//         </Carousel.Item>
//       </Carousel>

//       <Container className="about-us-container mt-5">
//         <Row>
//           <Col md={6}>
//             <img
//               src="/mnt/data/image.png"
//               alt="About Us"
//               className="about-us-image"
//             />
//           </Col>
//           <Col md={6} className="about-us-text">
//             <h2>About Us</h2>
//             <p>
//               Enactus is an international non-profit organization that brings
//               together student, academic, and business leaders who are committed
//               to using the power of entrepreneurial action to improve the
//               quality of life and standard of living for people in need. Guided
//               by academic advisors and business experts, the student leaders of
//               Enactus create and implement community empowerment projects around
//               the globe. The experience not only transforms lives, it helps
//               students develop the kind of talent and perspective that are
//               essential to leadership in an ever-more complicated and
//               challenging world.
//             </p>
//           </Col>
//         </Row>
//       </Container>
//       <Container className="about-us-container mt-5">
//         <Row>
//           <Col md={6} className="about-us-text">
//             <h2>Our Mission</h2>
//             <p>
//               Enactus is an international non-profit organization that brings
//               together student, academic, and business leaders who are committed
//               to using the power of entrepreneurial action to improve the
//               quality of life and standard of living for people in need. Guided
//               by academic advisors and business experts, the student leaders of
//               Enactus create and implement community empowerment projects around
//               the globe. The experience not only transforms lives, it helps
//               students develop the kind of talent and perspective that are
//               essential to leadership in an ever-more complicated and
//               challenging world.
//             </p>
//           </Col>
//           <Col md={6}>
//             <img
//               src="/mnt/data/image.png"
//               alt="About Us"
//               className="about-us-image"
//             />
//           </Col>
//         </Row>
//       </Container>

//       <Container className="projects-container mt-5">
//         <h2 className="text-center mb-4">Our Projects</h2>
//         <Row>
//           {projects.map((project, index) => (
//             <Col md={4} className="mb-4" key={index}>
//               <Card
//                 className={`project-card ${
//                   hoveredCard === index ? "hovered" : ""
//                 }`}
//                 onMouseEnter={() => setHoveredCard(index)}
//                 onMouseLeave={() => setHoveredCard(null)}
//               >
//                 {hoveredCard === index ? (
//                   <div className="project-card-hovered">
//                     <div
//                       className="background-image"
//                       style={{ backgroundImage: `url(${project.background})` }}
//                     ></div>
//                     <Card.Body className="project-card-body">
//                       <Card.Text>{project.description}</Card.Text>
//                     </Card.Body>
//                   </div>
//                 ) : (
//                   <>
//                     <Card.Img variant="top" src={project.image} />
//                     <Card.Body>
//                       <Card.Title>{project.title}</Card.Title>
//                     </Card.Body>
//                   </>
//                 )}
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export { Home };

import React, { useState } from "react";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import "./Home.css";
import FadeInSection from "./FadeInSection"; // Import the FadeInSection component

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      title: "Project 1",
      description:
        "Description of Project 1. This project focuses on solving X problem through Y solution.",
      image: "https://via.placeholder.com/300x200",
      background: "https://via.placeholder.com/1500x500", // background image
    },
    {
      title: "Project 2",
      description:
        "Description of Project 2. This project focuses on solving X problem through Y solution.",
      image: "https://via.placeholder.com/300x200",
      background: "https://via.placeholder.com/1500x500", // background image
    },
    {
      title: "Project 3",
      description:
        "Description of Project 3. This project focuses on solving X problem through Y solution.",
      image: "https://via.placeholder.com/300x200",
      background: "https://via.placeholder.com/1500x500", // background image
    },
  ];

  return (
    <div>
      <Carousel className="enactus-carousel mt-10">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1500x500"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="carousel-caption-text">
              Empowering through Entrepreneurship
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1500x500"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className="carousel-caption-text">
              Innovation for a Better Tomorrow
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/1500x500"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className="carousel-caption-text">
              Building Sustainable Futures
            </h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Container className="about-us-container mt-5">
        <FadeInSection>
          <Row>
            <Col md={6}>
              <img
                src="/mnt/data/image.png"
                alt="About Us"
                className="about-us-image"
              />
            </Col>
            <Col md={6} className="about-us-text">
              <h2>About Us</h2>
              <p>
                Enactus is an international non-profit organization that brings
                together student, academic, and business leaders who are
                committed to using the power of entrepreneurial action to
                improve the quality of life and standard of living for people in
                need. Guided by academic advisors and business experts, the
                student leaders of Enactus create and implement community
                empowerment projects around the globe. The experience not only
                transforms lives, it helps students develop the kind of talent
                and perspective that are essential to leadership in an ever-more
                complicated and challenging world.
              </p>
            </Col>
          </Row>
        </FadeInSection>
      </Container>

      <Container className="about-us-container mt-5">
        <FadeInSection>
          <Row>
            <Col md={6} className="about-us-text">
              <h2>Our Mission</h2>
              <p>
                Enactus is an international non-profit organization that brings
                together student, academic, and business leaders who are
                committed to using the power of entrepreneurial action to
                improve the quality of life and standard of living for people in
                need. Guided by academic advisors and business experts, the
                student leaders of Enactus create and implement community
                empowerment projects around the globe. The experience not only
                transforms lives, it helps students develop the kind of talent
                and perspective that are essential to leadership in an ever-more
                complicated and challenging world.
              </p>
            </Col>
            <Col md={6}>
              <img
                src="/mnt/data/image.png"
                alt="About Us"
                className="about-us-image"
              />
            </Col>
          </Row>
        </FadeInSection>
      </Container>

      <Container className="projects-container mt-5">
        <h2 className="text-center mb-4">Our Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card
                className={`project-card ${
                  hoveredCard === index ? "hovered" : ""
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {hoveredCard === index ? (
                  <div className="project-card-hovered">
                    <div
                      className="background-image"
                      style={{ backgroundImage: `url(${project.background})` }}
                    ></div>
                    <Card.Body className="project-card-body">
                      <Card.Text>{project.description}</Card.Text>
                    </Card.Body>
                  </div>
                ) : (
                  <>
                    <Card.Img variant="top" src={project.image} />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                    </Card.Body>
                  </>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export { Home };
