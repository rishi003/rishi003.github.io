"use client";
import "/node_modules/reveal.js/dist/reveal.css";
import "/node_modules/reveal.js/dist/theme/black.css";
import { useEffect } from "react";

export default function Presentation({ params }: { params: { slug: string } }) {
  useEffect(() => {
    const clientSideInitialization = async () => {
      const Reveal = (await import("reveal.js")).default;

      const deck = new Reveal();
      deck.initialize();
    };
    clientSideInitialization();
  });

  return (
    <div className="w-full h-screen">
      <div className="reveal">
        <div className="slides">
          <section>Slide 1</section>
          <section>Slide 2</section>
        </div>
      </div>
    </div>
  );
}
