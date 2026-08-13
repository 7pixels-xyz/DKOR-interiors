export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Penthouse' | 'Coastal' | 'Commercial';
  location: string;
  year: string;
  coverImage: string;
  gallery: string[];
  description: string;
  palette: string[];
  specs: {
    sqft: string;
    rooms: string;
    timeline: string;
  };
}

export const PROJECTS_DATA: Project[] = [
  {
    "id": "project-1-eclectic-manor",
    "title": "Eclectic Manor I",
    "category": "Coastal",
    "location": "Brickell, Miami, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "10,903 sq ft",
      "rooms": "3 Beds / 6.5 Baths",
      "timeline": "9 Months"
    }
  },
  {
    "id": "project-2-exclusive-workspace",
    "title": "Exclusive Workspace I",
    "category": "Commercial",
    "location": "Bay Harbor Islands, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "11,481 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "19 Months"
    }
  },
  {
    "id": "project-3-bespoke-retreat",
    "title": "Bespoke Retreat I",
    "category": "Residential",
    "location": "Las Vegas, NV",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "11,724 sq ft",
      "rooms": "4 Beds / 3.5 Baths",
      "timeline": "17 Months"
    }
  },
  {
    "id": "project-4-minimalist-residence",
    "title": "Minimalist Residence I",
    "category": "Coastal",
    "location": "Palm Beach, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "3,447 sq ft",
      "rooms": "6 Beds / 6.5 Baths",
      "timeline": "9 Months"
    }
  },
  {
    "id": "project-5-curated-chateau",
    "title": "Curated Chateau I",
    "category": "Penthouse",
    "location": "Sunny Isles Beach, FL",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "3,793 sq ft",
      "rooms": "7 Beds / 3.5 Baths",
      "timeline": "11 Months"
    }
  },
  {
    "id": "project-6-modern-chateau",
    "title": "Modern Chateau I",
    "category": "Penthouse",
    "location": "North Miami, FL",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "7,589 sq ft",
      "rooms": "4 Beds / 5.5 Baths",
      "timeline": "14 Months"
    }
  },
  {
    "id": "project-7-transitional-workspace",
    "title": "Transitional Workspace I",
    "category": "Commercial",
    "location": "Bay Harbor Islands, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "6,504 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "12 Months"
    }
  },
  {
    "id": "project-8-exclusive-haven",
    "title": "Exclusive Haven I",
    "category": "Penthouse",
    "location": "Boca Raton, FL",
    "year": "2020",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "10,127 sq ft",
      "rooms": "6 Beds / 5.5 Baths",
      "timeline": "24 Months"
    }
  },
  {
    "id": "project-9-transitional-haven",
    "title": "Transitional Haven I",
    "category": "Penthouse",
    "location": "Boca Raton, FL",
    "year": "2020",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "4,300 sq ft",
      "rooms": "5 Beds / 8.5 Baths",
      "timeline": "9 Months"
    }
  },
  {
    "id": "project-10-modern-workspace",
    "title": "Modern Workspace II",
    "category": "Commercial",
    "location": "Las Vegas, NV",
    "year": "2021",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "4,729 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "20 Months"
    }
  },
  {
    "id": "project-11-minimalist-sanctuary",
    "title": "Minimalist Sanctuary II",
    "category": "Coastal",
    "location": "Las Vegas, NV",
    "year": "2021",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "11,077 sq ft",
      "rooms": "7 Beds / 6.5 Baths",
      "timeline": "23 Months"
    }
  },
  {
    "id": "project-12-minimalist-retreat",
    "title": "Minimalist Retreat II",
    "category": "Coastal",
    "location": "Brickell, Miami, FL",
    "year": "2023",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "7,883 sq ft",
      "rooms": "3 Beds / 4.5 Baths",
      "timeline": "8 Months"
    }
  },
  {
    "id": "project-13-eclectic-workspace",
    "title": "Eclectic Workspace II",
    "category": "Commercial",
    "location": "Boca Raton, FL",
    "year": "2020",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "7,691 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "13 Months"
    }
  },
  {
    "id": "project-14-transitional-workspace",
    "title": "Transitional Workspace II",
    "category": "Commercial",
    "location": "Fort Lauderdale, FL",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "9,897 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "24 Months"
    }
  },
  {
    "id": "project-15-transitional-chateau",
    "title": "Transitional Chateau II",
    "category": "Penthouse",
    "location": "Bay Harbor Islands, FL",
    "year": "2023",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "10,591 sq ft",
      "rooms": "4 Beds / 6.5 Baths",
      "timeline": "9 Months"
    }
  },
  {
    "id": "project-16-transitional-estate",
    "title": "Transitional Estate II",
    "category": "Residential",
    "location": "Las Vegas, NV",
    "year": "2023",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "10,941 sq ft",
      "rooms": "5 Beds / 4.5 Baths",
      "timeline": "22 Months"
    }
  },
  {
    "id": "project-17-exclusive-workspace",
    "title": "Exclusive Workspace II",
    "category": "Commercial",
    "location": "Boca Raton, FL",
    "year": "2020",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "5,444 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "20 Months"
    }
  },
  {
    "id": "project-18-exclusive-oasis",
    "title": "Exclusive Oasis II",
    "category": "Penthouse",
    "location": "Brickell, Miami, FL",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "8,976 sq ft",
      "rooms": "3 Beds / 6.5 Baths",
      "timeline": "17 Months"
    }
  },
  {
    "id": "project-19-transitional-estate",
    "title": "Transitional Estate II",
    "category": "Residential",
    "location": "Las Vegas, NV",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "4,988 sq ft",
      "rooms": "6 Beds / 6.5 Baths",
      "timeline": "9 Months"
    }
  },
  {
    "id": "project-20-contemporary-estate",
    "title": "Contemporary Estate III",
    "category": "Penthouse",
    "location": "Fort Lauderdale, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "10,610 sq ft",
      "rooms": "6 Beds / 7.5 Baths",
      "timeline": "9 Months"
    }
  },
  {
    "id": "project-21-exclusive-manor",
    "title": "Exclusive Manor III",
    "category": "Coastal",
    "location": "Fort Lauderdale, FL",
    "year": "2021",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "9,285 sq ft",
      "rooms": "3 Beds / 8.5 Baths",
      "timeline": "17 Months"
    }
  },
  {
    "id": "project-22-exclusive-oasis",
    "title": "Exclusive Oasis III",
    "category": "Coastal",
    "location": "Fort Lauderdale, FL",
    "year": "2020",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "4,968 sq ft",
      "rooms": "6 Beds / 8.5 Baths",
      "timeline": "16 Months"
    }
  },
  {
    "id": "project-23-bespoke-workspace",
    "title": "Bespoke Workspace III",
    "category": "Commercial",
    "location": "Bay Harbor Islands, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "6,653 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "22 Months"
    }
  },
  {
    "id": "project-24-exclusive-estate",
    "title": "Exclusive Estate III",
    "category": "Penthouse",
    "location": "Las Vegas, NV",
    "year": "2020",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "8,060 sq ft",
      "rooms": "6 Beds / 8.5 Baths",
      "timeline": "19 Months"
    }
  },
  {
    "id": "project-25-minimalist-workspace",
    "title": "Minimalist Workspace III",
    "category": "Commercial",
    "location": "Brickell, Miami, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "5,680 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "14 Months"
    }
  },
  {
    "id": "project-26-eclectic-manor",
    "title": "Eclectic Manor III",
    "category": "Residential",
    "location": "Las Vegas, NV",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "3,887 sq ft",
      "rooms": "6 Beds / 5.5 Baths",
      "timeline": "22 Months"
    }
  },
  {
    "id": "project-27-curated-manor",
    "title": "Curated Manor III",
    "category": "Coastal",
    "location": "Las Vegas, NV",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "5,146 sq ft",
      "rooms": "4 Beds / 5.5 Baths",
      "timeline": "10 Months"
    }
  },
  {
    "id": "project-28-contemporary-oasis",
    "title": "Contemporary Oasis III",
    "category": "Penthouse",
    "location": "North Miami, FL",
    "year": "2020",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "3,745 sq ft",
      "rooms": "6 Beds / 8.5 Baths",
      "timeline": "12 Months"
    }
  },
  {
    "id": "project-29-minimalist-penthouse",
    "title": "Minimalist Penthouse III",
    "category": "Coastal",
    "location": "North Miami, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "5,870 sq ft",
      "rooms": "3 Beds / 5.5 Baths",
      "timeline": "15 Months"
    }
  },
  {
    "id": "project-30-luxury-workspace",
    "title": "Luxury Workspace III",
    "category": "Commercial",
    "location": "North Miami, FL",
    "year": "2020",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "3,656 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "11 Months"
    }
  },
  {
    "id": "project-31-contemporary-manor",
    "title": "Contemporary Manor III",
    "category": "Penthouse",
    "location": "North Miami, FL",
    "year": "2021",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "3,530 sq ft",
      "rooms": "4 Beds / 7.5 Baths",
      "timeline": "21 Months"
    }
  },
  {
    "id": "project-32-curated-workspace",
    "title": "Curated Workspace III",
    "category": "Commercial",
    "location": "Fort Lauderdale, FL",
    "year": "2021",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "11,763 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "21 Months"
    }
  },
  {
    "id": "project-33-luxury-workspace",
    "title": "Luxury Workspace III",
    "category": "Commercial",
    "location": "Las Vegas, NV",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "3,065 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "14 Months"
    }
  },
  {
    "id": "project-34-minimalist-haven",
    "title": "Minimalist Haven III",
    "category": "Coastal",
    "location": "Fort Lauderdale, FL",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "4,234 sq ft",
      "rooms": "6 Beds / 6.5 Baths",
      "timeline": "18 Months"
    }
  },
  {
    "id": "project-35-eclectic-workspace",
    "title": "Eclectic Workspace III",
    "category": "Commercial",
    "location": "Fort Lauderdale, FL",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "10,776 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "8 Months"
    }
  },
  {
    "id": "project-36-eclectic-sanctuary",
    "title": "Eclectic Sanctuary III",
    "category": "Coastal",
    "location": "Boca Raton, FL",
    "year": "2020",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "4,184 sq ft",
      "rooms": "3 Beds / 4.5 Baths",
      "timeline": "14 Months"
    }
  },
  {
    "id": "project-37-contemporary-workspace",
    "title": "Contemporary Workspace III",
    "category": "Commercial",
    "location": "Fort Lauderdale, FL",
    "year": "2020",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "9,015 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "14 Months"
    }
  },
  {
    "id": "project-38-bespoke-chateau",
    "title": "Bespoke Chateau III",
    "category": "Penthouse",
    "location": "Boca Raton, FL",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "5,360 sq ft",
      "rooms": "4 Beds / 7.5 Baths",
      "timeline": "10 Months"
    }
  },
  {
    "id": "project-39-contemporary-residence",
    "title": "Contemporary Residence III",
    "category": "Coastal",
    "location": "Bay Harbor Islands, FL",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "4,948 sq ft",
      "rooms": "6 Beds / 8.5 Baths",
      "timeline": "20 Months"
    }
  },
  {
    "id": "project-40-minimalist-penthouse",
    "title": "Minimalist Penthouse III",
    "category": "Residential",
    "location": "Boca Raton, FL",
    "year": "2023",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "10,990 sq ft",
      "rooms": "3 Beds / 6.5 Baths",
      "timeline": "18 Months"
    }
  },
  {
    "id": "project-41-timeless-workspace",
    "title": "Timeless Workspace III",
    "category": "Commercial",
    "location": "Sunny Isles Beach, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "4,613 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "23 Months"
    }
  },
  {
    "id": "project-42-luxury-workspace",
    "title": "Luxury Workspace III",
    "category": "Commercial",
    "location": "Las Vegas, NV",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "7,582 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "12 Months"
    }
  },
  {
    "id": "project-43-minimalist-sanctuary",
    "title": "Minimalist Sanctuary III",
    "category": "Residential",
    "location": "Fort Lauderdale, FL",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "10,130 sq ft",
      "rooms": "4 Beds / 3.5 Baths",
      "timeline": "12 Months"
    }
  },
  {
    "id": "project-44-transitional-sanctuary",
    "title": "Transitional Sanctuary III",
    "category": "Penthouse",
    "location": "Bay Harbor Islands, FL",
    "year": "2021",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "7,441 sq ft",
      "rooms": "6 Beds / 4.5 Baths",
      "timeline": "17 Months"
    }
  },
  {
    "id": "project-45-luxury-estate",
    "title": "Luxury Estate III",
    "category": "Coastal",
    "location": "Boca Raton, FL",
    "year": "2021",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "3,985 sq ft",
      "rooms": "6 Beds / 5.5 Baths",
      "timeline": "15 Months"
    }
  },
  {
    "id": "project-46-modern-oasis",
    "title": "Modern Oasis III",
    "category": "Coastal",
    "location": "North Miami, FL",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "7,027 sq ft",
      "rooms": "4 Beds / 7.5 Baths",
      "timeline": "9 Months"
    }
  },
  {
    "id": "project-47-timeless-workspace",
    "title": "Timeless Workspace III",
    "category": "Commercial",
    "location": "Palm Beach, FL",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "5,026 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "12 Months"
    }
  },
  {
    "id": "project-48-exclusive-sanctuary",
    "title": "Exclusive Sanctuary III",
    "category": "Penthouse",
    "location": "Brickell, Miami, FL",
    "year": "2021",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "8,624 sq ft",
      "rooms": "6 Beds / 8.5 Baths",
      "timeline": "8 Months"
    }
  },
  {
    "id": "project-49-curated-retreat",
    "title": "Curated Retreat III",
    "category": "Coastal",
    "location": "Sunny Isles Beach, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "8,619 sq ft",
      "rooms": "7 Beds / 3.5 Baths",
      "timeline": "15 Months"
    }
  },
  {
    "id": "project-50-bespoke-villa",
    "title": "Bespoke Villa III",
    "category": "Coastal",
    "location": "North Miami, FL",
    "year": "2023",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "6,128 sq ft",
      "rooms": "3 Beds / 6.5 Baths",
      "timeline": "17 Months"
    }
  },
  {
    "id": "project-51-modern-estate",
    "title": "Modern Estate III",
    "category": "Coastal",
    "location": "Boca Raton, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "9,540 sq ft",
      "rooms": "4 Beds / 3.5 Baths",
      "timeline": "15 Months"
    }
  },
  {
    "id": "project-52-luxury-villa",
    "title": "Luxury Villa III",
    "category": "Coastal",
    "location": "Las Vegas, NV",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "11,092 sq ft",
      "rooms": "5 Beds / 5.5 Baths",
      "timeline": "11 Months"
    }
  },
  {
    "id": "project-53-curated-chateau",
    "title": "Curated Chateau III",
    "category": "Residential",
    "location": "Brickell, Miami, FL",
    "year": "2020",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "10,321 sq ft",
      "rooms": "4 Beds / 8.5 Baths",
      "timeline": "9 Months"
    }
  },
  {
    "id": "project-54-timeless-workspace",
    "title": "Timeless Workspace III",
    "category": "Commercial",
    "location": "Brickell, Miami, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "11,393 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "22 Months"
    }
  },
  {
    "id": "project-55-eclectic-oasis",
    "title": "Eclectic Oasis III",
    "category": "Residential",
    "location": "Sunny Isles Beach, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "9,841 sq ft",
      "rooms": "7 Beds / 6.5 Baths",
      "timeline": "17 Months"
    }
  },
  {
    "id": "project-56-eclectic-oasis",
    "title": "Eclectic Oasis III",
    "category": "Residential",
    "location": "Bay Harbor Islands, FL",
    "year": "2021",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "9,949 sq ft",
      "rooms": "5 Beds / 7.5 Baths",
      "timeline": "19 Months"
    }
  },
  {
    "id": "project-57-minimalist-penthouse",
    "title": "Minimalist Penthouse III",
    "category": "Residential",
    "location": "North Miami, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "11,128 sq ft",
      "rooms": "6 Beds / 3.5 Baths",
      "timeline": "10 Months"
    }
  },
  {
    "id": "project-58-contemporary-oasis",
    "title": "Contemporary Oasis III",
    "category": "Penthouse",
    "location": "Brickell, Miami, FL",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "9,137 sq ft",
      "rooms": "3 Beds / 8.5 Baths",
      "timeline": "21 Months"
    }
  },
  {
    "id": "project-59-eclectic-workspace",
    "title": "Eclectic Workspace III",
    "category": "Commercial",
    "location": "Palm Beach, FL",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "3,925 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "15 Months"
    }
  },
  {
    "id": "project-60-transitional-estate",
    "title": "Transitional Estate III",
    "category": "Penthouse",
    "location": "Sunny Isles Beach, FL",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "3,762 sq ft",
      "rooms": "5 Beds / 3.5 Baths",
      "timeline": "16 Months"
    }
  },
  {
    "id": "project-61-contemporary-chateau",
    "title": "Contemporary Chateau III",
    "category": "Penthouse",
    "location": "Sunny Isles Beach, FL",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "6,679 sq ft",
      "rooms": "7 Beds / 8.5 Baths",
      "timeline": "13 Months"
    }
  },
  {
    "id": "project-62-luxury-estate",
    "title": "Luxury Estate III",
    "category": "Coastal",
    "location": "Boca Raton, FL",
    "year": "2021",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "7,285 sq ft",
      "rooms": "5 Beds / 7.5 Baths",
      "timeline": "19 Months"
    }
  },
  {
    "id": "project-63-bespoke-workspace",
    "title": "Bespoke Workspace III",
    "category": "Commercial",
    "location": "Bay Harbor Islands, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "8,164 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "9 Months"
    }
  },
  {
    "id": "project-64-curated-workspace",
    "title": "Curated Workspace III",
    "category": "Commercial",
    "location": "Sunny Isles Beach, FL",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "6,610 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "8 Months"
    }
  },
  {
    "id": "project-65-modern-villa",
    "title": "Modern Villa III",
    "category": "Residential",
    "location": "Bay Harbor Islands, FL",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "3,108 sq ft",
      "rooms": "7 Beds / 5.5 Baths",
      "timeline": "10 Months"
    }
  },
  {
    "id": "project-66-eclectic-workspace",
    "title": "Eclectic Workspace III",
    "category": "Commercial",
    "location": "Brickell, Miami, FL",
    "year": "2023",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "9,911 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "9 Months"
    }
  },
  {
    "id": "project-67-minimalist-estate",
    "title": "Minimalist Estate III",
    "category": "Coastal",
    "location": "Bay Harbor Islands, FL",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "4,619 sq ft",
      "rooms": "7 Beds / 3.5 Baths",
      "timeline": "19 Months"
    }
  },
  {
    "id": "project-68-exclusive-workspace",
    "title": "Exclusive Workspace III",
    "category": "Commercial",
    "location": "Fort Lauderdale, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "7,468 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "8 Months"
    }
  },
  {
    "id": "project-69-bespoke-villa",
    "title": "Bespoke Villa III",
    "category": "Residential",
    "location": "Sunny Isles Beach, FL",
    "year": "2021",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "4,190 sq ft",
      "rooms": "6 Beds / 3.5 Baths",
      "timeline": "13 Months"
    }
  },
  {
    "id": "project-70-exclusive-workspace",
    "title": "Exclusive Workspace III",
    "category": "Commercial",
    "location": "Brickell, Miami, FL",
    "year": "2023",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "8,113 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "15 Months"
    }
  },
  {
    "id": "project-71-minimalist-workspace",
    "title": "Minimalist Workspace III",
    "category": "Commercial",
    "location": "Fort Lauderdale, FL",
    "year": "2021",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "3,808 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "12 Months"
    }
  },
  {
    "id": "project-72-modern-estate",
    "title": "Modern Estate III",
    "category": "Coastal",
    "location": "Brickell, Miami, FL",
    "year": "2023",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "4,233 sq ft",
      "rooms": "7 Beds / 7.5 Baths",
      "timeline": "16 Months"
    }
  },
  {
    "id": "project-73-luxury-retreat",
    "title": "Luxury Retreat III",
    "category": "Penthouse",
    "location": "Brickell, Miami, FL",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "3,060 sq ft",
      "rooms": "3 Beds / 4.5 Baths",
      "timeline": "23 Months"
    }
  },
  {
    "id": "project-74-luxury-workspace",
    "title": "Luxury Workspace III",
    "category": "Commercial",
    "location": "Las Vegas, NV",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "11,584 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "14 Months"
    }
  },
  {
    "id": "project-75-timeless-manor",
    "title": "Timeless Manor III",
    "category": "Residential",
    "location": "Sunny Isles Beach, FL",
    "year": "2020",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "6,930 sq ft",
      "rooms": "6 Beds / 3.5 Baths",
      "timeline": "9 Months"
    }
  },
  {
    "id": "project-76-contemporary-retreat",
    "title": "Contemporary Retreat III",
    "category": "Residential",
    "location": "Fort Lauderdale, FL",
    "year": "2021",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "10,704 sq ft",
      "rooms": "4 Beds / 6.5 Baths",
      "timeline": "11 Months"
    }
  },
  {
    "id": "project-77-transitional-manor",
    "title": "Transitional Manor III",
    "category": "Coastal",
    "location": "Palm Beach, FL",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "8,298 sq ft",
      "rooms": "5 Beds / 7.5 Baths",
      "timeline": "18 Months"
    }
  },
  {
    "id": "project-78-timeless-workspace",
    "title": "Timeless Workspace III",
    "category": "Commercial",
    "location": "Las Vegas, NV",
    "year": "2020",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "6,173 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "24 Months"
    }
  },
  {
    "id": "project-79-eclectic-workspace",
    "title": "Eclectic Workspace III",
    "category": "Commercial",
    "location": "Fort Lauderdale, FL",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "6,028 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "24 Months"
    }
  },
  {
    "id": "project-80-bespoke-chateau",
    "title": "Bespoke Chateau III",
    "category": "Penthouse",
    "location": "Brickell, Miami, FL",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "10,891 sq ft",
      "rooms": "7 Beds / 6.5 Baths",
      "timeline": "22 Months"
    }
  },
  {
    "id": "project-81-bespoke-residence",
    "title": "Bespoke Residence III",
    "category": "Coastal",
    "location": "North Miami, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "6,767 sq ft",
      "rooms": "6 Beds / 3.5 Baths",
      "timeline": "17 Months"
    }
  },
  {
    "id": "project-82-eclectic-chateau",
    "title": "Eclectic Chateau III",
    "category": "Penthouse",
    "location": "Bay Harbor Islands, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "6,991 sq ft",
      "rooms": "7 Beds / 3.5 Baths",
      "timeline": "22 Months"
    }
  },
  {
    "id": "project-83-timeless-haven",
    "title": "Timeless Haven III",
    "category": "Penthouse",
    "location": "Bay Harbor Islands, FL",
    "year": "2023",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "3,154 sq ft",
      "rooms": "6 Beds / 3.5 Baths",
      "timeline": "21 Months"
    }
  },
  {
    "id": "project-84-exclusive-haven",
    "title": "Exclusive Haven III",
    "category": "Coastal",
    "location": "Palm Beach, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "6,006 sq ft",
      "rooms": "7 Beds / 5.5 Baths",
      "timeline": "16 Months"
    }
  },
  {
    "id": "project-85-exclusive-retreat",
    "title": "Exclusive Retreat III",
    "category": "Penthouse",
    "location": "Palm Beach, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "9,624 sq ft",
      "rooms": "7 Beds / 7.5 Baths",
      "timeline": "12 Months"
    }
  },
  {
    "id": "project-86-luxury-workspace",
    "title": "Luxury Workspace III",
    "category": "Commercial",
    "location": "North Miami, FL",
    "year": "2021",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "4,470 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "16 Months"
    }
  },
  {
    "id": "project-87-modern-haven",
    "title": "Modern Haven III",
    "category": "Penthouse",
    "location": "Palm Beach, FL",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "11,601 sq ft",
      "rooms": "4 Beds / 3.5 Baths",
      "timeline": "18 Months"
    }
  },
  {
    "id": "project-88-contemporary-manor",
    "title": "Contemporary Manor III",
    "category": "Residential",
    "location": "Bay Harbor Islands, FL",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "11,899 sq ft",
      "rooms": "3 Beds / 7.5 Baths",
      "timeline": "15 Months"
    }
  },
  {
    "id": "project-89-bespoke-manor",
    "title": "Bespoke Manor III",
    "category": "Penthouse",
    "location": "Boca Raton, FL",
    "year": "2022",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "11,470 sq ft",
      "rooms": "4 Beds / 4.5 Baths",
      "timeline": "11 Months"
    }
  },
  {
    "id": "project-90-exclusive-workspace",
    "title": "Exclusive Workspace III",
    "category": "Commercial",
    "location": "Brickell, Miami, FL",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "3,185 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "22 Months"
    }
  },
  {
    "id": "project-91-modern-workspace",
    "title": "Modern Workspace III",
    "category": "Commercial",
    "location": "Las Vegas, NV",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "10,340 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "11 Months"
    }
  },
  {
    "id": "project-92-contemporary-oasis",
    "title": "Contemporary Oasis III",
    "category": "Penthouse",
    "location": "Fort Lauderdale, FL",
    "year": "2023",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "8,363 sq ft",
      "rooms": "3 Beds / 6.5 Baths",
      "timeline": "20 Months"
    }
  },
  {
    "id": "project-93-timeless-penthouse",
    "title": "Timeless Penthouse III",
    "category": "Penthouse",
    "location": "Sunny Isles Beach, FL",
    "year": "2023",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "11,104 sq ft",
      "rooms": "7 Beds / 3.5 Baths",
      "timeline": "20 Months"
    }
  },
  {
    "id": "project-94-transitional-penthouse",
    "title": "Transitional Penthouse III",
    "category": "Coastal",
    "location": "Fort Lauderdale, FL",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "9,084 sq ft",
      "rooms": "5 Beds / 8.5 Baths",
      "timeline": "11 Months"
    }
  },
  {
    "id": "project-95-exclusive-workspace",
    "title": "Exclusive Workspace III",
    "category": "Commercial",
    "location": "Las Vegas, NV",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "10,587 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "9 Months"
    }
  },
  {
    "id": "project-96-modern-manor",
    "title": "Modern Manor III",
    "category": "Residential",
    "location": "Boca Raton, FL",
    "year": "2025",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg"
    ],
    "description": "A masterclass in high-end residential design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#F7F7F7",
      "#EAEAEA",
      "#333333",
      "#D4AF37"
    ],
    "specs": {
      "sqft": "6,234 sq ft",
      "rooms": "6 Beds / 8.5 Baths",
      "timeline": "15 Months"
    }
  },
  {
    "id": "project-97-bespoke-penthouse",
    "title": "Bespoke Penthouse III",
    "category": "Penthouse",
    "location": "Las Vegas, NV",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg"
    ],
    "description": "A masterclass in high-end penthouse design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "7,930 sq ft",
      "rooms": "4 Beds / 4.5 Baths",
      "timeline": "20 Months"
    }
  },
  {
    "id": "project-98-contemporary-haven",
    "title": "Contemporary Haven III",
    "category": "Coastal",
    "location": "Fort Lauderdale, FL",
    "year": "2023",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#1A1A1A",
      "#555555",
      "#C5A059",
      "#FFFFFF"
    ],
    "specs": {
      "sqft": "6,323 sq ft",
      "rooms": "7 Beds / 4.5 Baths",
      "timeline": "14 Months"
    }
  },
  {
    "id": "project-99-exclusive-workspace",
    "title": "Exclusive Workspace III",
    "category": "Commercial",
    "location": "Bay Harbor Islands, FL",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg"
    ],
    "description": "A masterclass in high-end commercial design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#F7F7F7",
      "#1A1A1A",
      "#C5A059"
    ],
    "specs": {
      "sqft": "6,474 sq ft",
      "rooms": "Open Plan Office / 4 Suites",
      "timeline": "10 Months"
    }
  },
  {
    "id": "project-100-contemporary-residence",
    "title": "Contemporary Residence III",
    "category": "Coastal",
    "location": "Palm Beach, FL",
    "year": "2024",
    "coverImage": "https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg",
    "gallery": [
      "https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg",
      "https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg"
    ],
    "description": "A masterclass in high-end coastal design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.",
    "palette": [
      "#FFFFFF",
      "#111111",
      "#555555",
      "#B8860B"
    ],
    "specs": {
      "sqft": "11,328 sq ft",
      "rooms": "6 Beds / 4.5 Baths",
      "timeline": "15 Months"
    }
  }
];
