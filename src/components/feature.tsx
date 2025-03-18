import Image from "next/image";

export default function Feature() {
    return (
        <section id="features" className="container mx-auto py-16 px-4 bg-background rounded-2xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                    DexSpace provides everything you need for secure and efficient crypto trading.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#2A3246] p-8 rounded-xl">
                    <div className="mb-6">
                        <Image
                            src="/images/feature-1.svg"
                            alt="Real-time Market Updates"
                            width={64}
                            height={64}
                        />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Real-time Market Updates</h3>
                    <p className="text-gray-300">
                        Get instant updates on market trends, price changes, and trading volumes to make informed decisions.
                    </p>
                </div>
                <div className="bg-[#2A3246] p-8 rounded-xl">
                    <div className="mb-6">
                        <Image
                            src="/images/feature-2.svg"
                            alt="Secure Trading Platform"
                            width={64}
                            height={64}
                        />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Secure Trading Platform</h3>
                    <p className="text-gray-300">
                        Trade with confidence on our secure platform with advanced encryption and protection for your assets.
                    </p>
                </div>
                <div className="bg-[#2A3246] p-8 rounded-xl">
                    <div className="mb-6">
                        <Image
                            src="/images/feature-3.svg"
                            alt="Advanced Token Trading"
                            width={64}
                            height={64}
                        />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Advanced Token Trading</h3>
                    <p className="text-gray-300">
                        Access a wide range of tokens and trading pairs with competitive fees and high liquidity.
                    </p>
                </div>
            </div>
        </section>

    )
}