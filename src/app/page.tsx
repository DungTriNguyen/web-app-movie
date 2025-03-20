import Header from "@/components/header";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Ready from "@/components/ready";
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden relative mx-auto ">
      <Header />
      <Hero />
      <div className="bg-accent">
        <Feature />
      </div>
      <Ready />
      <FAQ />
      <Footer />
    </div>
  );
}
