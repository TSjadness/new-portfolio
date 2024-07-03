import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectList from "@/components/projects/page";
import AboutPage from "@/components/about-me/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jadson Santos - Portfólio",
  description: "Portfólio de Jadson Santos, desenvolvedor front-end jr.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <AboutPage />
          <ProjectList />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
