import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users } from "lucide-react";

const Routes = () => {
  const routes = [
    {
      id: 1,
      name: "Route 1: City Center - Railway Station",
      buses: 3,
      frequency: "Every 15 mins",
      status: "Active",
      stops: ["City Center", "Mall Plaza", "Hospital", "University", "Railway Station"],
    },
    {
      id: 2,
      name: "Route 2: Bus Stand - Industrial Area",
      buses: 2,
      frequency: "Every 20 mins", 
      status: "Active",
      stops: ["Bus Stand", "Market Square", "School", "Industrial Area"],
    },
    {
      id: 3,
      name: "Route 3: Residential - Commercial Hub",
      buses: 4,
      frequency: "Every 12 mins",
      status: "Active", 
      stops: ["Residential Area", "Park", "Shopping Center", "Commercial Hub"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Bus Routes</h1>
          <p className="text-muted-foreground text-lg">
            Explore all available bus routes across Punjab cities
          </p>
        </div>

        <div className="grid gap-6">
          {routes.map((route) => (
            <Card key={route.id} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-foreground">{route.name}</CardTitle>
                  <Badge variant="secondary" className="bg-punjab-saffron/10 text-punjab-saffron">
                    {route.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-punjab-green" />
                    <span className="text-sm text-muted-foreground">
                      {route.buses} buses active
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-punjab-green" />
                    <span className="text-sm text-muted-foreground">
                      {route.frequency}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-punjab-green" />
                    <span className="text-sm text-muted-foreground">
                      {route.stops.length} stops
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Route Stops:</h4>
                  <div className="flex flex-wrap gap-2">
                    {route.stops.map((stop, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {stop}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Routes;