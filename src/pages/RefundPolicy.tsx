import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 sm:mb-8">Refund Policy</h1>
        <div className="prose prose-sm sm:prose-base lg:prose-lg prose-gray max-w-none text-foreground space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg mb-6 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">1. Overview</h2>
            <p className="text-sm sm:text-base">
              This Refund Policy outlines the terms and conditions for refunds on OptionSellerVardhan's subscription services. We strive to provide high-quality trading advisory services and understand that customer satisfaction is paramount.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">2. Refund Eligibility</h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Cancellation requests will be entertained only if submitted within 1 hour of placing the order and prior to access being granted on Telegram</li>
              <li>Once access to the TrendSniperX Channel has been enabled, no cancellations or refunds will be permissible.</li>
              <li>Given the digital and non-returnable nature of our product, refunds are not applicable once access has been provided.</li>
              <li>In the event of a subscription error or if access has not been received within the stipulated time frame, we request you to notify our support team within 7 days of purchase.</li>
              <li>In rare and exceptional circumstances, should a refund be sanctioned, the same will be processed within 3–5 business days.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">3. Refund Process</h2>
            
            <h3 className="text-lg sm:text-xl font-semibold mb-3">3.1 How to Request a Refund</h3>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Send an email to info@optionsellervardhan.com</li>
              <li>Include your subscription details and payment transaction ID</li>
              <li>Provide a clear reason for the refund request</li>
              <li>Our team will review your request within 2-3 business days</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">3.2 Processing Time</h3>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Review process: 2-3 business days</li>
              <li>Approved refunds: 5-7 business days to reflect in your account</li>
            </ul>

            <h3 className="text-lg sm:text-xl font-semibold mb-3">3.3 Refund Method</h3>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Refunds will be processed to the original payment method</li>
              <li>Bank transfers for cases where original method is unavailable</li>
              <li>Processing fees may be deducted from the refund amount</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">4. Partial Refunds</h2>
            <p className="text-sm sm:text-base">
              Partial refunds may be considered in specific situations:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Service interruptions lasting more than 48 hours</li>
              <li>Technical issues preventing access to subscribed content</li>
              <li>Billing errors or duplicate charges</li>
            </ul>
            <p className="text-sm sm:text-base">
              Partial refund amounts will be calculated based on the unused portion of the subscription period.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">5. Automatic Renewals and Cancellations</h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Monthly subscriptions auto-renew unless cancelled 24 hours before renewal</li>
              <li>Cancellations can be made through account settings or customer support</li>
              <li>No refunds for partial months after cancellation</li>
              <li>Access continues until the end of the current billing period</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">6. Service Modifications</h2>
            <p className="text-sm sm:text-base">
              If we significantly modify our services or pricing:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Existing subscribers will be notified 30 days in advance</li>
              <li>Option to continue with current terms or request a refund</li>
              <li>Refunds will be prorated for unused subscription periods</li>
              <li>No refunds for minor service updates or improvements</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">7. Force Majeure</h2>
            <p className="text-sm sm:text-base">
              We are not liable for refunds due to circumstances beyond our control, including:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Natural disasters or emergencies</li>
              <li>Government regulations or market closures</li>
              <li>Internet service provider outages</li>
              <li>Third-party service interruptions (Telegram, payment gateways)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">8. Important Disclaimers</h2>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li><strong>Risk Warning:</strong> Trading in derivatives involves substantial risk of loss</li>
              <li><strong>No Guarantee:</strong> Past performance does not guarantee future results</li>
              <li><strong>Educational Purpose:</strong> Our services are for educational and informational purposes</li>
              <li><strong>Personal Responsibility:</strong> You are responsible for your trading decisions</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">9. Contact Information</h2>
            <p className="text-sm sm:text-base">
              For refund requests or questions about this policy:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Email: info@optionsellervardhan.com</li>
              <li>Phone: +91 9989063944</li>
              <li>Business Hours: Monday to Friday, 9:00 AM to 6:00 PM IST</li>
              <li>Address: NO 45/3 GOPALA KRISHNA COMPLEX, RESIDENCY ROAD M G ROAD, Bengaluru, Bengaluru Urban, Karnataka, 560025</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">10. Policy Changes</h2>
            <p className="text-sm sm:text-base">
              We reserve the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after policy changes constitutes acceptance of the new terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;