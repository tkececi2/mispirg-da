import AnimatedSection from '../AnimatedSection'

export default function AnimatedSectionExample() {
  return (
    <div className="p-8 space-y-8">
      <AnimatedSection>
        <h2 className="text-3xl font-bold">Animasyonlu Başlık</h2>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <p className="text-lg">Bu içerik scroll'da görünür</p>
      </AnimatedSection>
    </div>
  )
}
