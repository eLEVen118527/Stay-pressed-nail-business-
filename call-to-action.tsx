import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">Ready to transform your nails?</h2>
          <p className="text-lg md:text-xl opacity-90 text-pretty">
            Join thousands of satisfied customers and experience the luxury of salon-quality nails at home. Free
            shipping on orders over $50.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base group">
              Shop Collection
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              View Starter Kit
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}