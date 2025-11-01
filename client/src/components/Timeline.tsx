interface TimelineStep {
  number: number;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export default function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
      
      <div className="space-y-8">
        {steps.map((step, idx) => (
          <div key={idx} className="relative flex gap-6" data-testid={`timeline-step-${step.number}`}>
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif text-xl font-bold z-10">
              {step.number}
            </div>
            <div className="flex-1 pt-2">
              <h4 className="font-serif text-xl font-semibold text-foreground mb-2" data-testid={`text-timeline-title-${step.number}`}>
                {step.title}
              </h4>
              <p className="text-muted-foreground" data-testid={`text-timeline-desc-${step.number}`}>
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
