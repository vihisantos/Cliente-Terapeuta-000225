import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [mobileMenuOpen]);

    const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-content">
                <Link to="/" className="logo">
                    <Sparkles className="logo-icon" size={24} /> Denise | Terapia Quântica
                </Link>

                {/* Desktop Links */}
                <div className="nav-links desktop-only">
                    <Link to="/">Início</Link>
                    <Link to="/terapia">Terapia Quântica</Link>
                    <a href={`${import.meta.env.BASE_URL}#about`}>Sobre Mim</a>
                    <button className="nav-cta" onClick={() => window.open('https://wa.me/5500000000000?text=Ol%C3%A1%20Denise!%20%E2%9C%A8%20Gostaria%20de%20saber%20mais%20sobre%20as%20sess%C3%B5es.', '_blank')}>
                        Agendar
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={toggleMenu} aria-label="Menu">
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-content">
                        <Link to="/" onClick={toggleMenu}>Início</Link>
                        <Link to="/terapia" onClick={toggleMenu}>Terapia Quântica</Link>
                        <a href={`${import.meta.env.BASE_URL}#about`} onClick={toggleMenu}>Sobre Mim</a>
                        <button className="nav-cta mobile-cta" onClick={() => {
                            window.open('https://wa.me/5500000000000?text=Ol%C3%A1%20Denise!%20%E2%9C%A8%20Gostaria%20de%20saber%20mais%20sobre%20as%20sess%C3%B5es.', '_blank');
                            toggleMenu();
                        }}>
                            Agendar Sessão
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
