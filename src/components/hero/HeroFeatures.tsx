import { Heart, Smile, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "زیبایی طبیعی",
    subtitle: "Natural Beauty",
  },
  {
    icon: Smile,
    title: "درمان تخصصی",
    subtitle: "Advanced Care",
  },
  {
    icon: Heart,
    title: "لبخندی ماندگار",
    subtitle: "Healthy Smile",
  },
];

export default function HeroFeatures() {
  return (
    <div className="mt-10 flex items-center justify-start mr-3 flex-wrap gap-8">
      {features.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.title} className="flex items-center justify-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500/20 backdrop-blur-sm">
              <Icon size={22} strokeWidth={1.5} className="md:text-white" />
            </div>
            <div className="text-right">
              <p className="text-sm font-medium md:text-white">{item.title}</p>
              <p className="mt-1 text-xs md:text-white/60">{item.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
