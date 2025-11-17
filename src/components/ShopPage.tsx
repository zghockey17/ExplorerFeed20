import { Search, Bookmark } from 'lucide-react';
import { Button } from './ui/button';

const vehicleTypes = [
  { name: 'Convertibles', icon: '🚗' },
  { name: 'Coupes', icon: '🚗' },
  { name: 'Hatchbacks', icon: '🚗' },
  { name: 'Luxury Vehicles', icon: '🚗' },
  { name: 'Minivans', icon: '🚙' },
  { name: 'Pickup Trucks', icon: '🛻' },
  { name: 'Sedans', icon: '🚗' },
  { name: 'SUVs', icon: '🚙' },
];

export function ShopPage() {
  return (
    <div className="min-h-screen bg-carmax-navy pb-24">
      {/* Header */}
      <div className="px-4 pt-12 pb-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-white">Shop</h1>
          <button className="flex items-center gap-2 text-carmax-cyan border border-carmax-cyan/50 rounded-lg px-3 py-2">
            <Bookmark className="w-4 h-4" />
            <span className="text-sm">Saved searches</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="bg-carmax-blue border border-white/20 rounded-lg p-4 mb-6 flex items-center gap-3">
          <Search className="w-5 h-5 text-white/60" />
          <span className="text-white/60">Search by Make, Model, or Type</span>
        </div>
      </div>

      {/* Vehicle Type Grid */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-4 mb-6">
          {vehicleTypes.map((type) => (
            <button
              key={type.name}
              className="bg-carmax-blue border border-white/20 rounded-lg p-6 flex flex-col items-center justify-center gap-3 hover:border-carmax-cyan/50 transition-colors aspect-square"
            >
              <div className="text-5xl">{type.icon}</div>
              <span className="text-white text-center">{type.name}</span>
            </button>
          ))}
        </div>

        {/* See Matches Button */}
        <Button className="w-full bg-carmax-cyan/20 text-white border border-carmax-cyan hover:bg-carmax-cyan/30 h-14">
          SEE MATCHES
        </Button>
      </div>
    </div>
  );
}
