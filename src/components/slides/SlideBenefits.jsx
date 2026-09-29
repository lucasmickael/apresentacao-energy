import React from 'react';
import { Lightbulb, PowerOff, ShieldCheck, DollarSign } from 'lucide-react';

export default function SlideBenefits({ data }) {
  const benefitIcons = {
    Lightbulb: <Lightbulb size={26} color="#FACC15" />,
    PowerOff: <PowerOff size={26} color="#38BDF8" />,
    ShieldCheck: <ShieldCheck size={26} color="#4ADE80" />,
    DollarSign: <DollarSign size={26} color="#F59E0B" />
  };

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
          Da conscientização doméstica ao uso educacional: a transformação da relação do usuário com a eletricidade.
        </p>
      </div>

      {/* Grid 2x2 de Benefícios */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '20px',
        margin: 'auto 0'
      }}>
        {data.benefits.map((benefit, i) => (
          <div key={i} className="glass-panel" style={{
            padding: '1.6rem 1.75rem',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '18px',
            background: 'rgba(16, 22, 34, 0.75)'
          }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              {benefitIcons[benefit.icon] || <Lightbulb size={26} color="#FACC15" />}
            </div>

            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '6px'
              }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                  {benefit.title}
                </h4>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--yellow-primary)' }}>
                  EIXO 0{i + 1}
                </span>
              </div>

              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                {benefit.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Barra de Impacto */}
      <div className="glass-panel" style={{
        padding: '12px 22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.88rem',
        color: 'var(--text-secondary)'
      }}>
        <span>🌱 <strong>Sustentabilidade em Prática:</strong> Pequenas intervenções pontuais geram grandes economias cumulativas.</span>
        <span style={{ color: 'var(--yellow-primary)', fontWeight: 600 }}>Aplicável a Lares e Escolas</span>
      </div>
    </div>
  );
}
