import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Portfolio from "@/components/portfolio";

export default function Home() {
  return (
    <div>
      <Portfolio />
    </div>
  );
}
