export interface Specialist {
  id: string;
  name: string;
  icon: string;
}

export interface SearchFilters {
  location: string;
  serviceType: string;
  specialistType: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface Stats {
  clients: number;
  reviews: number;
}