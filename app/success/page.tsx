import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package, Mail } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Payment Successful!</CardTitle>
          <CardDescription>
            Thank you for your purchase. Your order has been confirmed.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Package className="w-5 h-5 text-blue-600" />
              <div>
                <p className="font-medium">Order Processing</p>
                <p className="text-sm text-muted-foreground">
                  We&apos;ll prepare your order for shipping
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
              <Mail className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium">Confirmation Email</p>
                <p className="text-sm text-muted-foreground">
                  Check your inbox for order details
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link href="/" className="w-full">
              <Button className="w-full">Continue Shopping</Button>
            </Link>
            <p className="text-center text-sm text-muted-foreground">
              Questions? Contact us at support@audiostore.com
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
