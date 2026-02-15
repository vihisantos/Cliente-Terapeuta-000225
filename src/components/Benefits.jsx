import React from 'react';
import { Sparkles, Dna, Globe2 } from 'lucide-react';
import './Benefits.css';

const BenefitCard = ({ title, icon: Icon, description, delay }) => (
    <div className="benefit-card glass-panel" data-aos="fade-up" data-aos-delay={delay}>
        <div className="benefit-icon-wrapper">
            <Icon className="benefit-icon-svg" size={40} strokeWidth={1.5} />
        </div>
        <h3 className="benefit-title">{title}</h3>
        <p className="benefit-description">{description}</p>
    </div>
);

const Benefits = () => {
    const benefits = [
        {
            title: "Limpeza Energética",
            icon: Sparkles,
            description: "Remova bloqueios e densidades que impedem seu fluxo natural de abundância, saúde e prosperidade"
        },
        {
            title: "Alinhamento de Chakras",
            icon: Dna,
            description: "Equilibre seus centros de força vital para recuperar vitalidade e clareza mental."
        },
        {
            title: "Cura à Distância",
            icon: Globe2,
            description: "A energia quântica não conhece barreiras de espaço. Receba tratamento onde estiver."
        },
        {
            title: "Divórcio Energético",
            icon: Sparkles,
            description: "Liberte-se de laços energéticos do passado que drenam sua vitalidade e impedem novos ciclos."
        },
        {
            title: "Harmonização de Relacionamentos",
            icon: Sparkles,
            description: "Cure feridas emocionais e melhore a sintonia em suas relações afetivas e familiares."
        },
        {
            title: "Abertura de Caminhos",
            icon: Globe2,
            description: "Desbloqueie estagnações profissionais e financeiras para atrair novas oportunidades e prosperidade."
        }
    ];

    return (
        <section id="benefits" className="benefits-section section-padding">
            <div className="section-header" data-aos="fade-up">
                <h2 className="section-title">Como a Terapia Funciona</h2>
                <p className="section-subtitle">Uma abordagem holística para o seu bem-estar</p>
            </div>

            <div className="benefits-grid">
                {benefits.map((b, index) => (
                    <BenefitCard key={index} {...b} delay={index * 100} />
                ))}
            </div>
        </section>
    );
};

export default Benefits;
