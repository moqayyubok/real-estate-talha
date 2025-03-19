
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PropertiesSection from "@/components/PropertiesSection";
import Footer from "@/components/Footer";
import { motion, useAnimation } from "framer-motion";

const Index = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
    >
      <Navbar />
      
      <main>
        <HeroSection />
        
        <div id="properties">
          <PropertiesSection />
        </div>
        
        {/* Additional sections can be added here */}
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
