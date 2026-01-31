import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section section-padding">
            <div className="about-container">
                <div className="about-grid">
                    {/* Image/Video Column */}
                    <div className="about-visual" data-aos="fade-right">
                        <div className="visual-wrapper">
                            {/* Client Photo - Denise */}
                            <img
                                src={`${import.meta.env.BASE_URL}denise-portrait.png`}
                                alt="Denise - Terapeuta Quântica"
                                className="about-image"
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="about-content" data-aos="fade-left">
                        <span className="about-label">Quem sou eu</span>
                        <h2 className="about-title">Guiando sua jornada de <span className="text-gradient">Reconexão</span></h2>
                        <p className="about-text">
                            Olá! Sou Denise, terapeuta apaixonada por desvendar os mistérios da energia humana.
                            Com mais de uma década de estudos em física quântica e espiritualidade, facilito processos
                            de cura que vão além do físico.
                        </p>
                        <p className="about-text">
                            Acredito que cada ser humano possui uma frequência única e perfeita. Meu trabalho é ajudar você
                            a sintonizar essa frequência novamente, liberando bloqueios emocionais e traumas que impedem
                            sua prosperidade e paz interior.
                        </p>

                        {/* Certifications Badge */}
                        <div className="certifications-wrapper">
                            <span className="cert-label">Certificações e Especializações</span>
                            <div className="cert-list">
                                <span className="cert-tag">Terapia Multidimensional</span>
                                <span className="cert-tag">Cura Quântica Estelar</span>
                                <span className="cert-tag">Reiki Master</span>
                            </div>
                        </div>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">1.500+</span>
                                <span className="stat-label">Vidas Impactadas</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">2+</span>
                                <span className="stat-label">Anos de Jornada</span>
                            </div>
                        </div>

                        <button className="cta-button primary" onClick={() => window.open('https://wa.me/5500000000000?text=Ol%C3%A1%20Denise!%20%E2%9C%A8%20Gostaria%20de%20saber%20mais%20sobre%20as%20sess%C3%B5es.', '_blank')}>
                            Agendar Minha Sessão
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
