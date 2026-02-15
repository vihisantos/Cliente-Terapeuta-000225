import React from 'react';
import { PlayCircle } from 'lucide-react';
import './Mantras.css';

const MantraCard = ({ title, url, delay }) => {
    // Extract video ID from URL
    const videoId = url.split('v=')[1];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="mantra-card glass-panel" data-aos="fade-up" data-aos-delay={delay}>
            <div className="video-thumbnail">
                <iframe
                    width="100%"
                    height="100%"
                    src={embedUrl}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-iframe"
                ></iframe>
            </div>
            <div className="mantra-info">
                <h3 className="mantra-title">{title}</h3>
            </div>
        </div>
    );
};

const Mantras = () => {
    const mantras = [
        {
            title: "5 Mantras Poderosos para Prosperidade e Paz",
            url: "https://www.youtube.com/watch?v=5YmcgSqH2cM"
        },
        {
            title: "Mantra Transformador de Kuan Yin",
            url: "https://www.youtube.com/watch?v=A60T-4E1RjA"
        },
        {
            title: "Om Mani Padme Hum - Compaixão Universal",
            url: "https://www.youtube.com/watch?v=_VhL4pYrdDY"
        },
        {
            title: "Mantra para Atrair Prosperidade Imediata",
            url: "https://www.youtube.com/watch?v=ruWoFpS2jjs"
        },
        {
            title: "Cura Ancestral - Ho'oponopono",
            url: "https://www.youtube.com/watch?v=qshftocqO_o"
        },
        {
            title: "Om Namah Shiva - Paz Profunda e Cura",
            url: "https://youtu.be/1rlJnYcOv7w"
        }
    ];

    return (
        <section id="mantras" className="mantras-section section-padding">
            <div className="section-header" data-aos="fade-up">
                <h2 className="section-title">Frequências e Mantras</h2>
                <p className="section-subtitle">Recomendações especiais para elevar sua vibração</p>
            </div>

            <div className="mantras-grid">
                {mantras.map((m, index) => (
                    <MantraCard key={index} {...m} delay={index * 100} />
                ))}
            </div>
        </section>
    );
};

export default Mantras;
