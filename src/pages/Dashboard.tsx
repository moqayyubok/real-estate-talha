
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Heart, 
  Bell, 
  Settings, 
  LogOut, 
  Search, 
  Calendar 
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Dashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  // Simulate authentication check
  useEffect(() => {
    // For demo purposes - in a real app, check auth state
    const isAuthenticated = true;
    if (!isAuthenticated) {
      toast({
        title: "Authentication required",
        description: "Please sign in to access the dashboard",
        variant: "destructive",
      });
      navigate("/sign-in");
    }
  }, [navigate, toast]);

  const handleSignOut = () => {
    toast({
      title: "Signed out successfully",
      description: "You have been signed out of your account",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-semibold mb-6">My Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur-md p-6 mb-8">
                  <h2 className="text-xl font-medium mb-4">Welcome back, User</h2>
                  <p className="text-muted-foreground mb-4">
                    Track your favorite properties, manage appointments, and update your preferences.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                    <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                      <Home className="h-5 w-5" />
                      <span className="text-sm">Properties</span>
                    </Button>
                    <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                      <Heart className="h-5 w-5" />
                      <span className="text-sm">Favorites</span>
                    </Button>
                    <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      <span className="text-sm">Appointments</span>
                    </Button>
                    <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                      <Search className="h-5 w-5" />
                      <span className="text-sm">Search</span>
                    </Button>
                  </div>
                </div>
                
                <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur-md p-6">
                  <h2 className="text-xl font-medium mb-4">Recent Activity</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-3 rounded-lg bg-muted/50">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Home className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Property Viewed</h3>
                        <p className="text-sm text-muted-foreground">Modern Apartment in Downtown</p>
                        <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-3 rounded-lg bg-muted/50">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Heart className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Property Favorited</h3>
                        <p className="text-sm text-muted-foreground">Luxury Villa with Pool</p>
                        <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4 p-3 rounded-lg bg-muted/50">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">Tour Scheduled</h3>
                        <p className="text-sm text-muted-foreground">Seaside Cottage, Friday at 2:00 PM</p>
                        <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="rounded-xl border border-border/40 bg-card/50 backdrop-blur-md p-6 mb-8">
                  <h2 className="text-xl font-medium mb-4">Account</h2>
                  <div className="flex flex-col gap-2">
                    <Button variant="ghost" className="justify-start gap-3">
                      <Bell className="h-4 w-4" />
                      <span>Notifications</span>
                    </Button>
                    <Button variant="ghost" className="justify-start gap-3">
                      <Settings className="h-4 w-4" />
                      <span>Account Settings</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="justify-start gap-3 text-destructive hover:text-destructive"
                      onClick={handleSignOut}
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </Button>
                  </div>
                </div>
                
                <div className="rounded-xl border border-border/40 bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-md p-6">
                  <h2 className="text-xl font-medium mb-2">Premium Features</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upgrade to access premium property listings and exclusive benefits.
                  </p>
                  <Button className="w-full">Upgrade Now</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
