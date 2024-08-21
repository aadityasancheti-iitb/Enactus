// // src/components/Team.js
// import React from "react";
// import TeamMember from "../TeamMember/TeamMember";
// import "./Team.css";

// // Sample photos and intros
// const teamMembers = [
//   {
//     photo: "https://via.placeholder.com/150",
//     name: "Riddhi Shah",
//     title: "President",
//     intro: "                ",
//   },
//   {
//     photo: "/chahat.jpeg",
//     name: "Chahat Tongiya",
//     title: "President",
//     intro: "",
//   },
//   // Add 11 function heads
//   {
//     photo: "https://via.placeholder.com/150",
//     name: "Arushi Bansal",
//     title: "R&D Head",
//     intro: "Brief  intro about Function Head 1.",
//   },
//   {
//     photo: "https://via.placeholder.com/150",
//     name: "Ayush Narwal",
//     title: "R&D Head",
//     intro: "Brief  intro about Function Head 2.",
//   },
//   {
//     photo: "/shivam.jpeg",
//     name: "Shivam Sonker",
//     title: "R&D Head",
//     intro: "Brief  intro about Function Head 3.",
//   },
//   {
//     photo: "/yash.jpeg",
//     name: "Yash Toshniwal",
//     title: "R&D Head",
//     intro: "Brief  intro about Function Head 4.",
//   },
//   {
//     photo: "/parshva.jpeg",
//     name: "Parshva Roliya",
//     title: "R&D Head",
//     intro: "Brief  intro about Function Head 5.",
//   },
//   {
//     photo: "/keshav.jpeg",
//     name: "Keshav",
//     title: "Business Head",
//     intro: "Brief  intro about Function Head 6.",
//   },
//   {
//     photo: "https://via.placeholder.com/150",
//     name: "Shubhang Shangvi",
//     title: "Business Head",
//     intro: "Brief  intro about Function Head 7.",
//   },
//   {
//     photo: "https://via.placeholder.com/150",
//     name: "Isha Laddha",
//     title: "Outreach & Initiative Head",
//     intro: "Brief  intro about Function Head 8.",
//   },
//   {
//     photo: "/ashmit.jpeg",
//     name: "Ashmit Kumar",
//     title: "Outreach & Initiative Head",
//     intro: "Brief  intro about Function Head 9.",
//   },
//   {
//     photo: "/shreya.jpeg",
//     name: "Shreya Biswas",
//     title: "Media Head",
//     intro: "Brief  intro about Function Head 10.",
//   },
//   {
//     photo: "/aditya.jpeg",
//     name: "Aditya Sancheti",
//     title: "Technical Head",
//     intro: "Brief  intro about Function Head 11.",
//   },
// ];

// const Team = () => {
//   return (
//     <div className="container team-section">
//       <h2 className="team-section-title text-center">Meet Our Team</h2>
//       <div className="row justify-content-center">
//         {teamMembers.slice(0, 2).map((member, index) => (
//           <TeamMember
//             key={index}
//             photo={member.photo}
//             name={member.name}
//             title={member.title}
//             intro={member.intro}
//           />
//         ))}
//       </div>
//       <div className="row justify-content-center">
//         {teamMembers.slice(2, 5).map((member, index) => (
//           <TeamMember
//             key={index}
//             photo={member.photo}
//             name={member.name}
//             title={member.title}
//             intro={member.intro}
//           />
//         ))}
//       </div>
//       <div className="row justify-content-center">
//         {teamMembers.slice(5, 7).map((member, index) => (
//           <TeamMember
//             key={index}
//             photo={member.photo}
//             name={member.name}
//             title={member.title}
//             intro={member.intro}
//           />
//         ))}
//       </div>
//       <div className="row justify-content-center">
//         {teamMembers.slice(7, 10).map((member, index) => (
//           <TeamMember
//             key={index}
//             photo={member.photo}
//             name={member.name}
//             title={member.title}
//             intro={member.intro}
//           />
//         ))}
//       </div>
//       <div className="row justify-content-center">
//         {teamMembers.slice(10, 13).map((member, index) => (
//           <TeamMember
//             key={index}
//             photo={member.photo}
//             name={member.name}
//             title={member.title}
//             intro={member.intro}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export { Team };

