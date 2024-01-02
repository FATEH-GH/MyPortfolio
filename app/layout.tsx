import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import NavBar from "@/components/NavBar";

import { Provider } from "@/components/Provider";

export const metadata: Metadata = {
  title: "Fateh's Protfolio",
  description: "Generated by Fateh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-[#121212] bg-slate-200 transition duration-300">
        <Provider>
          <NavBar />
          {children}
          <SpeedInsights />
        </Provider>
      </body>
    </html>
  );
}
