import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <SEOHead 
        title="İletişim"
        description="MİSPİR GIDA ile iletişime geçin. İspir, Erzurum adresimizden veya telefon, e-posta ve WhatsApp üzerinden bize ulaşabilirsiniz. Toptan fiyat teklifleri için hemen iletişime geçin."
        keywords="MİSPİR GIDA iletişim, Erzurum İspir adres, toptan fasulye sipariş, dut pekmezi sipariş, iletişim bilgileri"
      />
      <Navigation />
      
      <div className="pt-24 pb-16 md:pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-contact-title">
              İletişim
            </h1>
            <p className="text-lg text-muted-foreground" data-testid="text-contact-subtitle">
              Sorularınız için bize ulaşın
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                Bize Yazın
              </h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                İletişim Bilgileri
              </h2>
              
              <div className="space-y-4 mb-8">
                <Card className="hover-elevate">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">E-posta</h3>
                      <a href="mailto:info@mispirgida.com" className="text-muted-foreground hover:text-primary" data-testid="link-email">
                        info@mispirgida.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                      <a href="tel:+905318984145" className="text-muted-foreground hover:text-primary" data-testid="link-phone">
                        +90 531 898 4145
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                      <a 
                        href="https://wa.me/905318984145" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                        data-testid="link-whatsapp"
                      >
                        WhatsApp ile iletişime geç
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover-elevate">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                      <p className="text-muted-foreground" data-testid="text-address">
                        İspir, Erzurum, Türkiye
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-lg overflow-hidden h-64 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d838.9109555224559!2d40.999632711290104!3d40.48614735707552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406f442fcf7ee82d%3A0xa33cf0ce9ff9e138!2zxLBzcGlyLCBFcnp1cnVtLCBUw7xya2l5ZQ!5e1!3m2!1str!2svi!4v1762002821166!5m2!1str!2svi"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MİSPİR GIDA Konum - İspir, Erzurum"
                  data-testid="map-location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
