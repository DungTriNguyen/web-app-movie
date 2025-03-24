import { Button } from "./ui/button";

export default function Ready() {
    return (
        <section id="ready" className="container mx-auto py-16 px-4">
            <div className="bg-[url('/images/ready.jpeg')] bg-cover bg-center bg-no-repeat md:p-20 md:gap-12 md:container md:mx-auto md:py-16 md:px-4  bg-background rounded-2xl text-center flex-col gap-4 self-stretch py-[46px] px-6">
                <h1 className="text-4xl font-bold  max-w-[600px]">Ready to Elevate Your Defi Trading?</h1>
                <p className="text-muted-foreground text-sm">Join DexSpace today and take full control of your trading experience.</p>
                <Button>Get Started Now</Button>
            </div>
        </section>
    )
}