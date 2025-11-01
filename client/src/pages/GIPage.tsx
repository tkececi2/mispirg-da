import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import GIBadge from "@/components/GIBadge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Shield, Award } from "lucide-react";
import mapImage from '@assets/generated_images/Erzurum_region_map_69981ae8.png';

export default function GIPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <Hero
        title="Coğrafi İşaret"
        subtitle="Kalite ve özgünlüğün tescilli garantisi"
        imageUrl={mapImage}
        height="medium"
      />

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <GIBadge size="lg" />
          </div>

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

          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-karnavas-title">
              Karnavas Dut Pekmezi - Tescil No: 112
            </h2>
            <Card className="mb-6">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Tescil Tarihi</h4>
                    <p className="text-muted-foreground">12 Ağustos 2005</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Yayın Tarihi</h4>
                    <p className="text-muted-foreground">11 Mayıs 2008</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Tescil No</h4>
                    <p className="text-muted-foreground">112</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Tescil Kuruluşu</h4>
                    <p className="text-muted-foreground">T.C. Türk Patent Enstitüsü</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Karnavas Dut Pekmezi, Erzurum ili Olur ilçesinde Karnavas, Taşlıköy, Yeşilbağlar, Köprübaşı ve Coşkunlar köylerinde üretilmektedir. 
              </p>
              <p>
                Ürünün üretimi, Olur Kaymakamlığı, Olur Belediyesi, Tarım İlçe Müdürlüğü, Atatürk Üniversitesi Oltu Meslek Yüksekokulu Gıda Teknolojisi Programı ve Karnavas Köyü Muhtarlığı tarafından düzenli olarak denetlenmektedir.
              </p>
            </div>
          </div>

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
