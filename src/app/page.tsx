"use client";
import Image from "next/image";
import {
  faArrowRight,
  faKeyboard,
  faChartColumn,
  faPersonChalkboard,
  faWarehouse,
  faHeadphones,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "@/components/typography/heading";
import Timeline from "@/components/timeline";
import Projects from "@/components/portfolio";
import { useRouter } from "next/navigation";

export default function Home() {
  const areasOfInterest = [
    {
      icon: faKeyboard,
      title: "Software Development",
      description:
        "Working with NodeJS and Python microservices and deploying them using Docker",
    },
    {
      icon: faWarehouse,
      title: "Data Processing",
      description:
        "Building data processing pipelines with data governance and security best practices on GCP",
    },
    {
      icon: faPersonChalkboard,
      title: "Teaching & Presenting",
      description:
        "I love creating impactful and engaging presentations for students and audiences using Canva ❤",
    },
    {
      icon: faHeadphones,
      title: "Collaboration",
      description:
        "I enjoy working with people from diverse backgrounds and cultures",
    },
    {
      icon: faLayerGroup,
      title: "Parallel Computing",
      description: "Spark and Hadoop are the best thing ever happened to data",
    },
    {
      icon: faChartColumn,
      title: "Data Analytics",
      description:
        "Analyzing and visualizing data using Tableau, PowerBi, Matplotlib and MS Excel",
    },
  ];
  return (
    <div className="mt-4 md:mt-20 w-full grid gap-8">
      <div className="grid gap-8 content-between px-8 lg:px-24 xl:px-80 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="grid gap-4">
            <p className="text-2xl">Hey,</p>
            <p className="font-bold text-4xl" style={{ fontFamily: "Poppins" }}>
              I&apos;m Rishabh
            </p>
            <p className="text-xl text-gray-400">
              I am a seasoned software developer with a passion for data driven
              products.
            </p>
          </div>
          <a
            href="#projects"
            className="px-12 py-4 mt-4 bg-black rounded-xl text-white w-min text-xl flex justify-between items-center mt-8 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 hover:drop-shadow-xl duration-300 cursor-pointer"
            style={{ fontFamily: "Poppins" }}
          >
            PROJECTS
            <div className="ml-4">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </a>
        </div>
        <div className="flex justify-end z-[-1]">
          <Image
            className="rounded-2xl drop-shadow-md w-full md:w-2/3"
            src="https://i.ibb.co/x1Fmb3M/profile.jpg"
            alt="profile"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div
        className="flex flex-col gap-2 bg-gray-100 py-20 px-8 lg:px-24 xl:px-80"
        id="about"
      >
        <Heading level={2}>SOMETHING PERSONAL</Heading>
        <div
          className="text-justify ps-8 py-12 border-l-4 text-gray-600 border-teal-500"
          style={{ fontFamily: "Poppins" }}
        >
          <p>
            Some interesting facts about me. I love to read fiction, psychology
            and philosophy. The last fiction I read was &quot;The Hobbit&quote;
            by J.R.R. Tolkien. I also take pleasure in cooking and specialize in
            Indian curries &#40;Kadhi&#41; and beans &#40;Rajma&#41;. I also
            love to sing and make conversations with people about all sorts of
            things. Other than that, I cannot live without learning something
            new every day and constantly improve my understanding in the field
            of data analytics and engineering.
          </p>
          <br />
          <p>
            Professionally, I have been working as a Software Consultant and
            Developer for the past 4 years. I am currently working as a Social
            Impact Analyst at ZNotes where I am utilizing my software
            developemnt knowledge and data analytics skills to collect product
            usage data which is later analyzed to craft amazing user journeys.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 py-20 px-8 lg:px-24 xl:px-80 text-center">
        <Heading level={2}>Areas of Interest</Heading>
        <p className="text-gray-400" style={{ fontFamily: "Poppins" }}>
          Things I love working with and I am good at
        </p>
        <div
          className="mt-8 grid md:gap-16 md:grid-cols-3"
          style={{ fontFamily: "Poppins" }}
        >
          {areasOfInterest.map((area) => (
            <div
              className="flex flex-col gap-8 items-center p-12 rounded-xl"
              key={area.title}
            >
              <FontAwesomeIcon icon={area.icon} size="2x" />
              <h4 className="text-xl text-bold tracking-wider">{area.title}</h4>
              <p className="text-gray-400 text-center">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2 py-20 px-8 bg-gray-100 lg:px-24 xl:px-80">
        <div className="flex justify-center flex-col gap-2 text-center">
          <Heading>Experience</Heading>
          <p className="text-gray-400" style={{ fontFamily: "Poppins" }}>
            People and things I have worked with
          </p>
        </div>
        <Timeline />
      </div>
      <div
        className="flex flex-col gap-2 py-20 px-8 lg:px-24 xl:px-80"
        id="projects"
      >
        <div className="flex justify-center flex-col gap-2">
          <Heading>Projects</Heading>
          <p className="text-gray-400" style={{ fontFamily: "Poppins" }}>
            My side projects and some cool things I have worked on
          </p>
        </div>
        <Projects />
      </div>
    </div>
  );
}
