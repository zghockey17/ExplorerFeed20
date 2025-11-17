import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';
import welcomeImage from 'figma:asset/9c4c1e09c00774578df9f1d5d2cc6d9bec001596.png';

interface WelcomeScreenProps {
  onContinue: () => void;
}

export function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-carmax-navy flex flex-col">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 pt-3 pb-2">
        <div className="flex items-center gap-1 text-white/90">
          <span className="text-sm">◀ App Store</span>
        </div>
        <div className="flex items-center gap-2 text-white/90">
          <span className="text-sm">9:13</span>
          <span className="text-sm">🌙</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-white/90">📶</span>
          <span className="text-white/90">📡</span>
          <span className="text-white/90">🔋</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="flex-shrink-0">
        <ImageWithFallback 
          src={welcomeImage} 
          alt="CarMax store with customers" 
          className="w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-5 pt-8 pb-6">
        <h1 className="text-white mb-3">Welcome to the CarMax App</h1>
        <p className="text-white/80 mb-8">
          Sign-in to customize your search, reserve a car or make a payment.
        </p>

        {/* CTA Buttons */}
        <div className="space-y-4 mb-auto">
          <Button 
            className="w-full bg-carmax-yellow text-carmax-navy hover:bg-carmax-yellow/90 h-14 rounded-md"
          >
            SIGN IN
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full border-2 border-white text-white hover:bg-white/10 h-14 rounded-md"
          >
            CREATE ACCOUNT
          </Button>

          <button 
            onClick={onContinue}
            className="w-full text-carmax-cyan hover:text-carmax-cyan/80 h-14"
          >
            CONTINUE AS GUEST
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-xs text-white/60 leading-relaxed">
          By using the CarMax App, you consent to the monitoring and storing of your current and future interactions with the App, including with a CarMax vendor, for use in improving and personalizing our services. We will never sell your information. See our{' '}
          <span className="text-carmax-cyan">Privacy Policy</span> for details.
        </div>
      </div>

      {/* Home Indicator */}
      <div className="flex justify-center pb-2">
        <div className="w-32 h-1 bg-white/30 rounded-full"></div>
      </div>
    </div>
  );
}
