import { useState, useEffect } from 'react';
import { Heart, Share2, Info, X } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { cn } from '../lib/utils';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { VideoData } from '../data/videoData';

interface VideoCardProps {
  video: VideoData;
  isActive: boolean;
  onSkip?: () => void;
}

export function VideoCard({ video, isActive, onSkip }: VideoCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [watchProgress, setWatchProgress] = useState(0);

  // Simulate video progress
  useEffect(() => {
    if (isActive) {
      setWatchProgress(0);
      const interval = setInterval(() => {
        setWatchProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  return (
    <div className="relative h-screen w-full flex-shrink-0">
      {/* Video Background - Real Image */}
      {video.imageUrl ? (
        <div className="absolute inset-0">
          <ImageWithFallback
            src={video.imageUrl}
            alt={video.title}
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40" />
          
          {/* AI Inspiration overlay effect */}
          {video.type === 'ai' && (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-blue-600/30 mix-blend-overlay" />
          )}
        </div>
      ) : (
        <div 
          className={cn(
            "absolute inset-0 bg-gradient-to-br transition-all duration-700",
            video.type === 'ai' 
              ? "from-purple-900 via-blue-900 to-indigo-900"
              : "from-slate-800 via-slate-700 to-slate-900"
          )}
        >
          {/* Fallback content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="text-white/40 text-9xl">🚗</div>
          </div>
        </div>
      )}

      {/* Video Progress Bar */}
      <div className="absolute top-24 left-0 right-0 h-0.5 bg-white/20 z-40">
        <div 
          className="h-full bg-white transition-all duration-300"
          style={{ width: `${isActive ? watchProgress : 0}%` }}
        />
      </div>

      {/* AI Label */}
      {video.type === 'ai' && (
        <div className="absolute top-28 left-4 z-40">
          <Badge className="bg-purple-500/90 text-white border-0">
            ✨ AI Inspiration
          </Badge>
        </div>
      )}

      {/* Fit Score Badge */}
      {video.fitScore && (
        <div className="absolute top-28 right-4 z-40">
          <div className="bg-green-500 rounded-full px-3 py-1.5 flex items-center gap-1.5">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-white">{video.fitScore}% Match</span>
          </div>
        </div>
      )}

      {/* Video Information Overlay */}
      <div className="absolute bottom-20 left-0 right-0 z-40 px-4 pb-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-24">
        <div className="space-y-3">
          {/* Car Title */}
          <div>
            <h3 className="text-white text-xl">{video.title}</h3>
            {video.subtitle && video.type === 'vin' && (
              <p className="text-white/80">{video.subtitle}</p>
            )}
          </div>

          {/* Details - Only show for VIN videos */}
          {video.type === 'vin' && video.details && (
            <div className="flex flex-wrap gap-2">
              {video.details.map((detail, index) => (
                <Badge key={index} variant="secondary" className="bg-white/20 text-white border-0">
                  {detail}
                </Badge>
              ))}
            </div>
          )}

          {/* Price - Only show for VIN videos */}
          {video.type === 'vin' && video.price && (
            <div className="text-white">
              <span className="text-2xl">{video.price}</span>
              {video.priceDetails && (
                <span className="text-white/60 text-sm ml-2">{video.priceDetails}</span>
              )}
            </div>
          )}

          {/* Description - Only show for VIN videos */}
          {video.type === 'vin' && video.description && (
            <p className="text-white/80 text-sm line-clamp-2">{video.description}</p>
          )}

          {/* CTA Buttons - Only show for VIN videos */}
          {video.type === 'vin' && (
            <div className="flex gap-3 pt-2">
              <Button 
                className="flex-1 bg-carmax-yellow text-carmax-navy hover:bg-carmax-yellow/90 h-12"
              >
                View Details
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 border-white text-white hover:bg-white/10 h-12"
              >
                Hold Car
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Side Actions */}
      <div className="absolute right-4 bottom-32 z-40 flex flex-col gap-6">
        <button 
          onClick={() => setIsSaved(!isSaved)}
          className="flex flex-col items-center gap-1"
        >
          <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <Heart 
              className={cn(
                "w-6 h-6",
                isSaved ? "fill-red-500 text-red-500" : "text-white"
              )} 
            />
          </div>
          <span className="text-white text-xs drop-shadow-lg">{isSaved ? 'Saved' : 'Save'}</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <Share2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-xs drop-shadow-lg">Share</span>
        </button>

        <button className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center border border-white/20">
            <Info className="w-6 h-6 text-white" />
          </div>
          <span className="text-white text-xs drop-shadow-lg">Info</span>
        </button>
      </div>
    </div>
  );
}