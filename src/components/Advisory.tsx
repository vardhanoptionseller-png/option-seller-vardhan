import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  TrendingUp, 
  Shield, 
  Clock,
  BarChart3,
  Target,
  DollarSign,
  AlertCircle
} from "lucide-react";

const Advisory = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Live F&O Signals",
      description: "Real-time entry and exit signals for Stocks, Nifty & Bank Nifty options"
    },
    {
      icon: Target,
      title: "Precise Targets",
      description: "Clear profit targets and stop-loss levels for every trade"
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk control with position sizing guidance"
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "Daily technical and fundamental analysis with market outlook"
    }
  ];

  const tradingStrategies = [
    "Directional Stock Futures",
    "Directional Stock Options",
    "Index Directional Spreads (Bull/Bear Spreads)",
    "Iron Condor Spreads"
  ];

  return (
    <section id="advisory" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="bg-gradient-success text-white mb-4">Live Advisory</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Professional{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              F&O Advisory
            </span>{" "}
            Services
          </h2>
          <p className="text-xl text-muted-foreground">
            Get access to our live Google Sheet with real-time F&O trading signals, 
            market analysis, and proven strategies used by our expert team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Features */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 border-border/50 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-0 space-y-3">
                    <div className="p-3 bg-gradient-primary rounded-lg w-fit">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trading Strategies */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-0 space-y-4">
                <h3 className="font-semibold text-lg flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary" />
                  Trading Strategies Covered
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {tradingStrategies.map((strategy, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-financial-green rounded-full"></div>
                      <span className="text-muted-foreground text-sm">{strategy}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Live Sheet Access */}
          <div className="space-y-8">
            <Card className="p-8 border-primary/20 shadow-premium">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl flex items-center">
                  <BarChart3 className="w-8 h-8 mr-3 text-primary" />
                  Live Trading Sheet
                </CardTitle>
                <p className="text-muted-foreground">
                  Access our real-time Google Sheet with live F&O signals, trade updates, 
                  and market analysis - updated throughout trading hours.
                </p>
              </CardHeader>
              
              <CardContent className="p-0 space-y-6">
                {/* Demo View */}
                <div className="bg-muted/50 rounded-lg p-6 border border-border">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium">Current Signals</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-financial-green rounded-full animate-pulse"></div>
                        <span className="text-financial-green">Live</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-card p-3 rounded border">
                        <div className="text-2xl font-bold text-financial-green">+12.5%</div>
                        <div className="text-xs text-muted-foreground">Today's P&L</div>
                      </div>
                      <div className="bg-card p-3 rounded border">
                        <div className="text-2xl font-bold">8</div>
                        <div className="text-xs text-muted-foreground">Active Trades</div>
                      </div>
                      <div className="bg-card p-3 rounded border">
                        <div className="text-2xl font-bold">91%</div>
                        <div className="text-xs text-muted-foreground">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Access Information */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Updated every 5 minutes during market hours</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Position sizing based on your capital</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <AlertCircle className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Complete trade rationale provided</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button size="lg" className="w-full bg-gradient-success shadow-premium" asChild>
                    <a 
                      href="https://docs.google.com/spreadsheets/d/1tcsD0yrMBEBS-_T36Sexk1lJIqyhyesKDuqY0BZWf-k/edit?gid=545892777#gid=545892777"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Access Live Sheet
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full">
                    View Sample Sheet
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>Sheet access included with all subscription plans</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advisory;