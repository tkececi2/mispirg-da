import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import GIBadge from "@/components/GIBadge";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, MapPin, Award, Leaf, Calendar, Mountain } from "lucide-react";
import beansImage from '@assets/generated_images/İspir_beans_product_photo_2cbc159a.png';
import molassesImage from '@assets/generated_images/Mulberry_molasses_product_photo_6290a604.png';
import heritageImage from '@assets/generated_images/Traditional_bean_sorting_heritage_33e2b464.png';
import productionImage from '@assets/generated_images/Traditional_pekmez_production_3a98a91e.png';
import mapImage from '@assets/generated_images/Erzurum_region_map_69981ae8.png';
import { useLocation } from "wouter";

export default function ProductsPage() {
  const [, setLocation] = useLocation();
  const beansTimeline = [
    { number: 1, title: "Tarla Hazırlığı", description: "Ekim ayında bir sonraki sezon için tarla hazırlanır" },
    { number: 2, title: "Gübreleme ve Ekim", description: "Nisan-Mayıs aylarında doğal keçi gübresi ile gübrelenir ve ekim yapılır" },
    { number: 3, title: "Bakım", description: "Fasulyeler yabancı otlardan arındırılır ve sulaması yapılır" },
    { number: 4, title: "Hasat", description: "Eylül ortalarında tarladan söküldükten sonra elle tek tek ayıklanır" }
  ];

  const molassesTimeline = [
    { number: 1, title: "Hasat", description: "Dutlar 3-4 gün aralıklarla 8-10 kez elle toplanır" },
    { number: 2, title: "Ayıklama", description: "Tam olgunlaşmış dutlar seçilir, olgunlaşmamış yeşil dutlar ayıklanır" },
    { number: 3, title: "Kaynatma", description: "Dutlara 1/4 oranında su eklenir ve çam odunu ateşinde kaynatılır" },
    { number: 4, title: "Presleme", description: "Kaynatılan dutlar tahta preslerle sıkılarak şıra elde edilir" },
    { number: 5, title: "Koyulaştırma", description: "Şıra açık kazanlarda 15-40 dakika karıştırılarak koyulaştırılır" },
    { number: 6, title: "Soğutma", description: "Tahta kaşıklarla karıştırılarak havalandırılır ve parlak rengini alır" }
  ];

  const beansFaq = [
    { q: "İspir Kuru Fasulyesi neden özeldir?", a: "Arazinin dağlık olması ve makineli tarımın yaygın olmaması nedeniyle doğal üretim yöntemleri ile el emeğiyle toplanıyor ve ayıklanıyor. Suda yeterince şişmesi, erken pişmesi ve pişince kabuk atmaması gibi özellikleri ile öne çıkıyor." },
    { q: "Nasıl pişirilir?", a: "İspir Kuru Fasulyesini akşamdan soğuk suda beklettikten sonra, geleneksel yöntemlerle pişirerek tüketebilirsiniz." },
    { q: "Üretim süreci nasıldır?", a: "Ekim ayında tarla hazırlığı ile başlar, Nisan-Mayıs aylarında ekim yapılır, Eylül ortalarında hasat edilir ve elle tek tek ayıklanır." }
  ];

  const molassesFaq = [
    { q: "Karnavas Dut Pekmezi nedir?", a: "Erzurum'un Olur ilçesine bağlı Karnavas köyünde asırlardır süregelen geleneksel yöntemlerle üretilen, coğrafi işaret tescilli özel bir üründür. Sadece olgun dutlar ve su kullanılarak, hiçbir kimyasal katkı maddesi eklenmeden üretilir." },
    { q: "Sağlık faydaları nelerdir?", a: "Kansızlığa iyi gelir, vücudu güçlendirir, enerji kaynağıdır ve zengin besin içeriği ile bağışıklığı destekler. Özellikle kış aylarında sabahları bir tatlı kaşığı yenmesi önerilir." },
    { q: "Nasıl tüketilir?", a: "Kahvaltıda ekmek üzerine sürülerek veya zeytinyağına banarak, tahin ile karıştırılarak, eritilmiş tereyağı ile birlikte veya süt, yoğurt, smoothie'lere karıştırılarak tüketilebilir." }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-16">
        <section id="fasulye" className="scroll-mt-16">
          {/* Premium Product Hero with Stats */}
          <div className="relative h-[70vh] flex items-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${beansImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <Badge className="bg-[#C9A227] text-white mb-4 px-4 py-2">
                  Premium Kalite
                </Badge>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
                  İspir Kuru Fasulyesi
                </h1>
                <p className="text-2xl text-white/90 mb-8">
                  İnce kabuklu, erken pişen, eşine az rastlanır tat
                </p>
                <Button 
                  size="lg"
                  onClick={() => setLocation('/iletisim')}
                  data-testid="button-contact-beans"
                >
                  Toptan Teklif Al
                </Button>
              </div>
            </div>
          </div>

          {/* Executive Summary Cards */}
          <div className="bg-[#EFE9E1]/30 py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="hover-elevate">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold font-serif text-foreground mb-1">
                      İspir, Erzurum
                    </div>
                    <div className="text-sm text-muted-foreground">Köken Bölgesi</div>
                  </CardContent>
                </Card>
                
                <Card className="hover-elevate">
                  <CardContent className="p-6 text-center">
                    <Mountain className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold font-serif text-foreground mb-1">
                      1500-2000m
                    </div>
                    <div className="text-sm text-muted-foreground">Yükseklik</div>
                  </CardContent>
                </Card>
                
                <Card className="hover-elevate">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold font-serif text-foreground mb-1">
                      Eylül
                    </div>
                    <div className="text-sm text-muted-foreground">Hasat Dönemi</div>
                  </CardContent>
                </Card>
                
                <Card className="hover-elevate">
                  <CardContent className="p-6 text-center">
                    <Leaf className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold font-serif text-foreground mb-1">
                      100% Doğal
                    </div>
                    <div className="text-sm text-muted-foreground">El Emeği</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="py-16 md:py-24 px-4">
            <div className="max-w-6xl mx-auto">
              {/* Product Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={beansImage}
                    alt="İspir Kuru Fasulyesi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={heritageImage}
                    alt="Geleneksel Üretim"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mb-12">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6" data-testid="text-beans-story-title">
                  Arka Hikâye
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    İspir bulunduğu coğrafik yapı itibariyle kültürel özellikler yanında tarımsal ürünler için de gen merkezi ve geçiş süreci içinde kalmıştır. İpek yolu ticareti ve Asya'dan Avrupa göç sırasında göç eden insanlar beraberinde pek çok tohum ve fidanı da yanında götürerek göç ettiği yerlere nakil etmişlerdir.
                  </p>
                  <p>
                    Erzurum'un İspir ilçesinde yetişen ve eşine az rastlanır tadı olan İspir Kuru Fasulyesi, arazinin dağlık olması ve makineli tarımın yaygın olmaması nedeniyle doğal üretim yöntemleri ile el emeğiyle toplanıyor ve ayıklanıyor.
                  </p>
                </div>
              </div>

              <Card className="mb-12">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Öne Çıkan Özellikler</h3>
                  <ul className="space-y-3">
                    {[
                      "Suda yeterince şişmesi",
                      "Erken pişmesi",
                      "Pişince kabuk atmaması",
                      "İnce kabuklu yapısı",
                      "El emeği ile ayıklama",
                      "Doğal üretim yöntemleri"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="mb-12">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Üretim Süreci</h3>
                <Timeline steps={beansTimeline} />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Sıkça Sorulan Sorular</h3>
                <Accordion type="single" collapsible>
                  {beansFaq.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="font-serif">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        <section id="pekmez" className="scroll-mt-16">
          {/* Premium Product Hero with Stats */}
          <div className="relative h-[70vh] flex items-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${molassesImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-[#5A2D82] text-white px-4 py-2">
                    <Award className="h-4 w-4 mr-2 inline" />
                    Coğrafi İşaret Tescilli
                  </Badge>
                  <Badge className="bg-[#C9A227] text-white px-4 py-2">
                    Tescil No: 112
                  </Badge>
                </div>
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
                  Karnavas Dut Pekmezi
                </h1>
                <p className="text-2xl text-white/90 mb-8">
                  100% doğal içerik, baldan tatlı eşsiz lezzet
                </p>
                <div className="flex gap-4">
                  <Button 
                    size="lg"
                    onClick={() => setLocation('/iletisim')}
                    data-testid="button-contact-molasses"
                  >
                    Toptan Teklif Al
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="bg-background/20 backdrop-blur-md border-white/30 text-white hover:bg-background/30"
                    onClick={() => setLocation('/cografi-isaret')}
                  >
                    Coğrafi İşaret Belgesi
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary Cards */}
          <div className="bg-[#EFE9E1]/30 py-12 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="hover-elevate border-2 border-[#5A2D82]/20">
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 text-[#5A2D82] mx-auto mb-3" />
                    <div className="text-2xl font-bold font-serif text-foreground mb-1">
                      Tescil #112
                    </div>
                    <div className="text-sm text-muted-foreground">Coğrafi İşaret</div>
                  </CardContent>
                </Card>
                
                <Card className="hover-elevate">
                  <CardContent className="p-6 text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold font-serif text-foreground mb-1">
                      Karnavas, Olur
                    </div>
                    <div className="text-sm text-muted-foreground">Köken Köyü</div>
                  </CardContent>
                </Card>
                
                <Card className="hover-elevate">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold font-serif text-foreground mb-1">
                      8-10 Kez
                    </div>
                    <div className="text-sm text-muted-foreground">Hasat Sayısı</div>
                  </CardContent>
                </Card>
                
                <Card className="hover-elevate">
                  <CardContent className="p-6 text-center">
                    <Leaf className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold font-serif text-foreground mb-1">
                      Dut + Su
                    </div>
                    <div className="text-sm text-muted-foreground">İçerik</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="py-16 md:py-24 px-4">
            <div className="max-w-6xl mx-auto">
              {/* GI Certification Spotlight */}
              <div className="bg-gradient-to-br from-[#5A2D82]/10 to-[#C9A227]/10 rounded-lg p-12 mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="flex justify-center mb-8">
                      <GIBadge size="lg" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-center mb-6">
                      Coğrafi İşaret Tescilli
                    </h3>
                    <div className="space-y-4 text-center">
                      <div>
                        <div className="font-semibold text-foreground">Tescil Tarihi</div>
                        <div className="text-muted-foreground">12 Ağustos 2005</div>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Tescil No</div>
                        <div className="text-muted-foreground">112</div>
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">Tescil Kuruluşu</div>
                        <div className="text-muted-foreground">T.C. Türk Patent Enstitüsü</div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={mapImage}
                      alt="Erzurum Bölgesi"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Product Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={molassesImage}
                    alt="Karnavas Dut Pekmezi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={productionImage}
                    alt="Geleneksel Üretim"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="mb-12">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6" data-testid="text-molasses-story-title">
                  Doğanın Saf Tadı
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p>
                    Karnavas Dut Pekmezi, Erzurum'un Olur ilçesine bağlı Karnavas köyünde asırlardır süregelen geleneksel yöntemlerle üretilen, coğrafi işaret tescilli özel bir üründür.
                  </p>
                  <p>
                    Ürün, sadece olgun dutlar ve su kullanılarak, hiçbir kimyasal katkı maddesi eklenmeden üretilir. 12 Ağustos 2005 tarihinde T.C. Türk Patent Enstitüsü tarafından 112 numaralı tescil ile coğrafi işaret belgesi almıştır.
                  </p>
                </div>
              </div>

              <Card className="mb-12">
                <CardContent className="p-8">
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">Üstün Kalite Özellikleri</h3>
                  <ul className="space-y-3">
                    {[
                      "100% doğal içerik (sadece dut ve su)",
                      "Coğrafi İşaret Tescilli (No: 112)",
                      "Geleneksel üretim yöntemi",
                      "Çam odunu ateşinde kaynatma",
                      "Tahta preslerle şıra elde etme",
                      "Kimyasal gübre kullanılmadan üretim",
                      "Kansızlığa iyi gelir",
                      "Vücudu güçlendirir"
                    ].map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#C9A227] mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="mb-12">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Geleneksel Üretim Süreci</h3>
                <Timeline steps={molassesTimeline} />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">Sıkça Sorulan Sorular</h3>
                <Accordion type="single" collapsible>
                  {molassesFaq.map((faq, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`}>
                      <AccordionTrigger className="font-serif">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
