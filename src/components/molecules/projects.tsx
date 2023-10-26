"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Stocks Data Engineering and ML Pipeline",
      description:
        "Stock data engineering pipeline using Dagster. This project involves collecting, cleaning, transforming and modeling stock time-series data using pandas, matplotlib, sklearn and hosting the generated ML model on GCP.",
      source: "https://github.com/rishi003/data_engineer_answers",
      image: "https://i.ibb.co/RNby178/project1.png",
      live: "",
    },
    {
      title: "Self-Hosted Data Engineering Stack",
      description:
        "Utilized Docker to orchestrate a self-hosted data engineering stack with Kafka, Spark, Airflow and Minio. Processed data in batch and realtime for Toronto Rentals. This project uncovered several implementational details of Spark and Airflow.",
      source: "https://github.com/rishi003/realtime-de-project",
      image: "https://i.ibb.co/BLQS8Cz/project2.png",
      live: "",
    },
  ];
  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className="mt-4 grid gap-8 grid-cols-1 md:grid-cols-2"
    >
      {projects.map((project) => (
        <div className="flex flex-col gap-2 bg-gray-100 rounded-xl drop-shadow-2xl">
          <div
            style={{ backgroundImage: `url(${project.image})` }}
            className="w-full h-64 bg-cover rounded-t-xl"
          ></div>
          <div className="p-8 flex flex-col justify-between">
            <h4 className="text-2xl font-bold tracking-wider mb-4">
              {project.title}
            </h4>
            <p>{project.description}</p>
            <div className="flex items-center gap-4">
              {project.source && <Button type="source" link={project.source} />}
              {project.live && <Button type="live" link={project.live} />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Button(props: { type: "source" | "live"; link: string }) {
  return (
    <a
      target="_blank"
      href={props.link}
      className="px-4 py-2 mt-4 bg-black rounded-xl text-white w-min text-lg flex justify-between items-center mt-8 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-500 hover:drop-shadow-xl duration-300 cursor-pointer"
    >
      {props.type === "source" ? "Source" : "Live"}
      <div className="ml-4">
        <FontAwesomeIcon
          icon={
            props.type === "source" ? faGithubSquare : faExternalLinkSquareAlt
          }
          size="2x"
        />
      </div>
    </a>
  );
}
