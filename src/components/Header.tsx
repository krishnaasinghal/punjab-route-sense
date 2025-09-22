import { Button } from "@/components/ui/button";
import { Bus, MapPin, Clock, Shield } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-card shadow-card border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Bus className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Punjab Transport</h1>
              <p className="text-sm text-muted-foreground">Real-Time Tracking System</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#tracking" className="text-foreground hover:text-primary transition-colors">
              Live Tracking
            </a>
            <a href="#routes" className="text-foreground hover:text-primary transition-colors">
              Bus Routes
            </a>
            <a href="#schedules" className="text-foreground hover:text-primary transition-colors">
              Schedules
            </a>
            <a href="#admin" className="text-foreground hover:text-primary transition-colors">
              Admin Portal
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm">
              <MapPin className="h-4 w-4" />
              Find Stop
            </Button>
            <Button variant="hero" size="sm">
              <Shield className="h-4 w-4" />
              Admin Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;