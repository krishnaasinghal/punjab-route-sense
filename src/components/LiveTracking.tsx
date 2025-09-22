import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Navigation, AlertCircle } from "lucide-react";

const LiveTracking = () => {
  const liveBuses = [
    {
      id: "PB-01-A-1234",
      route: "Chandigarh - Mohali",
      currentLocation: "Sector 17, Chandigarh",
      nextStop: "Phase 3B2, Mohali",
      eta: "4 min",
      passengers: 42,
      status: "on-time",
      speed: "35 km/h"
    },
    {
      id: "PB-02-B-5678",
      route: "Ludhiana - Patiala",
      currentLocation: "Model Town, Ludhiana",
      nextStop: "Bus Stand, Rajpura",
      eta: "12 min",
      passengers: 38,
      status: "delayed",
      speed: "28 km/h"
    },
    {
      id: "PB-03-C-9012",
      route: "Amritsar - Jalandhar",
      currentLocation: "Golden Temple Road",
      nextStop: "Kartarpur Corridor",
      eta: "7 min",
      passengers: 51,
      status: "on-time",
      speed: "40 km/h"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-time": return "bg-success text-success-foreground";
      case "delayed": return "bg-destructive text-destructive-foreground";
      case "early": return "bg-primary text-primary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="tracking" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Live Bus Tracking</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Monitor all buses in real-time with precise GPS locations, passenger counts, 
            and estimated arrival times.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map Placeholder */}
          <div className="bg-gradient-card rounded-2xl p-6 shadow-card">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-foreground">Live Map View</h3>
              <Button variant="outline" size="sm">
                <Navigation className="h-4 w-4" />
                Full Screen
              </Button>
            </div>
            
            <div className="bg-muted rounded-xl h-96 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-primary/10"></div>
              <div className="text-center z-10">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">Interactive Map</p>
                <p className="text-sm text-muted-foreground">Real-time bus locations</p>
              </div>
              
              {/* Simulated bus markers */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-success rounded-full animate-pulse"></div>
              <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-destructive rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Bus List */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-foreground">Active Buses</h3>
              <Badge variant="secondary" className="text-sm">
                {liveBuses.length} buses online
              </Badge>
            </div>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {liveBuses.map((bus) => (
                <Card key={bus.id} className="bg-gradient-card shadow-card hover:shadow-elevated transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg text-foreground">{bus.id}</CardTitle>
                        <p className="text-sm text-muted-foreground">{bus.route}</p>
                      </div>
                      <Badge className={getStatusColor(bus.status)}>
                        {bus.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Current:</span>
                      <span className="text-foreground font-medium">{bus.currentLocation}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-sm">
                      <Navigation className="h-4 w-4 text-success" />
                      <span className="text-muted-foreground">Next Stop:</span>
                      <span className="text-foreground font-medium">{bus.nextStop}</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="font-medium text-primary">{bus.eta}</span>
                      </div>
                      <div className="text-center">
                        <span className="text-muted-foreground">Passengers:</span>
                        <span className="block font-bold text-foreground">{bus.passengers}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-muted-foreground">Speed:</span>
                        <span className="block font-bold text-foreground">{bus.speed}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveTracking;