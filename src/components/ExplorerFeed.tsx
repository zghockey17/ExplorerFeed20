import { useState, useRef, useEffect } from 'react';
import { VideoCard } from './VideoCard';
import { SkipModal } from './SkipModal';
import { FeedHeader } from './FeedHeader';
import { videoData } from '../data/videoData';

export function ExplorerFeed() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSkipModal, setShowSkipModal] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
    setTouchEnd(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || isTransitioning) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    if (Math.abs(distance) > minSwipeDistance) {
      setIsTransitioning(true);
      
      if (distance > 0 && currentIndex < videoData.length - 1) {
        // Swipe up - next video
        setCurrentIndex(currentIndex + 1);
      } else if (distance < 0 && currentIndex > 0) {
        // Swipe down - previous video
        setCurrentIndex(currentIndex - 1);
      }
      
      // Reset transition lock after animation
      setTimeout(() => setIsTransitioning(false), 600);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Handle wheel scroll for desktop
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (e.deltaY > 0 && currentIndex < videoData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    
    // Reset transition lock after animation
    setTimeout(() => setIsTransitioning(false), 600);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => container.removeEventListener('wheel', handleWheel);
    }
  }, [currentIndex, isTransitioning]);

  // Auto-show skip modal after 3 AI videos
  useEffect(() => {
    const currentVideo = videoData[currentIndex];
    if (currentVideo.type === 'ai' && currentIndex >= 2) {
      const timer = setTimeout(() => {
        setShowSkipModal(true);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const handleSkipToVIN = () => {
    const nextVINIndex = videoData.findIndex((v, i) => i > currentIndex && v.type === 'vin');
    if (nextVINIndex !== -1) {
      setCurrentIndex(nextVINIndex);
    }
    setShowSkipModal(false);
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <FeedHeader />
      
      {/* Video Cards - smooth transition */}
      <div 
        className="h-full transition-transform duration-500 ease-out"
        style={{ 
          transform: `translateY(-${currentIndex * 100}vh)`,
        }}
      >
        {videoData.map((video, index) => (
          <VideoCard
            key={video.id}
            video={video}
            isActive={index === currentIndex}
            onSkip={() => setShowSkipModal(true)}
          />
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
        {videoData.map((_, index) => (
          <div
            key={index}
            className={`w-1 h-8 rounded-full transition-all ${
              index === currentIndex 
                ? 'bg-white' 
                : index < currentIndex 
                ? 'bg-white/40' 
                : 'bg-white/20'
            }`}
          />
        ))}
      </div>

      {/* Skip Modal */}
      {showSkipModal && (
        <SkipModal
          onSkip={handleSkipToVIN}
          onKeepWatching={() => setShowSkipModal(false)}
        />
      )}
    </div>
  );
}