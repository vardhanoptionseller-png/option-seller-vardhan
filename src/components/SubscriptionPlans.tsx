import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown } from "lucide-react";

const SubscriptionPlans = () => {
  const plans = [
    {
      name: "Starter",
      duration: "1 Month",
      price: "₹4,999",
      originalPrice: "₹6,999",
      icon: Zap,
      popular: false,
      description: "Perfect for beginners to test our strategies",
      features: [
        "Live F&O Trading Signals",
        "Google Sheet Access",
        "Basic Market Analysis",
        "Telegram Group Access",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      duration: "3 Months",
      price: "₹12,999",
      originalPrice: "₹18,999",
      icon: Star,
      popular: true,
      description: "Most popular choice for serious traders",
      features: [
        "Everything in Starter",
        "Advanced Trading Strategies",
        "Weekly Market Outlook",
        "Priority Telegram Support",
        "Risk Management Guide",
        "Performance Analytics"
      ]
    },
    {
      name: "Expert",
      duration: "6 Months",
      price: "₹24,999",
      originalPrice: "₹35,999",
      icon: Crown,
      popular: false,
      description: "For experienced traders seeking consistent profits",
      features: [
        "Everything in Professional",
        "1-on-1 Strategy Sessions",
        "Custom Risk Profiling",
        "Advanced Option Strategies",
        "Market Crash Protection",
        "Direct WhatsApp Access"
      ]
    },
    {
      name: "Master",
      duration: "1 Year",
      price: "₹49,999",
      originalPrice: "₹69,999",
      icon: Crown,
      popular: false,
      description: "Complete mastery program for professional traders",
      features: [
        "Everything in Expert",
        "Monthly Video Calls",
        "Exclusive Master Strategies",
        "Portfolio Review Sessions",
        "Tax Planning Guidance",
        "Lifetime Telegram Access",
        "IIFL Premium Benefits"
      ]
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
                    <span className="text-lg text-muted-foreground line-through">
                      {plan.originalPrice}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-financial-green mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular 
                      ? "bg-gradient-success shadow-premium" 
                      : "bg-gradient-primary"
                  }`}
                  size="lg"
                >
                  {plan.popular ? "Get Started" : "Choose Plan"}
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
            All plans include GST. Prices subject to change. SEBI Registration: INH000007485
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;