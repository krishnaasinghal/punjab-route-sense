import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Bus, 
  Users, 
  AlertTriangle, 
  TrendingUp, 
  MapPin, 
  Clock,
  Settings,
  Shield
} from "lucide-react";

const Admin = () => {
  const stats = [
    { label: "Active Buses", value: "24", icon: Bus, color: "text-punjab-green" },
    { label: "Daily Passengers", value: "1,247", icon: Users, color: "text-punjab-saffron" },
    { label: "Alerts", value: "3", icon: AlertTriangle, color: "text-red-500" },
    { label: "On-Time Performance", value: "89%", icon: TrendingUp, color: "text-punjab-green" },
  ];

  const alerts = [
    { id: 1, type: "Speed Alert", bus: "PB-01-005", message: "Exceeding speed limit", severity: "high" },
    { id: 2, type: "Route Deviation", bus: "PB-01-012", message: "Bus off designated route", severity: "medium" },
    { id: 3, type: "Maintenance Due", bus: "PB-01-008", message: "Scheduled maintenance required", severity: "low" },
  ];

  const buses = [
    { id: "PB-01-001", route: "Route 1", status: "Active", location: "City Center", speed: "35 km/h" },
    { id: "PB-01-002", route: "Route 2", status: "Active", location: "Market Square", speed: "28 km/h" },
    { id: "PB-01-003", route: "Route 3", status: "Maintenance", location: "Depot", speed: "0 km/h" },
    { id: "PB-01-004", route: "Route 1", status: "Active", location: "Hospital", speed: "42 km/h" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Admin Dashboard</h1>
          <p className="text-muted-foreground text-lg">
            Monitor and manage the Punjab public transport system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="buses">Buses</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Real-Time Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                      <p className="text-muted-foreground">Live bus tracking map</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-punjab-green rounded-full"></div>
                      <span className="text-sm">Bus PB-01-001 completed Route 1</span>
                      <span className="text-xs text-muted-foreground ml-auto">2 mins ago</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-punjab-saffron rounded-full"></div>
                      <span className="text-sm">New passenger alert from Mall Plaza</span>
                      <span className="text-xs text-muted-foreground ml-auto">5 mins ago</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-punjab-green rounded-full"></div>
                      <span className="text-sm">Bus PB-01-003 started Route 3</span>
                      <span className="text-xs text-muted-foreground ml-auto">12 mins ago</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="buses">
            <Card>
              <CardHeader>
                <CardTitle>Fleet Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {buses.map((bus) => (
                    <div key={bus.id} className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{bus.id}</h4>
                        <Badge 
                          variant={bus.status === "Active" ? "secondary" : "outline"}
                          className={bus.status === "Active" ? "bg-punjab-green/10 text-punjab-green" : ""}
                        >
                          {bus.status}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Route:</span>
                          <span className="ml-2 font-medium">{bus.route}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Location:</span>
                          <span className="ml-2 font-medium">{bus.location}</span>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Speed:</span>
                          <span className="ml-2 font-medium">{bus.speed}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts">
            <Card>
              <CardHeader>
                <CardTitle>System Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <div key={alert.id} className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{alert.type}</h4>
                        <Badge 
                          variant={alert.severity === "high" ? "destructive" : alert.severity === "medium" ? "default" : "secondary"}
                        >
                          {alert.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Bus: {alert.bus}</span>
                        <Button size="sm" variant="outline">
                          Resolve
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    System Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button className="bg-punjab-green hover:bg-punjab-green/90">
                      Update GPS Refresh Rate
                    </Button>
                    <Button variant="outline">
                      Configure Alert Thresholds
                    </Button>
                    <Button variant="outline">
                      Manage Bus Routes
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Security & Access
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline">
                      Manage User Permissions
                    </Button>
                    <Button variant="outline">
                      View Audit Logs
                    </Button>
                    <Button variant="outline">
                      Export System Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;