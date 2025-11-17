import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import welcomeHero from 'figma:asset/5dc9ebc7c286596372507a44b34c15b33257f477.png';

interface WelcomeScreenProps {
  onContinue: () => void;
}

export function WelcomeScreen({ onContinue }: WelcomeScreenProps) {
  return (
    <div className="h-screen bg-carmax-navy flex flex-col">
      {/* Status Bar */}
      <div className="flex items-center justify-between px-4 pt-2 pb-1">
        <span className="text-white text-xs">9:13</span>
        <div className="flex items-center gap-2 text-white text-xs">
          <span>📶 📡 🔋</span>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-48 flex-shrink-0 overflow-hidden">
        <img 
          src={welcomeHero}
          alt="CarMax - Wanna Drive?" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 px-5 pt-16 pb-6 flex flex-col">
        <h1 className="text-white mb-3">Welcome to the CarMax App</h1>
        <p className="text-white/80 text-sm mb-8">
          Sign-in to customize your search, reserve a car or make a payment.
        </p>

        <div className="space-y-3 mb-8">
          <Button className="w-full bg-carmax-yellow text-carmax-navy hover:bg-carmax-yellow/90 h-12 rounded-md">
            SIGN IN
          </Button>
          
          <Button variant="outline" className="w-full border-2 border-white text-white hover:bg-white/10 h-12 rounded-md">
            CREATE ACCOUNT
          </Button>

          <button 
            onClick={onContinue}
            className="w-full text-carmax-cyan hover:text-carmax-cyan/80 h-12 text-sm"
          >
            CONTINUE AS GUEST
          </button>
        </div>

        <div className="mt-auto text-xs text-white/50 leading-relaxed mb-4">
          By using the CarMax App, you consent to our <span className="text-carmax-cyan">Privacy Policy</span>.
        </div>

        <div className="flex justify-center">
          <div className="w-32 h-1 bg-white/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}