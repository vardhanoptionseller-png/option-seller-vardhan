import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  TrendingUp, 
  Shield, 
  Users, 
  Award,
  CheckCircle
} from "lucide-react";

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Chartered Accountant",
      description: "Professional CA with deep understanding of financial markets and taxation"
    },
    {
      icon: Shield,
      title: "SEBI Registered",
      description: "Authorized investment advisor with proper regulatory compliance"
    },
    {
      icon: TrendingUp,
      title: "8+ Years Experience",
      description: "Proven track record in F&O trading and market analysis"
    },
    {
      icon: Users,
      title: "IIFL Sub-Broker",
      description: "Authorized partner helping clients with seamless account opening"
    }
  ];

  const achievements = [
    "91% Success Rate in F&O Strategies",
    "2000+ Satisfied Clients",
    "₹50+ Crores Client Portfolio",
    "Winner - Best F&O Advisor 2023"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-gradient-premium text-white">About Vamsi Vardhan</Badge>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Your Trusted{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  F&O Trading
                </span>{" "}
                Expert
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Vamsi Vardhan is a qualified Chartered Accountant and SEBI-registered investment advisor 
                with over 8 years of expertise in F&O trading. As an authorized IIFL sub-broker, 
                he has helped thousands of traders achieve consistent profits through proven strategies 
                and disciplined risk management.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                His unique combination of CA expertise and market experience allows him to provide 
                comprehensive financial guidance that goes beyond just trading signals - including 
                tax optimization, risk management, and portfolio diversification strategies.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Key Achievements</h3>
              <div className="grid grid-cols-1 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-financial-green flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Credentials Grid */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <Card key={index} className="p-6 border-border/50 hover:shadow-card transition-all duration-300 hover:border-primary/50">
                  <CardContent className="p-0 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <credential.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg">{credential.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{credential.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mission Statement */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-0 text-center space-y-4">
                <Award className="w-12 h-12 mx-auto text-primary" />
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize F&O trading by providing retail investors with institutional-grade 
                  strategies, proper risk management, and continuous education for long-term wealth creation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;