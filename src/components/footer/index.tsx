import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 justify-between py-20 px-8 lg:px-24 xl:px-80 md:flex-row bg-blue-950">
      <div className="flex flex-col gap-2">
        <h4
          className="text-3xl font-bold text-white tracking-wider"
          style={{ fontFamily: "Poppins" }}
        >
          About the Site
        </h4>
        <p
          className="text-white tracking-wider md:w-1/2 text-justify"
          style={{ fontFamily: "Poppins" }}
        >
          This site is presented to you with 💖 by Rishabh Awatani. It is made
          using NextJS and Tailwind CSS and hosted using Github Pages. © 2023
          Rishabh Awatani
        </p>
      </div>
      <div className="flex flex-col gap-6">
        <h4
          className="text-xl text-white tracking-wider"
          style={{ fontFamily: "Poppins" }}
        >
          Reach out to me:
        </h4>
        <div className="grid grid-cols-4 gap-8">
          <span>
            <a href="https://github.com/rishi003">
              <FontAwesomeIcon
                className="text-white duration-300"
                icon={faGithub}
                size="2x"
              />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/rishabh-awatani">
              <FontAwesomeIcon
                className="text-white duration-300"
                icon={faLinkedin}
                size="2x"
              />
            </a>
          </span>
          <span>
            <a href="https://medium.com/@rishabh.awatani">
              <FontAwesomeIcon
                className="text-white duration-300"
                icon={faMediumM}
                size="2x"
              />
            </a>
          </span>
          <span>
            <a href="mailto:rishabh.awatani@gmail.com">
              <FontAwesomeIcon
                className="text-white duration-300"
                icon={faEnvelope}
                size="2x"
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
