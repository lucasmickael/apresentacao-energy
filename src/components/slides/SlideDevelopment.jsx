import React from 'react';
import { Calculator, Cpu, Code2, LayoutDashboard, Wrench, CheckCircle2 } from 'lucide-react';

export default function SlideDevelopment({ data }) {
  const stepIcons = [
    <Calculator size={22} color="#FACC15" />,
    <Wrench size={22} color="#38BDF8" />,
    <Code2 size={22} color="#4ADE80" />,
    <LayoutDashboard size={22} color="#F59E0B" />,
    <Cpu size={22} color="#A78BFA" />
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
      {/* Cabeçalho */}
      <div>
        <span className="badge-energy">
          {data.subtitle}
        </span>
        <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#FFFFFF', margin: '6px 0 10px 0' }}>
          {data.title}
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '820px' }}>
          Metodologia científica e de engenharia estruturada em 5 etapas progressivas até a validação final.
        </p>
      </div>

      {/* Linha do Tempo Horizontal em 5 Estágios Conectados */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '16px',
        position: 'relative',
        margin: 'auto 0'
      }}>
        {data.steps.map((step, i) => (
          <div key={i} className="glass-panel" style={{
            padding: '1.5rem 1.15rem',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            position: 'relative',
            borderTop: '3px solid var(--yellow-primary)',
            background: 'rgba(16, 22, 34, 0.8)'
          }}>
            <div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {stepIcons[i]}
                </div>

                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: 'var(--yellow-primary)'
                }}>
                  {step.num}
                </span>
              </div>

              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                {step.title}
              </h4>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {step.desc}
              </p>
            </div>

            <div style={{
              marginTop: '1.25rem',
              paddingTop: '8px',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.72rem',
              color: '#4ADE80',
              fontWeight: 600
            }}>
              <CheckCircle2 size={13} />
              <span>Etapa Concluída</span>
            </div>
          </div>
        ))}
      </div>

      {/* Destaque Metodológico */}
      <div className="glass-panel" style={{
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.88rem',
        color: 'var(--text-secondary)',
        background: 'rgba(15, 23, 42, 0.7)'
      }}>
        <span>⚙️ <strong>Abordagem Prática:</strong> Cada módulo foi validado individualmente com instrumentos antes da integração final.</span>
        <span style={{ color: 'var(--yellow-primary)', fontWeight: 600 }}>Ambiente ETEC Bento Quirino</span>
      </div>
    </div>
  );
}
