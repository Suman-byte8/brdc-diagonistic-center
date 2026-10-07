import { Target, Zap, HeartHandshake } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  {
    title: "100% Accuracy",
    icon: Target,
    text: "Advanced technology ensures your reports are precise and reliable.",
  },
  {
    title: "Fast Delivery",
    icon: Zap,
    text: "Get your diagnostic reports delivered quickly, often on the same day.",
  },
  {
    title: "Expert Care",
    icon: HeartHandshake,
    text: "Compassionate staff and expert doctors dedicated to your health journey.",
  },
];

// Floating highlights card that overlaps the bottom edge of the hero.
export default function WhyChoose() {
  return (
    <section aria-label="Why Choose BRDC?" className="relative pt-8 sm:pt-12 px-4 sm:px-8 lg:px-10 bg-gradient-to-b from-brdc-pale to-white">
      <Reveal className="max-w-6xl mx-auto bg-gradient-to-br from-white to-brdc-pale rounded-xl shadow-[0_20px_50px_-15px_rgba(15,77,58,0.3)] border border-brdc-border/60">
        <h2 className="sr-only">Why Choose BRDC?</h2>
        <div className="grid md:grid-cols-3 md:divide-x divide-y md:divide-y-0 divide-brdc-border">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-4 p-6 sm:p-7 hover:bg-brdc-pale transition-colors duration-300">
                <Icon className="w-10 h-10 shrink-0 text-brdc-primary" strokeWidth={1.25} />
                <div>
                  <h3 className="font-bold text-brdc-text mb-1">{item.title}</h3>
                  <p className="text-sm text-brdc-text-secondary leading-relaxed">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
