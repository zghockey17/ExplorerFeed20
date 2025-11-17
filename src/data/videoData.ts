export interface VideoData {
  id: string;
  type: 'ai' | 'vin';
  title: string;
  subtitle?: string;
  description?: string;
  price?: string;
  priceDetails?: string;
  fitScore?: number;
  details?: string[];
  thumbnail?: string;
  imageUrl?: string;
}

export const videoData: VideoData[] = [
  {
    id: 'ai-1',
    type: 'ai',
    title: 'Weekend Adventure SUVs',
    subtitle: '✨ AI-Generated Inspiration',
    description: 'Explore rugged SUVs perfect for your mountain getaways and outdoor adventures. Spacious, capable, and ready for anything.',
    details: ['4WD', 'Roof Rack', 'High Ground Clearance'],
    imageUrl: 'https://images.unsplash.com/photo-1547233598-6891e69da46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTVVYlMjBtb3VudGFpbiUyMGFkdmVudHVyZXxlbnwxfHx8fDE3NjMxMzMxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'ai-2',
    type: 'ai',
    title: 'Family Road Trip Favorites',
    subtitle: '✨ AI-Generated Inspiration',
    description: 'Comfortable, spacious vehicles ideal for family journeys. Third-row seating, entertainment systems, and ample cargo space.',
    details: ['3rd Row', 'Entertainment', 'Safety Tech'],
    imageUrl: 'https://images.unsplash.com/photo-1758409313902-db8e331f71cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBtaW5pdmFuJTIwcm9hZCUyMHRyaXB8ZW58MXx8fHwxNzYzMTMzMTc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'ai-3',
    type: 'ai',
    title: 'Eco-Friendly Commuters',
    subtitle: '✨ AI-Generated Inspiration',
    description: 'Fuel-efficient hybrids and EVs that make your daily commute affordable and sustainable.',
    details: ['Hybrid', 'Low Emissions', 'High MPG'],
    imageUrl: 'https://images.unsplash.com/photo-1606659473123-719ced9b545a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMGh5YnJpZCUyMGNhcnxlbnwxfHx8fDE3NjMxMzMxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'vin-1',
    type: 'vin',
    title: '2023 Toyota RAV4 Adventure',
    subtitle: 'VIN: 2T3P1RFV8PC123456',
    description: 'One owner, excellent condition. Perfect for weekend adventures with all-weather capability.',
    price: '$32,998',
    priceDetails: 'or $549/mo',
    fitScore: 94,
    details: ['28k miles', 'AWD', 'Clean CarFax', 'At Charlottesville'],
    imageUrl: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUb3lvdGElMjBSQVY0fGVufDF8fHx8MTc2MzEzMzE3OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'vin-2',
    type: 'vin',
    title: '2022 Honda CR-V EX-L',
    subtitle: 'VIN: 7FARW2H85NE123789',
    description: 'Loaded with features. Leather interior, sunroof, and advanced safety technology.',
    price: '$29,998',
    priceDetails: 'or $499/mo',
    fitScore: 91,
    details: ['35k miles', 'Sunroof', 'Leather', 'At Richmond'],
    imageUrl: 'https://images.unsplash.com/photo-1681697390363-1142eb46b76d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIb25kYSUyMENSVnxlbnwxfHx8fDE3NjMxMzMxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'vin-3',
    type: 'vin',
    title: '2023 Mazda CX-5 Touring',
    subtitle: 'VIN: JM3KFBDM5P0123456',
    description: 'Like new! Premium interior with sporty handling. Perfect blend of style and practicality.',
    price: '$31,498',
    priceDetails: 'or $524/mo',
    fitScore: 89,
    details: ['18k miles', 'AWD', 'Premium Audio', 'At Charlottesville'],
    imageUrl: 'https://images.unsplash.com/photo-1722786102929-91e647c74768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYXpkYSUyMENYNXxlbnwxfHx8fDE3NjMxMzMxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'vin-4',
    type: 'vin',
    title: '2021 Subaru Outback',
    subtitle: 'VIN: 4S4BTAFC3M3123456',
    description: 'Adventure-ready wagon with legendary Subaru reliability and standard AWD.',
    price: '$28,998',
    priceDetails: 'or $482/mo',
    fitScore: 92,
    details: ['42k miles', 'AWD', 'Roof Rails', 'At Norfolk'],
    imageUrl: 'https://images.unsplash.com/photo-1681680061152-d3fc0d999a8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdWJhcnUlMjBPdXRiYWNrfGVufDF8fHx8MTc2MzAyMzczM3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'vin-5',
    type: 'vin',
    title: '2023 Hyundai Tucson Hybrid',
    subtitle: 'VIN: 5NMJE3AE3PH123456',
    description: 'Impressive fuel economy meets modern design. Save at the pump without sacrificing style.',
    price: '$33,498',
    priceDetails: 'or $557/mo',
    fitScore: 88,
    details: ['15k miles', 'Hybrid', '38 MPG', 'At Charlottesville'],
    imageUrl: 'https://images.unsplash.com/photo-1705624843697-4461f9dce482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIeXVuZGFpJTIwVHVjc29ufGVufDF8fHx8MTc2MzExOTg4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];