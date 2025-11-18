import trailExplorationVideo from '../assets/20251117_1929_01kaa5t39repragwtnb8sy116t.mov';
import coastalDriveVideo from '../assets/20251117_1931_01kaa5ttx5fgz8ny1zhrcc75gg.mov';

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
  videoUrl?: string;
  posterUrl?: string;
}

export const videoData: VideoData[] = [
  {
    id: 'ai-truck',
    type: 'ai',
    title: 'Overland Escape Concepts',
    subtitle: '✨ AI-Generated Inspiration',
    description: 'Sunset ridge lines, rooftop tents, and all-wheel traction for wherever you disappear on long weekends.',
    details: ['Trail Mode', 'Rooftop Camper', 'Cargo Pods'],
    videoUrl: trailExplorationVideo,
    posterUrl:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 'ai-suv',
    type: 'ai',
    title: 'Coastal Rally Energy',
    subtitle: '✨ AI-Generated Inspiration',
    description: 'Foamy dunes, rally-grade lighting, and dusty hero shots that feel straight out of a launch film.',
    details: ['Baja Kit', 'Sand Mode', 'Aux Lights'],
    videoUrl: coastalDriveVideo,
    posterUrl:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 'ai-sedan',
    type: 'ai',
    title: 'Neon Night Cruisers',
    subtitle: '✨ AI-Generated Inspiration',
    description: 'City rooftops, synth beats, and glossy fastbacks for the “up-all-night” vibe.',
    details: ['Ambient Glow', 'Performance Tune', 'Downtown Drop'],
    imageUrl:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1080&q=80',
  },
  {
    id: 'vin-1',
    type: 'vin',
    title: '2023 Ford Bronco Badlands',
    subtitle: 'VIN: 1FMEE5DP6PL123456',
    description: 'Sasquatch package, trail camera, and removable doors. Ready today in Charlottesville.',
    price: '$44,998',
    priceDetails: 'or $719/mo',
    fitScore: 95,
    details: ['12k miles', '2.7L EcoBoost', 'At Charlottesville', 'CarMax QC'],
    imageUrl:
      'https://images.unsplash.com/photo-1645467299695-9509cb54758f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8Zm9yZCUyMGJyb25jb3xlbnwwfHx8fDE3NjM0MjY4MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'vin-2',
    type: 'vin',
    title: '2022 Tesla Model Y Long Range',
    subtitle: 'VIN: 5YJYGDEE7NF123789',
    description: 'Dual-motor AWD with Full Self-Driving beta enabled. Includes mobile connector kit.',
    price: '$47,998',
    priceDetails: 'or $759/mo',
    fitScore: 92,
    details: ['18k miles', 'AWD', 'At Richmond', 'Eligible for home delivery'],
    imageUrl:
      'https://images.unsplash.com/photo-1676754568744-7852efc67c40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dGVzbGElMjBtb2RlbCUyMHl8ZW58MHx8fHwxNzYzNDI2ODQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'vin-3',
    type: 'vin',
    title: '2023 Mazda CX-5 Turbo Signature',
    subtitle: 'VIN: JM3KFBDM5P0123456',
    description: 'Terracotta leather, Bose Premium Audio, and panoramic roof. Sporty yet refined.',
    price: '$33,498',
    priceDetails: 'or $545/mo',
    fitScore: 90,
    details: ['16k miles', 'AWD', 'At Raleigh', '360° camera'],
    imageUrl:
      'https://images.unsplash.com/photo-1743114713503-b698b8433f03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NXx8bWF6ZGElMjBjeC01fGVufDB8fHx8MTc2MzQyNjg3MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'vin-4',
    type: 'vin',
    title: '2021 Subaru Outback Onyx XT',
    subtitle: 'VIN: 4S4BTGPD3M3123456',
    description: 'Factory black accents, StarTex interior, and full EyeSight safety suite.',
    price: '$30,498',
    priceDetails: 'or $509/mo',
    fitScore: 93,
    details: ['29k miles', 'Turbo AWD', 'At Norfolk', 'Certified'],
    imageUrl:
      'https://images.unsplash.com/photo-1609772168759-418d69e4b5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8c3ViYXJ1JTIwb3V0YmFja3xlbnwwfHx8fDE3NjM0MjY4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'vin-5',
    type: 'vin',
    title: '2023 Hyundai Tucson Hybrid Limited',
    subtitle: 'VIN: 5NMJECAE7PH123456',
    description: 'Hands-free liftgate, Highway Driving Assist, and 38 MPG combined.',
    price: '$34,498',
    priceDetails: 'or $562/mo',
    fitScore: 88,
    details: ['17k miles', 'Hybrid AWD', 'At Frederick', 'Wireless CarPlay'],
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1745857207285-0e566466d30d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8aHl1bmRhaSUyMHR1Y3NvbnxlbnwwfHx8fDE3NjM0MjY5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];
