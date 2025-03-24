
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Lock, Home } from "lucide-react";
import { Link } from "react-router-dom";

const AdminSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication (replace with actual auth logic later)
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Admin signed in successfully",
        description: "Welcome to the admin dashboard",
      });
      navigate("/admin/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md px-8 py-12 rounded-2xl bg-card/50 backdrop-blur-md border border-border/40 shadow-sm"
      >
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2">
            <Home className="h-6 w-6 text-primary" />
            <span className="font-semibold text-xl">EstateVue</span>
          </Link>
          <div className="mt-6 flex items-center justify-center gap-2 text-amber-600">
            <Lock size={18} />
            <span className="text-sm font-medium">Admin Area</span>
          </div>
          <h1 className="mt-2 text-2xl font-medium tracking-tight">Admin Sign In</h1>
          <p className="mt-2 text-muted-foreground">Access the property management dashboard</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Admin Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@estatevue.com"
              className="w-full h-12 px-4"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Admin Password
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full h-12 px-4"
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isLoading}
            variant="default"
            className="w-full h-12 text-base font-medium rounded-xl"
          >
            {isLoading ? "Signing in..." : "Sign in as Administrator"}
          </Button>
        </form>
        
        <div className="mt-8 text-center text-sm">
          <span className="text-muted-foreground">Not an administrator? </span>
          <Link to="/sign-in" className="text-primary hover:underline font-medium">
            User sign in
          </Link>
        </div>
        
        <div className="mt-4 text-center text-sm">
          <Link to="/" className="text-primary hover:underline font-medium">
            Return to home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminSignIn;
