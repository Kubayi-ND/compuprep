import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import OfficeApps from "../components/OfficeApps";
import CallToAction from "../components/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <OfficeApps />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
