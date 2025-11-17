import { Search, MapPin, ChevronDown } from 'lucide-react';

export function FeedHeader() {
  return (
    <div className="absolute top-0 left-0 right-0 z-30 bg-gradient-to-b from-black/60 to-transparent">
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <div className="text-white/90 text-xs">
          9:13
        </div>
        <div className="flex items-center gap-1 text-white/90">
          <span className="text-xs">📶</span>
          <span className="text-xs">📡</span>
          <span className="text-xs">🔋</span>
        </div>
      </div>
      
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-white" />
          <span className="text-white">CarMax Charlottesville</span>
          <ChevronDown className="w-4 h-4 text-white" />
        </div>
        <Search className="w-5 h-5 text-white" />
      </div>

      <div className="px-4 pb-3">
        <h2 className="text-white">Explorer Feed</h2>
        <p className="text-white/80 text-sm">Swipe for your perfect match</p>
      </div>
    </div>
  );
}
