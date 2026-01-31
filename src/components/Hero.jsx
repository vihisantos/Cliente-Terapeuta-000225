import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section id="hero" className="hero-container">
            <div className="hero-content">
                <div className="hero-text-wrapper" data-aos="fade-up">
                    <span className="hero-overline"><span className="text-gradient">Terapia Quântica</span></span>
                    <h2 className="hero-category">ATENDIMENTO ONLINE</h2>
                    <h1 className="hero-title">
                        Reconecte sua <span className="text-gradient">Essência.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Terapia Multidimensional para harmonizar sua frequência vibracional.
                    </p>
                    <div className="hero-actions">
                        <button className="cta-button primary" onClick={() => window.open('https://wa.me/5500000000000?text=Ol%C3%A1%20Denise!%20%E2%9C%A8%20Gostaria%20de%20saber%20mais%20sobre%20as%20sess%C3%B5es.', '_blank')}>
                            Agendar Sessão
                        </button>
                        <button className="cta-button secondary" onClick={() => navigate('/terapia')}>
                            Saiba Mais
                        </button>
                    </div>
                </div>
            </div>

            {/* Abstract Background Elements */}
            <div className="hero-bg-orb orb-1"></div>
            <div className="hero-bg-orb orb-2"></div>

            {/* Smooth Fade Transition */}
            <div className="hero-fade-bottom"></div>
        </section>
    );
};

export default Hero;
