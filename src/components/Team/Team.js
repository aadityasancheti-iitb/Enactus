// src/components/Team.js
import React from "react";
import TeamMember from "../TeamMember/TeamMember";
import "./Team.css";

// Sample photos and intros
const teamMembers = [
  {
    photo: "https://via.placeholder.com/150",
    name: "President 1",
    title: "President",
    intro: "Brief  intro about President 1.",
  },
  {
    photo: "https://via.placeholder.com/150",
    name: "President 2",
    title: "President",
    intro: "Brief  intro about President 2.",
  },
  // Add 11 function heads
  {
    photo: "https://via.placeholder.com/150",
    name: "Function Head 1",
    title: "Function Head",
    intro: "Brief  intro about Function Head 1.",
  },
  {
    photo: "https://via.placeholder.com/150",
    name: "Function Head 2",
    title: "Function Head",
    intro: "Brief  intro about Function Head 2.",
  },
  {
    photo: "https://via.placeholder.com/150",
    name: "Function Head 3",
    title: "Function Head",
    intro: "Brief  intro about Function Head 3.",
  },
  {
    photo: "https://via.placeholder.com/150",
    name: "Function Head 4",
    title: "Function Head",
    intro: "Brief  intro about Function Head 4.",
  },
  {
    photo: "https://via.placeholder.com/150",
    name: "Function Head 5",
    title: "Function Head",
    intro: "Brief  intro about Function Head 5.",
  },
  {
    photo: "https://via.placeholder.com/150",
    name: "Function Head 6",
    title: "Function Head",
    intro: "Brief  intro about Function Head 6.",
  },
  {
    photo: "https://via.placeholder.com/150",
    name: "Function Head 7",
    title: "Function Head",
    intro: "Brief  intro about Function Head 7.",
  },
  {
    photo: "https://via.placeholder.com/150",
    name: "Function Head 8",
    title: "Function Head",
    intro: "Brief  intro about Function Head 8.",
  },
  {
    photo: "https://via.placeholder.com/150",
    name: "Function Head 9",
    title: "Function Head",
    intro: "Brief  intro about Function Head 9.",
  },
  {
    photo: "https://via.placeholder.com/150",
    name: "Function Head 10",
    title: "Function Head",
    intro: "Brief  intro about Function Head 10.",
  },
  {
    photo: "https://via.placeholder.com/150",
    name: "Function Head 11",
    title: "Function Head",
    intro: "Brief  intro about Function Head 11.",
  },
];

const Team = () => {
  return (
    <div className="container team-section">
      <h2 className="team-section-title text-center">Meet Our Team</h2>
      <div className="row justify-content-center">
        {teamMembers.slice(0, 2).map((member, index) => (
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
        {teamMembers.slice(2, 5).map((member, index) => (
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
        {teamMembers.slice(5, 7).map((member, index) => (
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
        {teamMembers.slice(7, 10).map((member, index) => (
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
        {teamMembers.slice(10, 12).map((member, index) => (
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
