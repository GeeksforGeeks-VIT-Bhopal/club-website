"use client";

import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: "#about", label: "About" },
        { href: "#activities", label: "What We Do" },
        { href: "#events", label: "Events" },
        { href: "#team", label: "Team" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="header">
            <div className="container header-inner">
                <a href="#" className="header-brand">
                    <Image
                        src="/logos/gfg-chapter.webp"
                        alt="GfG Student Chapter"
                        width={36}
                        height={36}
                        className="header-logo"
                    />
                    <span className="header-title">
                        <span>GfG</span> VIT Bhopal
                    </span>
                </a>

                <div className="header-right" style={{ display: "flex", alignItems: "center" }}>
                    <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <ThemeToggle />
                    <button
                        className="mobile-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
