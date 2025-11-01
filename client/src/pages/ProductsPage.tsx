import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import GIBadge from "@/components/GIBadge";
import AnimatedSection from "@/components/AnimatedSection";
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
import { motion } from "framer-motion";
import beansImage from '@assets/generated_images/İspir_beans_product_photo_2cbc159a.png';
import molassesImage from '@assets/generated_images/Mulberry_molasses_product_photo_6290a604.png';
import heritageImage from '@assets/generated_images/Traditional_bean_sorting_heritage_33e2b464.png';
import productionImage from '@assets/generated_images/Traditional_pekmez_production_3a98a91e.png';
import { useLocation } from "wouter";

export default function ProductsPage() {
  const [, setLocation] = useLocation();

  const openWhatsApp = (product: string) => {
    const message = `Merhaba, ${product} için toptan fiyat teklifi almak istiyorum.`;
    window.open(`https://wa.me/905318984145?text=${encodeURIComponent(message)}`, '_blank');
  };

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
      
      {/* Hero Section */}
      <section className="pt-16 pb-12 md:pb-20 px-4 bg-gradient-to-b from-[#EFE9E1]/50 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-primary text-primary-foreground mb-4 px-6 py-2">
              Premium Koleksiyon
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Ürünlerimiz
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Coğrafi işaret tescilli, geleneksel yöntemlerle üretilen eşsiz lezzetler
            </p>
          </motion.div>
        </div>
      </section>

      {/* Side by Side Products */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* İSPİR KURU FASULYESİ */}
            <AnimatedSection>
              <div className="h-full flex flex-col" id="fasulye">
                {/* Product Header */}
                <Card className="mb-6 overflow-hidden hover-elevate border-2 border-primary/20">
                  <div className="relative h-64">
                    <img
                      src={beansImage}
                      alt="İspir Kuru Fasulyesi"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#5A2D82] text-white px-3 py-1">
                        <Award className="h-3 w-3 mr-1 inline" />
                        Coğrafi İşaret #523
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-3">
                      İspir Kuru Fasulyesi
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      İnce kabuklu, erken pişen, eşine az rastlanır tat
                    </p>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">İspir, Erzurum</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mountain className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">1500-2000m</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Eylül Hasadı</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Leaf className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">100% Doğal</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={() => openWhatsApp('İspir Kuru Fasulyesi')}
                      data-testid="button-contact-beans"
                    >
                      Toptan Teklif Al
                    </Button>
                  </CardContent>
                </Card>

                {/* Product Details */}
                <Card className="mb-6 flex-1">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                      Arka Hikâye
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      İspir ilçesi, Erzurum'un bereketli vadilerinde yer alır. Bölgenin mikroklima özelliği ve yüksek rakımı (1500-2000m), fasulyeye eşsiz bir tat kazandırır.
                    </p>
                    <p className="text-muted-foreground">
                      İspir fasulyesi, ince kabuklu yapısı ve erken pişme özelliği ile öne çıkar. Kimyasal gübre kullanılmadan, doğal yöntemlerle üretilir ve elle özenle ayıklanır.
                    </p>
                  </CardContent>
                </Card>

                {/* Production Timeline */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                      Üretim Süreci
                    </h3>
                    <Timeline steps={beansTimeline} />
                  </CardContent>
                </Card>

                {/* Image */}
                <div className="rounded-lg overflow-hidden mb-6">
                  <img
                    src={heritageImage}
                    alt="Geleneksel Fasulye Ayıklama"
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* FAQ */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                      Sıkça Sorulan Sorular
                    </h3>
                    <Accordion type="single" collapsible className="w-full">
                      {beansFaq.map((faq, idx) => (
                        <AccordionItem key={idx} value={`beans-${idx}`}>
                          <AccordionTrigger className="text-left">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

            {/* KARNAVAS DUT PEKMEZİ */}
            <AnimatedSection delay={0.1}>
              <div className="h-full flex flex-col" id="pekmez">
                {/* Product Header */}
                <Card className="mb-6 overflow-hidden hover-elevate border-2 border-[#5A2D82]/20">
                  <div className="relative h-64">
                    <img
                      src={molassesImage}
                      alt="Karnavas Dut Pekmezi"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#5A2D82] text-white px-3 py-1">
                        <Award className="h-3 w-3 mr-1 inline" />
                        Coğrafi İşaret #112
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-3">
                      Karnavas Dut Pekmezi
                    </h2>
                    <p className="text-lg text-muted-foreground mb-4">
                      100% doğal içerik, baldan tatlı eşsiz lezzet
                    </p>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Karnavas, Olur</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Award className="h-4 w-4 text-[#5A2D82]" />
                        <span className="text-muted-foreground">Tescil #112</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">8-10 Kez Hasat</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Leaf className="h-4 w-4 text-primary" />
                        <span className="text-muted-foreground">Dut + Su</span>
                      </div>
                    </div>

                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={() => openWhatsApp('Karnavas Dut Pekmezi')}
                      data-testid="button-contact-molasses"
                    >
                      Toptan Teklif Al
                    </Button>
                  </CardContent>
                </Card>

                {/* Product Details */}
                <Card className="mb-6 flex-1">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                      Doğanın Saf Tadı
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Karnavas Dut Pekmezi, Erzurum'un Olur ilçesine bağlı Karnavas köyünde, asırlardır süregelen geleneksel yöntemlerle üretilir. 12 Ağustos 2005 tarihinde Coğrafi İşaret Tescili almıştır (No: 112).
                    </p>
                    <p className="text-muted-foreground">
                      Sadece dut ve su kullanılarak, hiçbir kimyasal katkı maddesi eklenmeden üretilir. Çam odunu ateşinde kaynatılır ve tahta preslerle sıkılarak özel tadına kavuşur.
                    </p>
                  </CardContent>
                </Card>

                {/* Production Timeline */}
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                      Üretim Süreci
                    </h3>
                    <Timeline steps={molassesTimeline} />
                  </CardContent>
                </Card>

                {/* Image */}
                <div className="rounded-lg overflow-hidden mb-6">
                  <img
                    src={productionImage}
                    alt="Geleneksel Pekmez Üretimi"
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* FAQ */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                      Sıkça Sorulan Sorular
                    </h3>
                    <Accordion type="single" collapsible className="w-full">
                      {molassesFaq.map((faq, idx) => (
                        <AccordionItem key={idx} value={`molasses-${idx}`}>
                          <AccordionTrigger className="text-left">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {faq.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
