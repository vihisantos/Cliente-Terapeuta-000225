import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            text: "A Denise tem uma energia incrível! Cheguei na sessão com o coração acelerado e uma ansiedade que não passava. Saí de lá flutuando, com uma clareza que há muito tempo não sentia.",
            author: "Juliana Mendes",
            role: "São Paulo, SP"
        },
        {
            text: "Estava totalmente estagnado na minha carreira, nada fluía. Após a limpeza energética e o alinhamento, surgiram duas propostas na mesma semana! A mudança vibracional é real.",
            author: "Ricardo Alves",
            role: "Lisboa, Portugal"
        },
        {
            text: "A terapia foi um divisor de águas no meu casamento. Aprendi a me priorizar e a não absorver a carga emocional dos outros. Hoje me sinto leve e conectada com minha intuição.",
            author: "Ana Clara Rocha",
            role: "Belo Horizonte, MG"
        }
    ];

    return (
        <section className="testimonials-section section-padding" data-aos="fade-up">
            <div className="section-header">
                <h2 className="section-title">O que dizem nossos clientes</h2>
                <p className="section-subtitle">Histórias reais de transformação vibracional</p>
            </div>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                className="testimonials-swiper"
            >
                {testimonials.map((t, i) => (
                    <SwiperSlide key={i}>
                        <div className="testimonial-card glass-panel">
                            <Quote size={120} className="quote-icon" />
                            <p className="testimonial-text">"{t.text}"</p>
                            <div className="testimonial-author">
                                <h4>{t.author}</h4>
                                <span>{t.role}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
