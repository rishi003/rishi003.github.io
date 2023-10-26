"use client";

import { faChartBar } from "@fortawesome/free-regular-svg-icons";
import { faCode, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Timeline() {
  const experiences = [
    {
      title: "Social Impact Analyst",
      company: "ZNotes",
      date: "Oct 2023 - Present",
      logo: (
        <Image
          src="https://i.ibb.co/dJFh96T/znotes.png"
          alt="znotes"
          width={40}
          height={40}
        />
      ),
      icon: <FontAwesomeIcon icon={faChartBar} />,
      responsibilities:
        "Working with the growth and tech team to integrate user analytics into the platform to understand user behavior and craft better user journeys.",
      skills: [
        "NodeJS",
        "Segment",
        "Mixpanel",
        "MongoDB",
        "ReactJS",
        "Reporting",
        "Data Analysis",
      ],
    },
    {
      title: "Software Engineer",
      company: "Nuevezo LLC",
      date: "Nov 2020 - Aug 2023",
      logo: (
        <Image
          src="https://i.ibb.co/FHkb8nH/nuevezo.jpg"
          alt="nuevezo"
          width={40}
          height={40}
        />
      ),
      icon: <FontAwesomeIcon icon={faCode} />,
      responsibilities:
        "Developed, deployed, and maintained microservices and web applications. In this role, I worked on bootstrapping the backend and front-end of the 1-Platform smart office software.",
      skills: [
        "NodeJS",
        "Python",
        "ReactJS",
        "SQL",
        "Docker",
        "Kubernetes",
        "Azure",
        "Git",
        "RabbitMQ",
      ],
    },
    {
      title: "Software Pre-Sales Consultant",
      company: "Elitser Technologies Pvt. Ltd.",
      date: "Nov 2019 - Oct 2020",
      logo: (
        <Image
          src="https://i.ibb.co/v12L6n8/elitser.jpg"
          alt="nuevezo"
          width={40}
          height={40}
        />
      ),
      icon: <FontAwesomeIcon icon={faPhone} />,
      responsibilities:
        "Collaborating across cross-functional teams to understand customer requirements and translate them into deliverable technical solutions.",
      skills: [
        "Java",
        "JavaScript",
        "Amazon Alexa",
        "REST",
        "SOAP",
        "Microsoft Graph",
      ],
    },
  ];
  return (
    <div
      className="mt-4 md:mt-20 w-full grid gap-8"
      style={{ fontFamily: "Poppins" }}
    >
      <VerticalTimeline lineColor="#15b7a8">
        {experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.title}
            className="vertical-timeline-element--work"
            contentArrowStyle={{ visibility: "hidden" }}
            date={experience.date}
            iconStyle={{
              background: "#15b7a8",
              color: "#fff",
            }}
            icon={experience.icon}
          >
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-xl md:text-2xl">
                {experience.title}
              </h4>
              <div className="flex flex-row gap-4 items-center">
                <span>{experience.logo}</span>
                <h5 className="font-bold tracking-wider">
                  {experience.company}
                </h5>
              </div>
              <div>{experience.responsibilities}</div>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span
                    className="rounded-full bg-teal-500 py-2 px-4 text-sm text-white tracking-wider bg-gradient-to-r from-teal-500 to-blue-500"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
