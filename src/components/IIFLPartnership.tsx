import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Shield, 
  Zap, 
  TrendingUp,
  ChevronRight,
  ExternalLink
} from "lucide-react";

const IIFLPartnership = () => {
  const benefits = [
    {
      icon: CreditCard,
      title: "Zero Account Opening Charges",
      description: "Open your IIFL demat account completely free through our partnership"
    },
    {
      icon: Zap,
      title: "Instant Account Activation",
      description: "Get trading access within 24 hours with digital verification"
    },
    {
      icon: Shield,
      title: "Premium Support",
      description: "Dedicated relationship manager and priority customer service"
    },
    {
      icon: TrendingUp,
      title: "Competitive Brokerage",
      description: "Enjoy reduced brokerage rates and special F&O trading benefits"
    }
  ];

  const steps = [
    "Click 'Open IIFL Account' button below",
    "Fill the online application form",
    "Complete digital KYC verification",
    "Fund your account and start trading",
    "Get instant access to our advisory services"
  ];

  return (
    <section id="iifl" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-gradient-premium text-white mb-4">IIFL Partnership</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Open Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Trading Account
            </span>{" "}
            with IIFL
          </h2>
          <p className="text-xl text-muted-foreground">
            Get exclusive benefits and seamless trading experience through our authorized 
            IIFL franchise partnership. Start your F&O journey today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Benefits */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 border-border/50 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-0 space-y-3">
                    <div className="p-3 bg-gradient-primary rounded-lg w-fit">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-to-r from-financial-blue/10 to-financial-green/10 border-primary/20">
              <CardContent className="p-0">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  Why Choose IIFL?
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• SEBI Registered & NSE/BSE Member</li>
                  <li>• Advanced Trading Platforms</li>
                  <li>• 24/7 Customer Support</li>
                  <li>• Robust Risk Management Systems</li>
                  <li>• Research & Analytics Tools</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Account Opening Process */}
          <div className="space-y-8">
            <Card className="p-8 border-primary/20 shadow-premium">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-center">
                  Quick Account Opening Process
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-6">
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground pt-1">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-6 border-t border-border">
                  <Button size="lg" className="w-full bg-gradient-success shadow-premium" asChild>
                    <a href="https://register.iiflcapital.com/?E1Code=w2rOurRD0YmCGpd7h9nBuA==" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Open IIFL Account Now
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    <ChevronRight className="w-5 h-5 mr-2" />
                    Learn More About IIFL
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-sm text-muted-foreground">
                    Account opening is free. Trading charges apply as per IIFL rates.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IIFLPartnership;