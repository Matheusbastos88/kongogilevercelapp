import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marcos A.',
    location: 'São Paulo, SP',
    category: 'Financeiro',
    text: 'Estava há 3 anos estagnado no emprego. Após a consulta e os trabalhos indicados, em 60 dias recebi uma proposta que triplicou minha renda. Nkossi realmente abre caminhos.',
  },
  {
    name: 'Fernanda L.',
    location: 'Belo Horizonte, MG',
    category: 'Jurídico',
    text: 'Um processo que se arrastava há 5 anos foi resolvido em meu favor em apenas 4 meses depois que busquei a orientação do Tata João. A justiça de Nkossi é real.',
  },
  {
    name: 'Ricardo S.',
    location: 'Rio de Janeiro, RJ',
    category: 'Espiritual',
    text: 'Eu não dormia direito há anos. Depois do trabalho de limpeza espiritual, finalmente encontrei paz. Minha vida mudou completamente.',
  },
  {
    name: 'Ana Paula M.',
    location: 'Curitiba, PR',
    category: 'Relacionamento',
    text: 'Meu casamento estava destruído. O oráculo revelou bloqueios que eu nem imaginava. Hoje, 1 ano depois, somos mais unidos do que nunca.',
  },
  {
    name: 'Carlos E.',
    location: 'Salvador, BA',
    category: 'Negócios',
    text: 'Minha empresa estava prestes a falir. Tata João identificou exatamente o que estava errado. Hoje faturo 5x mais. Gratidão eterna.',
  },
  {
    name: 'Juliana R.',
    location: 'Brasília, DF',
    category: 'Saúde',
    text: 'Os médicos não encontravam a causa dos meus sintomas. O Tata João revelou questões espirituais que, uma vez tratadas, me devolveram a saúde.',
  },
  {
    name: 'Pedro H.',
    location: 'Recife, PE',
    category: 'Proteção',
    text: 'Sofria com inveja e olho gordo no trabalho. Depois do ritual de proteção, as coisas mudaram drasticamente. Hoje sou respeitado onde antes era sabotado.',
  },
  {
    name: 'Mariana C.',
    location: 'Fortaleza, CE',
    category: 'Familiar',
    text: 'Minha família estava destruída por brigas. Após as orientações do oráculo, conseguimos reconciliação verdadeira. Somos uma família de novo.',
  },
  {
    name: 'Roberto F.',
    location: 'Goiânia, GO',
    category: 'Carreira',
    text: 'Passei 10 anos tentando concursos sem sucesso. Após a consulta, fui aprovado na primeira tentativa seguinte. O bloqueio foi removido.',
  },
  {
    name: 'Cristina B.',
    location: 'Porto Alegre, RS',
    category: 'Espiritual',
    text: 'Eu estava perdida, sem propósito. O Tata João me reconectou com minha ancestralidade e hoje tenho clareza sobre minha missão de vida.',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-24 lg:py-32 bg-card/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary/80 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
            Testemunhos Reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            <span className="text-foreground">Vidas</span>{' '}
            <span className="text-gradient-sacred">Transformadas</span>
          </h2>
          <p className="text-foreground/60 text-lg leading-relaxed">
            Histórias reais de pessoas que encontraram respostas e transformação 
            através do oráculo sagrado de Nkossi.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 lg:p-8 hover:border-primary/30 transition-all duration-500 hover:shadow-sacred relative"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                {testimonial.category}
              </span>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-foreground/50">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
