import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GIBadge from "@/components/GIBadge";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Shield, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// Public images
const mapImage = '/images/erzurum_map.png';
const beansImage = '/images/ispir_beans.png';
const molassesImage = '/images/mulberry_molasses.png';

export default function GIPage() {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Coğrafi İşaret"
        description="T.C. Türk Patent Enstitüsü tescilli coğrafi işaret ürünlerimiz: İspir Kuru Fasulyesi (Tescil #523) ve Karnavas Dut Pekmezi (Tescil #112). Kalite ve özgünlük garantisi."
        keywords="coğrafi işaret nedir, TPE tescil, İspir fasulye tescil 523, Karnavas pekmez tescil 112, coğrafi işaret koruma, orijin ürün"
      />
      <Navigation />
      
      {/* Premium Hero */}
      <div className="relative h-[60vh] flex items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mapImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-[#5A2D82] text-white mb-4 px-4 py-2">
              <Award className="h-4 w-4 mr-2 inline" />
              T.C. Türk Patent Enstitüsü Tescilli
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
              Coğrafi İşaret Tescilli Ürünler
            </h1>
            <p className="text-2xl text-white/90 max-w-3xl mx-auto">
              2 ürünümüz kalite ve özgünlüğün tescilli garantisi ile korunmaktadır
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 bg-[#EFE9E1]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <AnimatedSection>
              <Card className="hover-elevate border-2 border-[#5A2D82]/20">
                <CardContent className="p-8 text-center">
                  <Award className="h-12 w-12 text-[#5A2D82] mx-auto mb-4" />
                  <div className="text-4xl font-bold font-serif text-foreground mb-1">2</div>
                  <div className="text-sm text-muted-foreground">Coğrafi İşaret</div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={0.1}>
              <Card className="hover-elevate">
                <CardContent className="p-8 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold font-serif text-foreground mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Kalite Garantisi</div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <Card className="hover-elevate">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold font-serif text-foreground mb-1">2005</div>
                  <div className="text-sm text-muted-foreground">İlk Tescil</div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <Card className="hover-elevate">
                <CardContent className="p-8 text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold font-serif text-foreground mb-1">Erzurum</div>
                  <div className="text-sm text-muted-foreground">Köken Bölgesi</div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">

          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center" data-testid="text-gi-what-title">
              Coğrafi İşaret Nedir?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Coğrafi işaret, belirli bir yöre, bölge veya ülke ile özdeşleşmiş bir ürünü gösteren işarettir. Ürünün kalitesi, ünü veya diğer özellikleri belirli bir coğrafi bölgeyle bağlantılıdır.
              </p>
              <p>
                Coğrafi işaret tescili, ürünün sadece belirli bir coğrafi bölgede, belirli standartlara uygun olarak üretildiğini garanti eder. Bu sistem sayesinde tüketiciler, satın aldıkları ürünün özgünlüğünden ve kalitesinden emin olabilirler.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Kalite Garantisi
                </h3>
                <p className="text-sm text-muted-foreground">
                  Belirli standartlara uygun üretim
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Özgünlük Tescili
                </h3>
                <p className="text-sm text-muted-foreground">
                  Taklit ürünlerden koruma
                </p>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Bölgesel Kimlik
                </h3>
                <p className="text-sm text-muted-foreground">
                  Yöresel değerlerin korunması
                </p>
              </CardContent>
            </Card>
          </div>

          {/* İspir Kuru Fasulyesi Section */}
          <AnimatedSection className="mb-20">
            <div className="bg-gradient-to-br from-primary/5 to-[#C9A227]/5 rounded-lg p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={beansImage}
                    alt="İspir Kuru Fasulyesi"
                    className="w-full h-auto"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <GIBadge number="523" size="md" />
                    <Badge className="bg-[#5A2D82] text-white">Coğrafi İşaret Tescilli</Badge>
                  </div>
                  <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                    İspir Kuru Fasulyesi
                  </h2>
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Tescil No</h4>
                        <p className="text-muted-foreground">523</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Tescil Tarihi</h4>
                        <p className="text-muted-foreground">2015</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Üretim Bölgesi</h4>
                        <p className="text-muted-foreground">İspir, Erzurum</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Tescil Kuruluşu</h4>
                        <p className="text-muted-foreground">Türk Patent</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-muted-foreground space-y-3">
                    <p>
                      İspir Kuru Fasulyesi, Erzurum İli İspir ilçesinde yetişen, ince kabuklu ve erken pişme özelliğine sahip coğrafi işaret tescilli premium fasulye çeşididir.
                    </p>
                    <p>
                      Bölgenin yüksek rakımı (1500-2000m), temiz havası ve doğal suları sayesinde kimyasal gübre kullanılmadan, geleneksel yöntemlerle üretilmektedir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Karnavas Dut Pekmezi Section */}
          <AnimatedSection className="mb-20">
            <div className="bg-gradient-to-br from-[#5A2D82]/5 to-primary/5 rounded-lg p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-4">
                    <GIBadge number="112" size="md" />
                    <Badge className="bg-[#5A2D82] text-white">Coğrafi İşaret Tescilli</Badge>
                  </div>
                  <h2 className="font-serif text-4xl font-bold text-foreground mb-6">
                    Karnavas Dut Pekmezi
                  </h2>
                  <div className="space-y-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Tescil No</h4>
                        <p className="text-muted-foreground">112</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Tescil Tarihi</h4>
                        <p className="text-muted-foreground">12 Ağustos 2005</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Yayın Tarihi</h4>
                        <p className="text-muted-foreground">11 Mayıs 2008</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Üretim Köyleri</h4>
                        <p className="text-muted-foreground">Karnavas, Olur</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-muted-foreground space-y-3">
                    <p>
                      Karnavas Dut Pekmezi, Erzurum ili Olur ilçesinde Karnavas, Taşlıköy, Yeşilbağlar, Köprübaşı ve Coşkunlar köylerinde üretilmektedir.
                    </p>
                    <p>
                      Ürünün üretimi, Olur Kaymakamlığı, Olur Belediyesi, Tarım İlçe Müdürlüğü, Atatürk Üniversitesi ve Karnavas Köyü Muhtarlığı tarafından düzenli olarak denetlenmektedir.
                    </p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden order-1 lg:order-2">
                  <img
                    src={molassesImage}
                    alt="Karnavas Dut Pekmezi"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-region-title">
              Erzurum Bölgesi
            </h2>
            <div className="rounded-lg overflow-hidden mb-6">
              <img
                src={mapImage}
                alt="Erzurum Bölgesi Haritası"
                className="w-full h-auto"
                data-testid="img-region-map"
              />
            </div>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Erzurum'un İspir ve Olur ilçeleri, Türkiye'nin en önemli tarımsal gen merkezlerinden biridir. Bölgenin mikroklima özelliği, binlerce yıla dayanan tarımsal çeşitliliğin korunmasını sağlamaktadır.
              </p>
              <p>
                Yüksek dağlar arasındaki bereketli vadilerde, kimyasal gübre kullanılmadan, geleneksel yöntemlerle yapılan üretim, ürünlerimize eşsiz tat ve kalite kazandırmaktadır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
