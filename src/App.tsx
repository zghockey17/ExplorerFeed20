import { useState } from 'react';
import { ExplorerFeed } from './components/ExplorerFeed';
import { WelcomeScreen } from './components/WelcomeScreen';
import { HomePage } from './components/HomePage';
import { ShopPage } from './components/ShopPage';
import { FavoritesPage } from './components/FavoritesPage';
import { BottomNavigation } from './components/BottomNavigation';

type Screen = 'welcome' | 'home' | 'shop' | 'explore' | 'favorites' | 'sell' | 'account';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');

  if (currentScreen === 'welcome') {
    return <WelcomeScreen onContinue={() => setCurrentScreen('home')} />;
  }

  return (
    <div className="min-h-screen bg-carmax-navy">
      {currentScreen === 'home' && <HomePage />}
      {currentScreen === 'shop' && <ShopPage />}
      {currentScreen === 'explore' && <ExplorerFeed />}
      {currentScreen === 'favorites' && <FavoritesPage />}
      {currentScreen === 'sell' && (
        <div className="flex items-center justify-center h-screen">
          <p className="text-white">Sell Page - Coming Soon</p>
        </div>
      )}
      {currentScreen === 'account' && (
        <div className="flex items-center justify-center h-screen">
          <p className="text-white">MyCarMax Page - Coming Soon</p>
        </div>
      )}
      
      <BottomNavigation 
        activeTab={currentScreen as any} 
        onNavigate={setCurrentScreen}
      />
    </div>
  );
}