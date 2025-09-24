import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Users, Award } from "lucide-react";
import heroImage from "@/assets/hero-trading.jpg";

const Hero = () => {
  const stats = [
    { icon: TrendingUp, label: "Success Rate", value: "91%" },
    { icon: Users, label: "Active Clients", value: "50+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Shield, label: "SEBI Registered", value: "Verified" },
  ];

  return (
    <section id="home" className="pt-24 sm:pt-26 md:pt-32 pb-16 min-h-screen flex items-center bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Master{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  F&O Trading
                </span>{" "}
                with Expert Advisory
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Get professional options trading strategies, live market updates, and proven advisory services. 
                Join 50+ successful traders who trust our SEBI-registered expertise.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button size="lg" className="bg-gradient-primary shadow-premium px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
                View Strategies
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-3 sm:p-4 text-center border-border/50 hover:shadow-card transition-all duration-300">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-base sm:text-lg">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-premium">
              <img
                src={heroImage}
                alt="Professional F&O Trading Platform"
                className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-financial-navy/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <Card className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-3 sm:p-4 bg-card/95 backdrop-blur-sm border-border/50">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-financial-green rounded-full animate-pulse"></div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">Live Market</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Real-time Updates</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;