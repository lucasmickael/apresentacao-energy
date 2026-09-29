import React from 'react';
import { FileText, AlertTriangle, Power, HelpCircle, XCircle } from 'lucide-react';

export default function SlideProblem({ data }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative'
    }}>
      {/* Título */}
      <div>
        <span className="badge-energy">
          {data.subtitle}
        </span>
        <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#FFFFFF', margin: '6px 0 10px 0' }}>
          {data.title}
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '820px' }}>
          A fatura de energia entrega um número consolidado no final do mês, mas omite o mais importante: <em>onde</em> e <em>quando</em> ocorreu o desperdício.
        </p>
      </div>

      {/* Comparativo Visual do Problema */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1.3fr',
        gap: '30px',
        alignItems: 'stretch',
        margin: 'auto 0'
      }}>
        {/* Esquerda: A Simulação da "Fatura Caixa Preta" */}
        <div className="glass-panel" style={{
          padding: '1.75rem',
          borderRadius: '18px',
          background: 'rgba(239, 68, 68, 0.04)',
          border: '1px solid rgba(239, 68, 68, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              borderBottom: '1px solid rgba(239, 68, 68, 0.2)',
              paddingBottom: '0.75rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={20} color="#F87171" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#F87171', fontWeight: 600 }}>
                  FATURA CONVENCIONAL
                </span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mês Fechado</span>
            </div>

            <div style={{
              background: 'rgba(0, 0, 0, 0.4)',
              padding: '1.25rem',
              borderRadius: '12px',
              border: '1px solid var(--border-subtle)',
              marginBottom: '1.25rem'
            }}>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>TOTAL CONSOLIDADO</div>
              <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#F87171', fontFamily: 'var(--font-display)', margin: '4px 0' }}>
                R$ 380,45
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                Consumo: 320 kWh • Medidor Global da Residência
              </div>
            </div>

            {/* As perguntas sem resposta */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <XCircle size={15} color="#F87171" />
                <span>Qual aparelho consumiu mais? <em>(Incógnita)</em></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <XCircle size={15} color="#F87171" />
                <span>Quanto custou o modo Standby? <em>(Não discriminado)</em></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <XCircle size={15} color="#F87171" />
                <span>Pode desligar remotamente? <em>(Impossível)</em></span>
              </div>
            </div>
          </div>

          <div style={{
            marginTop: '1rem',
            padding: '8px 12px',
            borderRadius: '8px',
            background: 'rgba(239, 68, 68, 0.1)',
            color: '#FCA5A5',
            fontSize: '0.8rem',
            textAlign: 'center'
          }}>
            Feedback tardio: o susto só ocorre 30 dias após o consumo!
          </div>
        </div>

        {/* Direita: Três Dores Centrais do Usuário */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {data.problems.map((prob, i) => (
            <div key={i} className="glass-panel" style={{
              padding: '1.25rem 1.5rem',
              borderRadius: '14px',
              borderLeft: '4px solid var(--yellow-primary)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span className="badge-energy" style={{ fontSize: '0.7rem', padding: '2px 8px' }}>
                  {prob.badge}
                </span>
                <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', margin: 0, fontWeight: 700 }}>
                  {prob.title}
                </h4>
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {prob.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Síntese Inferior */}
      <div className="glass-panel" style={{
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.9rem',
        color: 'var(--text-secondary)'
      }}>
        <span>💡 <strong>Conclusão do Diagnóstico:</strong> O consumidor residencial precisa de visibilidade pontual e imediata.</span>
        <span style={{ color: 'var(--yellow-primary)', fontWeight: 600 }}>Daí nasce o propósito do E-Energy</span>
      </div>
    </div>
  );
}
