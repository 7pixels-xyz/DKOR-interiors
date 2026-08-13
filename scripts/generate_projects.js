const fs = require('fs');
const path = require('path');

const images = [
  'https://dkorinteriors.com/wp-content/uploads/2023/11/Hillsboro-Mile-Florida-4-story-luxury-home.jpg',
  'https://dkorinteriors.com/wp-content/uploads/2023/08/Living-room-design-in-Bay-Harbor-Island-home.jpg',
  'https://dkorinteriors.com/wp-content/uploads/2023/05/Living-room-design-of-Palm-Beach-home.jpg',
  'https://dkorinteriors.com/wp-content/uploads/2022/10/Waterfront-New-Construction-Home-in-Fort-Lauderdale.jpg',
  'https://dkorinteriors.com/wp-content/uploads/2022/04/Bellini-Bal-Habour-Vacation-Home-Design.jpg',
  'https://dkorinteriors.com/wp-content/uploads/2021/11/Glamorous-Transitional-Home-in-Boca-Raton-FL.jpg',
  'https://dkorinteriors.com/wp-content/uploads/2021/06/Contemporary-interior-design-in-a-racetrack-home-in-Nevada.jpg',
  'https://dkorinteriors.com/wp-content/uploads/2021/01/Expert-interior-decorating-service-for-high-end-Fort-Lauderdale.jpg',
  'https://dkorinteriors.com/wp-content/uploads/2023/02/F1-Miami-Grand-Prix-lounge-design.jpg',
  'https://dkorinteriors.com/wp-content/uploads/2022/08/Office-Building-Design-in-Boca-Raton-Florida.jpg'
];

const categories = ['Residential', 'Penthouse', 'Coastal', 'Commercial'];
const cities = ['North Miami, FL', 'Brickell, Miami, FL', 'Bay Harbor Islands, FL', 'Palm Beach, FL', 'Fort Lauderdale, FL', 'Boca Raton, FL', 'Las Vegas, NV', 'Sunny Isles Beach, FL'];
const palettes = [
  ['#FFFFFF', '#F7F7F7', '#1A1A1A', '#C5A059'],
  ['#1A1A1A', '#555555', '#C5A059', '#FFFFFF'],
  ['#F7F7F7', '#EAEAEA', '#333333', '#D4AF37'],
  ['#FFFFFF', '#111111', '#555555', '#B8860B']
];

const adjectives = ['Modern', 'Luxury', 'Contemporary', 'Minimalist', 'Transitional', 'Eclectic', 'Bespoke', 'Curated', 'Exclusive', 'Timeless'];
const nouns = ['Estate', 'Residence', 'Penthouse', 'Villa', 'Retreat', 'Oasis', 'Manor', 'Haven', 'Sanctuary', 'Chateau'];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const projects = [];

for (let i = 1; i <= 100; i++) {
  const category = categories[getRandomInt(0, categories.length - 1)];
  const title = `${adjectives[getRandomInt(0, adjectives.length - 1)]} ${category === 'Commercial' ? 'Workspace' : nouns[getRandomInt(0, nouns.length - 1)]}`;
  
  // Distribute images
  const coverImage = images[i % images.length];
  const gallery = [
    images[(i + 1) % images.length],
    images[(i + 2) % images.length],
    images[(i + 3) % images.length]
  ];

  projects.push({
    id: `project-${i}-${title.toLowerCase().replace(/\s+/g, '-')}`,
    title: `${title} ${i < 10 ? 'I' : i < 20 ? 'II' : 'III'}`,
    category,
    location: cities[getRandomInt(0, cities.length - 1)],
    year: (2025 - getRandomInt(0, 5)).toString(),
    coverImage,
    gallery,
    description: `A masterclass in high-end ${category.toLowerCase()} design. This property features bespoke spatial planning, hand-selected imported materials, and custom-tailored architectural accents that define modern luxury living. Every detail was meticulously curated to evoke emotion and provide frictionless living.`,
    palette: palettes[getRandomInt(0, palettes.length - 1)],
    specs: {
      sqft: `${getRandomInt(3000, 12000).toLocaleString()} sq ft`,
      rooms: category === 'Commercial' ? 'Open Plan Office / 4 Suites' : `${getRandomInt(3, 7)} Beds / ${getRandomInt(3, 8)}.5 Baths`,
      timeline: `${getRandomInt(8, 24)} Months`
    }
  });
}

const fileContent = `export interface Project {
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

export const PROJECTS_DATA: Project[] = ${JSON.stringify(projects, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../data/projects.ts'), fileContent, 'utf8');
console.log('Generated 100 projects in data/projects.ts');
