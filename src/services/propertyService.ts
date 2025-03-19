
import { Property } from "@/types/property";

// Mock property data since we're not connecting to a real API
const mockProperties: Property[] = [
  {
    id: "1",
    title: "Modern Minimalist Villa",
    description: "A stunning minimalist villa with clean lines and open spaces. This property features floor-to-ceiling windows, a private pool, and a spacious garden. The interior is designed with sustainability and functionality in mind, offering the perfect balance of luxury and comfort.",
    price: 1250000,
    location: "Beverly Hills, CA",
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 3200,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070&auto=format&fit=crop"
    ],
    featured: true,
    type: "house",
    yearBuilt: 2021
  },
  {
    id: "2",
    title: "Elegant Downtown Penthouse",
    description: "Experience luxury living in this stunning penthouse apartment with panoramic city views. Featuring designer finishes, smart home technology, and a private rooftop terrace perfect for entertaining. The open-concept living space seamlessly blends indoor and outdoor environments.",
    price: 2100000,
    location: "San Francisco, CA",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 2100,
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090733a21e0?q=80&w=2070&auto=format&fit=crop"
    ],
    featured: true,
    type: "apartment",
    yearBuilt: 2019
  },
  {
    id: "3",
    title: "Coastal Retreat",
    description: "Escape to this serene coastal property with breathtaking ocean views. This architecturally designed home features expansive outdoor living spaces, a gourmet kitchen, and direct beach access. The use of natural materials throughout complements the surrounding landscape.",
    price: 3750000,
    location: "Malibu, CA",
    bedrooms: 5,
    bathrooms: 4,
    squareFeet: 4500,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=2080&auto=format&fit=crop"
    ],
    featured: false,
    type: "house",
    yearBuilt: 2018
  },
  {
    id: "4",
    title: "City View Loft",
    description: "Industrial-inspired loft with high ceilings and original features in a converted heritage building. This unique property offers an open floor plan, exposed brick walls, and large factory windows that flood the space with natural light. Modern amenities complement the historic charm.",
    price: 875000,
    location: "New York, NY",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1800,
    images: [
      "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=2070&auto=format&fit=crop"
    ],
    featured: false,
    type: "condo",
    yearBuilt: 2015
  },
  {
    id: "5",
    title: "Contemporary Garden Townhouse",
    description: "Impeccably designed townhouse featuring private garden spaces and refined interiors. This property includes custom cabinetry, integrated smart home systems, and energy-efficient design. Located in a vibrant neighborhood with easy access to parks, dining, and cultural attractions.",
    price: 1450000,
    location: "Seattle, WA",
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 2400,
    images: [
      "https://images.unsplash.com/photo-1600573472550-8090733a21e0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
    ],
    featured: true,
    type: "townhouse",
    yearBuilt: 2020
  },
  {
    id: "6",
    title: "Mountain View Estate",
    description: "Expansive estate nestled in the mountains with breathtaking views and complete privacy. This architectural masterpiece features indoor and outdoor living spaces that flow seamlessly together, a wine cellar, home theater, and infinity pool overlooking the valley below.",
    price: 4250000,
    location: "Aspen, CO",
    bedrooms: 6,
    bathrooms: 5.5,
    squareFeet: 5800,
    images: [
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
    ],
    featured: false,
    type: "house",
    yearBuilt: 2017
  }
];

export const propertyService = {
  getProperties: async (): Promise<Property[]> => {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProperties);
      }, 800);
    });
  },

  getPropertyById: async (id: string): Promise<Property | undefined> => {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const property = mockProperties.find(p => p.id === id);
        resolve(property);
      }, 500);
    });
  },

  getFeaturedProperties: async (): Promise<Property[]> => {
    // Simulate API call delay
    return new Promise((resolve) => {
      setTimeout(() => {
        const featured = mockProperties.filter(p => p.featured);
        resolve(featured);
      }, 800);
    });
  }
};
