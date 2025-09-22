import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LiveTracking from "@/components/LiveTracking";
import Routes from "@/components/Routes";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <LiveTracking />
      <Routes />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
