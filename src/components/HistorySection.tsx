import { Flame, Anchor, Users } from 'lucide-react';

const histories = [
  {
    icon: Flame,
    title: 'A Gênese Banto',
    subtitle: 'África Central',
    description:
      'Nas terras sagradas do antigo Reino do Kongo, nasceu uma tradição que atravessou séculos. Os Nkissi — forças divinas da natureza — eram reverenciados como guardiões da vida, da justiça e do destino. Nkossi, o senhor do ferro e da guerra, personificava a força indomável que protege os justos e abre caminhos através de qualquer obstáculo.',
  },
  {
    icon: Anchor,
    title: 'A Travessia',
    subtitle: 'Resistência no Brasil',
    description:
      'Quando os navios negreiros cruzaram o Atlântico, trouxeram consigo mais do que corpos escravizados — carregavam a memória viva de um povo. Nos porões da dor, os sacerdotes Banto preservaram em sussurros os segredos dos ancestrais. No Brasil, essa tradição renasceu nos terreiros, transformando sofrimento em resistência e fé em liberdade espiritual.',
  },
  {
    icon: Users,
    title: 'Centralização Social',
    subtitle: 'O Terreiro como Núcleo',
    description:
      'O terreiro nunca foi apenas um templo — foi trincheira política, escola de sabedoria ancestral e refúgio para almas perseguidas. Aqui, reis e rainhas africanos se tornaram Tatas e Mametos, preservando hierarquias sagradas que orientavam comunidades inteiras. Cada ritual é um ato de resistência; cada consulta, uma reconexão com a força que nossos antepassados nunca deixaram morrer.',
  },
];

const HistorySection = () => {
  return (
    <section id="historia" className="py-24 lg:py-32 bg-gradient-sacred relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <span className="text-primary/80 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Raízes Ancestrais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">Uma Tradição que</span>
            <br />
            <span className="text-gradient-sacred">Atravessa Séculos</span>
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed">
            Conheça a história sagrada que liga a África ancestral ao Brasil, 
            preservando sabedoria e poder através das gerações.
          </p>
        </div>

        {/* History Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {histories.map((item, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 lg:p-10 hover:border-primary/30 transition-all duration-500 hover:shadow-sacred"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <span className="text-primary/70 text-xs font-medium tracking-wider uppercase">
                {item.subtitle}
              </span>
              <h3 className="text-2xl font-display font-bold text-foreground mt-2 mb-4">
                {item.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {item.description}
              </p>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
