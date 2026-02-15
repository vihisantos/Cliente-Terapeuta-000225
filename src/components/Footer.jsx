
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Instagram, MessageCircle, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content section-padding">
                <div className="footer-grid">
                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <h3 className="footer-logo"><Sparkles size={24} className="footer-icon" /> Terapia Quantica Atlantis</h3>
                        <p className="footer-text">
                            Transformando energias e elevando frequências.
                            Sua jornada de cura começa aqui.
                        </p>
                    </div>

                    {/* Links Column */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Navegação</h4>
                        <ul className="footer-links">
                            <li><Link to="/">Início</Link></li>
                            <li><Link to="/terapia">Terapia Quantica Atlantis</Link></li>
                            <li><a href="/#about">Sobre Mim</a></li>
                        </ul>
                    </div>

                    {/* Social/Contact Column */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Conecte-se</h4>
                        <div className="social-links">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                                <Instagram size={22} />
                            </a>
                            <a href="https://wa.me/5500000000000?text=Ol%C3%A1%20Denise!%20%E2%9C%A8%20Gostaria%20de%20saber%20mais%20sobre%20as%20sess%C3%B5es." target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
                                <MessageCircle size={22} />
                            </a>
                            <a href="mailto:contato@terapiaquantica.com" className="social-icon" aria-label="Email">
                                <Mail size={22} />
                            </a>
                        </div>
                        <p className="contact-email">contato@terapiaquantica.com</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Terapia Multidimensional & Quantica Atlantis. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
