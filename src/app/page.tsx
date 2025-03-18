import Header from "@/components/header";
import Hero from "@/components/hero";
import Feature from "@/components/feature";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden relative mx-auto bg-background text-white">
      <Header />
      <Hero />
      <Feature />
      <FAQ />
      {/* Footer */}
      <Footer />
    </div>
  );
}
