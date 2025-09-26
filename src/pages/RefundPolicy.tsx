import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Refund Policy</h1>
        <div className="prose prose-gray max-w-none text-foreground">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Overview</h2>
            <p className="mb-4">
              This Refund Policy outlines the terms and conditions for refunds on OptionSellerVardhan's subscription services. We strive to provide high-quality trading advisory services and understand that customer satisfaction is paramount.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Refund Eligibility</h2>
            
            <h3 className="text-xl font-semibold mb-3">2.1 Monthly Subscriptions</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>7-Day Money Back Guarantee:</strong> New subscribers can request a full refund within 7 days of their first subscription</li>
              <li>Refunds are only applicable if less than 3 trading signals have been accessed</li>
              <li>Refund requests must be made via email with a valid reason</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.2 Yearly Subscriptions</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>30-Day Money Back Guarantee:</strong> Full refund available within 30 days of purchase</li>
              <li>Partial refunds may be considered after 30 days on a case-by-case basis</li>
              <li>Refund amount will be prorated based on unused months</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">2.3 Lifetime Subscriptions</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>60-Day Money Back Guarantee:</strong> Full refund available within 60 days of purchase</li>
              <li>After 60 days, refunds are not available due to the nature of lifetime access</li>
              <li>Exceptional circumstances will be reviewed individually</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Non-Refundable Situations</h2>
            <p className="mb-4">Refunds will not be provided in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Trading losses incurred by following our recommendations</li>
              <li>Changes in market conditions or economic factors</li>
              <li>Dissatisfaction with trading results or performance</li>
              <li>Requests made after the applicable refund period</li>
              <li>Violations of our Terms of Service</li>
              <li>Sharing account access with unauthorized users</li>
              <li>Failure to follow risk management guidelines</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Refund Process</h2>
            
            <h3 className="text-xl font-semibold mb-3">4.1 How to Request a Refund</h3>
            <ol className="list-decimal pl-6 mb-4">
              <li>Send an email to support@optionsellervardhan.com</li>
              <li>Include your subscription details and payment transaction ID</li>
              <li>Provide a clear reason for the refund request</li>
              <li>Our team will review your request within 2-3 business days</li>
            </ol>

            <h3 className="text-xl font-semibold mb-3">4.2 Processing Time</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Review process: 2-3 business days</li>
              <li>Approved refunds: 5-7 business days to reflect in your account</li>
              <li>Payment gateway processing: Additional 3-5 business days</li>
              <li>Total processing time: 10-15 business days maximum</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">4.3 Refund Method</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Refunds will be processed to the original payment method</li>
              <li>Bank transfers for cases where original method is unavailable</li>
              <li>Processing fees may be deducted from the refund amount</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Partial Refunds</h2>
            <p className="mb-4">
              Partial refunds may be considered in specific situations:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Service interruptions lasting more than 48 hours</li>
              <li>Technical issues preventing access to subscribed content</li>
              <li>Billing errors or duplicate charges</li>
              <li>Downgrade requests from higher to lower tier subscriptions</li>
            </ul>
            <p className="mb-4">
              Partial refund amounts will be calculated based on the unused portion of the subscription period.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Automatic Renewals and Cancellations</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Monthly subscriptions auto-renew unless cancelled 24 hours before renewal</li>
              <li>Cancellations can be made through account settings or customer support</li>
              <li>No refunds for partial months after cancellation</li>
              <li>Access continues until the end of the current billing period</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Service Modifications</h2>
            <p className="mb-4">
              If we significantly modify our services or pricing:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Existing subscribers will be notified 30 days in advance</li>
              <li>Option to continue with current terms or request a refund</li>
              <li>Refunds will be prorated for unused subscription periods</li>
              <li>No refunds for minor service updates or improvements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Force Majeure</h2>
            <p className="mb-4">
              We are not liable for refunds due to circumstances beyond our control, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Natural disasters or emergencies</li>
              <li>Government regulations or market closures</li>
              <li>Internet service provider outages</li>
              <li>Third-party service interruptions (Telegram, payment gateways)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Dispute Resolution</h2>
            <p className="mb-4">
              If you disagree with our refund decision:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>You may escalate the matter to our senior management</li>
              <li>Provide additional documentation or justification</li>
              <li>We will conduct a secondary review within 5 business days</li>
              <li>Final decisions will be communicated in writing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Important Disclaimers</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Risk Warning:</strong> Trading in derivatives involves substantial risk of loss</li>
              <li><strong>No Guarantee:</strong> Past performance does not guarantee future results</li>
              <li><strong>Educational Purpose:</strong> Our services are for educational and informational purposes</li>
              <li><strong>Personal Responsibility:</strong> You are responsible for your trading decisions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
            <p className="mb-4">
              For refund requests or questions about this policy:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email: support@optionsellervardhan.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Business Hours: Monday to Friday, 9:00 AM to 6:00 PM IST</li>
              <li>Address: Mumbai, Maharashtra, India</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Policy Changes</h2>
            <p className="mb-4">
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