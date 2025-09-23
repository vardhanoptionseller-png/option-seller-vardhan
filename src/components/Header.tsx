import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Advisory", href: "#advisory" },
    { name: "Subscriptions", href: "#subscriptions" },
    { name: "IIFL Account", href: "#iifl" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8 max-w-7xl">
        <div className="flex justify-between items-center h-20 sm:h-22 md:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="OptionSellerVardhan Logo" className="h-14 w-auto sm:h-16 md:h-20 min-w-[140px] sm:min-w-[160px] md:min-w-[180px] object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button variant="default" className="bg-gradient-primary" asChild>
              <a href="https://register.iiflcapital.com/?E1Code=w2rOurRD0YmCGpd7h9nBuA==" target="_blank" rel="noopener noreferrer">
                Start Trading
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-card/95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="default" className="bg-gradient-primary mt-4" asChild>
                <a href="https://register.iiflcapital.com/?E1Code=w2rOurRD0YmCGpd7h9nBuA==" target="_blank" rel="noopener noreferrer">
                  Start Trading
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;