
export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  images: string[];
  featured: boolean;
  type: 'house' | 'apartment' | 'condo' | 'townhouse';
  yearBuilt: number;
}
