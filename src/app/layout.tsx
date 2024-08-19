import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProjectList from "@/components/projects/page";
import AboutPage from "@/components/about-me/page";
import TecnologyPage from "@/components/tecnology/page";
import Statistics from "@/components/Statistic/page";
import Jobspage from "@/components/works/page";
import PersonalPage from "@/components/personal-me/page";
import ContactPage from "./contact";



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
      <body className={inter.className} >
        <Providers>
          {children}
          <AboutPage />
          <Statistics />
          <PersonalPage />
          <ProjectList />
          <Jobspage />
          <ContactPage />
          <TecnologyPage />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
