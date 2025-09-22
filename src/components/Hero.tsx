import { Button } from "@/components/ui/button";
import { MapPin, Clock, Smartphone, Shield } from "lucide-react";
import heroImage from "@/assets/hero-transport.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="relative container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Smart Public Transport
              <span className="block text-primary-light">for Punjab Cities</span>
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Real-time GPS tracking, live arrival times, and intelligent route management 
              for efficient public transportation across Punjab's growing cities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg">
                <MapPin className="h-5 w-5" />
                Track Live Buses
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
                <Shield className="h-5 w-5" />
                Admin Dashboard
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg mb-2">
                  <Clock className="h-8 w-8 mx-auto text-primary-light" />
                </div>
                <p className="text-sm opacity-90">Real-Time Updates</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg mb-2">
                  <MapPin className="h-8 w-8 mx-auto text-primary-light" />
                </div>
                <p className="text-sm opacity-90">GPS Tracking</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg mb-2">
                  <Smartphone className="h-8 w-8 mx-auto text-primary-light" />
                </div>
                <p className="text-sm opacity-90">Mobile Access</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg mb-2">
                  <Shield className="h-8 w-8 mx-auto text-primary-light" />
                </div>
                <p className="text-sm opacity-90">Safety Features</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-elevated">
              <h3 className="text-white text-2xl font-bold mb-6">System Status</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Active Buses</span>
                  <span className="text-success-light font-bold">142 Online</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Routes Covered</span>
                  <span className="text-primary-light font-bold">28 Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Average ETA Accuracy</span>
                  <span className="text-success-light font-bold">94.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Daily Passengers</span>
                  <span className="text-primary-light font-bold">15,847</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;