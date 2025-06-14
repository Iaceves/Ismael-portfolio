import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';

const navItems = [
        {name: 'home', href: '#hero' },
        {name: 'About', href: '#about' },
        {name: 'Skills', href: '#skills' },
        {name: 'Projects', href: '#projects' },
        {name: 'Contact', href: '#contact' },
    ]

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    useEffect(() => {
        const handleScrolled = () => {
            setIsScrolled(window.screenY > 10)
        }
        window.addEventListener("scroll", handleScrolled);
        return () => window.removeEventListener("scroll", handleScrolled);
    }, [])
  return (
    <nav className={cn("fixed w-full z-40 transition-all duration-300", 
        isScrolled ? "py-3 bg-background/80 blackdrop-blur-md shadow-xs" : "py-5"
    )}>
        <div className="container flex item-center justify-between">
            <a className="text-xl font-bold  text-primary flex tems-center" href="#hero">
                <span className="relative z-10">
                    {" "}
                    <span className="text-glow text-foreground">IsmaelTech</span> Porfolio
                </span>
            </a>
            {/* desktop nav */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">{item.name}</a>
                ))}
            </div>
            {/* mobile nav */}
            <button 
                onClick={() => setIsMenuOpen((prev) => !prev)} 
                className="md:hidden p-2 text-foreground z-50"
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                {isMenuOpen ? <X size={24} /> : <Menu size={24}/> }
            </button>
            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen 
                ? "opacity-100 pointer-events-auto" 
                : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-x-8 text-xl items-center justify-center">
                    {navItems.map((item, key) => (
                        <a 
                            key={key} 
                            href={item.href} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setIsMenuOpen(false)}
                            >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar