import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

// Declare PhonePe interface for TypeScript
declare global {
  interface Window {
    PhonePe: any;
  }
}

const SubscriptionPlans = () => {
  const { toast } = useToast();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  // PhonePe test merchant ID
  const PHONEPE_MERCHANT_ID = "PGTESTPAYUAT";

  const handlePayment = async (plan: any) => {
    setLoadingPlan(plan.name);

    // Convert price from string (₹4,999) to number in paise
    const priceNumber = parseInt(plan.price.replace('₹', '').replace(',', '')) * 100;

    // Generate unique transaction ID for testing
    const transactionId = `OSV_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    try {
      // PhonePe Test Environment Payment Flow
      const paymentData = {
        merchantId: PHONEPE_MERCHANT_ID,
        merchantTransactionId: transactionId,
        amount: priceNumber,
        merchantUserId: `USER_${Date.now()}`,
        redirectUrl: `${window.location.origin}/?payment=success`,
        redirectMode: "POST",
        callbackUrl: `${window.location.origin}/api/payment/callback`,
        paymentInstrument: {
          type: "PAY_PAGE"
        }
      };

      console.log('=== PhonePe Test Payment Initiated ===');
      console.log('Payment Data:', {
        ...paymentData,
        planDetails: {
          name: plan.name,
          duration: plan.duration,
          price: plan.price
        },
        testMode: true,
        environment: 'UAT'
      });

      // Show test payment instructions
      toast({
        title: "Test Payment Mode Active",
        description: `Initiating test payment for ${plan.name} plan. Amount: ${plan.price}`,
      });

      // Simulate payment processing delay (realistic timing)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In test environment, simulate successful payment
      // For production, this would redirect to PhonePe payment gateway
      const isSuccess = true; // Set to true for testing successful payments

      if (isSuccess) {
        toast({
          title: "✅ Test Payment Successful!",
          description: `Successfully subscribed to ${plan.name} plan. Transaction ID: ${transactionId}`,
        });
        
        console.log('=== PhonePe Test Payment Success ===');
        console.log({
          status: 'SUCCESS',
          transactionId,
          plan: plan.name,
          amount: plan.price,
          amountInPaise: priceNumber,
          duration: plan.duration,
          merchantId: PHONEPE_MERCHANT_ID,
          timestamp: new Date().toISOString(),
          testEnvironment: 'UAT',
          message: 'This is a test transaction. In production, user would be redirected to PhonePe.'
        });
      } else {
        throw new Error('Payment declined - Test scenario');
      }
    } catch (error: any) {
      toast({
        title: "Payment Failed",
        description: error.message || 'Test payment failed. Please try again.',
        variant: "destructive",
      });
      
      console.log('=== PhonePe Test Payment Failed ===');
      console.log({
        status: 'FAILED',
        transactionId,
        plan: plan.name,
        amount: priceNumber,
        error: error.message,
        timestamp: new Date().toISOString()
      });
    } finally {
      setLoadingPlan(null);
    }
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
                  onClick={() => handlePayment(plan)}
                  disabled={loadingPlan === plan.name}
                >
                  {loadingPlan === plan.name 
                    ? "Processing Payment..." 
                    : plan.popular ? "Pay with PhonePe" : "Subscribe Now"}
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
    </section>
  );
};

export default SubscriptionPlans;