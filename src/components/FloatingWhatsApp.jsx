import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/5500000000000?text=Ol%C3%A1%20Denise!%20%E2%9C%A8%20Gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos."
            className="floating-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="whatsapp-tooltip">Agendar Atendimento</span>
        </a>
    );
};

export default FloatingWhatsApp;
