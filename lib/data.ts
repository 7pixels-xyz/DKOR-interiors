import { Project, Testimonial } from '@/types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'hillsboro-mile',
    title: 'Hillsboro Mile Custom Estate',
    location: 'Hillsboro Mile, FL',
    category: 'Residential',
    subcategory: 'New Construction',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: 'A 4-story oceanfront architectural masterpiece featuring custom oak paneling and infinity pool lounge.',
    specs: {
      sqft: '12,500 sq ft',
      scope: 'Full Architectural Interior Design',
      year: '2025'
    }
  },
  {
    id: 'bay-harbor',
    title: 'Sophisticated Bay Harbor Residence',
    location: 'Bay Harbor Islands, FL',
    category: 'Residential',
    subcategory: 'Renovation',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    description: 'Minimalist luxury home designed for effortless indoor-outdoor entertainment.',
    specs: {
      sqft: '6,800 sq ft',
      scope: 'Turnkey Renovation',
      year: '2024'
    }
  },
  {
    id: 'f1-miami-office',
    title: 'F1 Miami Grand Prix Executive Suite',
    location: 'Miami, FL',
    category: 'Commercial',
    subcategory: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    description: 'Ultra-modern executive lounge blending high-octane racing aesthetics with warm hospitality.',
    specs: {
      sqft: '4,500 sq ft',
      scope: 'Commercial Space Planning',
      year: '2024'
    }
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    quote: 'The entire DKOR interior design team fully captured our vision and need for functionality, giving us our dream home. The process was completely transparent and enjoyable!',
    clientName: 'Brooke Cohen',
    projectName: 'Boca Raton Luxury Estate',
    location: 'Boca Raton, FL'
  },
  {
    id: '2',
    quote: 'Over the last year, our DKOR team was warm, creative, responsive, and put us first at all times. They transformed over 10 spaces seamlessly.',
    clientName: 'Emily Stark',
    projectName: 'Modern Chateau',
    location: 'Palm Beach, FL'
  }
];
