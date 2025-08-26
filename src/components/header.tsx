'use client'
import React, { useEffect } from "react";
import { Button } from "./ui/button"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { NEXT_PUBLIC_APP_URL } from "@/configs/env"

const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/news', label: 'News' },
        { href: '/articles', label: 'Articles' },
    ];
    const router = useRouter()
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = React.useState(false)
    // Loại bỏ locale ở đầu đường dẫn
    const currentPath = pathname.replace(/^\/[a-z]{2}/, '');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 1080);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const languages = [
        { code: 'en', label: 'English' },
        { code: 'zh', label: '中文' },
        { code: 'es', label: 'Español' },
        { code: 'fr', label: 'Français' },
        { code: 'de', label: 'Deutsch' },
        { code: 'ru', label: 'Русский' },
        { code: 'jp', label: '日本語' },
        { code: 'kr', label: '한국어' },
        { code: 'vi', label: 'Tiếng Việt' },
    ]

    const handleLanguageChange = (locale: string) => {
        const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`)
        router.push(newPath)
    }

    return (
        <header className={`${isScrolled ? 'bg-black' : 'bg-transparent'} fixed w-full left-0 top-0 z-40`}>
            <div className="min-h-20 md:py-6 px-5 md:px-20 flex gap-2.5 justify-between items-center">
                <a href="/" className="relative z-[999]">
                    <Image
                        src="/dex-space.svg"
                        alt="DexSpace Logo"
                        width={197}
                        height={40}
                        priority
                        className="w-[197px] justify-center items-center"
                    />
                </a>

                <div className="flex items-center gap-2">
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-end gap-4 flex-1 justify-center">
                        {navLinks.map(link => {
                            const isActive = link.href === '/' ? currentPath === '' : currentPath === link.href;
                            return (
                                <a
                                    href={link.href}
                                    key={link.href}
                                    className={`min-h-9 px-1 inline-flex text-sm justify-center items-center gap-2.5 cursor-pointer ${isActive ? 'border-b-2 border-white' : ''}`}
                                >
                                    <span className="text-right justify-center text-white text-sm font-medium font-['Inter'] leading-snug">{link.label}</span>
                                </a>
                            );
                        })}
                    </nav>
                    {/* Language Switcher */}
                    <div className="hidden md:flex items-center gap-1">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="flex items-center gap-1 bg-transparent hover:bg-transparent focus:bg-transparent cursor-pointer" variant="ghost" size="sm">
                                    <span>
                                        {languages.find(lang => pathname.startsWith(`/${lang.code}`))?.label || 'English'}
                                    </span>
                                    <ChevronDown className="w-4 h-4" />
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
                    </div>

                    <a href={NEXT_PUBLIC_APP_URL} target="_blank">
                        <Button className="bg-primary hidden md:flex gap-2 justify-center items-center px-4 min-h-12 mb-2" size="sm" variant="default">
                            Get Started
                        </Button>
                    </a>
                </div>
                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="relative w-8 h-8 flex flex-col justify-center items-center z-[999]"
                    >
                        <span
                            className={`block absolute h-0.5 w-10 bg-white rounded transition-all duration-300 
                            ${menuOpen ? "rotate-45 top-3" : "top-3 rotate-0"}
                        `}
                        />
                        <span
                            className={`block absolute h-0.5 w-10 bg-white rounded transition-all duration-300 
                            ${menuOpen ? "-rotate-45 top-3" : "top-5 rotate-0"}
                        `}
                        />
                    </button>
                    <div
                        className={`fixed inset-0 z-40 transition-opacity duration-300 bg-accent/90 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                    />
                    <div
                        className={`fixed inset-0 z-50 transform transition-all duration-300 ${menuOpen
                            ? "translate-y-0 opacity-100"
                            : "-translate-y-full opacity-0 pointer-events-none"
                            }`}
                    >

                        <div className="flex flex-col items-end justify-start h-full gap-12 px-4 pt-30">
                            {navLinks.map((link) => {
                                const isActive =
                                    link.href === "/" ? currentPath === "" : currentPath === link.href
                                return (
                                    <a
                                        href={link.href}
                                        key={link.href}
                                        onClick={() => setMenuOpen(false)}
                                        className={`text-sm font-semibold uppercase ${isActive ? "border-b-2 border-white" : ""
                                            } text-white`}
                                    >
                                        {link.label}
                                    </a>
                                )
                            })}

                            <a href={NEXT_PUBLIC_APP_URL} target="_blank" onClick={() => setMenuOpen(false)}>
                                <Button className="bg-primary flex md:hidden gap-2 justify-center items-center px-4 min-h-12 mb-2" size="sm" variant="default">
                                    Get Started
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;