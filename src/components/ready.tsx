import { Button } from "./ui/button";

export default function Ready() {
    return (
        <section id="ready" className="container mx-auto py-16 px-4">
            <div className="bg-[url('/images/ready.jpeg')] bg-cover bg-center bg-no-repeat p-20 gap-12 container mx-auto py-16 px-4 bg-background rounded-2xl text-center space-y-4">
                <h1 className="text-4xl font-bold ">Ready to Elevate Your <br /> Defi Trading?</h1>
                <p className="text-muted-foreground text-sm">Join DexSpace today and take full control of your trading experience.</p>
                <Button>Get Started Now</Button>
            </div>
        </section>
    )
}