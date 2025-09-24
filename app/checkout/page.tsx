import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Shield, CreditCard } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import Checkout from "@/components/checkout";

export default function CheckoutPage() {
  const product = PRODUCTS[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to store
            </Link>
            <h1 className="text-xl font-semibold">Secure Checkout</h1>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Order Summary
                </CardTitle>
                <CardDescription>Review your purchase details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <Image
                      src={
                        product.images?.[0] ||
                        "/placeholder.svg?height=80&width=80&query=headphones"
                      }
                      alt={product.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">Quantity: 1</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="font-semibold">
                        ${(product.priceInCents / 100).toFixed(2)}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        20% OFF
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${(product.priceInCents / 100).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${(product.priceInCents / 100).toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-green-600" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CreditCard className="w-4 h-4 text-blue-600" />
                <span>SSL Encrypted</span>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Payment Details</CardTitle>
                <CardDescription>
                  Complete your purchase securely with Stripe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Checkout productId={product.id} />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
