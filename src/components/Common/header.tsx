'use client'
import React, { useEffect } from "react";
import { Button } from "../ui/button"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { NEXT_PUBLIC_APP_URL } from "@/configs/env"
import { useTranslations } from "next-intl";

const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const t = useTranslations('navbar');
    const navLinks = [
        { href: '/', label: t('home') },
        // { href: '/news', label: t('news') },
        { href: '/academy', label: t('academy') },
    ];
    const router = useRouter()
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = React.useState(false)
    const currentLocale = pathname.split('/')[1];
    // Loại bỏ locale ở đầu đường dẫn
    const currentPath = pathname.replace(/^\/[a-z]{2}/, '');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const languages = [
        { code: 'en', label: t('language.en') },
        { code: 'vi', label: t('language.vi') },
        { code: 'es', label: t('language.es') },
        { code: 'fr', label: t('language.fr') },
        { code: 'de', label: t('language.de') },
        { code: 'ru', label: t('language.ru') },
        { code: 'ja', label: t('language.jp') },
        { code: 'ko', label: t('language.kr') },
        { code: 'zh', label: t('language.zh') },

    ]


    const handleLanguageChange = (locale: string) => {
        const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`)
        router.push(newPath)
    }
    return (
        <header
            className={`${isScrolled && !menuOpen ? 'bg-gradient-to-b from-black/90 to-black/0 backdrop-blur-xs' : 'bg-transparent'} fixed w-full left-0 top-0 z-40 transition-all duration-300`}
            style={isScrolled && !menuOpen ? {
                WebkitMaskImage: "linear-gradient(to bottom, black 80%, transparent 100%)",
                maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)"
            } : { background: "transparent" }}
        >
            <div className="min-h-20 md:py-6 px-5 md:px-20 flex gap-2.5 justify-between items-center">
                <a href="/" className="relative z-[999]">
                    <Image
                        src="/dex-space.svg"
                        alt="DexSpace Logo"
                        width={197}
                        height={43}
                        priority
                        className="justify-center items-center w-[160px] h-[36px] md:w-[197px] md:h-[43px]"
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
                                        {languages.find(lang => pathname.startsWith(`/${lang.code}`))?.code.toUpperCase() || 'EN'}
                                    </span>
                                    <ChevronDown className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" asChild className="z-[999]">
                                <div className="bg-white p-4 rounded-none rounded-tl-lg rounded-bl-lg rounded-br-lg min-w-[160px]">
                                    {languages.map((lang) => (
                                        <DropdownMenuItem
                                            key={lang.code}
                                            onClick={() => handleLanguageChange(lang.code)}
                                            className="w-full focus:bg-transparent hover:bg-gray-100 px-2 py-1 cursor-pointer min-h-5"
                                        >
                                            <div className="flex w-full justify-between items-center">
                                                {currentLocale === lang.code ? (
                                                    <>
                                                        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.16602 7.08398C1.16602 7.08398 2.41602 7.08398 4.08268 10.0007C4.08268 10.0007 8.71504 2.36176 12.8327 0.833984" stroke="#8D48E3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <span className="text-purple-600 self-stretch text-right justify-start text-sm font-normal font-['Inter'] leading-tight">{lang.label}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="w-5" />
                                                        <span className="text-slate-400 self-stretch text-right justify-start text-sm font-normal font-['Inter'] leading-tight">{lang.label}</span>
                                                    </>
                                                )}
                                            </div>
                                        </DropdownMenuItem>
                                    ))}
                                </div>

                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <a href={NEXT_PUBLIC_APP_URL}>
                        <Button className="bg-primary hidden md:flex gap-2 justify-center items-center px-4 min-h-12 cursor-pointer" size="sm" variant="default">
                            {t('get started')}
                        </Button>
                    </a>
                </div>
                {/* Mobile Menu */}
                <div className="md:hidden flex items-center gap-4">
                    <div className="max-w-[400px] md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="flex items-center gap-1 bg-transparent hover:bg-transparent focus:bg-transparent cursor-pointer w-full justify-between" variant="ghost" size="sm">
                                    <span>
                                        {languages.find(lang => pathname.startsWith(`/${lang.code}`))?.code.toUpperCase() || 'EN'}
                                    </span>
                                    <ChevronDown className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" asChild className="z-[999]">
                                <div className="bg-white p-4 rounded-none rounded-tl-lg rounded-bl-lg rounded-br-lg min-w-[160px]">
                                    {languages.map((lang) => (
                                        <DropdownMenuItem
                                            key={lang.code}
                                            onClick={() => { handleLanguageChange(lang.code); setMenuOpen(false); }}
                                            className="w-full focus:bg-transparent hover:bg-gray-100 px-2 py-1 cursor-pointer min-h-5"
                                        >
                                            <div className="flex w-full justify-between items-center">
                                                {currentLocale === lang.code ? (
                                                    <>
                                                        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.16602 7.08398C1.16602 7.08398 2.41602 7.08398 4.08268 10.0007C4.08268 10.0007 8.71504 2.36176 12.8327 0.833984" stroke="#8D48E3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <span className="text-purple-600 self-stretch text-right justify-start text-sm font-normal font-['Inter'] leading-tight">{lang.label}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="w-5" />
                                                        <span className="text-slate-400 self-stretch text-right justify-start text-sm font-normal font-['Inter'] leading-tight">{lang.label}</span>
                                                    </>
                                                )}
                                            </div>
                                        </DropdownMenuItem>
                                    ))}
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
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
                                    {t('get started')}
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;