import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  Clock, 
  Smartphone, 
  Shield, 
  BarChart3, 
  Bell, 
  Navigation,
  Users,
  Zap,
  Eye,
  AlertTriangle,
  Settings
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: "Real-Time GPS Tracking",
      description: "Precise location tracking of all buses with live updates every 30 seconds for accurate passenger information.",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "ETA Predictions",
      description: "AI-powered arrival time calculations with 94% accuracy, considering traffic and route conditions.",
      color: "text-success"
    },
    {
      icon: Smartphone,
      title: "Mobile Application",
      description: "Cross-platform mobile app for passengers to track buses, plan journeys, and receive notifications.",
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Panic buttons, emergency alerts, driver behavior monitoring, and route deviation notifications.",
      color: "text-destructive"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights on ridership patterns, route efficiency, and operational performance metrics.",
      color: "text-primary"
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Automated alerts for delays, route changes, service announcements, and emergency situations.",
      color: "text-success"
    },
    {
      icon: Navigation,
      title: "Route Optimization",
      description: "Dynamic route adjustments based on traffic data, passenger demand, and real-time conditions.",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Passenger Management",
      description: "Live passenger counting, capacity monitoring, and crowd management for better service planning.",
      color: "text-primary"
    },
    {
      icon: Zap,
      title: "Low Power Consumption",
      description: "Energy-efficient GPS devices with long battery life and minimal maintenance requirements.",
      color: "text-success"
    },
    {
      icon: Eye,
      title: "Admin Monitoring",
      description: "Centralized control room with real-time oversight of entire fleet and instant emergency response.",
      color: "text-secondary"
    },
    {
      icon: AlertTriangle,
      title: "Emergency Response",
      description: "Immediate alert system for breakdowns, accidents, or security incidents with quick dispatch.",
      color: "text-destructive"
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamless integration with existing transport management systems and government databases.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">System Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive public transport management with cutting-edge technology, 
            designed specifically for Punjab's growing cities and towns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300 group"
            >
              <CardHeader className="text-center pb-3">
                <div className={`mx-auto p-3 rounded-xl bg-muted/50 w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg text-foreground mt-4">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-card rounded-2xl p-8 shadow-card">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">₹1,000</div>
              <p className="text-sm text-muted-foreground">Cost per bus setup</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-success mb-2">94.2%</div>
              <p className="text-sm text-muted-foreground">ETA accuracy rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">30 sec</div>
              <p className="text-sm text-muted-foreground">Live update frequency</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;