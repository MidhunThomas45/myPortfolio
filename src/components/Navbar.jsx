import React, { useState, useEffect } from "react";
import { Sun, Moon, Home, User, Briefcase, Folder, Mail } from "lucide-react";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);
        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };
    
    const navItems = [
        { href: "#Home", label: "Home", icon: Home },
        { href: "#About", label: "About", icon: User },
        { href: "#Experience", label: "Experience", icon: Briefcase },
        { href: "#Portofolio", label: "Portofolio", icon: Folder },
        { href: "#Contact", label: "Contact", icon: Mail },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navItems.map(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    return {
                        id: item.href.replace("#", ""),
                        offset: section.offsetTop - 550,
                        height: section.offsetHeight
                    };
                }
                return null;
            }).filter(Boolean);

            const currentPosition = window.scrollY;
            const active = sections.find(section => 
                currentPosition >= section.offset && 
                currentPosition < section.offset + section.height
            );

            if (active) {
                setActiveSection(active.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const section = document.querySelector(href);
        if (section) {
            const top = section.offsetTop - 100;
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
        <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
            scrolled
                ? "bg-white/50 dark:bg-black/50 backdrop-blur-xl"
                : "bg-transparent"
        }`}
    >
        <div className="mx-auto px-4 sm:px-6 lg:px-[10%]">
            <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <a
                        href="#Home"
                        onClick={(e) => scrollToSection(e, "#Home")}
                        className="text-xl font-bold text-[#c9a227]"
                    >
                        Midhun Thomas
                    </a>
                </div>
    
                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <div className="ml-8 flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className="group relative px-1 py-2 text-sm font-medium"
                            >
                                <span
                                    className={`relative z-10 transition-colors duration-300 ${
                                        activeSection === item.href.substring(1)
                                            ? "bg-gradient-to-r from-[#c9a227] to-[#f2e8d8] bg-clip-text text-transparent font-semibold"
                                            : "text-[#e2d3fd] group-hover:text-primaryText"
                                    }`}
                                >
                                    {item.label}
                                </span>
                                <span
                                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#c9a227] to-[#f2e8d8] transform origin-left transition-transform duration-300 ${
                                        activeSection === item.href.substring(1)
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                    }`}
                                />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Theme & Mobile Menu Container */}
                <div className="flex items-center gap-2 md:gap-4">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 text-primaryText hover:bg-cardHover rounded-full transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </div>
            </div>
        </div>
    </nav>
    
    {/* Mobile Bottom Navigation Bar */}
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl border-t border-white/10 shadow-[0_-5px_15px_rgba(0,0,0,0.1)]">
        <div className="flex justify-around items-center h-16 px-1">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => scrollToSection(e, item.href)}
                        className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 ${
                            isActive ? "text-[#c9a227] scale-110" : "text-secondaryText hover:text-primaryText"
                        }`}
                    >
                        <Icon className={`w-5 h-5 ${isActive ? "drop-shadow-[0_0_8px_rgba(201,162,39,0.5)]" : ""}`} />
                        <span className="text-[10px] font-medium">{item.label}</span>
                    </a>
                );
            })}
        </div>
    </div>
    </>
    
    );
};

export default Navbar;