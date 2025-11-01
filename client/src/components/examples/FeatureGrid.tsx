import FeatureGrid from '../FeatureGrid'
import { Leaf, Award, Heart } from 'lucide-react'

export default function FeatureGridExample() {
  const features = [
    {
      icon: Leaf,
      title: "100% Doğal",
      description: "Hiçbir kimyasal katkı maddesi kullanılmadan üretilir"
    },
    {
      icon: Award,
      title: "Coğrafi İşaret",
      description: "Tescilli kalite ve özgünlük garantisi"
    },
    {
      icon: Heart,
      title: "Geleneksel Üretim",
      description: "Asırlardır süregelen yöntemlerle hazırlanır"
    }
  ];

  return (
    <div className="p-8">
      <FeatureGrid features={features} />
    </div>
  );
}
