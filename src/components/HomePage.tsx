import { Search, MapPin, ChevronDown, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const brands = [
  { name: 'Acura', image: 'https://images.unsplash.com/photo-1616617580567-dc2893330db4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBY3VyYSUyMHdoaXRlJTIwU1VWfGVufDF8fHx8MTc2MzQyMDI5MXww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'BMW', image: 'https://images.unsplash.com/photo-1660825551139-81fd757803ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCTVclMjB3aGl0ZSUyMFNVVnxlbnwxfHx8fDE3NjM0MjAyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Cadillac', image: 'https://images.unsplash.com/photo-1675999514437-e7cbc3604d4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYWRpbGxhYyUyMHdoaXRlfGVufDF8fHx8MTc2MzQyMDI5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Audi', image: 'https://images.unsplash.com/photo-1728711283509-906e153833ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBdWRpJTIwd2hpdGUlMjBTVVZ8ZW58MXx8fHwxNzYzNDIwMjkyfDA&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Buick', image: 'https://images.unsplash.com/photo-1684849311625-b66671fb66d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdWljayUyMHdoaXRlJTIwU1VWfGVufDF8fHx8MTc2MzQyMDI5Mnww&ixlib=rb-4.1.0&q=80&w=1080' },
  { name: 'Chevrolet', image: 'https://images.unsplash.com/photo-1527116897065-eb59c912c965?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGV2cm9sZXQlMjB3aGl0ZSUyMFNVVnxlbnwxfHx8fDE3NjM0MjAyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
];

export function HomePage() {
  return (
    <div className="h-screen bg-carmax-navy pb-24 overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 px-4 pt-8 pb-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-white">Welcome</h1>
          <Search className="w-6 h-6 text-white" />
        </div>

        {/* Location Selector */}
        <button className="flex items-center gap-2 text-white mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">CarMax Charlottesville</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* Shop the Lot Card */}
        <div className="bg-carmax-blue border border-carmax-cyan/30 rounded-lg p-3 mb-4">
          <div className="flex items-start gap-3">
            <BarChart3 className="w-6 h-6 text-carmax-cyan flex-shrink-0" />
            <div>
              <p className="text-white text-sm">
                Quickly check car information and availability.{' '}
                <span className="text-carmax-cyan">Shop the lot.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="space-y-2">
          <Button className="w-full bg-carmax-yellow text-carmax-navy hover:bg-carmax-yellow/90 h-12">
            SIGN IN
          </Button>
          <Button 
            variant="outline" 
            className="w-full border-2 border-white text-white hover:bg-white/10 h-12"
          >
            CREATE ACCOUNT
          </Button>
        </div>
      </div>

      {/* Shop by Make */}
      <div className="flex-1 px-4 overflow-hidden flex flex-col min-h-0">
        <div className="flex items-center justify-between mb-3 flex-shrink-0">
          <h2 className="text-white">Shop by make</h2>
          <button className="text-carmax-cyan text-sm">Shop all</button>
        </div>

        <div className="grid grid-cols-2 gap-3 overflow-y-auto pb-4">
          {brands.map((brand) => (
            <div 
              key={brand.name}
              className="bg-white rounded-lg overflow-hidden flex-shrink-0"
            >
              <div className="aspect-[4/3] relative">
                <ImageWithFallback
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-2">
                <p className="text-carmax-navy text-sm">{brand.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}