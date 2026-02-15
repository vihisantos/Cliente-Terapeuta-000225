import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <h3>{question}</h3>
                {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </div>

            {/* Grid Animation Wrapper */}
            <div className="faq-answer-wrapper">
                <div className="faq-answer">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "Como funciona a Terapia à Distância?",
            answer: "Para a energia, não existe tempo nem espaço. Através da conexão quântica, acessamos seu campo vibracional exatamente como faríamos presencialmente. A eficácia é a mesma, com o conforto de estar na sua casa."
        },
        {
            question: "O que eu sinto durante o atendimento?",
            answer: "Cada pessoa reage de forma única. É comum sentir um relaxamento profundo, calor, formigamento leve ou uma sensação de paz absoluta. Algumas pessoas até adormecem, o que é ótimo para o processo de cura."
        },
        {
            question: "Quantas sessões são necessárias?",
            answer: "Muitos clientes relatam alívio imediato já no primeiro atendimento. No entanto, para questões mais profundas ou crônicas, recomendo um ciclo de 3 a 5 atendimentos para ancorar a nova frequência vibracional."
        },
        {
            question: "Qual o valor do atendimento?",
            answer: "O investimento na sua reconexão é acessível e transformador. Entre em contato pelo WhatsApp para conhecer os pacotes especiais e valores atualizados."
        }
    ];

    return (
        <section className="faq-section section-padding" data-aos="fade-up">
            <h2 className="section-title" style={{ textAlign: 'center' }}>Perguntas Frequentes</h2>
            <div className="faq-container">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} {...faq} />
                ))}
            </div>
        </section>
    );
};

export default FAQ;
