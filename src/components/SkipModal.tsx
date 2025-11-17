import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Sparkles, Car } from 'lucide-react';

interface SkipModalProps {
  onSkip: () => void;
  onKeepWatching: () => void;
}

export function SkipModal({ onSkip, onKeepWatching }: SkipModalProps) {
  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center pb-24 px-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onKeepWatching}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-white rounded-2xl p-6 w-full max-w-md shadow-xl"
      >
        <div className="text-center space-y-4">
          {/* Icon */}
          <div className="flex justify-center gap-3">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
            <div className="w-16 h-16 rounded-full bg-carmax-yellow/20 flex items-center justify-center">
              <Car className="w-8 h-8 text-carmax-navy" />
            </div>
          </div>

          {/* Title */}
          <div>
            <h3 className="text-carmax-navy mb-2">Ready to see real cars?</h3>
            <p className="text-slate-600">
              We've shown you some inspiration. Want to skip ahead to specific vehicles in your area?
            </p>
          </div>

          {/* Actions */}
          <div className="space-y-3 pt-2">
            <Button 
              onClick={onSkip}
              className="w-full bg-carmax-yellow text-carmax-navy hover:bg-carmax-yellow/90 h-12"
            >
              Show Me Available Cars
            </Button>
            <Button 
              onClick={onKeepWatching}
              variant="ghost"
              className="w-full text-carmax-navy hover:bg-slate-100 h-12"
            >
              Keep Exploring Ideas
            </Button>
          </div>

          {/* Micro Survey Option */}
          <p className="text-xs text-slate-500 pt-2">
            💡 Help us improve: <button className="text-carmax-cyan underline">Quick feedback</button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
