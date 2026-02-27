import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import Hours from "@/components/Hours";
import Contact from "@/components/Contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black`}
    >
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-primary dark:bg-black sm:items-start">
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Hours />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
