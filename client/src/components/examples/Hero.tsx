import Hero from '../Hero'
import heroImage from '@assets/generated_images/İspir_landscape_hero_image_f4ebad56.png'

export default function HeroExample() {
  return (
    <Hero
      title="Doğanın Saf Lezzeti"
      subtitle="Erzurum İspir'den sofranıza, yüzyıllık gelenekle üretilen doğal gıdalar"
      imageUrl={heroImage}
      primaryCta={{ text: "Ürünleri Keşfet", href: "#urunler" }}
      secondaryCta={{ text: "Toptan Teklif Alın", href: "#iletisim" }}
      height="full"
    />
  )
}
