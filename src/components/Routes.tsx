import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Route } from "lucide-react";

const Routes = () => {
  const routes = [
    {
      id: "R-001",
      name: "Chandigarh - Mohali Express",
      distance: "18.5 km",
      duration: "45 min",
      frequency: "Every 10 min",
      activeBuses: 8,
      stops: 12,
      fare: "₹25",
      status: "active"
    },
    {
      id: "R-002", 
      name: "Ludhiana - Patiala Highway",
      distance: "67.2 km",
      duration: "1h 30min",
      frequency: "Every 30 min",
      activeBuses: 5,
      stops: 15,
      fare: "₹85",
      status: "active"
    },
    {
      id: "R-003",
      name: "Amritsar City Circular",
      distance: "28.8 km", 
      duration: "1h 15min",
      frequency: "Every 20 min",
      activeBuses: 6,
      stops: 20,
      fare: "₹15",
      status: "active"
    },
    {
      id: "R-004",
      name: "Jalandhar - Kapurthala",
      distance: "42.1 km",
      duration: "1h 10min", 
      frequency: "Every 45 min",
      activeBuses: 3,
      stops: 8,
      fare: "₹60",
      status: "maintenance"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-success text-success-foreground";
      case "maintenance": return "bg-destructive text-destructive-foreground";
      case "suspended": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="routes" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Bus Routes & Schedules</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive route information with real-time updates, schedules, 
            and fare details for all Punjab transport services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
          {routes.map((route) => (
            <Card key={route.id} className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-xl text-foreground mb-2">{route.name}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="text-primary border-primary">
                        {route.id}
                      </Badge>
                      <Badge className={getStatusColor(route.status)}>
                        {route.status}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{route.fare}</p>
                    <p className="text-sm text-muted-foreground">per person</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Route className="h-4 w-4 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Distance</p>
                      <p className="font-medium text-foreground">{route.distance}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-success" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium text-foreground">{route.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Frequency</p>
                    <p className="font-bold text-primary">{route.frequency}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Active Buses</p>
                    <p className="font-bold text-success">{route.activeBuses}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Stops</p>
                    <p className="font-bold text-foreground">{route.stops}</p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <Button variant="outline" size="sm">
                    <MapPin className="h-4 w-4" />
                    View Stops
                  </Button>
                  <Button variant="default" size="sm">
                    <Users className="h-4 w-4" />
                    Track Buses
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            View All Routes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Routes;