import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-slate-300 py-5 px-5">
      <div>
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <h2 className="text-xl font-bold mb-2">About Me</h2>
            <p className="text-gray-600">
              Software engineer with a passion for data and lifestyle. I design
              scalable data intensive applications with a focus on business
              utility. Other than that, I like taking long walks, singing in the
              shower, exercising, and cooking.
            </p>
          </div>
          <div className="w-full lg:w-1/4 mb-4 lg:mb-0">
            <h2 className="text-xl font-bold mb-2">Contact</h2>
            <p className="text-gray-600">Toronto, Ontario, Canada</p>
            <p className="text-gray-600">rishabh.awatani@gmail.com</p>
            <p className="text-gray-600">+1 (437) 261-8336</p>
          </div>
          <div className="w-full lg:w-1/4">
            <h2 className="text-xl font-bold mb-2">Follow Me</h2>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-800 pe-5">
                <FontAwesomeIcon icon={faGithub} size="2x" className="inline" />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800 pe-5">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="inline"
                />
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800 pe-5">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="inline"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
