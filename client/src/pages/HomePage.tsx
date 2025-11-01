import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FeatureGrid from "@/components/FeatureGrid";
import GIBadge from "@/components/GIBadge";
import AnimatedSection from "@/components/AnimatedSection";
import Testimonial from "@/components/Testimonial";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Award, Heart, Sprout, Mountain, Users, ArrowRight, Star, TrendingUp, Package } from "lucide-react";
import { useLocation } from "wouter";

// Public images
const heroImage = '/images/İspir_landscape_hero_image_f4ebad56.png';
const beansImage = '/images/İspir_beans_product_photo_2cbc159a.png';
const molassesImage = '/images/Mulberry_molasses_product_photo_6290a604.png';

export default function HomePage() {
  const [, setLocation] = useLocation();

  const openWhatsApp = () => {
    window.open('https://wa.me/905318984145?text=Merhaba,%20MİSPİR%20GIDA%20ürünleri%20hakkında%20toptan%20fiyat%20teklifi%20almak%20istiyorum.', '_blank');
  };
  
  const features = [
    {
      icon: Leaf,
      title: "100% Doğal",
      description: "Hiçbir kimyasal katkı maddesi kullanılmadan, doğal yöntemlerle üretilir"
    },
    {
      icon: Award,
      title: "Coğrafi İşaret",
      description: "Karnavas Dut Pekmezi Tescil No: 112 ile kalite garantisi"
    },
    {
      icon: Heart,
      title: "Geleneksel Üretim",
      description: "Asırlardır süregelen geleneksel yöntemlerle hazırlanır"
    },
    {
      icon: Sprout,
      title: "El Emeği",
      description: "Tüm ürünlerimiz özenle, elle ayıklanarak hazırlanır"
    },
    {
      icon: Mountain,
      title: "İspir Kökenli",
      description: "Erzurum'un bereketli topraklarından, yüksek dağlardan"
    },
    {
      icon: Users,
      title: "Yerel Üretici",
      description: "Bölge halkını destekleyen, yerel ekonomiye katkı sağlayan üretim"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Ana Sayfa"
        description="MİSPİR GIDA - Coğrafi işaretli İspir Kuru Fasulyesi ve Karnavas Dut Pekmezi üreticisi. Erzurum İspir'den %100 doğal, geleneksel yöntemlerle üretilmiş premium gıda ürünleri."
        keywords="İspir kuru fasulyesi, Karnavas dut pekmezi, coğrafi işaret, doğal gıda, Erzurum, İspir, geleneksel üretim, organik fasulye, doğal pekmez"
      />
      <Navigation />
      
      {/* Premium Product Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Brand Story */}
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Badge className="bg-[#C9A227] text-white mb-6 px-4 py-2 text-sm font-semibold">
                Erzurum, İspir
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6" 
              data-testid="text-hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Doğanın Saf Lezzeti
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" 
              data-testid="text-hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Yüzyıllık gelenekle üretilen, coğrafi işaret tescilli doğal gıdalar
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground"
                onClick={() => setLocation('/urunler')}
                data-testid="button-products"
              >
                Ürünleri Keşfet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-background/20 backdrop-blur-md border-white/30 text-white hover:bg-background/30"
                onClick={openWhatsApp}
                data-testid="button-contact"
              >
                Toptan Teklif Al
              </Button>
            </motion.div>

            {/* Trust Markers */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div>
                <div className="text-3xl font-bold font-serif text-[#C9A227]">100%</div>
                <div className="text-sm text-white/80">Doğal İçerik</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-serif text-[#C9A227]">2</div>
                <div className="text-sm text-white/80">Coğrafi İşaret</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-serif text-[#C9A227]">2 Ürün</div>
                <div className="text-sm text-white/80">Premium Koleksiyon</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: GI Badge Showcase */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="bg-background/95 backdrop-blur-md p-8 max-w-md">
              <CardContent className="p-0">
                <motion.div 
                  className="flex justify-center mb-6"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <GIBadge size="lg" />
                </motion.div>
                <h3 className="font-serif text-2xl font-bold text-center mb-4">
                  Coğrafi İşaret Tescilli
                </h3>
                <p className="text-muted-foreground text-center mb-6">
                  Karnavas Dut Pekmezi, T.C. Türk Patent Enstitüsü tarafından 
                  tescil edilmiş premium kalite ürünüdür.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setLocation('/cografi-isaret')}
                  data-testid="button-gi-info"
                >
                  Detaylı Bilgi
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Signature Product Collection */}
      <section className="py-20 md:py-32 bg-[#EFE9E1]/30 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4 px-4 py-2">
              Premium Koleksiyon
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-products-title">
              İmza Ürünlerimiz
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-products-subtitle">
              Coğrafi işaret tescilli ve geleneksel yöntemlerle üretilen eşsiz lezzetler
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1}>
              <ProductCard
                name="İspir Kuru Fasulyesi"
                tagline="İnce kabuklu, erken pişen"
                image={beansImage}
                origin="Erzurum, İspir"
                certificationNumber="523"
                certified={true}
                href="/urunler#fasulye"
                onContactClick={openWhatsApp}
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <ProductCard
                name="Karnavas Dut Pekmezi"
                tagline="Baldan tatlı eşsiz tat"
                image={molassesImage}
                origin="Erzurum, Olur - Karnavas"
                certificationNumber="112"
                certified={true}
                href="/urunler#pekmez"
                onContactClick={openWhatsApp}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust & Statistics */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Rakamlarla MİSPİR GIDA
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Doğal üretim ve kaliteli hizmet anlayışımızla
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 hover-elevate">
                <CardContent className="p-8 text-center">
                  <Star className="h-12 w-12 text-[#C9A227] mx-auto mb-4" />
                  <div className="text-5xl font-bold font-serif mb-2">15+</div>
                  <div className="text-lg">Yıllık Tecrübe</div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 hover-elevate">
                <CardContent className="p-8 text-center">
                  <Package className="h-12 w-12 text-[#C9A227] mx-auto mb-4" />
                  <div className="text-5xl font-bold font-serif mb-2">2</div>
                  <div className="text-lg">Premium Ürün</div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Card className="bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 hover-elevate">
                <CardContent className="p-8 text-center">
                  <Award className="h-12 w-12 text-[#C9A227] mx-auto mb-4" />
                  <div className="text-5xl font-bold font-serif mb-2">2</div>
                  <div className="text-lg">Coğrafi İşaret</div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Card className="bg-primary-foreground/10 backdrop-blur-md border-primary-foreground/20 hover-elevate">
                <CardContent className="p-8 text-center">
                  <TrendingUp className="h-12 w-12 text-[#C9A227] mx-auto mb-4" />
                  <div className="text-5xl font-bold font-serif mb-2">100%</div>
                  <div className="text-lg">Müşteri Memnuniyeti</div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-values-title">
              Neden MİSPİR GIDA?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-values-description">
              Erzurum'un İspir ilçesinden, doğanın sunduğu en saf lezzetleri sofralarınıza getiriyoruz. 
              Geleneksel üretim yöntemlerimiz ve coğrafi işaret tescilli ürünlerimizle kalite ve güven sunuyoruz.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <FeatureGrid features={features} />
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-[#EFE9E1]/30 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Müşterilerimiz Ne Diyor?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Binlerce memnun müşterimizden bazılarının görüşleri
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <Testimonial
                name="Mehmet Kaya"
                title="Restoran Sahibi, İstanbul"
                content="MİSPİR GIDA'nın İspir fasulyesi gerçekten eşsiz. Müşterilerimiz bu lezzeti çok beğeniyor. Kalitesi tartışılmaz."
                rating={5}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Testimonial
                name="Ayşe Demir"
                title="Gıda Mühendisi, Ankara"
                content="Dut pekmezinin coğrafi işaret tescilli olması ve %100 doğal içeriği bizi çok etkiledi. Gerçekten premium bir ürün."
                rating={5}
              />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Testimonial
                name="Hasan Yıldız"
                title="Market Zinciri Yöneticisi, İzmir"
                content="Toptan alımlarımızda MİSPİR GIDA'yı tercih ediyoruz. Ürün kalitesi ve müşteri memnuniyeti hep üst seviyede."
                rating={5}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
