import { Sparkles, Clock, Shield, Heart } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Salon Quality",
    description: "Professional-grade materials that look and feel like a luxury manicure",
  },
  {
    icon: Clock,
    title: "Quick Application",
    description: "Perfect nails in under 5 minutes with our easy-to-use adhesive system",
  },
  {
    icon: Shield,
    title: "Long-Lasting",
    description: "Durable design that stays flawless for up to 2 weeks with proper care",
  },
  {
    icon: Heart,
    title: "Nail-Friendly",
    description: "Gentle on natural nails with no damage or harsh chemicals",
  },
]

export function Features() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Why choose LuxeNails?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience the perfect blend of convenience, quality, and style
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
