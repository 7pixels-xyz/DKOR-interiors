export interface Project {
  id: string;
  title: string;
  location: string;
  category: 'Residential' | 'Commercial';
  subcategory: 'New Construction' | 'Renovation' | 'Condo' | 'Office' | 'Hospitality';
  image: string;
  beforeImage?: string;
  afterImage?: string;
  description: string;
  specs: {
    sqft: string;
    scope: string;
    year: string;
  };
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  projectName: string;
  location: string;
  avatar?: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  serviceType: 'Decorating' | 'Remodeling' | 'New Construction' | 'Commercial';
  estimatedBudget: string;
  message: string;
}
