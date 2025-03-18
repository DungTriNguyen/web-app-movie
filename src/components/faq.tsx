import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export default function FAQ() {
    return (
        <section id="faq" className="container mx-auto py-16 px-4 bg-[#1A2030] rounded-2xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    Find answers to common questions about DexSpace and crypto trading.
                </p>
            </div>
            <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                    <AccordionItem value="item-1" className="bg-[#2A3246] rounded-xl overflow-hidden border-none">
                        <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline hover:bg-[#3A4357]">
                            How do I create an account on DexSpace?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-gray-300">
                            To create an account, click on the &ldquo;Launch App&rdquo; button and follow the registration process. You&rsquo;ll need to provide an email address and create a secure password. For enhanced security, we recommend enabling two-factor authentication.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className="bg-[#2A3246] rounded-xl overflow-hidden border-none">
                        <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline hover:bg-[#3A4357]">
                            What cryptocurrencies can I trade on DexSpace?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-gray-300">
                            DexSpace supports a wide range of cryptocurrencies including Bitcoin, Ethereum, Solana, Cardano, and many more. We regularly add new tokens based on market demand and after thorough security audits.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className="bg-[#2A3246] rounded-xl overflow-hidden border-none">
                        <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline hover:bg-[#3A4357]">
                            How secure is DexSpace for trading?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-gray-300">
                            DexSpace employs industry-leading security measures including end-to-end encryption, cold storage for the majority of assets, regular security audits, and optional two-factor authentication. We prioritize the security of your assets and personal information.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className="bg-[#2A3246] rounded-xl overflow-hidden border-none">
                        <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline hover:bg-[#3A4357]">
                            What are the trading fees on DexSpace?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-gray-300">
                            DexSpace offers competitive trading fees starting at 0.25% per transaction. Fee discounts are available based on trading volume and for holders of our native token. For a detailed fee structure, please visit our fees page in the app.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>

    )
}