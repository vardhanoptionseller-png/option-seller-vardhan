import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8">Terms of Service</h1>
        <div className="prose prose-sm sm:prose-base lg:prose-lg prose-gray max-w-none text-foreground space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg mb-6 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">1. Acceptance of Terms</h2>
            <p className="text-sm sm:text-base">
              By accessing and using OptionSellerVardhan's services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service ("Terms") govern your use of our website, trading signals, advisory services, and any related services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">2. Description of Services</h2>
            <p className="text-sm sm:text-base">
              OptionSellerVardhan provides:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Live F&O trading signals and recommendations</li>
              <li>Market analysis and research reports</li>
              <li>Educational content about options trading</li>
              <li>Telegram group access for real-time updates</li>
              <li>One-on-one advisory sessions (premium plans)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">3. Investment Risks and Disclaimers</h2>
            <p className="text-sm sm:text-base">
              <strong>IMPORTANT:</strong> Trading in derivatives, futures, and options involves substantial risk and is not suitable for all investors. You should carefully consider your financial situation and consult with financial advisors before making any investment decisions.
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Past performance is not indicative of future results</li>
              <li>All trading signals are for educational purposes only</li>
              <li>We are not liable for any losses incurred from following our recommendations</li>
              <li>You trade at your own risk and responsibility</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">4. Subscription and Payment Terms</h2>
            <p className="text-sm sm:text-base">
              Subscription fees are charged in advance and are non-refundable except as explicitly stated in our Refund Policy. By subscribing, you authorize us to charge your chosen payment method.
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Monthly subscriptions auto-renew unless cancelled</li>
              <li>Yearly subscriptions provide access for 12 months from purchase date</li>
              <li>Lifetime subscriptions provide access for the lifetime of the service</li>
              <li>Price changes will be communicated 30 days in advance</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">5. User Responsibilities</h2>
            <p className="text-sm sm:text-base">You agree to:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Provide accurate and current information</li>
              <li>Maintain the confidentiality of your account credentials</li>
              <li>Not share access to premium content with unauthorized users</li>
              <li>Use our services in compliance with all applicable laws</li>
              <li>Not engage in any activity that disrupts or interferes with our services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">6. Intellectual Property</h2>
            <p className="text-sm sm:text-base">
              All content, trademarks, and intellectual property on our platform are owned by OptionSellerVardhan. You may not reproduce, distribute, or create derivative works without explicit written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">7. Limitation of Liability</h2>
            <p className="text-sm sm:text-base">
              OptionSellerVardhan shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of our services, including but not limited to trading losses, lost profits, or business interruption.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">8. Termination</h2>
            <p className="text-sm sm:text-base">
              We reserve the right to terminate or suspend your account at any time for violation of these terms. You may cancel your subscription at any time through your account settings or by contacting us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">9. SEBI Compliance</h2>
            <p className="text-sm sm:text-base">
              Our services comply with SEBI (Securities and Exchange Board of India) regulations. We are registered under SEBI Registration No: INH000008705 and maintain all required disclosures and compliance measures.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">10. Contact Information</h2>
            <p className="text-sm sm:text-base">
              For questions about these Terms of Service, please contact us at:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Email: support@optionsellervardhan.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: Mumbai, Maharashtra, India</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;