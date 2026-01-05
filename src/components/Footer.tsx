import { Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-background border-t border-border/50 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold text-gradient-sacred">
              João Kongogile
            </h3>
            <p className="text-foreground/50 text-sm mt-2">
              Oráculo de Nkossi • Tradição Kongo-Angola
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center text-foreground/60 hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="text-center text-foreground/40 text-sm">
            <p>© {new Date().getFullYear()} João Kongogile. Todos os direitos reservados.</p>
            <p className="mt-1">
              Preservando a tradição ancestral Kongo-Angola no Brasil.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
