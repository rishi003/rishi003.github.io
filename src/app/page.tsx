import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col justify-start lg:flex-row min-w-[85%] ">
        <Image
          alt="Rishabh Awatani"
          width={400}
          height={400}
          src="https://i.ibb.co/j49nGFd/jake-blucker-t-Mz-Cr-Bk-M99-Y-unsplash.jpg"
          className="max-w-md rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Dimension One</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
            maxime ducimus reiciendis a dignissimos aperiam recusandae animi
            explicabo odit harum obcaecati, aut voluptates odio vero eveniet?
            Voluptates repellendus quos ipsum.
          </p>
          <button className="btn btn-primary">
            Portfolio
            <FontAwesomeIcon icon={faArrowRight} width={18} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
