import { ArrowLeft, Search, SlidersHorizontal, ArrowUpDown, MapPin, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import { useState } from 'react';

const savedCars = [
  {
    id: '1',
    name: '2018 Mitsubishi Mirage ES',
    price: '$13,599',
    miles: '41K miles',
    location: 'Only available at CarMax Charlottesville, VA',
    image: 'https://images.unsplash.com/photo-1664268497894-d4bd39d2dbc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNaXRzdWJpc2hpJTIwTWlyYWdlJTIwcmVkfGVufDF8fHx8MTc2MzQyMDI5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: '2',
    name: '2017 Infiniti Q60 Premium',
    price: '$24,998',
    miles: '64K miles',
    location: 'Available at multiple locations',
    image: 'https://images.unsplash.com/photo-1737034164564-5b915f64e18a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmZpbml0aSUyMFE2MCUyMGdyYXl8ZW58MXx8fHwxNzYzNDIwMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function FavoritesPage() {
  const [favorites, setFavorites] = useState(savedCars.map(car => car.id));

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-carmax-navy pb-24">
      {/* Header */}
      <div className="px-4 pt-3 pb-2 flex items-center justify-between border-b border-white/10">
        <ArrowLeft className="w-6 h-6 text-carmax-cyan" />
        <h2 className="text-white">{savedCars.length} matches</h2>
        <Search className="w-6 h-6 text-carmax-cyan" />
      </div>

      {/* Filters */}
      <div className="px-4 py-3 flex gap-2 overflow-x-auto">
        <button className="flex items-center gap-2 px-4 py-2 border border-carmax-cyan/50 rounded-full text-carmax-cyan text-sm whitespace-nowrap">
          <SlidersHorizontal className="w-4 h-4" />
          Filters (1)
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full text-white text-sm whitespace-nowrap">
          <ArrowUpDown className="w-4 h-4" />
          Sort
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-white/30 rounded-full text-carmax-cyan text-sm whitespace-nowrap">
          <MapPin className="w-4 h-4" />
          Distance
        </button>
      </div>

      {/* Car Cards */}
      <div className="px-4 space-y-4 pt-2">
        {savedCars.map((car) => (
          <div key={car.id} className="bg-white rounded-lg overflow-hidden">
            <div className="relative">
              <ImageWithFallback
                src={car.image}
                alt={car.name}
                className="w-full aspect-video object-cover"
              />
              <button 
                onClick={() => toggleFavorite(car.id)}
                className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
              >
                <Heart 
                  className={`w-6 h-6 ${
                    favorites.includes(car.id) 
                      ? 'fill-carmax-navy text-carmax-navy' 
                      : 'text-carmax-navy'
                  }`}
                />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-carmax-navy mb-1">{car.name}</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-carmax-navy text-xl">{car.price}</span>
                <span className="text-slate-600">· {car.miles}</span>
              </div>
              <p className="text-slate-600 text-sm">{car.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Save Search Button */}
      <div className="fixed bottom-24 right-4 z-40">
        <button className="bg-carmax-yellow text-carmax-navy px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
          <span>💾</span>
          <span>Save search</span>
        </button>
      </div>
    </div>
  );
}
