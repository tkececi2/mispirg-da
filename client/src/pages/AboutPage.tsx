import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Award, Users } from "lucide-react";
import heritageImage from '@assets/generated_images/Traditional_bean_sorting_heritage_33e2b464.png';

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
      <Navigation />
      
      <Hero
        title="Kurumsal"
        subtitle="Erzurum'un bereketli topraklarından, doğanın saf lezzetlerini sofralarınıza getiriyoruz"
        imageUrl={heritageImage}
        height="medium"
      />

      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-story-title">
              Hikayemiz
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                MİSPİR GIDA, Erzurum'un İspir ve Olur ilçelerinin bereketli topraklarında, asırlardır süregelen geleneksel üretim yöntemlerini modern kalite standartlarıyla birleştirerek doğal gıda üretimi yapmaktadır.
              </p>
              <p>
                İspir'in mikroklima özelliği sayesinde binlerce yıla dayanan tarımsal mirasımızı koruyarak, yöresel lezzetleri modern tüketiciye sunmaktayız. Coğrafi işaret tescilli Karnavas Dut Pekmezi ve eşsiz tadıyla bilinen İspir Kuru Fasulyesi başta olmak üzere tüm ürünlerimiz, doğal üretim yöntemleri ve el emeği ile hazırlanmaktadır.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-mission-title">
              Misyonumuz
            </h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg text-foreground">
                  Doğanın saf lezzetlerini, geleneksel üretim yöntemlerini modern kalite standartlarıyla birleştirerek, tüketicilere güvenilir ve sağlıklı gıda ürünleri sunmak. Bölgesel kalkınmaya katkı sağlayarak, yerel üreticileri desteklemek ve kültürel mirasımızı gelecek nesillere aktarmak.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8" data-testid="text-values-title">
              Değerlerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <Card key={idx} className="hover-elevate">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6" data-testid="text-sustainability-title">
              Sürdürülebilir Üretim
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Üretimimizin her aşamasında çevreye ve doğaya saygılıyız. Kimyasal gübre kullanmadan, geleneksel tarım yöntemleriyle ürünlerimizi yetiştiriyor, el emeği ile hasat ediyoruz.
              </p>
              <p>
                Yerel üreticilerle çalışarak bölge ekonomisine katkı sağlıyor, asırlık gelenekleri koruyarak kültürel mirasımızı yaşatıyoruz. Her bir ürünümüz, Erzurum'un bereketli topraklarının ve yöre insanının emek ve sevgisinin bir yansımasıdır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
