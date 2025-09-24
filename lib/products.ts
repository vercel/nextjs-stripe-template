export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  images?: string[]
  features?: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: "premium-headphones",
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation and premium sound quality.",
    priceInCents: 19999, // $199.99
    images: ["/premium-wireless-headphones.png"],
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Premium leather comfort",
      "Hi-Res Audio certified",
      "Quick charge: 5 min = 3 hours",
    ],
  },
]
