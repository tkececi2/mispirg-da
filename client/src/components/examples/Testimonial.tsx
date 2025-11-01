import Testimonial from '../Testimonial'

export default function TestimonialExample() {
  return (
    <div className="p-8 max-w-md">
      <Testimonial
        name="Ahmet Yılmaz"
        title="Restoran Sahibi, İstanbul"
        content="MİSPİR GIDA'nın ürünleri gerçekten çok kaliteli. Müşterilerimiz özellikle dut pekmezini çok beğeniyor."
        rating={5}
      />
    </div>
  )
}
