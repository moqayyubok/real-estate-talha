
import { Home, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card pt-16 pb-8 border-t border-border/40">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Home className="h-6 w-6 text-primary" />
              <span className="font-semibold text-xl">EstateVue</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Discover exceptional properties designed for the way you want to live. Our curated selection ensures quality and comfort.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary flex-shrink-0" />
                <span>123 Estate Avenue, Cityville</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span>info@estatevue.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#properties" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>Properties</span>
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6">Property Types</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>Residential</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>Commercial</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>Apartments</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>Villas</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>Luxury Homes</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-6">Newsletter</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Subscribe to our newsletter to receive the latest updates on new properties and special offers.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="rounded-l-md"
              />
              <Button type="submit" className="rounded-r-md">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EstateVue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
