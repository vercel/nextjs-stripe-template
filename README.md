# Simple Online Store with Stripe

A responsive online store built with Next.js and Stripe for selling a single product. Features a clean design with product showcase, secure checkout, and payment processing.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Payments**: Stripe
- **TypeScript**: Full type safety
- **Deployment**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 20+
- A Stripe account (Vercel integration recommended)
- Vercel account (optional, for deployment)

### Installation

1. **Install dependencies**:
   \`\`\`bash
   pnpm install
   \`\`\`

2. **Set up Stripe**:

### Option 1: Use Vercel Stripe integration

Use "Create Sandbox" or "Link Existing Account" for the Vercel Stripe integration.

### Option 2: Setup Stripe manually

- Create a Stripe account at [stripe.com](https://stripe.com)
- Get your API keys from the Stripe Dashboard
- Add the following environment variables to your Vercel project:
  - `STRIPE_SECRET_KEY` - Your Stripe secret key
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Your Stripe publishable key
- Call `vercel env pull` or update `.env.local` file manually

3. **Run the development server**:
   \`\`\`bash
   pnpm dev
   \`\`\`

4. **Open** [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add your Stripe environment variables
   - Deploy!

### Environment Variables

Make sure to add these environment variables in your Vercel project settings either using Vercel Stripe integration or manually:

- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using v0 by Vercel
