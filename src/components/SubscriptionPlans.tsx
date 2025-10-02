import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { PhonePePaymentDialog } from "./PhonePePaymentDialog";

// Declare PhonePe interface for TypeScript
declare global {
  interface Window {
    PhonePe: any;
  }
}

const SubscriptionPlans = () => {
  const { toast } = useToast();
  const [selectedPlan, setSelectedPlan] = useState<any | null>(null);
  const [isPaymentDialogOpen, setIsPaymentDialogOpen] = useState(false);

  const handlePaymentClick = (plan: any) => {
    setSelectedPlan(plan);
    setIsPaymentDialogOpen(true);
  };

  const handlePaymentSuccess = (transactionId: string, paymentDetails: any) => {
    // Create detailed payment summary
    const paymentSummary = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 PAYMENT DETAILS - TEST MODE
━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Status: ${paymentDetails.status}
💳 Transaction ID: ${paymentDetails.transactionId}

📦 PLAN DETAILS:
   • Plan: ${paymentDetails.plan}
   • Duration: ${paymentDetails.duration}
   • Amount: ${paymentDetails.amount}

💰 PAYMENT METHOD: ${paymentDetails.paymentMethod}
${paymentDetails.paymentMethod === 'UPI' 
  ? `   • UPI ID: ${paymentDetails.paymentInfo.upiId}`
  : paymentDetails.paymentMethod === 'CARD'
  ? `   • Card: ${paymentDetails.paymentInfo.cardNumber}\n   • Name: ${paymentDetails.paymentInfo.cardName}`
  : `   • Bank: ${paymentDetails.paymentInfo.bank}`
}

📅 Date & Time: ${paymentDetails.date}

📞 Contact: +917829022140
━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    console.log("=== PAYMENT SUCCESS - FULL DETAILS ===");
    console.log(paymentSummary);
    console.log("\n=== JSON FORMAT ===");
    console.log(JSON.stringify(paymentDetails, null, 2));

    toast({
      title: "✅ Payment Successful!",
      description: (
        <div className="space-y-2 text-sm">
          <p><strong>Transaction ID:</strong> {transactionId}</p>
          <p><strong>Plan:</strong> {paymentDetails.plan} ({paymentDetails.duration})</p>
          <p><strong>Amount:</strong> {paymentDetails.amount}</p>
          <p><strong>Method:</strong> {paymentDetails.paymentMethod}</p>
          <div className="mt-3 pt-3 border-t text-xs text-muted-foreground">
            <p>✅ Test Mode - Full details logged to console</p>
            <p>📞 Send to: +917829022140</p>
          </div>
        </div>
      ),
      duration: 10000,
    });
  };

  const handlePaymentFailure = (error: string) => {
    toast({
      title: "Payment Failed",
      description: error,
      variant: "destructive",
    });

    console.log("=== PhonePe Payment Failed ===");
    console.log({
      status: "FAILED",
      plan: selectedPlan?.name,
      error,
      timestamp: new Date().toISOString(),
    });
  };
  const plans = [
    {
      name: "Starter",
      duration: "1 Month",
      price: "₹4,999",
      originalPrice: null,
      discount: null,
      icon: Zap,
      popular: false,
      description: "Perfect for beginners to test our strategies",
      features: []
    },
    {
      name: "Professional",
      duration: "3 Months",
      price: "₹11,999",
      originalPrice: "₹14,997",
      discount: "20%",
      icon: Star,
      popular: true,
      description: "Most popular choice for serious traders",
      features: []
    },
    {
      name: "Expert",
      duration: "6 Months",
      price: "₹19,999",
      originalPrice: "₹29,994",
      discount: "33%",
      icon: Crown,
      popular: false,
      description: "For experienced traders seeking consistent profits",
      features: []
    },
    {
      name: "Master",
      duration: "1 Year",
      price: "₹29,999",
      originalPrice: "₹59,988",
      discount: "50%",
      icon: Crown,
      popular: false,
      description: "Complete mastery program for professional traders",
      features: []
    }
  ];

  return (
    <section id="subscriptions" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Choose Your{" "}
            <span className="bg-gradient-success bg-clip-text text-transparent">
              Trading Journey
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Start with any plan and upgrade anytime. All plans include our proven F&O strategies 
            and live market guidance from SEBI-registered experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-premium ${
                plan.popular 
                  ? "border-primary shadow-card scale-105" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-gradient-success">
                  Most Popular
                </Badge>
              )}

              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${plan.popular ? "bg-gradient-success" : "bg-gradient-primary"}`}>
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{plan.duration}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                    {plan.discount && (
                      <span className="text-sm bg-financial-green text-white px-2 py-1 rounded">
                        {plan.discount} OFF
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button
                  className={`w-full ${
                    plan.popular 
                      ? "bg-gradient-success shadow-premium" 
                      : "bg-gradient-primary"
                  }`}
                  size="lg"
                  onClick={() => handlePaymentClick(plan)}
                >
                  {plan.popular ? "Pay with PhonePe" : "Subscribe Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-card rounded-xl border border-border">
          <p className="text-muted-foreground mb-4">
            <strong>Money Back Guarantee:</strong> Not satisfied? Get 100% refund within 7 days.
          </p>
          <p className="text-sm text-muted-foreground">
            All plans include GST. Prices subject to change. SEBI Registration: INH00000XXXX
          </p>
        </div>
      </div>

      {/* PhonePe Payment Dialog */}
      {selectedPlan && (
        <PhonePePaymentDialog
          isOpen={isPaymentDialogOpen}
          onClose={() => setIsPaymentDialogOpen(false)}
          plan={selectedPlan}
          onPaymentSuccess={handlePaymentSuccess}
          onPaymentFailure={handlePaymentFailure}
        />
      )}
    </section>
  );
};

export default SubscriptionPlans;