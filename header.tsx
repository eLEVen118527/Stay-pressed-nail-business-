import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm" />
            <span className="text-xl md:text-2xl font-bold tracking-tight">LuxeNails</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium hover:text-accent transition-colors">
              Products
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-accent transition-colors">
              How It Works
            </a>
            <a href="#reviews" className="text-sm font-medium hover:text-accent transition-colors">
              Reviews
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Button className="hidden sm:inline-flex">Shop Now</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
