import { Button } from "./ui/button"
import Image from "next/image"

const Header = () => {
    return (
        <header className="absolute top-0 z-50 w-full justify-between items-center px-20">
            <div className=" py-6 px-4 flex gap-2.5 justify-between items-center ">
                <Image
                    src="/dex-space.svg"
                    alt="DexSpace Logo"
                    width={180}
                    height={40}
                    priority
                />
                <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
                    <a href="#features" className="text-sm font-medium transition-colors">Features</a>
                    <a href="#trending" className="text-sm font-medium transition-colors">Why Us</a>
                    <a href="#faq" className="text-sm font-medium transition-colors">Pricing</a>
                    <a href="#faq" className="text-sm font-medium transition-colors">Blog</a>
                    <a href="#faq" className="text-sm font-medium transition-colors">Community</a>
                </nav>
                <Button className="bg-primary"  >
                    Get Started
                </Button>
            </div>
        </header>

    )
}

export default Header;