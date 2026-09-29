import React, { useState } from 'react';
import { Cpu, Radio, Power, Sliders, Info, ShieldCheck } from 'lucide-react';

export default function SlideComponents({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  const componentIcons = [
    <Cpu size={24} color="#FACC15" />,
    <Radio size={24} color="#38BDF8" />,
    <Power size={24} color="#4ADE80" />,
    <Sliders size={24} color="#F59E0B" />
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
          Hardware consolidado, isolamento galvânico e arquitetura eletrônica otimizada para segurança e baixo custo.
        </p>
      </div>

      {/* Grid de 4 Componentes de Hardware */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '18px',
        margin: 'auto 0'
      }}>
        {data.components.map((comp, i) => {
          const isSelected = activeTab === i;
          return (
            <div
              key={i}
              onClick={() => setActiveTab(i)}
              className="glass-panel"
              style={{
                padding: '1.5rem 1.25rem',
                borderRadius: '16px',
                cursor: 'pointer',
                border: isSelected ? '2px solid var(--yellow-primary)' : '1px solid var(--border-subtle)',
                background: isSelected ? 'rgba(250, 204, 21, 0.08)' : 'rgba(16, 22, 34, 0.75)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {componentIcons[i]}
                  </div>

                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: isSelected ? 'var(--yellow-primary)' : 'var(--text-muted)'
                  }}>
                    COMP 0{i + 1}
                  </span>
                </div>

                <div style={{ fontSize: '0.72rem', color: 'var(--yellow-primary)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.04em' }}>
                  {comp.role}
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#FFFFFF', margin: '4px 0 10px 0' }}>
                  {comp.name}
                </h3>

                <div style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  padding: '8px 10px',
                  borderRadius: '8px',
                  border: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  marginBottom: '10px'
                }}>
                  {comp.specs}
                </div>

                <p style={{ fontSize: '0.84rem', color: '#CBD5E1', lineHeight: 1.5, margin: 0 }}>
                  <strong style={{ color: '#FFFFFF' }}>Justificativa: </strong>{comp.why}
                </p>
              </div>

              <div style={{
                marginTop: '1rem',
                paddingTop: '8px',
                borderTop: '1px solid var(--border-subtle)',
                fontSize: '0.72rem',
                color: isSelected ? 'var(--yellow-primary)' : 'var(--text-muted)',
                fontWeight: 600,
                textAlign: 'right'
              }}>
                {isSelected ? '✓ SELECIONADO' : 'Ver detalhes'}
              </div>
            </div>
          );
        })}
      </div>

      {/* Destaque Técnico Crucial (Dica de Ouro de Eletrônica) */}
      <div className="glass-panel" style={{
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        background: 'rgba(250, 204, 21, 0.05)',
        border: '1px solid rgba(250, 204, 21, 0.2)'
      }}>
        <ShieldCheck size={20} color="#FACC15" style={{ flexShrink: 0 }} />
        <span style={{ fontSize: '0.88rem', color: '#F1F5F9', lineHeight: 1.4 }}>
          <strong>Segurança & Isolação Galvânica:</strong> O SCT-013 atua por acoplamento magnético sem condutor exposto, e o relé utiliza optoacoplador para separar 100% o microcontrolador da rede elétrica de 127V.
        </span>
      </div>
    </div>
  );
}
