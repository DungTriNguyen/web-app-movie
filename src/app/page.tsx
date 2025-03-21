import Header from "@/components/header";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Ready from "@/components/ready";
import Advance from "@/components/advance";
export default function Home() {
  return (
    <div className="min-h-screen  overflow-x-hidden relative mx-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <Header />
      <Hero />
      <div className="bg-accent">
        <Feature />
        <div className="relative pt-20 overflow-hidden">
          <Advance />
        </div>
      </div>
      <Ready />
      <FAQ />
      <Footer />
    </div>
  );
}
