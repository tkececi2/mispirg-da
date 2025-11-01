import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FeatureGrid from "@/components/FeatureGrid";
import GIBadge from "@/components/GIBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Award, Heart, Sprout, Mountain, Users, ArrowRight } from "lucide-react";
import heroImage from '@assets/generated_images/İspir_landscape_hero_image_f4ebad56.png';
import beansImage from '@assets/generated_images/İspir_beans_product_photo_2cbc159a.png';
import molassesImage from '@assets/generated_images/Mulberry_molasses_product_photo_6290a604.png';
import { useLocation } from "wouter";

export default function HomePage() {
  const [, setLocation] = useLocation();
  
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
          <div className="text-white">
            <Badge className="bg-[#C9A227] text-white mb-6 px-4 py-2 text-sm font-semibold">
              Erzurum, İspir
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6" data-testid="text-hero-title">
              Doğanın Saf Lezzeti
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed" data-testid="text-hero-subtitle">
              Yüzyıllık gelenekle üretilen, coğrafi işaret tescilli doğal gıdalar
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                onClick={() => setLocation('/iletisim')}
                data-testid="button-contact"
              >
                Toptan Teklif Al
              </Button>
            </div>

            {/* Trust Markers */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold font-serif text-[#C9A227]">100%</div>
                <div className="text-sm text-white/80">Doğal İçerik</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-serif text-[#C9A227]">Tescil #112</div>
                <div className="text-sm text-white/80">Coğrafi İşaret</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-serif text-[#C9A227]">2 Ürün</div>
                <div className="text-sm text-white/80">Premium Koleksiyon</div>
              </div>
            </div>
          </div>

          {/* Right: GI Badge Showcase */}
          <div className="flex justify-center lg:justify-end">
            <Card className="bg-background/95 backdrop-blur-md p-8 max-w-md">
              <CardContent className="p-0">
                <div className="flex justify-center mb-6">
                  <GIBadge size="lg" />
                </div>
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
          </div>
        </div>
      </section>

      {/* Signature Product Collection */}
      <section className="py-20 md:py-32 bg-[#EFE9E1]/30 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-primary text-primary-foreground mb-4 px-4 py-2">
              Premium Koleksiyon
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-products-title">
              İmza Ürünlerimiz
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-products-subtitle">
              Coğrafi işaret tescilli ve geleneksel yöntemlerle üretilen eşsiz lezzetler
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ProductCard
              name="İspir Kuru Fasulyesi"
              tagline="İnce kabuklu, erken pişen"
              image={beansImage}
              origin="Erzurum, İspir"
              href="/urunler#fasulye"
              onContactClick={() => setLocation('/iletisim')}
            />
            
            <ProductCard
              name="Karnavas Dut Pekmezi"
              tagline="Baldan tatlı eşsiz tat"
              image={molassesImage}
              origin="Erzurum, Olur - Karnavas"
              certificationNumber="112"
              certified={true}
              href="/urunler#pekmez"
              onContactClick={() => setLocation('/iletisim')}
            />
          </div>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-20 md:py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-values-title">
              Neden MİSPİR GIDA?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-values-description">
              Erzurum'un İspir ilçesinden, doğanın sunduğu en saf lezzetleri sofralarınıza getiriyoruz. 
              Geleneksel üretim yöntemlerimiz ve coğrafi işaret tescilli ürünlerimizle kalite ve güven sunuyoruz.
            </p>
          </div>

          <FeatureGrid features={features} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
