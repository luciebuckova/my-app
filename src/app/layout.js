"use client";
import React from "react";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { useState } from "react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const ModeContext = React.createContext();

export default function RootLayout({ children }) {
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "" : "dark"));
  };

  return (
    <ModeContext.Provider value={toggleMode}>
      <html lang="en" className={mode}>
        <body
          className={`${spaceGrotesk.variable} bg-neutral-50 text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50`}
        >
          {children}
        </body>
      </html>
    </ModeContext.Provider>
  );
}
