import { Bus, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Bus className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Punjab Transport</h3>
                <p className="text-sm opacity-80">Real-Time Tracking</p>
              </div>
            </div>
            <p className="text-sm opacity-75 leading-relaxed">
              Government of Punjab's initiative to modernize public transport 
              with intelligent tracking and passenger information systems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#tracking" className="opacity-75 hover:opacity-100 transition-opacity">Live Tracking</a></li>
              <li><a href="#routes" className="opacity-75 hover:opacity-100 transition-opacity">Bus Routes</a></li>
              <li><a href="#schedules" className="opacity-75 hover:opacity-100 transition-opacity">Schedules</a></li>
              <li><a href="#admin" className="opacity-75 hover:opacity-100 transition-opacity">Admin Portal</a></li>
              <li><a href="#api" className="opacity-75 hover:opacity-100 transition-opacity">Developer API</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#help" className="opacity-75 hover:opacity-100 transition-opacity">Help Center</a></li>
              <li><a href="#faq" className="opacity-75 hover:opacity-100 transition-opacity">FAQ</a></li>
              <li><a href="#contact" className="opacity-75 hover:opacity-100 transition-opacity">Contact Us</a></li>
              <li><a href="#feedback" className="opacity-75 hover:opacity-100 transition-opacity">Feedback</a></li>
              <li><a href="#privacy" className="opacity-75 hover:opacity-100 transition-opacity">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 opacity-75" />
                <span className="opacity-75">Transport Bhawan, Chandigarh</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 opacity-75" />
                <span className="opacity-75">+91-172-2704000</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 opacity-75" />
                <span className="opacity-75">transport@punjab.gov.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 opacity-75" />
                <span className="opacity-75">punjab.gov.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-75">
            © 2024 Government of Punjab. All rights reserved. | 
            <span className="ml-2">Developed for Smart Punjab Initiative</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;