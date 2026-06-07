import { Button } from "../components/ui/button";
import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    // bg-zinc-950 ensures a dark background base while the image loads
    <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden bg-zinc-950 text-white">
      
      {/* Background Image Layer */}
      <img
        src="/hero-bg.jpg" // Makes sure it uses the exact same wallpaper as your Hero
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none z-0 opacity-25"
      />
      
      {/* Dark Overlay Layer for readable text */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50 z-0 pointer-events-none" />

      {/* Content Box - Kept at z-10 to stay on top of the image */}
      <div className="text-center max-w-md relative z-10">
        <h1 className="text-9xl font-bold text-primary/20 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4 text-white">Page Not Found</h2>
        <p className="text-slate-300 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto border-slate-700 text-black hover:bg-white/10" 
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}