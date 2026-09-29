import React from 'react';
import { CheckCircle2, ShieldCheck, Activity, Radio, Power } from 'lucide-react';

export default function SlideResults({ data }) {
  const testIcons = [
    <Radio size={24} color="#FACC15" />,
    <Power size={24} color="#38BDF8" />,
    <Activity size={24} color="#4ADE80" />
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
          Ensaios de bancada com cargas reais atestando a integridade do circuito, a estabilidade de rede e o acionamento de potência.
        </p>
      </div>

      {/* Grid de 3 Ensaios Técnicos */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '22px',
        margin: 'auto 0'
      }}>
        {data.testBlocks.map((block, i) => (
          <div key={i} className="glass-panel" style={{
            padding: '1.75rem 1.5rem',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
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
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {testIcons[i]}
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  background: 'rgba(74, 222, 128, 0.15)',
                  color: '#4ADE80',
                  fontSize: '0.72rem',
                  fontWeight: 700
                }}>
                  <CheckCircle2 size={13} />
                  <span>APROVADO</span>
                </div>
              </div>

              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
                {block.testName}
              </h4>

              <div style={{ marginBottom: '10px' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Metodologia de Ensaio:
                </span>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: '2px 0 0 0' }}>
                  {block.methodology}
                </p>
              </div>

              <div>
                <span style={{ fontSize: '0.72rem', color: 'var(--yellow-primary)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Resultado Verificado:
                </span>
                <p style={{ fontSize: '0.86rem', color: '#F1F5F9', lineHeight: 1.5, margin: '2px 0 0 0', fontWeight: 500 }}>
                  {block.result}
                </p>
              </div>
            </div>

            <div style={{
              marginTop: '1.25rem',
              paddingTop: '8px',
              borderTop: '1px solid var(--border-subtle)',
              fontSize: '0.75rem',
              color: 'var(--yellow-primary)',
              fontFamily: 'var(--font-mono)'
            }}>
              ENSAIO PRÁTICO EM BANCADA
            </div>
          </div>
        ))}
      </div>

      {/* Faixa de Conclusão dos Testes */}
      <div className="glass-panel" style={{
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(74, 222, 128, 0.05)',
        border: '1px solid rgba(74, 222, 128, 0.25)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ShieldCheck size={20} color="#4ADE80" />
          <span style={{ fontSize: '0.92rem', color: '#F8FAFC' }}>
            <strong>Conclusão Técnica dos Ensaios:</strong> Todos os objetivos operacionais estipulados no plano de TCC foram integralmente alcançados.
          </span>
        </div>

        <span style={{ fontSize: '0.8rem', color: '#4ADE80', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
          PROTOCOLO VALIDADO
        </span>
      </div>
    </div>
  );
}
