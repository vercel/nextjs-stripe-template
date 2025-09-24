import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ShoppingCart } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const product = PRODUCTS[0]; // Get our single product

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">AudioStore</h1>
            <Badge variant="secondary" className="text-sm">
              Free Shipping
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image
                  src={
                    product.images?.[0] ||
                    "/placeholder.svg?height=500&width=500&query=premium headphones"
                  }
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-primary text-primary-foreground">
                  Best Seller
                </Badge>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="text-sm text-muted-foreground">
                    (4.9/5 from 2,847 reviews)
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-balance mb-4">
                  {product.name}
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="font-semibold">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features?.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price and CTA */}
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">
                    ${(product.priceInCents / 100).toFixed(2)}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    $249.99
                  </span>
                  <Badge variant="destructive">20% OFF</Badge>
                </div>

                <Link href="/checkout">
                  <Button
                    size="lg"
                    className="cursor-pointer w-full lg:w-auto text-lg px-8 py-6"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Now - Free Shipping
                  </Button>
                </Link>

                <p className="text-sm text-muted-foreground">
                  ✓ 30-day money-back guarantee • ✓ 2-year warranty • ✓ Free
                  returns
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <ShoppingCart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">
                On all orders over $100
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Quality Guarantee</h3>
              <p className="text-sm text-muted-foreground">
                30-day money-back guarantee
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Star className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Top Rated</h3>
              <p className="text-sm text-muted-foreground">
                4.9/5 stars from customers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 AudioStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
