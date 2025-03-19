
import { Button } from "@/components/ui/button";
import { Home, Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/80 backdrop-blur-lg shadow-sm py-3" 
        : "bg-transparent py-5"
    )}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Home className="h-6 w-6 text-primary" />
          <span className="font-semibold text-xl">EstateVue</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-foreground/90 hover:text-primary transition-colors font-medium">
            Home
          </a>
          <a href="#properties" className="text-foreground/90 hover:text-primary transition-colors font-medium">
            Properties
          </a>
          <a href="#about" className="text-foreground/90 hover:text-primary transition-colors font-medium">
            About
          </a>
          <a href="#contact" className="text-foreground/90 hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="sm" className="gap-2 font-medium">
            <Phone size={16} />
            <span>Call Us</span>
          </Button>
          <Button size="sm" className="font-medium">Get Started</Button>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
          <span className="sr-only">Open menu</span>
        </Button>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-lg z-50 md:hidden"
          >
            <div className="container h-full flex flex-col p-6">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Home className="h-6 w-6 text-primary" />
                  <span className="font-semibold text-xl">EstateVue</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={24} />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              
              <nav className="flex flex-col gap-4 mb-8">
                <motion.a 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  href="#" 
                  className="text-foreground py-2 px-4 rounded-md hover:bg-muted transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </motion.a>
                <motion.a 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  href="#properties" 
                  className="text-foreground py-2 px-4 rounded-md hover:bg-muted transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Properties
                </motion.a>
                <motion.a 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  href="#about" 
                  className="text-foreground py-2 px-4 rounded-md hover:bg-muted transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </motion.a>
                <motion.a 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  href="#contact" 
                  className="text-foreground py-2 px-4 rounded-md hover:bg-muted transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </motion.a>
              </nav>
              
              <div className="mt-auto flex flex-col gap-3">
                <Button variant="outline" className="w-full justify-center gap-2 font-medium">
                  <Phone size={16} />
                  <span>Call Us</span>
                </Button>
                <Button className="w-full justify-center font-medium">Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
