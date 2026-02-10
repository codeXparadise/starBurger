export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  tags?: string[];
  category: 'beef' | 'veggie' | 'sides' | 'desserts' | 'drinks';
}

export interface Review {
  id: string;
  text: string;
  author: string;
  location: string;
  rating: number;
  color: string;
  rotation: number;
}

export interface LocationInfo {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  type: 'hq' | 'beach' | 'express';
}