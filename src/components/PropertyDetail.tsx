
import { Property } from "@/types/property";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Bed, Bath, Home, Calendar, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogHeader } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface PropertyDetailProps {
  property: Property;
  isOpen: boolean;
  onClose: () => void;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
};

const PropertyDetail = ({ property, isOpen, onClose }: PropertyDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  
  useEffect(() => {
    if (isOpen && property) {
      setCurrentImageIndex(0);
      setImagesLoaded(Array(property.images.length).fill(false));
      
      // Preload images
      property.images.forEach((src, index) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          setImagesLoaded(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        };
      });
    }
  }, [isOpen, property]);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  if (!property) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-semibold">{property.title}</DialogTitle>
            <DialogClose className="rounded-full hover:bg-muted w-8 h-8 flex items-center justify-center">
              <X size={18} />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
          <DialogDescription className="flex items-center text-muted-foreground mt-1">
            <MapPin size={16} className="mr-1 flex-shrink-0" />
            {property.location}
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative mt-4 aspect-[16/9] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className={cn(
                "h-full w-full bg-muted",
                !imagesLoaded[currentImageIndex] && "image-loading"
              )}>
                <img 
                  src={property.images[currentImageIndex]} 
                  alt={`${property.title} - Image ${currentImageIndex + 1}`}
                  className={cn(
                    "h-full w-full object-cover transition-opacity duration-500",
                    imagesLoaded[currentImageIndex] ? "opacity-100" : "opacity-0"
                  )}
                />
              </div>
            </motion.div>
          </AnimatePresence>
          
          {property.images.length > 1 && (
            <>
              <Button 
                onClick={handlePrevImage}
                variant="secondary"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/95 transition-all duration-200 h-10 w-10"
              >
                <ChevronLeft size={20} />
                <span className="sr-only">Previous image</span>
              </Button>
              <Button 
                onClick={handleNextImage}
                variant="secondary"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/95 transition-all duration-200 h-10 w-10"
              >
                <ChevronRight size={20} />
                <span className="sr-only">Next image</span>
              </Button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                {property.images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex 
                        ? 'bg-white scale-110' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    aria-label={`View image ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{formatPrice(property.price)}</h2>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="outline" className="font-normal">
                  {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                </Badge>
                {property.featured && (
                  <Badge variant="default" className="font-normal">
                    Featured
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="default" className="font-medium">
                Contact Agent
              </Button>
              <Button variant="outline" className="font-medium">
                Schedule Tour
              </Button>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="flex flex-col gap-1">
              <div className="text-muted-foreground text-sm flex items-center gap-1.5">
                <Bed size={16} className="flex-shrink-0" /> Bedrooms
              </div>
              <div className="font-medium">{property.bedrooms}</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-muted-foreground text-sm flex items-center gap-1.5">
                <Bath size={16} className="flex-shrink-0" /> Bathrooms
              </div>
              <div className="font-medium">{property.bathrooms}</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-muted-foreground text-sm flex items-center gap-1.5">
                <Home size={16} className="flex-shrink-0" /> Area
              </div>
              <div className="font-medium">{property.squareFeet} sq ft</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-muted-foreground text-sm flex items-center gap-1.5">
                <Calendar size={16} className="flex-shrink-0" /> Year Built
              </div>
              <div className="font-medium">{property.yearBuilt}</div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-2">Description</h3>
            <p className="text-muted-foreground">{property.description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetail;
