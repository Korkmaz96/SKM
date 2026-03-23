import heroImage from "@/assets/hero-architecture.jpg";
import { homepage } from "@/content/content";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white text-architectural mb-6 reveal">
          {homepage.hero.headline}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide mb-4 reveal-delayed">
          {homepage.hero.subheadline}
        </p>
        <p className="text-lg md:text-xl text-white/70 font-light max-w-2xl mx-auto reveal-delayed">
          {homepage.hero.description}
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed">
        <div className="w-px h-16 bg-white/40" />
        <div className="text-minimal text-white/60 mt-4 rotate-90 origin-center">
          SCROLL
        </div>
      </div>
    </section>
  );
};

export default Hero;
