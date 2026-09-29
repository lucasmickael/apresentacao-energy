import React from 'react';
import { AlertCircle, Rocket, CheckCircle2, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function SlideChallengesFuture({ data }) {
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
          Maturidade técnica: distinção clara entre os desafios superados no protótipo e as propostas de evolução futura.
        </p>
      </div>

      {/* Grid: Desafios Superados (Esquerda) vs Propostas Futuras (Direita) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.3fr',
        gap: '26px',
        alignItems: 'stretch',
        margin: 'auto 0'
      }}>
        {/* Coluna Esquerda: Desafios Superados */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.82rem',
            fontFamily: 'var(--font-mono)',
            color: '#4ADE80',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>
            <CheckCircle2 size={16} color="#4ADE80" />
            <span>Desafios Técnicos Superados no TCC:</span>
          </div>

          {data.challenges.map((ch, i) => (
            <div key={i} className="glass-panel" style={{
              padding: '1.25rem 1.4rem',
              borderRadius: '14px',
              borderLeft: '4px solid #4ADE80',
              background: 'rgba(74, 222, 128, 0.04)'
            }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px' }}>
                {ch.title}
              </h4>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                <strong style={{ color: '#4ADE80' }}>Solução Adotada: </strong>{ch.solution}
              </p>
            </div>
          ))}

          <div style={{
            padding: '10px 14px',
            borderRadius: '10px',
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.78rem',
            color: 'var(--text-muted)'
          }}>
            ✓ Resolvido com engenharia de hardware e firmware no protótipo físico.
          </div>
        </div>

        {/* Coluna Direita: Propostas Futuras Delimitadas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.82rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--yellow-primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>
            <Rocket size={16} color="#FACC15" />
            <span>Propostas de Evolução Futura (Próximos Passos):</span>
          </div>

          {data.futureProposals.map((prop, i) => (
            <div key={i} className="glass-panel" style={{
              padding: '1.15rem 1.4rem',
              borderRadius: '14px',
              borderLeft: '4px solid var(--yellow-primary)',
              background: 'rgba(250, 204, 21, 0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span className="badge-energy" style={{ fontSize: '0.68rem', padding: '1px 6px' }}>
                  {prop.badge}
                </span>
                <ArrowUpRight size={15} color="var(--yellow-primary)" />
              </div>
              <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: '#FFFFFF', margin: '4px 0 4px 0' }}>
                {prop.title}
              </h4>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: 0 }}>
                {prop.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Síntese Ética e Científica */}
      <div className="glass-panel" style={{
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)'
      }}>
        <span>🔍 <strong>Rigor Metodológico:</strong> O protótipo atende 100% dos objetivos do TCC; as propostas acima representam a continuidade acadêmica.</span>
        <span style={{ color: 'var(--yellow-primary)', fontWeight: 600 }}>Integridade Científica</span>
      </div>
    </div>
  );
}
