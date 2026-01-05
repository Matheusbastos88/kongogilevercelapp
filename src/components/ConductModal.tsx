import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AlertTriangle, CheckCircle } from 'lucide-react';

interface ConductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConductModal = ({ isOpen, onClose, onConfirm }: ConductModalProps) => {
  const guidelines = [
    'Trate o Tata João Kongogile e a tradição com respeito e seriedade.',
    'Seja paciente — consultas espirituais exigem tempo e dedicação.',
    'Trabalhos espirituais não são magia instantânea; resultados variam.',
    'Mantenha sigilo sobre orientações recebidas.',
    'Não solicite trabalhos que prejudiquem terceiros inocentes.',
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border/50 max-w-lg">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-display text-foreground">
            Normas de Conduta
          </DialogTitle>
          <DialogDescription className="text-foreground/60">
            Antes de prosseguir, leia e aceite as orientações abaixo para garantir 
            uma experiência respeitosa e frutífera.
          </DialogDescription>
        </DialogHeader>

        <div className="py-6 space-y-4">
          {guidelines.map((guideline, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-foreground/80 text-sm leading-relaxed">
                {guideline}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
          <p className="text-sm text-foreground/70">
            <strong className="text-primary">Importante:</strong> Trabalhos espirituais 
            são complementares e não substituem tratamentos médicos, psicológicos ou jurídicos.
          </p>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button variant="outline" onClick={onClose} className="sm:flex-1">
            Voltar
          </Button>
          <Button variant="sacred" onClick={onConfirm} className="sm:flex-1">
            Li e Aceito — Continuar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConductModal;
