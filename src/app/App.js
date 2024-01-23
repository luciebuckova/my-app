"use client";
import React from "react";
import { useState } from "react";

export const ModeContext = React.createContext();

export default function App({ children, font }) {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "" : "dark"));
  };

  return (
    <ModeContext.Provider value={toggleMode}>
      <html lang="en" className={mode}>
        <body
          className={`${font} bg-neutral-50 bg-[url('/ssscribble.svg')] bg-cover bg-center bg-no-repeat text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50`}
        >
          {children}
        </body>
      </html>
    </ModeContext.Provider>
  );
}
