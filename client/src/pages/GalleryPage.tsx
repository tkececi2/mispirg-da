import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

// Import images
import beansImage from '@assets/generated_images/İspir_beans_product_photo_2cbc159a.png';
import molassesImage from '@assets/generated_images/Mulberry_molasses_product_photo_6290a604.png';
import heritageImage from '@assets/generated_images/Traditional_bean_sorting_heritage_33e2b464.png';
import productionImage from '@assets/generated_images/Traditional_pekmez_production_3a98a91e.png';
import landscapeImage from '@assets/generated_images/İspir_landscape_hero_image_f4ebad56.png';
import mapImage from '@assets/generated_images/Erzurum_region_map_69981ae8.png';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      image: beansImage,
      title: "İspir Kuru Fasulyesi",
      category: "Ürünler",
      description: "Premium kalite, ince kabuklu fasulye"
    },
    {
      image: molassesImage,
      title: "Karnavas Dut Pekmezi",
      category: "Ürünler",
      description: "Coğrafi işaret tescilli, 100% doğal"
    },
    {
      image: heritageImage,
      title: "Geleneksel Fasulye Ayıklama",
      category: "Üretim",
      description: "El emeği ile özenle ayıklanan fasulyeler"
    },
    {
      image: productionImage,
      title: "Dut Pekmezi Üretimi",
      category: "Üretim",
      description: "Çam odunu ateşinde geleneksel kaynatma"
    },
    {
      image: landscapeImage,
      title: "İspir Vadisi",
      category: "Bölge",
      description: "Erzurum'un bereketli toprakları"
    },
    {
      image: mapImage,
      title: "Erzurum Bölgesi",
      category: "Bölge",
      description: "Üretim alanlarımız"
    }
  ];

  const categories = ["Tümü", "Ürünler", "Üretim", "Bölge"];
  const [activeCategory, setActiveCategory] = useState("Tümü");

  const filteredItems = activeCategory === "Tümü" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Galeri"
        description="MİSPİR GIDA ürünleri, geleneksel üretim süreçleri ve Erzurum İspir'in bereketli topraklarından fotoğraflar. İspir Kuru Fasulyesi ve Karnavas Dut Pekmezi görselleri."
        keywords="İspir fasulye fotoğrafları, dut pekmezi görselleri, geleneksel üretim, İspir vadisi, Erzurum fotoğrafları"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pb-16 px-4 bg-gradient-to-b from-[#EFE9E1]/50 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="bg-primary text-primary-foreground mb-4 px-6 py-2">
              Fotoğraf Galerisi
            </Badge>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              Galeri
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ürünlerimiz, üretim süreçlerimiz ve bereketli topraklarımızdan kareler
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-muted-foreground hover-elevate'
                }`}
                data-testid={`filter-${category.toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <motion.div
                  className="relative group cursor-pointer overflow-hidden rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedImage(idx)}
                  data-testid={`gallery-item-${idx}`}
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Badge className="bg-primary text-primary-foreground mb-2">
                        {item.category}
                      </Badge>
                      <h3 className="font-serif text-xl font-bold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            data-testid="button-close-lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={filteredItems[selectedImage].image}
              alt={filteredItems[selectedImage].title}
              className="w-full h-auto rounded-lg"
            />
            <div className="text-white text-center mt-6">
              <h3 className="font-serif text-2xl font-bold mb-2">
                {filteredItems[selectedImage].title}
              </h3>
              <p className="text-white/80">
                {filteredItems[selectedImage].description}
              </p>
            </div>
          </div>
        </motion.div>
      )}

      <Footer />
    </div>
  );
}
