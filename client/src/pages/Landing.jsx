import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const bootLines = [
  "Establishing secure shell connection...",
  "Accessing Tweek core memory...",
  "Decrypting placement data streams...",
  "Injecting shared experience protocol...",
  "Welcome, recruit. Syncing with neural grid...",
];

const Landing = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
  const bootSound = new Audio("/sounds/terminal-boot.mp3");
  bootSound.volume = 0.2;
  bootSound.play();
}, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < bootLines.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            navigate("/about"); // Navigate to About after boot
          }, 2000);
          return prev;
        }
      });
    }, 1400);

    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorBlink);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-black text-[#39ff14] font-mono p-6 flex flex-col justify-center items-center text-left">
      <div className="w-full max-w-2xl text-xl sm:text-2xl">
        {bootLines.slice(0, currentLine + 1).map((line, idx) => (
          <div key={idx} className="mb-3">
            <span>&gt; {line}</span>
            {idx === currentLine && showCursor && <span className="ml-1 animate-pulse">█</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
