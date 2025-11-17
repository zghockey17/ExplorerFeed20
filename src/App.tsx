import { useState } from 'react';
import { ExplorerFeed } from './components/ExplorerFeed';
import { WelcomeScreen } from './components/WelcomeScreen';
import { BottomNavigation } from './components/BottomNavigation';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'feed'>('welcome');

  if (currentScreen === 'welcome') {
    return <WelcomeScreen onContinue={() => setCurrentScreen('feed')} />;
  }

  return (
    <div className="min-h-screen bg-carmax-navy">
      <ExplorerFeed />
      <BottomNavigation activeTab="explore" />
    </div>
  );
}
