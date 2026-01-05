import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://i.imgur.com/REfqd8G.jpeg)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 overlay-radial" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center pt-24">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary/90 text-sm font-medium tracking-wide">
              Tradição Kongo-Angola
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight">
            <span className="text-foreground">O Poder de</span>
            <br />
            <span className="text-gradient-sacred">Nkossi</span>
            <br />
            <span className="text-foreground/90 text-3xl md:text-4xl lg:text-5xl font-medium">
              guia seu destino
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
            Através do sagrado oráculo ancestral, Tata João Kongogile revela os caminhos 
            ocultos e as respostas que sua alma busca há gerações.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="sacred" size="xl" asChild>
              <a href="#contato">
                Consultar o Oráculo
              </a>
            </Button>
            <Button variant="sacredOutline" size="xl" asChild>
              <a href="#historia">
                Conhecer a História
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-foreground/50">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-display font-bold text-primary">25+</p>
              <p className="text-sm">Anos de Tradição</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-display font-bold text-primary">3.000+</p>
              <p className="text-sm">Vidas Transformadas</p>
            </div>
            <div className="w-px h-12 bg-border hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-display font-bold text-primary">100%</p>
              <p className="text-sm">Tradição Autêntica</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#historia"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/40 hover:text-primary transition-colors animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
