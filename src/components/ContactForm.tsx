import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Calendar, User, Phone, MessageCircle } from 'lucide-react';
import ConductModal from './ConductModal';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    whatsapp: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.birthDate || !formData.whatsapp) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    // Open conduct modal before redirect
    setIsModalOpen(true);
  };

  const handleConfirmContact = () => {
    // Format message for WhatsApp
    const message = encodeURIComponent(
      `🙏 *Solicitação de Consulta - Oráculo de Nkossi*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*Data de Nascimento:* ${formData.birthDate}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n\n` +
      `*Mensagem:*\n${formData.message || 'Gostaria de agendar uma consulta.'}`
    );

    // WhatsApp redirect
    const whatsappUrl = `https://wa.me/5531973422561?text=${message}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({ name: '', birthDate: '', whatsapp: '', message: '' });
    setIsModalOpen(false);

    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será direcionado para iniciar sua conversa.",
    });
  };

  return (
    <>
      <section id="contato" className="py-24 lg:py-32 bg-gradient-sacred relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-50" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <span className="text-primary/80 text-sm font-medium tracking-[0.2em] uppercase mb-4 block">
                Inicie Sua Jornada
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                <span className="text-foreground">Agende Sua</span>{' '}
                <span className="text-gradient-sacred">Consulta</span>
              </h2>
              <p className="text-foreground/60 text-lg leading-relaxed">
                Preencha o formulário abaixo e receba orientação personalizada 
                através do sagrado oráculo de Nkossi.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 lg:p-12 shadow-sacred"
            >
              <div className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2 text-foreground/80">
                    <User className="w-4 h-4 text-primary" />
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary h-12"
                    required
                  />
                </div>

                {/* Birth Date */}
                <div className="space-y-2">
                  <Label htmlFor="birthDate" className="flex items-center gap-2 text-foreground/80">
                    <Calendar className="w-4 h-4 text-primary" />
                    Data de Nascimento *
                  </Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary h-12"
                    required
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="flex items-center gap-2 text-foreground/80">
                    <Phone className="w-4 h-4 text-primary" />
                    WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary h-12"
                    required
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2 text-foreground/80">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    Sua Mensagem (opcional)
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Descreva brevemente o motivo da sua consulta..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-border/50 focus:border-primary min-h-[120px] resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="sacred" size="xl" className="w-full gap-3">
                  <Send className="w-5 h-5" />
                  Enviar Solicitação
                </Button>

                {/* Disclaimer */}
                <p className="text-center text-foreground/40 text-sm">
                  Ao enviar, você concorda em ser contatado via WhatsApp.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      <ConductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmContact}
      />
    </>
  );
};

export default ContactForm;
