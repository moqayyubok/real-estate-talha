
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container max-w-md text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <span className="text-3xl font-semibold">404</span>
          </div>
          
          <h1 className="text-3xl font-bold mb-3">Page Not Found</h1>
          
          <p className="text-muted-foreground mb-8">
            We couldn't find the page you were looking for. It might have been moved, deleted, or never existed.
          </p>
          
          <Link to="/">
            <Button className="gap-2 font-medium">
              <Home size={16} />
              <span>Return Home</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
