import Header from "@/components/header";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Ready from "@/components/ready";
import Advance from "@/components/advance";
import { ChevronDown } from "lucide-react";
export default function Home() {
  return (
    <div className="min-h-screen  overflow-x-hidden relative mx-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <Header />
      <Hero />
      <div className="md:hidden gap-2.5 bg-accent w-full h-full flex justify-center items-center  flex-col">
        Scroll
        <ChevronDown className="w-4 h-4" />
      </div>
      <div className="w-screen h-screen md:hidden bg-accent bg-[url('/images/mobile-wave-image.png')] bg-cover bg-center bg-no-repeat items-start self-stretch flex flex-col" />
      <div className="bg-accent">
        <Feature />
        <div className="relative pt-10 md:pt-20 overflow-hidden">
          <Advance />
        </div>
      </div>
      <Ready />
      <FAQ />
      <Footer />

    </div>
  );
}
