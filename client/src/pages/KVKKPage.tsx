import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

export default function KVKKPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 md:pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8" data-testid="text-kvkk-title">
            Kişisel Verilerin Korunması Kanunu (KVKK)
          </h1>

          <Card className="mb-6">
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Veri Sorumlusu
              </h2>
              <p className="text-muted-foreground">
                MİSPİR GIDA olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca veri sorumlusu sıfatıyla, 
                kişisel verilerinizin işlenmesinde başta özel hayatın gizliliği olmak üzere kişilerin temel hak ve özgürlüklerini 
                korumak ve kişisel verileri işleyen gerçek ve tüzel kişilerin yükümlülükleri ile uyacakları usul ve esasları 
                düzenlemektedir.
              </p>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                İşlenen Kişisel Veriler
              </h2>
              <p className="text-muted-foreground mb-4">
                Web sitemiz üzerinden toplanan kişisel veriler:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Kimlik bilgileri (ad, soyad)</li>
                <li>İletişim bilgileri (e-posta, telefon)</li>
                <li>Mesaj içeriği</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Kişisel Verilerin İşlenme Amaçları
              </h2>
              <p className="text-muted-foreground mb-4">
                Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>İletişim taleplerinin yanıtlanması</li>
                <li>Müşteri hizmetlerinin sunulması</li>
                <li>Ürün ve hizmet bilgilendirmesi</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                Haklarınız
              </h2>
              <p className="text-muted-foreground mb-4">
                KVKK'nın 11. maddesi uyarınca, kişisel verileriniz ile ilgili olarak aşağıdaki haklara sahipsiniz:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Kişisel verilerinizin yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
                <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
                <li>KVKK'da öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Haklarınızı kullanmak için info@mispirgida.com adresine e-posta gönderebilirsiniz.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
