import Timeline from '../Timeline'

export default function TimelineExample() {
  const steps = [
    { number: 1, title: "Hasat", description: "Dutlar 3-4 gün aralıklarla 8-10 kez elle toplanır." },
    { number: 2, title: "Ayıklama", description: "Tam olgunlaşmış dutlar seçilir. Olgunlaşmamış yeşil dutlar ayıklanır." },
    { number: 3, title: "Kaynatma", description: "Dutlara 1/4 oranında su eklenir ve çam odunu ateşinde kaynatılır." },
  ];

  return (
    <div className="p-8 max-w-2xl">
      <Timeline steps={steps} />
    </div>
  );
}
