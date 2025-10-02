import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertTriangle, TrendingDown, Shield } from "lucide-react";

const RiskDisclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-destructive" />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Risk Disclaimer</h1>
        </div>
        
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 sm:p-6 mb-8">
          <p className="text-base sm:text-lg font-semibold text-destructive mb-2">
            IMPORTANT: Please read this disclaimer carefully before using our services.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground">
            Trading in Futures & Options (F&O) involves substantial financial risk. Past performance is not indicative of future results.
          </p>
        </div>

        <div className="prose prose-sm sm:prose-base lg:prose-lg prose-gray max-w-none text-foreground space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg mb-6 text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground flex items-center gap-2">
              <TrendingDown className="w-6 h-6 text-destructive" />
              1. Market Risk Warning
            </h2>
            <p className="text-sm sm:text-base">
              <strong>Investments in securities market are subject to market risks.</strong> Trading in derivatives (Futures & Options) carries a high level of risk and may not be suitable for all investors. You could lose all or more than your initial investment.
            </p>
            
            <div className="bg-muted/50 border border-border rounded-lg p-4 sm:p-6 space-y-3">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Key Market Risks Include:</h3>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                <li><strong>Price Volatility:</strong> Securities prices can fluctuate significantly in short periods</li>
                <li><strong>Leverage Risk:</strong> F&O trading involves leverage which can amplify both gains and losses</li>
                <li><strong>Liquidity Risk:</strong> Inability to exit positions at desired prices</li>
                <li><strong>Time Decay:</strong> Options lose value as expiration approaches (Theta decay)</li>
                <li><strong>Gap Risk:</strong> Market gaps can result in substantial unexpected losses</li>
                <li><strong>Systemic Risk:</strong> Market-wide events can impact all securities</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">2. No Guarantee of Profits</h2>
            <p className="text-sm sm:text-base">
              <strong>Past performance is not indicative of future results.</strong> While we strive to provide quality advisory services, we do not guarantee profits or success in trading. All trading decisions are ultimately your responsibility.
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Historical performance does not ensure similar future returns</li>
              <li>Market conditions change and past strategies may not work in the future</li>
              <li>Individual results may vary based on execution, capital, risk tolerance, and market timing</li>
              <li>You may experience significant losses despite following our recommendations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">3. Advisory Nature of Services</h2>
            <p className="text-sm sm:text-base">
              Our services are purely <strong>advisory in nature</strong>. We provide trading ideas, analysis, and recommendations, but:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>We do not execute trades on your behalf</li>
              <li>We do not have access to your trading account or funds</li>
              <li>All investment decisions must be made independently by you</li>
              <li>You are solely responsible for evaluating the suitability of any recommendation</li>
              <li>Our recommendations are based on current market conditions which can change rapidly</li>
              <li>You should conduct your own research before acting on any advice</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">4. Capital Requirements and Risk Management</h2>
            <p className="text-sm sm:text-base">
              <strong>Only risk capital should be used for trading:</strong>
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Never invest money you cannot afford to lose</li>
              <li>Do not use borrowed funds or loans for trading</li>
              <li>Maintain adequate capital to handle margin calls and adverse movements</li>
              <li>Set aside emergency funds separate from trading capital</li>
              <li>Use stop-loss orders and proper position sizing</li>
              <li>Diversify your portfolio to manage risk</li>
              <li>Never over-leverage your positions</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">5. SEBI and Regulatory Compliance</h2>
            <div className="bg-muted/50 border border-border rounded-lg p-4 sm:p-6">
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm sm:text-base mb-3">
                    We are SEBI registered investment advisors (Registration No: INH00000XXXX). However:
                  </p>
                  <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                    <li>SEBI registration does not guarantee performance</li>
                    <li>Registration is not an endorsement by SEBI</li>
                    <li>We are subject to SEBI's Investment Advisers Regulations, 2013</li>
                    <li>All grievances can be addressed through SEBI's SCORES platform</li>
                    <li>We maintain required capital and insurance as per regulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">6. Information Accuracy and Timeliness</h2>
            <p className="text-sm sm:text-base">
              While we endeavor to provide accurate and timely information:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Information may become outdated due to rapidly changing market conditions</li>
              <li>Technical issues may cause delays in signal delivery</li>
              <li>We are not liable for errors or omissions in our content</li>
              <li>You should verify information independently before acting</li>
              <li>Market data and analysis are subject to interpretation</li>
              <li>Communication delays can occur due to technical factors</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">7. Tax Implications</h2>
            <p className="text-sm sm:text-base">
              Trading profits are subject to taxation:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>F&O trading profits are treated as speculative business income in India</li>
              <li>You are responsible for reporting and paying all applicable taxes</li>
              <li>Tax laws are subject to change and vary by jurisdiction</li>
              <li>We recommend consulting a qualified tax professional</li>
              <li>Maintain proper records of all trades for tax purposes</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">8. Limitation of Liability</h2>
            <p className="text-sm sm:text-base">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>We are not liable for any trading losses you may incur</li>
              <li>We are not responsible for execution issues, slippage, or broker problems</li>
              <li>We do not guarantee uninterrupted or error-free services</li>
              <li>Force majeure events are beyond our control</li>
              <li>Your use of our services is at your own risk</li>
              <li>Our maximum liability is limited to the subscription fees paid</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">9. Conflicts of Interest</h2>
            <p className="text-sm sm:text-base">
              Potential conflicts of interest:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>We may earn referral fees from IIFL for client referrals</li>
              <li>We may take similar positions in the market as our recommendations</li>
              <li>Our analysis is based on our personal judgment and experience</li>
              <li>We strive to act in clients' best interests at all times</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">10. Suitability Assessment</h2>
            <p className="text-sm sm:text-base">
              <strong>F&O trading may not be suitable for everyone.</strong> Before subscribing to our services, assess:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Your financial situation and investment objectives</li>
              <li>Your risk tolerance and ability to bear losses</li>
              <li>Your trading experience and knowledge of derivatives</li>
              <li>Your time availability to monitor positions</li>
              <li>Whether you understand the risks involved</li>
            </ul>
            <p className="text-sm sm:text-base font-semibold mt-4">
              We recommend consulting with a qualified financial advisor to determine if F&O trading is appropriate for you.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">11. Educational Purpose</h2>
            <p className="text-sm sm:text-base">
              Much of our content is provided for educational and informational purposes. Such content:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Should not be construed as personalized investment advice</li>
              <li>May contain hypothetical or simulated scenarios</li>
              <li>Is subject to our interpretation and analysis methodology</li>
              <li>Should be independently verified before acting upon</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">12. Acknowledgment</h2>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 sm:p-6">
              <p className="text-sm sm:text-base font-semibold mb-3">
                By using our services, you acknowledge that:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                <li>You have read and understood this Risk Disclaimer</li>
                <li>You understand the risks involved in F&O trading</li>
                <li>You accept full responsibility for your trading decisions</li>
                <li>You agree to our Terms of Service and Privacy Policy</li>
                <li>You are using risk capital that you can afford to lose</li>
                <li>You will not hold us liable for any trading losses</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">13. Contact for Grievances</h2>
            <p className="text-sm sm:text-base">
              For any grievances or concerns regarding our services:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
              <li>Email: info@optionsellervardhan.com</li>
              <li>Phone: +91 9989063944</li>
              <li>SEBI SCORES: <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://scores.sebi.gov.in</a></li>
              <li>Response time: Within 7 working days</li>
            </ul>
          </section>

          <div className="border-t border-border pt-6 mt-8">
            <p className="text-sm sm:text-base font-semibold text-destructive">
              ⚠️ WARNING: Trading in F&O is highly speculative and carries a high level of risk. Only sophisticated investors with sufficient risk capital should participate. Ensure you fully understand the risks before trading.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RiskDisclaimer;
