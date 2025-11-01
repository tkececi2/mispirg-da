import { Link } from "wouter";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8" />
              <span className="font-serif text-xl font-bold">MİSPİR GIDA</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Erzurum İspir'den doğal ve sağlıklı gıdalar
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kurumsal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kurumsal" className="hover:underline" data-testid="link-footer-about">Hakkımızda</Link></li>
              <li><Link href="/urunler" className="hover:underline" data-testid="link-footer-products">Ürünlerimiz</Link></li>
              <li><Link href="/cografi-isaret" className="hover:underline" data-testid="link-footer-gi">Coğrafi İşaret</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ürünler</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/urunler#fasulye" className="hover:underline" data-testid="link-footer-beans">İspir Kuru Fasulyesi</Link></li>
              <li><Link href="/urunler#pekmez" className="hover:underline" data-testid="link-footer-molasses">Karnavas Dut Pekmezi</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span data-testid="text-footer-email">info@mispirgida.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span data-testid="text-footer-phone">+90 555 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span data-testid="text-footer-address">Erzurum, İspir</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p data-testid="text-copyright">© 2024 MİSPİR GIDA. Tüm hakları saklıdır.</p>
          <Link href="/kvkk" className="hover:underline mt-2 inline-block" data-testid="link-footer-kvkk">
            KVKK
          </Link>
        </div>
      </div>
    </footer>
  );
}
