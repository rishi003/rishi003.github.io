import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rishabh Awatani - Portfolio | Website",
  description: "This is my portfolio website and blog page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="autumn">
      <body className={inter.className}>
        <nav>
          <div className="navbar bg-base-100">
            <div className="flex-1">
              <a className="btn btn-ghost normal-case text-xl">
                Rishabh Awatani
              </a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/"}>Portfolio</Link>
                </li>
                <li>
                  <Link href={"/"}>Blog</Link>
                </li>
                <li>
                  <Link href={"/"}>About</Link>
                </li>
                <li>
                  <Link href={"/"}>
                    <FontAwesomeIcon icon={faGithub} width={30} />
                  </Link>
                  <Link href={"/"}>
                    <FontAwesomeIcon icon={faLinkedin} width={30} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
