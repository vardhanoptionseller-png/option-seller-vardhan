import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8">Privacy Policy</h1>
        <div className="prose prose-sm sm:prose-base lg:prose-lg prose-gray max-w-none text-foreground space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg mb-6 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information you provide directly to us, such as when you create an account, subscribe to our services, or contact us for support.
            </p>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Personal Information:</h3>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Name and contact information (email, phone number)</li>
              <li>Payment information (processed securely through Razorpay)</li>
              <li>Trading preferences and risk profile</li>
              <li>Communication history with our support team</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">Usage Information:</h3>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Log data (IP address, browser type, pages visited)</li>
              <li>Device information and mobile device identifiers</li>
              <li>Usage patterns and interaction with our content</li>
              <li>Telegram username (for group access)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">2. How We Use Your Information</h2>
            <p className="text-sm sm:text-base">We use the information we collect to:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Provide and maintain our trading advisory services</li>
              <li>Process payments and manage subscriptions</li>
              <li>Send trading signals and market updates</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Improve our services and develop new features</li>
              <li>Comply with legal obligations and SEBI regulations</li>
              <li>Send important notices about service changes</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">3. Information Sharing and Disclosure</h2>
            <p className="text-sm sm:text-base">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li><strong>Service Providers:</strong> With trusted third-party service providers (like Razorpay for payments)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">4. Data Security</h2>
            <p className="text-sm sm:text-base">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>SSL encryption for data transmission</li>
              <li>Secure payment processing through PCI-compliant providers</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication measures</li>
              <li>Data backup and recovery procedures</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">5. Data Retention</h2>
            <p className="text-sm sm:text-base">
              We retain your personal information for as long as necessary to provide our services and comply with legal obligations:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Account information: Until account deletion or 7 years after last activity</li>
              <li>Transaction records: 7 years as per regulatory requirements</li>
              <li>Communication records: 3 years for support and compliance purposes</li>
              <li>Usage logs: 12 months for service improvement</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">6. Your Rights and Choices</h2>
            <p className="text-sm sm:text-base">You have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Receive your data in a structured format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Restriction:</strong> Limit how we use your information</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">7. Cookies and Tracking</h2>
            <p className="text-sm sm:text-base">
              We use cookies and similar technologies to enhance your experience:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Essential cookies for website functionality</li>
              <li>Analytics cookies to understand usage patterns</li>
              <li>Preference cookies to remember your settings</li>
              <li>Marketing cookies for relevant advertisements</li>
            </ul>
            <p className="text-sm sm:text-base">
              You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">8. Third-Party Services</h2>
            <p className="text-sm sm:text-base">
              Our services integrate with third-party platforms:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li><strong>Telegram:</strong> For group communications and signals</li>
              <li><strong>PhonePe:</strong> For secure payment processing</li>
              <li><strong>Google Analytics:</strong> For website usage analysis</li>
              <li><strong>IIFL:</strong> For brokerage partnership services</li>
            </ul>
            <p className="text-sm sm:text-base">
              These services have their own privacy policies which we encourage you to review.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">9. International Data Transfers</h2>
            <p className="text-sm sm:text-base">
              Your information may be transferred to and processed in countries other than India. We ensure appropriate safeguards are in place for such transfers in accordance with applicable data protection laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">10. Children's Privacy</h2>
            <p className="text-sm sm:text-base">
              Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children under 18.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">11. Contact Us</h2>
            <p className="text-sm sm:text-base">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Email: info@optionsellervardhan.com</li>
              <li>Phone: +91 9989063944</li>
              <li>Address: NO 45/3 GOPALA KRISHNA COMPLEX, RESIDENCY ROAD M G ROAD, Bengaluru, Bengaluru Urban, Karnataka, 560025</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;