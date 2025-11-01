import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FeatureGrid from "@/components/FeatureGrid";
import { Leaf, Award, Heart, Sprout, Mountain, Users } from "lucide-react";
import heroImage from '@assets/generated_images/İspir_landscape_hero_image_f4ebad56.png';
import beansImage from '@assets/generated_images/İspir_beans_product_photo_2cbc159a.png';
import molassesImage from '@assets/generated_images/Mulberry_molasses_product_photo_6290a604.png';

export default function HomePage() {
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
      
      <Hero
        title="Doğanın Saf Lezzeti"
        subtitle="Erzurum İspir'den sofranıza, yüzyıllık gelenekle üretilen doğal gıdalar"
        imageUrl={heroImage}
        primaryCta={{ text: "Ürünleri Keşfet", href: "/urunler" }}
        secondaryCta={{ text: "Toptan Teklif Alın", href: "/iletisim" }}
        height="full"
      />

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">
              MİSPİR GIDA
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-description">
              Erzurum'un İspir ilçesinden, doğanın sunduğu en saf lezzetleri sofralarınıza getiriyoruz. 
              Geleneksel üretim yöntemlerimiz ve coğrafi işaret tescilli ürünlerimizle kalite ve güven sunuyoruz.
            </p>
          </div>

          <FeatureGrid features={features} />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-products-title">
              Ürünlerimiz
            </h2>
            <p className="text-lg text-muted-foreground" data-testid="text-products-subtitle">
              Doğal ve sağlıklı ürünlerimizi keşfedin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ProductCard
              name="İspir Kuru Fasulyesi"
              image={beansImage}
              features={[
                "İnce kabuklu, erken pişen",
                "Doğal üretim yöntemleri",
                "El emeği ile ayıklama",
                "Eşsiz tat ve kalite"
              ]}
              href="/urunler#fasulye"
            />
            
            <ProductCard
              name="Karnavas Dut Pekmezi"
              image={molassesImage}
              features={[
                "100% doğal içerik (sadece dut ve su)",
                "Coğrafi İşaret Tescilli (No: 112)",
                "Çam odunu ateşinde kaynatma",
                "Baldan tatlı eşsiz lezzet"
              ]}
              certified={true}
              href="/urunler#pekmez"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
