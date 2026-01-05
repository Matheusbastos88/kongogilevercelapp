import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const OracleSection = () => {
  return (
    <section
      id="oraculo"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://i.imgur.com/lAb5yxc.jpeg)',
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-pulse-glow">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8">
            <span className="text-foreground">A Encruzilhada</span>
            <br />
            <span className="text-gradient-sacred">das Almas</span>
          </h2>

          {/* Quote */}
          <blockquote className="relative">
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-primary/20 text-8xl font-display">
              "
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl font-display text-foreground/90 leading-relaxed italic mb-8">
              O Oráculo não prediz apenas o futuro; ele revela quem você precisa ser para conquistá-lo.
            </p>
            <footer className="text-primary/80 font-medium">
              — Tata João Kongogile
            </footer>
          </blockquote>

          {/* Description */}
          <div className="mt-12 space-y-6 text-foreground/70 text-lg leading-relaxed max-w-3xl mx-auto">
            <p>
              Na tradição Kongo-Angola, o oráculo é muito mais do que uma ferramenta de adivinhação. 
              É um espelho sagrado que reflete a verdade da sua alma, revelando padrões ocultos, 
              bloqueios ancestrais e os caminhos que o universo preparou especificamente para você.
            </p>
            <p>
              Através dos búzios consagrados a Nkossi, Tata João Kongogile estabelece uma ponte 
              entre o mundo visível e invisível, trazendo mensagens claras e orientações práticas 
              para as questões mais profundas da sua vida.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-12">
            <Button variant="sacred" size="xl" asChild>
              <a href="#contato" className="gap-3">
                <Sparkles className="w-5 h-5" />
                Receber Minha Leitura
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OracleSection;
