import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function Card({ bg, title, linkWeb, linkRepo }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
      >
        <div
          key="front"
          className={`flex items-center justify-center rounded-xl border border-neutral-500 ${bg} bg-cover bg-center p-8`}
        >
          <div className="h-48"></div>
        </div>
        <div
          key="back"
          className="flex items-center justify-center rounded-xl border border-neutral-500 bg-neutral-100 p-8 dark:bg-neutral-900"
        >
          <div className="flex h-48 flex-col justify-between">
            <h4>{title}</h4>
            <div className="flex justify-center gap-4">
              <a
                href={linkWeb}
                className="uppercase text-teal-400 hover:text-purple-600"
              >
                🌎 Web
              </a>
              <a
                href={linkRepo}
                className="uppercase text-teal-400 hover:text-purple-600"
              >
                📁 Repozitář
              </a>
            </div>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
}
