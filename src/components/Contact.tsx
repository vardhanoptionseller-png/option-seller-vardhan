import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle,
  Send,
  Clock
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@optionsellervardhan.com",
      action: "mailto:info@optionsellervardhan.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+919989063944",
      action: "tel:+919989063944"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Quick Support",
      action: "https://wa.me/919989063944"
    },
    {
      icon: MapPin,
      title: "Office",
      content: "NO 45/3 GOPALA KRISHNA COMPLEX, RESIDENCY ROAD M G ROAD, Bengaluru, Bengaluru Urban, Karnataka, 560025",
      action: "#"
    }
  ];

  const socialLinks = [
    {
      name: "Telegram",
      url: "https://web.telegram.org/a/#-1002714310264",
      description: "Join our private trading group"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/optionsellervardhan?igsh=NmNnbWRiZ2RpdGNl&utm_source=qr",
      description: "Daily market insights & tips"
    },
    {
      name: "Twitter/X",
      url: "https://x.com/cavardhanca?s=11&t=XI2ylX8cPcNKHXvjuj2syw",
      description: "Live market commentary"
    },
    {
      name: "Threads",
      url: "https://www.threads.com/@optionsellervardhan?xmt=AQF0zlRRVotOH4mKcd-vbHRjPTKxnvCQhZ6kQz0lkVvpIZ4",
      description: "Market updates & analysis"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get in{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Have questions about our advisory services or need help with F&O trading? 
            We're here to help you succeed in the markets.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 border-border/50 hover:shadow-card transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{info.title}</h3>
                        <a 
                          href={info.action}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.content}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Business Hours */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                </div>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Market Days:</strong> 9:00 AM - 4:00 PM</p>
                  <p><strong>Support:</strong> 24/7 via WhatsApp</p>
                  <p><strong>Consultations:</strong> By Appointment</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 border-border/50 shadow-card">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="p-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone</label>
                      <Input placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <Input placeholder="What's this about?" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea 
                      placeholder="Tell us about your trading experience or questions..."
                      rows={5}
                    />
                  </div>

                  <Button size="lg" className="w-full bg-gradient-primary shadow-premium">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-8">Follow Our Market Updates</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <Card key={index} className="p-6 border-border/50 hover:shadow-card transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-0 text-center space-y-3">
                  <h4 className="font-semibold">{social.name}</h4>
                  <p className="text-sm text-muted-foreground">{social.description}</p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      Follow
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;