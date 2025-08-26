import Header from "@/components/header";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen overflow-x-hidden relative mx-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <main className="pt-20 pb-16 px-4 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none text-white">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Privacy Policy</h1>
          <div className="space-y-8">
            {/* 1. Introduction */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
              <p className="text-white leading-relaxed">
                DexSpace (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our decentralized exchange analytics platform. By accessing or using DexSpace, you agree to the data practices described in this policy.
              </p>
            </section>
            {/* 2. Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">2. Information We Collect</h2>
              <h3 className="text-xl font-medium mb-3 text-white">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li>Wallet addresses when you connect your wallet</li>
                <li>Email addresses used solely for authentication through Google or Apple SSO</li>
                <li>Communication preferences and feedback you voluntarily provide</li>
              </ul>
              <h3 className="text-xl font-medium mb-3 mt-6 text-white">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li>DexSpace does not collect IP addresses, device identifiers, or other personally identifiable information through its core services.</li>
                <li>We do not track your behavior outside the platform and do not use third-party ad services.</li>
              </ul>
              <h3 className="text-xl font-medium mb-3 mt-6 text-white">2.3 Public Blockchain Data</h3>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li>Interactions you perform on supported blockchain networks (e.g., trades, mints) are public by design. These actions are recorded on-chain and may be visible to anyone. DexSpace does not alter or obscure this data.</li>
              </ul>
            </section>
            {/* 3. How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Information</h2>
              <p className="text-white mb-2">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li>Provide and maintain the platform’s core functionality</li>
                <li>Analyze aggregated usage patterns to improve user experience</li>
                <li>Respond to your support requests</li>
                <li>Send system-related updates or notifications if applicable</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            {/* 4. Information Sharing and Disclosure */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">4. Information Sharing and Disclosure</h2>
              <p className="text-white mb-2">DexSpace does not sell, trade, or rent your personal data. We also do not share your data with any “trusted third-party service providers.”<br />We may disclose limited information only in the following situations:</p>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li><strong>Legal Compliance:</strong> If required by law, subpoena, or regulatory obligation</li>
                <li><strong>Security:</strong> To investigate, prevent, or respond to fraud, abuse, or threats to the platform</li>
                <li><strong>Consent:</strong> If you explicitly authorize disclosure (e.g., opting into public feedback)</li>
              </ul>
            </section>
            {/* 5. Data Security */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">5. Data Security</h2>
              <p className="text-white leading-relaxed">
                We apply technical and organizational measures designed to protect your information. However, given the inherent nature of internet and blockchain systems, we cannot guarantee absolute security. Always exercise caution when interacting with blockchain networks.
              </p>
            </section>
            {/* 6. Blockchain Transparency Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">6. Blockchain Transparency Disclaimer</h2>
              <p className="text-white leading-relaxed">
                Please be aware that all transactions executed on public blockchain networks (such as Solana, Ethereum, etc.) are permanently recorded and publicly accessible. DexSpace does not control this transparency. Any data written to the blockchain (including wallet addresses and transaction history) cannot be modified or deleted by us.
              </p>
            </section>
            {/* 7. Cookies and Tracking Technologies */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">7. Cookies and Tracking Technologies</h2>
              <p className="text-white mb-2">DexSpace uses minimal, essential cookies to:</p>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li>Maintain session states</li>
                <li>Enable secure login through SSO</li>
              </ul>
              <p className="text-white mt-2">We do not use tracking or marketing cookies. You may disable cookies via your browser, but this may affect functionality.</p>
            </section>
            {/* 8. Your Rights and Choices */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">8. Your Rights and Choices</h2>
              <p className="text-white mb-2">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li><strong>Access:</strong> Request a summary of your personal data we retain</li>
                <li><strong>Correction:</strong> Request corrections to inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of data associated with your account</li>
                <li><strong>Objection:</strong> Object to certain processing, where applicable</li>
                <li><strong>Withdrawal:</strong> Withdraw consent at any time (e.g., disconnecting wallet or SSO)</li>
              </ul>
              <p className="text-white mt-2">To exercise your rights, please contact us at the email below.</p>
            </section>
            {/* 9. Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">9. Data Retention</h2>
              <p className="text-white leading-relaxed">We retain user information only as long as necessary to:</p>
              <ul className="list-disc pl-6 text-white space-y-2">
                <li>Operate and maintain the platform</li>
                <li>Comply with applicable laws</li>
                <li>Resolve disputes or enforce terms</li>
                <li>Wallet interaction data is retained in non-identifiable, aggregated form for analytics.</li>
              </ul>
            </section>
            {/* 10. International Data Transfers */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">10. International Data Transfers</h2>
              <p className="text-white leading-relaxed">
                Your information may be processed outside your country of residence, including in the United States. DexSpace is operated and governed under the laws of Wyoming, USA.<br />
                We take reasonable steps to ensure your data is handled securely and in compliance with applicable data protection laws, including the GDPR. Users from the EU/EEA acknowledge that blockchain data may not be subject to erasure or restriction under GDPR due to its immutable nature.
              </p>
            </section>
            {/* 11. Changes to This Policy */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">11. Changes to This Policy</h2>
              <p className="text-white leading-relaxed">
                We may update this Privacy Policy from time to time. Material changes will be posted on this page with an updated effective date. Continued use of DexSpace after changes constitutes your acceptance of the new terms.
              </p>
            </section>
            {/* 12. Contact Us */}
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-white">12. Contact Us</h2>
              <p className="text-white leading-relaxed">
                If you have any questions or wish to exercise your rights, please contact:<br />
                <strong>Email:</strong> <a href="mailto:contact@dexspace.io" className="underline">contact@dexspace.io</a><br />
              </p>
              <p className="text-white leading-relaxed">
                <strong>Entity:</strong> DexSpace Crypto Platform LLC
              </p>
              <p className="text-white leading-relaxed">
                <strong>Last Updated:</strong> {new Date('2025-07-14').toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
