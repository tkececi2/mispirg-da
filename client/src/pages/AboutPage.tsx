import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Heart, Award, Users, Target, CheckCircle, TreePine, Handshake } from "lucide-react";
import { motion } from "framer-motion";

// Public images
const heritageImage = '/images/Traditional_bean_sorting_heritage_33e2b464.png';
const landscapeImage = '/images/İspir_landscape_hero_image_f4ebad56.png';
const productionImage = '/images/Traditional_pekmez_production_3a98a91e.png';

export default function AboutPage() {
  const values = [
    {
      icon: Leaf,
      title: "Doğallık",
      description: "Tüm ürünlerimiz %100 doğal içerikli, kimyasal katkı maddesi içermez"
    },
    {
      icon: Heart,
      title: "Geleneksel Üretim",
      description: "Asırlardır süregelen yöntemlerle, el emeği ile üretim yapıyoruz"
    },
    {
      icon: Award,
      title: "Kalite Güvencesi",
      description: "Coğrafi işaret tescilli ürünlerimizle kaliteyi garanti ediyoruz"
    },
    {
      icon: Users,
      title: "Yerel Destek",
      description: "Bölge halkını destekleyen, sürdürülebilir üretim anlayışı"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Kurumsal"
        description="MİSPİR GIDA - Erzurum İspir'den coğrafi işaret tescilli doğal ürünler. Asırlık geleneksel üretim yöntemleri, yerel üretici desteği ve sürdürülebilir tarım anlayışı ile kaliteli gıda üretimi."
        keywords="MİSPİR GIDA hakkında, Erzurum yerel üretici, geleneksel gıda üretimi, coğrafi işaret şirketi, sürdürülebilir tarım"
      />
      <Navigation />
      
      {/* Premium Hero */}
      <div className="relative h-[70vh] flex items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${landscapeImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <Badge className="bg-primary text-primary-foreground mb-4 px-4 py-2">
              Erzurum, İspir
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
              Doğanın Saf Lezzetini <br/>Sofralarınıza Taşıyoruz
            </h1>
            <p className="text-2xl text-white/90 mb-8 leading-relaxed">
              Asırlardır süregelen geleneksel üretim yöntemlerini modern kalite standartlarıyla birleştirerek, 
              Erzurum'un bereketli topraklarından doğal gıdalar üretiyoruz.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-[#EFE9E1]/30 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <Card className="h-full hover-elevate border-2 border-primary/20">
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-foreground">Misyonumuz</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Doğanın saf lezzetlerini, geleneksel üretim yöntemlerini modern kalite standartlarıyla birleştirerek, 
                    tüketicilere güvenilir ve sağlıklı gıda ürünleri sunmak. Bölgesel kalkınmaya katkı sağlayarak, 
                    yerel üreticileri desteklemek ve kültürel mirasımızı gelecek nesillere aktarmak.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <Card className="h-full hover-elevate border-2 border-[#5A2D82]/20">
                <CardContent className="p-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#5A2D82]/10 flex items-center justify-center">
                      <Award className="h-8 w-8 text-[#5A2D82]" />
                    </div>
                    <h2 className="font-serif text-3xl font-bold text-foreground">Vizyonumuz</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Türkiye'nin en güvenilir coğrafi işaretli doğal gıda üreticisi olmak. 
                    Erzurum'un zengin tarımsal mirasını dünyaya tanıtarak, yöresel ürünlerimizle 
                    ulusal ve uluslararası pazarlarda lider konuma gelmek.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Story Section with Images */}
          <AnimatedSection className="mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-center" data-testid="text-story-title">
              Hikayemiz
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={heritageImage}
                  alt="Geleneksel Üretim"
                  className="w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  MİSPİR GIDA, Erzurum'un İspir ve Olur ilçelerinin bereketli topraklarında, 
                  asırlardır süregelen geleneksel üretim yöntemlerini modern kalite standartlarıyla 
                  birleştirerek doğal gıda üretimi yapmaktadır.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  İspir'in mikroklima özelliği sayesinde binlerce yıla dayanan tarımsal mirasımızı koruyarak, 
                  yöresel lezzetleri modern tüketiciye sunmaktayız.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 order-2 lg:order-1">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Coğrafi işaret tescilli Karnavas Dut Pekmezi ve İspir Kuru Fasulyesi başta olmak üzere 
                  tüm ürünlerimiz, doğal üretim yöntemleri ve el emeği ile hazırlanmaktadır.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Her bir ürünümüz, Erzurum'un bereketli topraklarının ve yöre insanının 
                  emek ve sevgisinin bir yansımasıdır.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden order-1 lg:order-2">
                <img
                  src={productionImage}
                  alt="Modern Üretim"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-12 text-center" data-testid="text-values-title">
              Değerlerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <AnimatedSection key={idx} delay={idx * 0.1}>
                    <Card className="hover-elevate h-full">
                      <CardContent className="p-8">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-primary text-primary-foreground rounded-lg p-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-center" data-testid="text-sustainability-title">
                Sürdürülebilir Üretim
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <TreePine className="h-16 w-16 mx-auto mb-4 text-[#C9A227]" />
                  <h3 className="font-serif text-xl font-bold mb-3">Çevre Dostu</h3>
                  <p className="text-primary-foreground/80">
                    Kimyasal gübre kullanmadan, doğaya saygılı üretim
                  </p>
                </div>
                <div className="text-center">
                  <Handshake className="h-16 w-16 mx-auto mb-4 text-[#C9A227]" />
                  <h3 className="font-serif text-xl font-bold mb-3">Yerel Destek</h3>
                  <p className="text-primary-foreground/80">
                    Bölge üreticilerini destekleyen sürdürülebilir model
                  </p>
                </div>
                <div className="text-center">
                  <CheckCircle className="h-16 w-16 mx-auto mb-4 text-[#C9A227]" />
                  <h3 className="font-serif text-xl font-bold mb-3">Geleneksel</h3>
                  <p className="text-primary-foreground/80">
                    Asırlık gelenekleri koruyarak kültürel miras
                  </p>
                </div>
              </div>

              <div className="max-w-3xl mx-auto space-y-4 text-center text-lg">
                <p className="text-primary-foreground/90 leading-relaxed">
                  Üretimimizin her aşamasında çevreye ve doğaya saygılıyız. Kimyasal gübre kullanmadan, 
                  geleneksel tarım yöntemleriyle ürünlerimizi yetiştiriyor, el emeği ile hasat ediyoruz.
                </p>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Yerel üreticilerle çalışarak bölge ekonomisine katkı sağlıyor, asırlık gelenekleri koruyarak 
                  kültürel mirasımızı yaşatıyoruz.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
