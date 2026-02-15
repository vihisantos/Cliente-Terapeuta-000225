import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const QuantumInfo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="O Que é Terapia Quantica Atlantis"
        description="Entenda como a Terapia Quantica Atlantis une ciência e espiritualidade para alinhar sua frequência, reduzir ansiedade e liberar traumas."
        url="https://terapiaquantica.com/terapia"
      />
      <Navbar />
      <div className="quantum-page-container">

        {/* Header Section */}
        <header className="quantum-header section-padding" data-aos="fade-up">
          <Link to="/" className="back-link">← Voltar para Início</Link>
          <h1 className="quantum-title">Entendendo a <span className="text-gradient">Terapia Quantica Atlantis</span></h1>
          <p className="quantum-subtitle">
            A ciência e a espiritualidade unidas para o seu equilíbrio integral.
          </p>
        </header>

        {/* Content Section */}
        <div className="quantum-content section-padding">
          <article className="glass-panel content-box" data-aos="fade-up" data-aos-delay="200">
            <h2>O que é?</h2>
            <p>
              A Terapia Quantica Atlantis parte do princípio de que tudo no universo é energia, vibração e frequência.
              Nosso corpo físico é apenas a manifestação mais densa dessa energia. Quando nossas frequências
              estão desalinhadas — por estresse, traumas ou emoções negativas — surgem os desequilíbrios e doenças.
            </p>
            <p>
              Esta abordagem terapêutica atua diretamente no campo vibracional, identificando e corrigindo
              essas dissonâncias antes mesmo que elas se manifestem fisicamente ou para auxiliar na cura
              de processos já instalados.
            </p>

            <h2>Transição Planetária</h2>
            <p>
              Vivemos um momento único na história da Terra: a Transição Planetária. Estamos saindo de uma era de
              provas e expiações para uma era de regeneração. Isso significa que a frequência do planeta está se elevando,
              e tudo o que não vibra no amor e na luz está vindo à tona para ser purificado.
            </p>
            <p>
              Muitos de nós sentimos esse processo como ansiedade, oscilações de humor, cansaço inexplicável ou desorientação.
              A Terapia Quantica Atlantis ajuda você a ajustar sua vibração pessoal à nova frequência planetária,
              permitindo que você atravesse esse período com mais leveza, consciência e propósito.
            </p>

            <h2>Como funciona a distância?</h2>
            <p>
              No nível quântico, não existe separação de tempo e espaço. Através do entrelaçamento quântico
              (um fenômeno comprovado pela física), é possível conectar-se à frequência de uma pessoa instantaneamente,
              independente de onde ela esteja.
            </p>

            <div className="highlight-box">
              <h3>Benefícios Principais</h3>
              <ul>
                <li><Sparkles size={18} className="list-icon" /> Redução profunda de ansiedade e estresse.</li>
                <li><Sparkles size={18} className="list-icon" /> Clareza mental e tomada de decisão.</li>
                <li><Sparkles size={18} className="list-icon" /> Liberação de traumas e bloqueios emocionais.</li>
                <li><Sparkles size={18} className="list-icon" /> Harmonização dos relacionamentos.</li>
                <li><Sparkles size={18} className="list-icon" /> Aumento da vitalidade e imunidade.</li>
              </ul>
            </div>
          </article>

          <div className="cta-wrapper" data-aos="fade-up" data-aos-delay="400">
            <h3>Pronta para transformar sua energia?</h3>
            <button className="cta-button primary" onClick={() => window.open('https://wa.me/5500000000000?text=Ol%C3%A1%20Denise!%20%E2%9C%A8%20Gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos.', '_blank')}>
              Agendar Meu Atendimento
            </button>
          </div>
        </div>

        <Footer />
      </div>

      <style jsx>{`
        .quantum-page-container {
          min-height: 100vh;
          padding-top: 80px; /* Space for fixed navbar */
        }
        
        .quantum-header {
          text-align: center;
          padding-bottom: 2rem;
        }

        .quantum-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
        }

        .quantum-subtitle {
          color: var(--color-text-secondary);
          font-size: 1.2rem;
          max-width: 700px;
          margin: 0 auto;
        }

        .content-box {
          padding: 3rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .content-box h2 {
          font-size: 2rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
          color: var(--color-healing-teal);
        }

        .content-box p {
          color: var(--color-text-secondary);
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
        }

        .highlight-box {
          background: rgba(20, 184, 166, 0.05); /* Teal tint */
          border-left: 4px solid var(--color-healing-teal);
          padding: 2rem;
          margin-top: 3rem;
          border-radius: 0 12px 12px 0;
        }

        .highlight-box h3 {
          margin-top: 0;
          color: var(--color-text-primary);
        }

        .highlight-box ul {
          list-style: none;
          padding: 0;
          margin-top: 1rem;
        }

        .highlight-box li {
          margin-bottom: 0.8rem;
          font-size: 1.05rem;
          color: var(--color-text-secondary);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .list-icon {
          color: var(--color-healing-teal);
          min-width: 18px;
        }

        .cta-wrapper {
          text-align: center;
          margin-top: 4rem;
        }
        
        .cta-wrapper h3 {
           font-size: 1.8rem;
           margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .quantum-title {
            font-size: 2.5rem;
          }
          .content-box {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default QuantumInfo;
