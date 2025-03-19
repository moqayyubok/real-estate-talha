
import { useEffect, useState } from "react";
import { propertyService } from "@/services/propertyService";
import { Property } from "@/types/property";
import PropertyCard from "@/components/PropertyCard";
import PropertyDetail from "@/components/PropertyDetail";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";

const PropertiesSection = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      setIsLoading(true);
      try {
        const data = await propertyService.getProperties();
        setProperties(data);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Featured Properties</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our selection of premium properties, each one chosen for exceptional quality and location
          </p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="h-full">
                <div className="border border-border/40 rounded-lg overflow-hidden h-full">
                  <Skeleton className="aspect-[4/3] w-full" />
                  <div className="p-5">
                    <Skeleton className="h-7 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-1/2 mb-4" />
                    <Skeleton className="h-14 w-full mb-4" />
                    <div className="grid grid-cols-3 gap-2">
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-6 w-full" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {properties.map((property, index) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                onClick={() => handlePropertyClick(property)}
                priority={index < 3}
              />
            ))}
          </motion.div>
        )}
      </div>
      
      {selectedProperty && (
        <PropertyDetail 
          property={selectedProperty} 
          isOpen={isDetailOpen} 
          onClose={handleCloseDetail} 
        />
      )}
    </section>
  );
};

export default PropertiesSection;
