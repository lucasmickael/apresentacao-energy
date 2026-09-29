import React from 'react';
import { Target, CheckCircle2, ArrowRight } from 'lucide-react';

export default function SlideObjectives({ data }) {
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
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '780px' }}>
          Definição rigorosa do escopo do TCC, estabelecendo o alvo principal e as metas técnicas executadas.
        </p>
      </div>

      {/* Corpo: Objetivo Geral em Evidência + 5 Específicos */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.35fr',
        gap: '28px',
        alignItems: 'stretch',
        margin: 'auto 0'
      }}>
        {/* Esquerda: O Objetivo Geral */}
        <div className="glass-panel-glow" style={{
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'radial-gradient(circle at top left, rgba(250, 204, 21, 0.12) 0%, rgba(11, 15, 23, 0.9) 70%)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'var(--yellow-primary)',
                color: '#0B0F17',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Target size={24} strokeWidth={2.5} />
              </div>
              <div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--yellow-primary)', textTransform: 'uppercase' }}>
                  Meta Central do TCC
                </span>
                <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF', margin: 0, fontWeight: 700 }}>
                  OBJETIVO GERAL
                </h3>
              </div>
            </div>

            <p style={{
              fontSize: '1.12rem',
              color: '#F8FAFC',
              lineHeight: 1.7,
              fontWeight: 400
            }}>
              "{data.generalObjective}"
            </p>
          </div>

          <div style={{
            marginTop: '1.5rem',
            padding: '10px 14px',
            borderRadius: '10px',
            background: 'rgba(250, 204, 21, 0.1)',
            border: '1px solid rgba(250, 204, 21, 0.25)',
            fontSize: '0.82rem',
            color: 'var(--yellow-light)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <CheckCircle2 size={16} color="#FACC15" />
            <span>Integralmente construído e testado em bancada na ETEC.</span>
          </div>
        </div>

        {/* Direita: 5 Objetivos Específicos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{
            fontSize: '0.8rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '4px'
          }}>
            Etapas Técnicas Específicas:
          </div>

          {data.specificObjectives.map((obj, i) => (
            <div key={i} className="glass-panel" style={{
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px',
              borderRadius: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: 'var(--yellow-primary)',
                  width: '24px'
                }}>
                  0{i + 1}
                </span>
                <span style={{ fontSize: '0.92rem', color: '#E2E8F0', lineHeight: 1.4 }}>
                  {obj.text}
                </span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 10px',
                borderRadius: '9999px',
                background: 'rgba(74, 222, 128, 0.12)',
                border: '1px solid rgba(74, 222, 128, 0.3)',
                color: '#4ADE80',
                fontSize: '0.75rem',
                fontWeight: 600,
                flexShrink: 0
              }}>
                <CheckCircle2 size={13} />
                <span>{obj.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Barra de Transição de Fala */}
      <div className="glass-panel" style={{
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)'
      }}>
        <span>Apresentador anterior: <strong style={{ color: '#FACC15' }}>Lucas Mickael</strong></span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#38BDF8', fontWeight: 600 }}>
          <span>Próximo bloco técnico: <strong>João Miguel</strong> (Hardware & Arquitetura)</span>
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}
