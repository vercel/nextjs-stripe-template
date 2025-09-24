"use server";

import { headers } from "next/headers";

import { stripe } from "../../lib/stripe";
import { PRODUCTS } from "../../lib/products";

export async function startCheckoutSession(productId: string) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) {
    throw new Error(`Product with id "${productId}" not found`);
  }

  // Create Checkout Sessions from body params.
  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.priceInCents,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
  });

  return session.client_secret!;
}
