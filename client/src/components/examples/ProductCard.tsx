import ProductCard from '../ProductCard'
import beansImage from '@assets/generated_images/İspir_beans_product_photo_2cbc159a.png'

export default function ProductCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ProductCard
        name="İspir Kuru Fasulyesi"
        image={beansImage}
        features={[
          "İnce kabuklu, erken pişen",
          "Doğal üretim yöntemleri",
          "El emeği ile ayıklama",
          "Eşsiz tat ve kalite"
        ]}
        certified={false}
        href="#"
      />
    </div>
  )
}
