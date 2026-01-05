import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HistorySection from '@/components/HistorySection';
import OracleSection from '@/components/OracleSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>João Kongogile | Oráculo de Nkossi - Tradição Kongo-Angola</title>
        <meta
          name="description"
          content="Consulte o sagrado Oráculo de Nkossi com Tata João Kongogile. Tradição Kongo-Angola autêntica, mais de 25 anos de experiência. Agende sua consulta espiritual."
        />
        <meta
          name="keywords"
          content="Oráculo, Nkossi, Kongo-Angola, Candomblé, Umbanda, consulta espiritual, João Kongogile, búzios"
        />
        <link rel="canonical" href="https://joaokongogile.com.br" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <HistorySection />
        <OracleSection />
        <TestimonialsSection />
        <ContactForm />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
