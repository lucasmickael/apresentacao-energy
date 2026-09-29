import React from 'react';
import { ShieldCheck, ToggleRight, Cpu } from 'lucide-react';

export default function SlideJustification({ data }) {
  const icons = [
    <ShieldCheck size={28} color="#FACC15" />,
    <ToggleRight size={28} color="#38BDF8" />,
    <Cpu size={28} color="#4ADE80" />
  ];

  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative'
    }}>
      {/* Cabeçalho do Slide */}
      <div>
        <span className="badge-energy">
          {data.subtitle}
        </span>
        <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#FFFFFF', margin: '6px 0 10px 0' }}>
          {data.title}
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '780px' }}>
          Uma abordagem orientada a segurança operacional, custo acessível e autonomia total para o usuário final.
        </p>
      </div>

      {/* Três Pilares da Justificativa */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        margin: 'auto 0'
      }}>
        {data.pillars.map((pillar, i) => (
          <div key={i} className="glass-panel" style={{
            padding: '2.2rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '18px',
            borderTop: '3px solid var(--yellow-primary)',
            background: 'rgba(16, 22, 34, 0.8)'
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {icons[i]}
                </div>

                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: 'rgba(250, 204, 21, 0.25)'
                }}>
                  {pillar.number}
                </span>
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                {pillar.title}
              </h3>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {pillar.detail}
              </p>
            </div>

            <div style={{
              marginTop: '1.5rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--yellow-primary)'
            }}>
              PILAR TÉCNICO VALIDADO
            </div>
          </div>
        ))}
      </div>

      {/* Destaque de Valor */}
      <div className="glass-panel" style={{
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.88rem',
        color: 'var(--text-secondary)',
        background: 'rgba(56, 189, 248, 0.05)',
        border: '1px solid rgba(56, 189, 248, 0.2)'
      }}>
        <span>🛡️ <strong>Compromisso de Engenharia:</strong> Proporcionar autonomia sem comprometer as normas de isolamento elétrico.</span>
        <span style={{ color: '#38BDF8', fontWeight: 600 }}>Tecnologia Nacional & Acessível</span>
      </div>
    </div>
  );
}
