
import { Property } from "@/types/property";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Bed, Bath, Home, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
  priority?: boolean;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
};

const PropertyCard = ({ property, onClick, priority = false }: PropertyCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    if (property.images && property.images.length > 0) {
      const img = new Image();
      img.src = property.images[0];
      img.onload = () => {
        setMainImage(property.images[0]);
        setImageLoaded(true);
      };
    }
  }, [property.images]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className="h-full"
    >
      <Card className="overflow-hidden border border-border/40 bg-card/80 backdrop-blur-sm hover:bg-card/95 transition-all duration-300 h-full flex flex-col cursor-pointer group">
        <div className={cn(
          "relative aspect-[4/3] overflow-hidden bg-muted",
          !imageLoaded && "image-loading"
        )}>
          {mainImage && (
            <img 
              src={mainImage} 
              alt={property.title} 
              className={cn(
                "h-full w-full object-cover transition-all duration-700",
                imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
                "group-hover:scale-110"
              )}
              loading={priority ? "eager" : "lazy"}
            />
          )}
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-foreground font-medium px-2.5 py-1">
              {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
            </Badge>
          </div>
          {property.featured && (
            <div className="absolute top-3 right-3 z-10">
              <Badge variant="default" className="bg-primary/80 backdrop-blur-sm text-primary-foreground font-medium px-2.5 py-1">
                Featured
              </Badge>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent h-20 pointer-events-none" />
          <div className="absolute bottom-3 left-3 text-white font-semibold text-xl drop-shadow-md">
            {formatPrice(property.price)}
          </div>
        </div>
        <CardContent className="flex-grow p-5">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                {property.title}
              </h3>
            </div>
            <div className="flex items-center text-muted-foreground text-sm gap-1.5">
              <MapPin size={14} className="flex-shrink-0" />
              <span className="truncate">{property.location}</span>
            </div>
            <p className="text-muted-foreground line-clamp-2 text-sm mt-2">
              {property.description}
            </p>
          </div>
        </CardContent>
        <CardFooter className="p-5 pt-0 grid grid-cols-3 gap-2 text-muted-foreground text-sm">
          <div className="flex items-center gap-1.5">
            <Bed size={16} className="flex-shrink-0" />
            <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath size={16} className="flex-shrink-0" />
            <span>{property.bathrooms} {property.bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Home size={16} className="flex-shrink-0" />
            <span>{property.squareFeet} ft²</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PropertyCard;
