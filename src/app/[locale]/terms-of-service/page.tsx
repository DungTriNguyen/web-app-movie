import Header from "@/components/Common/header";
import Footer from "@/components/Common/footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen overflow-x-hidden relative mx-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <main className="pt-20 pb-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none text-white">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Terms of Service</h1>
          <div className="space-y-8">
            {/* 1. Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
              <p className="text-white leading-relaxed">
                Welcome to DexSpace. By accessing, browsing, or using any part of the DexSpace platform (“Platform”), including any features, content, data, or services provided by DexSpace (“we”, “our”, or “us”), you (“User”, “you”) agree to be legally bound by these Terms of Service (“Terms”).
              </p>
              <p className="text-white leading-relaxed">
                If you do not agree with these Terms, you may not use DexSpace.
              </p>
            </section>
            {/* 2. Eligibility */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Eligibility</h2>
              <p className="text-white leading-relaxed">
                You must be at least 18 years old and have the legal capacity to enter into binding contracts in your jurisdiction. By using DexSpace, you represent and warrant that you meet these requirements.
              </p>
            </section>
            {/* 3. Nature of the Platform */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. Nature of the Platform</h2>
              <p className="text-white leading-relaxed">
                DexSpace is a decentralized exchange analytics and utility interface. We do not operate or control any blockchain, smart contracts, or third-party protocols. We provide non-custodial access to publicly available blockchain data and tooling.
              </p>
              <p className="text-white leading-relaxed">
                DexSpace is not a broker-dealer, custodian, exchange, financial institution, or investment advisor. We do not offer financial advice or guarantee investment outcomes.
              </p>
            </section>
            {/* 4. No Custody or Control of Funds */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. No Custody or Control of Funds</h2>
              <p className="text-white leading-relaxed">
                DexSpace does not have access to your digital assets or private keys. You are solely responsible for managing and safeguarding your wallet and funds. Transactions you initiate via the platform are facilitated by third-party protocols and recorded on public blockchains.
              </p>
              <p className="text-white leading-relaxed">
                We cannot modify, cancel, or reverse any blockchain transaction.
              </p>
            </section>
            {/* 5. Assumption of Risk */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Assumption of Risk</h2>
              <p className="text-white leading-relaxed">
                By using DexSpace, you acknowledge and accept the inherent risks associated with using blockchain technology, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li>Volatility of digital asset prices</li>
                <li>Regulatory uncertainty and enforcement</li>
                <li>Smart contract bugs, hacks, or exploits</li>
                <li>Front-running or MEV activity</li>
                <li>Loss of private keys or wallet access</li>
                <li>Immutable and irreversible transactions</li>
              </ul>
              <p className="text-white leading-relaxed">
                You use DexSpace entirely at your own risk.
              </p>
            </section>
            {/* 6. User Responsibilities */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. User Responsibilities</h2>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li>Use the platform only for lawful purposes</li>
                <li>Not attempt to exploit or interfere with platform operations</li>
                <li>Not use the service to launder money, commit fraud, or violate sanctions</li>
                <li>Maintain control over your wallet and SSO credentials</li>
              </ul>
              <p className="text-white leading-relaxed">
                We reserve the right to suspend or restrict access if we suspect violations of these Terms or applicable laws.
              </p>
            </section>
            {/* 7. Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Intellectual Property</h2>
              <p className="text-white leading-relaxed">
                DexSpace owns all rights, title, and interest in its trademarks, brand, UI/UX, logos, and platform code (excluding third-party open source). You may not copy, distribute, modify, or use our IP without written permission.
              </p>
              <p className="text-white leading-relaxed">
                Publicly available blockchain data is not proprietary and may be used under applicable public data norms.
              </p>
            </section>
            {/* 8. Privacy */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Privacy</h2>
              <p className="text-white leading-relaxed">
                Our <a href="/privacy-policy" className="underline">Privacy Policy</a> explains how we collect and process user data. We do not collect personally identifiable information unless explicitly provided by you via wallet connection or SSO (Google or Apple). Public blockchain data is inherently visible to anyone.
              </p>
            </section>
            {/* 9. No Warranties */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. No Warranties</h2>
              <p className="text-white leading-relaxed">
                DexSpace is provided “as is” and “as available.”<br />
                We disclaim all warranties, express or implied, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
              </p>
              <p className="text-white leading-relaxed">
                We do not guarantee the accuracy, completeness, reliability, or availability of the platform at any given time.
              </p>
            </section>
            {/* 10. Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. Limitation of Liability</h2>
              <p className="text-white leading-relaxed">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li>We shall not be liable for any indirect, incidental, punitive, or consequential damages, including but not limited to loss of funds, profits, data, or access.</li>
                <li>Our total liability for any claims related to these Terms or DexSpace shall not exceed $100 USD.</li>
                <li>You agree to indemnify and hold DexSpace harmless against any claims arising from your use of the platform or violation of these Terms.</li>
              </ul>
            </section>
            {/* 11. Modifications */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Modifications</h2>
              <p className="text-white leading-relaxed">
                We may update these Terms from time to time. The latest version will always be available on our website. Continued use of DexSpace after changes constitutes your acceptance of the revised Terms.
              </p>
              <p className="text-white leading-relaxed">
                We may discontinue or modify any part of the platform at any time without prior notice or liability.
              </p>
            </section>
            {/* 12. Governing Law and Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Governing Law and Dispute Resolution</h2>
              <p className="text-white leading-relaxed">
                These Terms shall be governed by the laws of the State of Wyoming, United States, without regard to conflict of law principles.
              </p>
              <p className="text-white leading-relaxed">
                Any dispute arising from these Terms or your use of the platform shall be submitted to binding arbitration in Wyoming, unless otherwise required by applicable law. You waive the right to a class action or jury trial.
              </p>
            </section>
            {/* 13. Contact Us */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">13. Contact Us</h2>
              <p className="text-white leading-relaxed">
                If you have any questions or concerns regarding these Terms, you may contact us at:<br />
                <strong>Email:</strong> <a href="mailto:contact@dexspace.io" className="underline">contact@dexspace.io</a><br />
                <strong>Entity:</strong> DexSpace Crypto Platform LLC<br />
                <strong>Effective Date:</strong> {new Date('2025-07-14').toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
} 