// src/components/Team.js
import React from "react";
import TeamMember from "../TeamMember/TeamMember";
import "./Team.css";

// Sample photos and intros
const teamMembers = [
  {
    photo: "/bakul.jpg",
    name: "Prof. Bakul Rao",
    title: "Faculty Advisor",
    intro: "",
  },
  {
    photo: "/riddhi.jpeg",
    name: "Riddhi Shah",
    title: "President",
    intro: "                ",
  },
  {
    photo: "/chahat.jpeg",
    name: "Chahat Tongiya",
    title: "President",
    intro: "",
  },
  // Add 11 function heads
  {
    photo: "/arushi.jpeg",
    name: "Arushi Bansal",
    title: "R&D Head",
    intro: "",
  },
  {
    photo: "/ayush.jpeg",
    name: "Ayush Narwal",
    title: "R&D Head",
    intro: "",
  },
  {
    photo: "/shivam.jpeg",
    name: "Shivam Sonker",
    title: "R&D Head",
    intro: "",
  },
  {
    photo: "/yash.jpeg",
    name: "Yash Toshniwal",
    title: "R&D Head",
    intro: "",
  },
  {
    photo: "/parshva.jpeg",
    name: "Parshva Roliya",
    title: "R&D Head",
    intro: "",
  },
  {
    photo: "/keshav.jpeg",
    name: "Keshav",
    title: "Business Head",
    intro: "",
  },
  {
    photo: "/shubhang.jpeg",
    name: "Shubhang Shangvi",
    title: "Business Head",
    intro: "",
  },
  {
    photo: "/shreya.jpeg",
    name: "Shreya Biswas",
    title: "Media Head",
    intro: "",
  },
  {
    photo: "/ashmit.jpeg",
    name: "Ashmit Kumar",
    title: "Outreach & Initiative Head",
    intro: "",
  },
  {
    photo: "/isha.jpeg",
    name: "Isha Laddha",
    title: "Outreach & Initiative Head",
    intro: "",
  },

  {
    photo: "/aditya2.jpeg",
    name: "Aditya Sancheti",
    title: "Technical Head",
    intro: "",
  },
];

const Team = () => {
  return (
    <div className="container team-section">
      <h2 className="team-section-title text-center">Meet Our Team</h2>
      <div className="row justify-content-center">
        {teamMembers.slice(0, 1).map((member, index) => (
          <TeamMember
            key={index}
            photo={member.photo}
            name={member.name}
            title={member.title}
            intro={member.intro}
          />
        ))}
      </div>
      <div className="row justify-content-center">
        {teamMembers.slice(1, 3).map((member, index) => (
          <TeamMember
            key={index}
            photo={member.photo}
            name={member.name}
            title={member.title}
            intro={member.intro}
          />
        ))}
      </div>
      <div className="row justify-content-center">
        {teamMembers.slice(3, 6).map((member, index) => (
          <TeamMember
            key={index}
            photo={member.photo}
            name={member.name}
            title={member.title}
            intro={member.intro}
          />
        ))}
      </div>
      <div className="row justify-content-center">
        {teamMembers.slice(6, 8).map((member, index) => (
          <TeamMember
            key={index}
            photo={member.photo}
            name={member.name}
            title={member.title}
            intro={member.intro}
          />
        ))}
      </div>
      <div className="row justify-content-center">
        {teamMembers.slice(8, 11).map((member, index) => (
          <TeamMember
            key={index}
            photo={member.photo}
            name={member.name}
            title={member.title}
            intro={member.intro}
          />
        ))}
      </div>
      <div className="row justify-content-center">
        {teamMembers.slice(11, 13).map((member, index) => (
          <TeamMember
            key={index}
            photo={member.photo}
            name={member.name}
            title={member.title}
            intro={member.intro}
          />
        ))}
      </div>
      <div className="row justify-content-center">
        {teamMembers.slice(13, 14).map((member, index) => (
          <TeamMember
            key={index}
            photo={member.photo}
            name={member.name}
            title={member.title}
            intro={member.intro}
          />
        ))}
      </div>
    </div>
  );
};

export { Team };
