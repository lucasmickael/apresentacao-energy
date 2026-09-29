import React, { useEffect } from 'react';
import { Award, Heart, CheckCircle2, Sparkles, MessageSquare, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { TEAM_INFO } from '../../data/slidesData';

export default function SlideConclusion({ data }) {
  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#FACC15', '#FFE600', '#38BDF8', '#FFFFFF']
      });
    } catch {
      // Ignorar caso indisponível
    }
  };

  useEffect(() => {
    // Pequeno confete suave e discreto ao abrir a conclusão
    const timer = setTimeout(() => {
      triggerConfetti();
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative'
    }}>
      {/* Cabeçalho */}
      <div>
        <span className="badge-energy">
          {data.subtitle}
        </span>
        <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#FFFFFF', margin: '6px 0 10px 0' }}>
          {data.title}
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '820px' }}>
          O encerramento de um ciclo de engenharia e aprendizado: transformando teoria em solução prática.
        </p>
      </div>

      {/* Grid Central: Conquistas do TCC + Agradecimentos */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.15fr 1.25fr',
        gap: '26px',
        alignItems: 'stretch',
        margin: 'auto 0'
      }}>
        {/* Esquerda: Conquistas Técnicas */}
        <div className="glass-panel" style={{
          padding: '1.75rem',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'rgba(16, 22, 34, 0.8)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--yellow-primary)',
                color: '#0B0F17',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Award size={22} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#FFFFFF', margin: 0, fontWeight: 700 }}>
                Síntese dos Resultados Alcançados
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {data.keyTakeaways.map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={16} color="#4ADE80" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.92rem', color: '#E2E8F0', lineHeight: 1.5 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            marginTop: '1.25rem',
            padding: '10px 14px',
            borderRadius: '10px',
            background: 'rgba(250, 204, 21, 0.08)',
            border: '1px solid rgba(250, 204, 21, 0.25)',
            fontSize: '0.82rem',
            color: 'var(--yellow-light)'
          }}>
            ✓ Protótipo 100% testado e aprovado com sucesso.
          </div>
        </div>

        {/* Direita: Agradecimentos Formais e Frase de Impacto */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'space-between' }}>
          {/* Agradecimentos */}
          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Heart size={18} color="#F87171" />
              <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', margin: 0, fontWeight: 700 }}>
                Agradecimentos Institucionais
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
              <div>
                <strong style={{ color: '#FFFFFF' }}>À Banca Examinadora: </strong>
                Pela dedicação, avaliação técnica e valiosas considerações.
              </div>
              <div>
                <strong style={{ color: '#FACC15' }}>Aos Nossos Orientadores: </strong>
                Profª. Simone Lacerda e Prof. Rafael Cruz pelo suporte incansável.
              </div>
              <div>
                <strong style={{ color: '#38BDF8' }}>À ETEC Bento Quirino: </strong>
                Pelo ambiente de excelência e estrutura técnica proporcionada.
              </div>
            </div>
          </div>

          {/* Frase de Impacto Final */}
          <div className="glass-panel-glow" style={{
            padding: '1.5rem',
            borderRadius: '16px',
            background: 'radial-gradient(circle at center, rgba(250, 204, 21, 0.12) 0%, rgba(11, 15, 23, 0.95) 80%)',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '1.15rem',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.6,
              fontStyle: 'italic',
              margin: '0 0 10px 0',
              fontFamily: 'var(--font-display)'
            }}>
              {data.finalQuote}
            </p>

            <button
              onClick={triggerConfetti}
              className="btn-secondary"
              style={{
                fontSize: '0.78rem',
                padding: '6px 14px',
                margin: '0 auto',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Sparkles size={14} color="#FACC15" />
              <span>Celebrar Conclusão do TCC</span>
            </button>
          </div>
        </div>
      </div>

      {/* Faixa de Abertura para a Banca */}
      <div className="glass-panel" style={{
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(250, 204, 21, 0.08)',
        border: '1px solid rgba(250, 204, 21, 0.3)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <MessageSquare size={18} color="#FACC15" />
          <span style={{ fontSize: '0.95rem', color: '#FFFFFF', fontWeight: 600 }}>
            Muito obrigado! Estamos abertos às considerações e perguntas da banca examinadora.
          </span>
        </div>

        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--yellow-primary)',
          fontWeight: 700
        }}>
          LUCAS • JOÃO • GIOVANI
        </span>
      </div>
    </div>
  );
}
