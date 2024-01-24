import { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function Card({ front, back }) {
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
          className="flex items-center justify-center rounded-xl border border-neutral-500 bg-neutral-50 p-8 dark:bg-neutral-950"
        >
          {front}
        </div>
        <div
          key="back"
          className="flex items-center justify-center rounded-xl border border-neutral-500 bg-neutral-100 p-8 dark:bg-neutral-900"
        >
          {back}
        </div>
      </ReactCardFlip>
    </div>
  );
}
