import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
    return (
        <section className="p-20 bg-background-tertiary">
            <div className="container mx-auto space-y-12 ">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold ">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-secondary-foreground text-sm mx-auto">
                        Find answers to common questions about DexSpace and how you can make the most of our platform.
                    </p>
                </div>

                <Accordion type="single" collapsible className="space-y-2 max-w-3xl mx-auto transition-all duration-300">
                    <AccordionItem
                        value="item-1"
                        className="bg-card rounded-lg border border-border data-[state=open]:bg-accent"
                    >
                        <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline hover:bg-muted/20">
                            What is DexSpace?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-secondary-foreground">
                            DexSpace is a next-gen DeFi analytics platform that provides real-time token prices, market trends, and advanced
                            trading insights for decentralized exchanges.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-2"
                        className="bg-card rounded-lg border border-border overflow-hidden data-[state=open]:bg-accent"
                    >
                        <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline hover:bg-muted/20">
                            How does DexSpace track token prices?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-secondary-foreground">
                            DexSpace utilizes advanced blockchain indexing technology to monitor on-chain transactions and liquidity pools across multiple networks. We aggregate data from decentralized exchanges and provide real-time price updates with minimal latency, ensuring you always have the most current market information.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-3"
                        className="bg-card rounded-lg border border-border overflow-hidden data-[state=open]:bg-accent"
                    >
                        <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline hover:bg-muted/20">
                            Do I need to connect my wallet to use DexSpace?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-secondary-foreground">
                            No, you don&apos;t need to connect your wallet to access basic features like token price tracking, market trends, and analytics. However, connecting your wallet enables personalized features such as portfolio tracking, trading directly from our platform, and receiving customized alerts based on your holdings.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-4"
                        className="bg-card rounded-lg border border-border overflow-hidden data-[state=open]:bg-accent"
                    >
                        <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline hover:bg-muted/20">
                            Is DexSpace free to use?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-secondary-foreground">
                            Yes, DexSpace offers a free tier that provides access to essential features including token price tracking, basic market analytics, and trading insights. We also offer premium subscription plans with advanced features like real-time alerts, enhanced data visualization, API access, and priority customer support for professional traders and developers.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem
                        value="item-5"
                        className="bg-card rounded-lg border border-border overflow-hidden data-[state=open]:bg-accent  "
                    >
                        <AccordionTrigger className="px-6 py-4 text-lg font-medium hover:no-underline hover:bg-muted/20">
                            How can I list a token on DexSpace?
                        </AccordionTrigger>
                        <AccordionContent className="px-6 py-4 text-secondary-foreground">
                            To list your token on DexSpace, you can submit a listing request through our Token Submission portal. We require basic information about your project, including contract address, website, social media links, and tokenomics details. Our team reviews all submissions to ensure they meet our security and quality standards before adding them to our platform.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <div className="flex justify-center items-center text-sm ">
                    Still have questions? Contact Support.
                </div>
            </div>
        </section>
    );
}