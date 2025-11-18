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
    id: 'ai-truck',
    type: 'ai',
    title: 'Truck Explorer',
    fitScore: 88,
    imageUrl: 'https://images.unsplash.com/photo-1589390948789-416cb1c195f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWNrdXAlMjB0cnVjayUyMG1vdW50YWluJTIwZGlydCUyMHJvYWQlMjBzdW5zZXR8ZW58MXx8fHwxNzYzNDI0NDY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'ai-suv',
    type: 'ai',
    title: 'SUV Explorer',
    fitScore: 88,
    imageUrl: 'https://images.unsplash.com/photo-1696339915374-cab901a57404?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTVVYlMjBzY2VuaWMlMjBvdmVybG9vayUyMG1vdW50YWlufGVufDF8fHx8MTc2MzQyNDQ2NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 'ai-sedan',
    type: 'ai',
    title: 'Sedan Explorer',
    fitScore: 88,
    imageUrl: 'https://images.unsplash.com/photo-1649785118569-f2a2dd112564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWRhbiUyMGRvd250b3duJTIwY2l0eSUyMGR1c2t8ZW58MXx8fHwxNzYzNDI0NDY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];