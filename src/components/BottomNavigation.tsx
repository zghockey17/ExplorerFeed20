import { Home, Search, Heart, DollarSign, User, Compass } from 'lucide-react';
import { cn } from '../lib/utils';

interface BottomNavigationProps {
  activeTab: 'home' | 'shop' | 'explore' | 'favorites' | 'sell' | 'account';
}

export function BottomNavigation({ activeTab }: BottomNavigationProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'shop', label: 'Shop', icon: Search },
    { id: 'explore', label: 'Explore', icon: Compass },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'sell', label: 'Sell', icon: DollarSign },
    { id: 'account', label: 'MyCarMax', icon: User },
  ] as const;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-carmax-navy border-t border-white/10">
      <div className="flex items-center justify-around px-2 py-2 safe-area-bottom">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={cn(
              "flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors min-w-[60px]",
              activeTab === id
                ? "text-carmax-cyan"
                : "text-white/60 hover:text-white/80"
            )}
          >
            <Icon className="w-5 h-5" />
            <span className="text-[10px]">{label}</span>
          </button>
        ))}
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pb-2">
        <div className="w-32 h-1 bg-white/30 rounded-full"></div>
      </div>
    </div>
  );
}
