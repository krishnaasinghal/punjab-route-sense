import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveTracking from "@/components/LiveTracking";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const Tracking = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const nearbyBuses = [
    {
      id: "PB-01-001",
      route: "Route 1: City Center - Railway Station",
      nextStop: "Mall Plaza",
      eta: "3 mins",
      status: "On Time",
    },
    {
      id: "PB-01-002", 
      route: "Route 2: Bus Stand - Industrial Area",
      nextStop: "Market Square",
      eta: "7 mins",
      status: "Delayed",
    },
    {
      id: "PB-01-003",
      route: "Route 3: Residential - Commercial Hub", 
      nextStop: "Shopping Center",
      eta: "12 mins",
      status: "On Time",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Live Bus Tracking</h1>
          <p className="text-muted-foreground text-lg">
            Track buses in real-time and get accurate arrival times
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-punjab-green" />
                  Search Buses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter bus number or route..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1"
                  />
                  <Button className="bg-punjab-green hover:bg-punjab-green/90">
                    Search
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Nearby Buses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {nearbyBuses.map((bus) => (
                    <div key={bus.id} className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{bus.id}</h4>
                        <Badge 
                          variant={bus.status === "On Time" ? "secondary" : "destructive"}
                          className={bus.status === "On Time" ? "bg-punjab-green/10 text-punjab-green" : ""}
                        >
                          {bus.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{bus.route}</p>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-punjab-saffron" />
                          <span>Next: {bus.nextStop}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-punjab-saffron" />
                          <span className="font-medium">{bus.eta}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <LiveTracking />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Tracking;