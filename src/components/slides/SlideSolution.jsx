import React, { useState } from 'react';
import { Layers, Activity, Cpu, Monitor, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function SlideSolution({ data }) {
  const [selectedBlock, setSelectedBlock] = useState(0);

  const blockIcons = [
    <Activity size={26} color="#FACC15" />,
    <Cpu size={26} color="#38BDF8" />,
    <Monitor size={26} color="#4ADE80" />
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
          Integração sistêmica entre sensoriamento físico de campo, inteligência local embarcada e interface de comando.
        </p>
      </div>

      {/* Visão de Arquitetura em 3 Camadas Interativas */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '24px',
        margin: 'auto 0'
      }}>
        {data.architectureBlocks.map((block, i) => {
          const isSelected = selectedBlock === i;
          return (
            <div
              key={i}
              onClick={() => setSelectedBlock(i)}
              className="glass-panel"
              style={{
                padding: '2rem 1.75rem',
                borderRadius: '18px',
                cursor: 'pointer',
                border: isSelected ? '2px solid var(--yellow-primary)' : '1px solid var(--border-subtle)',
                background: isSelected ? 'rgba(250, 204, 21, 0.08)' : 'rgba(16, 22, 34, 0.75)',
                boxShadow: isSelected ? '0 0 35px rgba(250, 204, 21, 0.2)' : 'none',
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
                  marginBottom: '1.25rem'
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {blockIcons[i]}
                  </div>

                  <span className="badge-energy" style={{
                    fontSize: '0.68rem',
                    padding: '2px 8px',
                    color: i === 0 ? '#FACC15' : i === 1 ? '#38BDF8' : '#4ADE80',
                    borderColor: i === 0 ? 'rgba(250, 204, 21, 0.3)' : i === 1 ? 'rgba(56, 189, 248, 0.3)' : 'rgba(74, 222, 128, 0.3)',
                    background: 'transparent'
                  }}>
                    {block.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
                  {block.title}
                </h3>

                <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {block.desc}
                </p>
              </div>

              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.8rem',
                color: isSelected ? 'var(--yellow-primary)' : 'var(--text-muted)'
              }}>
                <span>CAMADA 0{i + 1}</span>
                <span style={{ fontWeight: 600 }}>{isSelected ? '● ATIVA' : 'Clique para focar'}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Barra de Síntese Sistêmica */}
      <div className="glass-panel" style={{
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(15, 23, 42, 0.6)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Zap size={18} color="#FACC15" />
          <span style={{ fontSize: '0.92rem', color: '#F8FAFC' }}>
            <strong>Ciclo Fechado:</strong> Medição contínua + Processamento analítico + Atuação remota imediata.
          </span>
        </div>

        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
          PROTOCOLO BIDIRECIONAL
        </span>
      </div>
    </div>
  );
}
