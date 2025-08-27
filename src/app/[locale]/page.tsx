import Hero from "@/components/hero";
import Feature from "@/components/feature";
import FAQ from "@/components/faq";
import Ready from "@/components/ready";
import Advance from "@/components/advance";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="relative z-10">
        <Hero />
      </div>
      <div className="bg-accent relative w-full md:h-[1200px] overflow-hidden -mt-1 flex flex-col justify-between">
        <iframe
          src="https://my.spline.design/dotwaves-31mfNuH5WRrPGRGZn6joJgy2/"
          className="absolute inset-0 w-full h-full object-cover z-0 scale-120"
        ></iframe>
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-b from-accent to-transparent z-0 md:h-[1200px]" />
        <div className="relative z-10 flex flex-col h-full justify-between">
          <Feature />
          <div className="relative pb-0 md:pb-0 overflow-hidden">
            <Advance />
          </div>
        </div>
      </div>
      <Ready />
      <FAQ />
    </div>
  );
}
