
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-r from-black/60 to-black/30"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.8)',
        }}
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container relative z-10 py-20 md:py-32 flex flex-col items-center text-center"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="inline-block mb-4"
        >
          <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full backdrop-blur-sm">
            Discover Your Dream Home
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-3xl mb-6"
        >
          Find Your Perfect Place with Exceptional Simplicity
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg text-white/80 max-w-2xl mb-8"
        >
          Explore our curated selection of premium properties, designed for the way you want to live
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto"
        >
          <Button size="lg" className="rounded-full font-medium text-base flex-1">
            Browse Properties
          </Button>
          <Button size="lg" variant="outline" className="rounded-full font-medium text-base flex-1 bg-white/10 backdrop-blur-md hover:bg-white/20 border-white/20 text-white">
            Contact Us
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
