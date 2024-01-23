import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import App from "./App";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Lucie Bučková · frontend kodérka",
  description:
    "Jsem junior frontend kodérka. Zamilovala jsem si zejména tvorbu webů kombinací React a Tailwind CSS. Neustále na sobě pracuji a snažím se nejen v tomto směru posouvat vpřed.",
  /* openGraph: {
    title: "Lucie Bučková · frontend kodérka",
    description:
      "Jsem junior frontend kodérka. Zamilovala jsem si zejména tvorbu webů kombinací React a Tailwind CSS. Neustále na sobě pracuji a snažím se nejen v tomto směru posouvat vpřed.",
    url: "",
    siteName: "Lucie Bučková · frontend kodérka",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
      {
        url: "",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "cs_CZ",
    type: "website",
  }, */
};

export default function RootLayout({ children }) {
  return <App font={spaceGrotesk.className}>{children}</App>;
}
