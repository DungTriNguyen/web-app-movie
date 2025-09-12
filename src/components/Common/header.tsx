'use client'
import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { NEXT_PUBLIC_APP_URL } from '@/configs/env'
import { useTranslations } from 'next-intl'

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const t = useTranslations('navbar')
  const navLinks = [
    { href: '/', label: t('home') },
    // { href: '/news', label: t('news') },
    // { href: '/academy', label: t('academy') },
  ]
  const router = useRouter()
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = React.useState(false)
  const currentLocale = pathname.split('/')[1]
  // Loại bỏ locale ở đầu đường dẫn
  const currentPath = pathname.replace(/^\/[a-z]{2}/, '')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const languages = [
    { code: 'en', label: t('language.en') },
    { code: 'vi', label: t('language.vi') },
    { code: 'es', label: t('language.es') },
    { code: 'fr', label: t('language.fr') },
    { code: 'de', label: t('language.de') },
    { code: 'ru', label: t('language.ru') },
    { code: 'jp', label: t('language.jp') },
    { code: 'kr', label: t('language.kr') },
    { code: 'zh', label: t('language.zh') },
  ]

  const handleLanguageChange = (locale: string) => {
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${locale}`)
    router.push(newPath)
  }
  return (
    <header
      className={`${
        isScrolled && !menuOpen ? 'bg-gradient-to-b from-black/90 to-black/0 backdrop-blur-xs' : 'bg-transparent'
      } fixed top-0 left-0 z-40 w-full transition-all duration-300`}
      style={
        isScrolled && !menuOpen
          ? {
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            }
          : { background: 'transparent' }
      }
    >
      <div className='flex min-h-20 items-center justify-between gap-2.5 px-5 md:px-20 md:py-6'>
        <a href='/' className='relative z-[999]'>
          <Image
            src='/dex-space.svg'
            alt='DexSpace Logo'
            width={197}
            height={43}
            priority
            className='h-[36px] w-[160px] items-center justify-center md:h-[43px] md:w-[197px]'
          />
        </a>

        <div className='flex items-center gap-2'>
          {/* Desktop Navigation */}
          <nav className='hidden flex-1 items-end justify-center gap-4 md:flex'>
            {navLinks.map(link => {
              const isActive = link.href === '/' ? currentPath === '' : currentPath === link.href
              return (
                <a
                  href={link.href}
                  key={link.href}
                  className={`inline-flex min-h-9 cursor-pointer items-center justify-center gap-2.5 px-1 text-sm ${
                    isActive ? 'border-b-2 border-white' : ''
                  }`}
                >
                  <span className="justify-center text-right font-['Inter'] text-sm leading-snug font-medium text-white">
                    {link.label}
                  </span>
                </a>
              )
            })}
          </nav>
          {/* Language Switcher */}
          <div className='hidden items-center gap-1 md:flex'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className='flex cursor-pointer items-center gap-1 bg-transparent hover:bg-transparent focus:bg-transparent'
                  variant='ghost'
                  size='sm'
                >
                  <span>
                    {languages.find(lang => pathname.startsWith(`/${lang.code}`))?.code.toUpperCase() || 'EN'}
                  </span>
                  <ChevronDown className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' asChild className='z-[999]'>
                <div className='min-w-[160px] rounded-none rounded-tl-lg rounded-br-lg rounded-bl-lg bg-white p-4'>
                  {languages.map(lang => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className='min-h-5 w-full cursor-pointer px-2 py-1 hover:bg-gray-100 focus:bg-transparent'
                    >
                      <div className='flex w-full items-center justify-between'>
                        {currentLocale === lang.code ? (
                          <>
                            <svg
                              width='14'
                              height='11'
                              viewBox='0 0 14 11'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M1.16602 7.08398C1.16602 7.08398 2.41602 7.08398 4.08268 10.0007C4.08268 10.0007 8.71504 2.36176 12.8327 0.833984'
                                stroke='#8D48E3'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                            <span className="justify-start self-stretch text-right font-['Inter'] text-sm leading-tight font-normal text-purple-600">
                              {lang.label}
                            </span>
                          </>
                        ) : (
                          <>
                            <span className='w-5' />
                            <span className="justify-start self-stretch text-right font-['Inter'] text-sm leading-tight font-normal text-slate-400">
                              {lang.label}
                            </span>
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
            <Button
              className='bg-primary hidden min-h-12 cursor-pointer items-center justify-center gap-2 px-4 md:flex'
              size='sm'
              variant='default'
            >
              {t('get started')}
            </Button>
          </a>
        </div>
        {/* Mobile Menu */}
        <div className='flex items-center gap-4 md:hidden'>
          <div className='max-w-[400px] md:hidden'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className='flex w-full cursor-pointer items-center justify-between gap-1 bg-transparent hover:bg-transparent focus:bg-transparent'
                  variant='ghost'
                  size='sm'
                >
                  <span>
                    {languages.find(lang => pathname.startsWith(`/${lang.code}`))?.code.toUpperCase() || 'EN'}
                  </span>
                  <ChevronDown className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' asChild className='z-[999]'>
                <div className='min-w-[160px] rounded-none rounded-tl-lg rounded-br-lg rounded-bl-lg bg-white p-4'>
                  {languages.map(lang => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => {
                        handleLanguageChange(lang.code)
                        setMenuOpen(false)
                      }}
                      className='min-h-5 w-full cursor-pointer px-2 py-1 hover:bg-gray-100 focus:bg-transparent'
                    >
                      <div className='flex w-full items-center justify-between'>
                        {currentLocale === lang.code ? (
                          <>
                            <svg
                              width='14'
                              height='11'
                              viewBox='0 0 14 11'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M1.16602 7.08398C1.16602 7.08398 2.41602 7.08398 4.08268 10.0007C4.08268 10.0007 8.71504 2.36176 12.8327 0.833984'
                                stroke='#8D48E3'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                            <span className="justify-start self-stretch text-right font-['Inter'] text-sm leading-tight font-normal text-purple-600">
                              {lang.label}
                            </span>
                          </>
                        ) : (
                          <>
                            <span className='w-5' />
                            <span className="justify-start self-stretch text-right font-['Inter'] text-sm leading-tight font-normal text-slate-400">
                              {lang.label}
                            </span>
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
            className='relative z-[999] flex h-8 w-8 flex-col items-center justify-center'
          >
            <span
              className={`absolute block h-0.5 w-10 rounded bg-white transition-all duration-300 ${menuOpen ? 'top-3 rotate-45' : 'top-3 rotate-0'} `}
            />
            <span
              className={`absolute block h-0.5 w-10 rounded bg-white transition-all duration-300 ${menuOpen ? 'top-3 -rotate-45' : 'top-5 rotate-0'} `}
            />
          </button>
          <div
            className={`bg-accent/90 fixed inset-0 z-40 transition-opacity duration-300 ${
              menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          />
          <div
            className={`fixed inset-0 z-50 transform transition-all duration-300 ${
              menuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-full opacity-0'
            }`}
          >
            <div className='flex h-full flex-col items-end justify-start gap-12 px-4 pt-30'>
              {navLinks.map(link => {
                const isActive = link.href === '/' ? currentPath === '' : currentPath === link.href
                return (
                  <a
                    href={link.href}
                    key={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm font-semibold uppercase ${
                      isActive ? 'border-b-2 border-white' : ''
                    } text-white`}
                  >
                    {link.label}
                  </a>
                )
              })}

              <a href={NEXT_PUBLIC_APP_URL} target='_blank' onClick={() => setMenuOpen(false)}>
                <Button
                  className='bg-primary mb-2 flex min-h-12 items-center justify-center gap-2 px-4 md:hidden'
                  size='sm'
                  variant='default'
                >
                  {t('get started')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
