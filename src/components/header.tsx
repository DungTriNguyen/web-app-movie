'use client'
import { Button } from "./ui/button"
import Image from "next/image"
import { Menu, Globe } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

const Header = () => {
    const router = useRouter()
    const pathname = usePathname()

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'vi', label: 'Tiếng Việt' }
    ]

    const handleLanguageChange = (locale: string) => {
        const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`)
        router.push(newPath)
    }

    return (
        <header className="absolute top-0 z-50 w-full justify-between items-center ">
            <div className="min-h-20 md:py-6 px-4 md:px-20 flex gap-2.5 justify-between items-center ">
                <Image
                    src="/dex-space.svg"
                    alt="DexSpace Logo"
                    width={180}
                    height={40}
                    priority
                    className="w-[180px] justify-center items-center"
                />

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-4 lg:gap-8 flex-1 justify-center">
                    <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">Features</a>
                    <a href="#trending" className="text-sm font-medium transition-colors hover:text-primary">Why Us</a>
                    <a href="#faq" className="text-sm font-medium transition-colors hover:text-primary">Pricing</a>
                    <a href="#faq" className="text-sm font-medium transition-colors hover:text-primary">Blog</a>
                    <a href="#faq" className="text-sm font-medium transition-colors hover:text-primary">Community</a>
                </nav>

                <div className="flex items-center gap-2">
                    {/* Language Switcher */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="hidden md:flex">
                                <Globe className="h-5 w-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            {languages.map((lang) => (
                                <DropdownMenuItem
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                >
                                    {lang.label}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Button className="bg-primary hidden md:flex gap-2 justify-center items-center px-4 min-h-12" size="sm" variant="default">
                        Get Started
                    </Button>
                </div>

                <Sheet>
                    <SheetTrigger className="md:hidden" asChild>
                        <Button variant="ghost" size="icon">
                            <Menu size={24} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="bottom" className="flex flex-col gap-4 p-4 justify-center items-center">
                        <SheetTitle className="text-2xl font-bold text-secondary">Menu</SheetTitle>
                        <nav className="flex flex-col gap-4 w-full justify-center items-center">
                            <a href="#features" className="text-sm font-medium py-2 hover:text-primary">Features</a>
                            <a href="#trending" className="text-sm font-medium py-2 hover:text-primary">Why Us</a>
                            <a href="#faq" className="text-sm font-medium py-2 hover:text-primary">Pricing</a>
                            <a href="#faq" className="text-sm font-medium py-2 hover:text-primary">Blog</a>
                            <a href="#faq" className="text-sm font-medium py-2 hover:text-primary">Community</a>

                            {/* Language Switcher in Mobile Menu */}
                            <div className="flex gap-2 w-full justify-center">
                                {languages.map((lang) => (
                                    <Button
                                        key={lang.code}
                                        variant="outline"
                                        size="sm"
                                        onClick={() => handleLanguageChange(lang.code)}
                                    >
                                        {lang.label}
                                    </Button>
                                ))}
                            </div>
                        </nav>
                        <Button className="bg-primary w-full mt-2">
                            Get Started
                        </Button>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default Header;