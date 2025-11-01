import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import GIBadge from "@/components/GIBadge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";
import beansImage from '@assets/generated_images/İspir_beans_product_photo_2cbc159a.png';
import molassesImage from '@assets/generated_images/Mulberry_molasses_product_photo_6290a604.png';
import heritageImage from '@assets/generated_images/Traditional_bean_sorting_heritage_33e2b464.png';

export default function ProductsPage() {
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
          <Hero
            title="İspir Kuru Fasulyesi"
            subtitle="Erzurum'un İspir ilçesinde yetişen ve eşine az rastlanır tadı olan İspir Kuru Fasulyesi"
            imageUrl={beansImage}
            height="large"
          />

          <div className="py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto">
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

        <section id="pekmez" className="bg-card scroll-mt-16">
          <Hero
            title="Karnavas Dut Pekmezi"
            subtitle="Coğrafi İşaret Tescilli - Baldan tatlı eşsiz bir tat"
            imageUrl={molassesImage}
            height="large"
          />

          <div className="py-16 md:py-24 px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-12">
                <GIBadge size="lg" />
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
