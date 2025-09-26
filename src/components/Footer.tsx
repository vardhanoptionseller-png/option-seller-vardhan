import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  AlertTriangle, 
  ExternalLink,
  Mail,
  Phone
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Advisory", href: "#advisory" },
    { name: "Subscriptions", href: "#subscriptions" },
    { name: "IIFL Account", href: "#iifl" },
    { name: "Contact", href: "#contact" }
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Risk Disclaimer", href: "#disclaimer" },
    { name: "Refund Policy", href: "/refund" }
  ];

  const socialLinks = [
    { name: "Telegram", href: "https://web.telegram.org/a/#-1002714310264" },
    { name: "Instagram", href: "https://www.instagram.com/optionsellervardhan?igsh=NmNnbWRiZ2RpdGNl&utm_source=qr" },
    { name: "Twitter/X", href: "https://x.com/cavardhanca?s=11&t=XI2ylX8cPcNKHXvjuj2syw" },
    { name: "Threads", href: "https://www.threads.com/@optionsellervardhan?xmt=AQF0zlRRVotOH4mKcd-vbHRjPTKxnvCQhZ6kQz0lkVvpIZ4" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                OptionSellerVardhan
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Professional F&O advisory services by CA Vamsi Vardhan. SEBI-registered expert 
                providing proven trading strategies, risk management, and comprehensive market guidance 
                to help you achieve consistent profits in options trading.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="border-primary/50">
                <Shield className="w-3 h-3 mr-1" />
                SEBI Registered
              </Badge>
              <Badge variant="outline" className="border-accent/50">
                CA Qualified
              </Badge>
              <Badge variant="outline" className="border-financial-green/50">
                IIFL Partner
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@optionsellervardhan.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+919989063944</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div className="space-y-8">
            <div>
              <h4 className="font-semibold text-lg mb-6">Follow Us</h4>
              <ul className="space-y-3">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-6">Legal</h4>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Disclaimer & Copyright */}
        <div className="py-8 space-y-6">
          {/* Risk Disclaimer */}
          <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
              <div className="space-y-2">
                <h5 className="font-semibold text-destructive">Investment Risk Disclaimer</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong>Investments in securities market are subject to market risks.</strong> 
                  Read all the related documents carefully before investing. Past performance is not 
                  indicative of future results. F&O trading involves substantial risk and may not be 
                  suitable for all investors. Please ensure you understand the risks and seek 
                  independent advice if necessary.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>SEBI Registration:</strong> INH00000XXXX | 
                  <strong> Sub-broker:</strong> IIFL Securities Ltd | 
                  <strong> CA License:</strong> XXXXXX
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} OptionSellerVardhan. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Designed & Developed with ❤️ for Traders
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;