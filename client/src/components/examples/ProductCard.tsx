import ProductCard from '../ProductCard'
import beansImage from '@assets/generated_images/İspir_beans_product_photo_2cbc159a.png'

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ProductCard
        name="İspir Kuru Fasulyesi"
        tagline="İnce kabuklu, baldan tatlı"
        image={beansImage}
        origin="Erzurum, İspir"
        certified={false}
        href="#"
        onContactClick={() => console.log('Contact clicked')}
      />
    </div>
  )
}
