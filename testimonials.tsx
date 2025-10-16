import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Fashion Blogger",
    content:
      "These press-on nails are absolutely stunning! They look so natural and last for weeks. I get compliments everywhere I go.",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
  {
    name: "Emily Chen",
    role: "Marketing Executive",
    content:
      "Perfect for my busy lifestyle. I can have gorgeous nails without spending hours at the salon. The quality is exceptional!",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
  {
    name: "Jessica Martinez",
    role: "Entrepreneur",
    content:
      "I was skeptical at first, but these exceeded all my expectations. Easy to apply and they stay put through everything!",
    rating: 5,
    image: "/professional-woman-portrait.png",
  },
]

export function Testimonials() {
  return (
    <section id="reviews" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">Loved by thousands</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See what our customers are saying about their LuxeNails experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
