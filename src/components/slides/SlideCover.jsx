import React from 'react';
import { Zap, Sparkles, Award, Users, GraduationCap, ChevronRight } from 'lucide-react';
import { TEAM_INFO } from '../../data/slidesData';
import logoEenergy from '../../assets/logo-eenergy.png';

export default function SlideCover({ onNext }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      zIndex: 10
    }}>
      {/* Topo: Instituição e Ano */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid var(--border-subtle)',
        paddingBottom: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            padding: '6px 12px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <GraduationCap size={16} color="#FACC15" />
            <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.04em' }}>
              ETEC BENTO QUIRINO • CAMPINAS / SP
            </span>
          </div>

          <span className="badge-energy">
            TCC • 2026
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
          <Award size={16} color="#38BDF8" />
          <span>Curso Técnico Integrado ao Ensino Médio</span>
        </div>
      </div>

      {/* Centro: Hero Title e Visual Principal */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 0.8fr',
        alignItems: 'center',
        gap: '40px',
        margin: 'auto 0'
      }}>
        {/* Esquerda: Tipografia Impactante */}
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#FACC15',
              boxShadow: '0 0 10px #FACC15'
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--yellow-primary)'
            }}>
              Sistema Embarcado IoT & Sensoriamento Ativo
            </span>
          </div>

          <h1 style={{
            fontSize: '4.8rem',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            margin: '0 0 16px 0',
            background: 'linear-gradient(135deg, #FFFFFF 30%, #FACC15 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            E-ENERGY
          </h1>

          <p style={{
            fontSize: '1.6rem',
            fontWeight: 500,
            color: 'var(--text-secondary)',
            marginBottom: '18px',
            fontFamily: 'var(--font-display)',
            letterSpacing: '-0.01em'
          }}>
            Monitor de Energia Elétrica Residencial
          </p>

          <p style={{
            fontSize: '1.05rem',
            lineHeight: 1.6,
            color: 'var(--text-muted)',
            maxWidth: '560px',
            marginBottom: '28px'
          }}>
            Monitoramento de corrente e corte de carga remoto baseado em <strong style={{ color: '#FACC15' }}>ESP32</strong>, 
            sensor <strong style={{ color: '#FACC15' }}>SCT-013</strong> e <strong style={{ color: '#FACC15' }}>módulo relé</strong> com interface digital em tempo real.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button onClick={onNext} className="btn-primary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
              <span>Iniciar Apresentação</span>
              <ChevronRight size={18} />
            </button>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              (Pressione <strong>Espaço</strong> ou <strong>→</strong>)
            </span>
          </div>
        </div>

        {/* Direita: Elemento Gráfico de Hardware / Energia */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* Anéis de energia concêntricos */}
          <div style={{
            width: '320px',
            height: '320px',
            borderRadius: '50%',
            border: '1px dashed rgba(250, 204, 21, 0.25)',
            position: 'absolute',
            animation: 'pulseGlow 6s infinite ease-in-out'
          }} />

          <div style={{
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            border: '1px solid rgba(56, 189, 248, 0.2)',
            position: 'absolute'
          }} />

          {/* Card Central com Ícone de Alta Tecnologia */}
          <div className="glass-panel-glow" style={{
            width: '200px',
            height: '200px',
            borderRadius: '32px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle, rgba(250, 204, 21, 0.15) 0%, rgba(11, 15, 23, 0.95) 75%)',
            boxShadow: '0 0 60px rgba(250, 204, 21, 0.35)',
            border: '2px solid rgba(250, 204, 21, 0.5)',
            zIndex: 2
          }}>
            <img 
              src={logoEenergy} 
              alt="E-Energy Logo" 
              style={{
                width: '130px',
                height: '130px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 20px rgba(250, 204, 21, 0.5))'
              }}
            />
          </div>
        </div>
      </div>

      {/* Rodapé da Capa: Integrantes e Orientadores em Cards Nobres */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '20px',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: '1.25rem'
      }}>
        {/* Integrantes */}
        <div className="glass-panel" style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginRight: '16px' }}>
            <Users size={18} color="#FACC15" />
            <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>
              Integrantes:
            </span>
          </div>

          <div style={{ display: 'flex', gap: '20px', flex: 1, justifyContent: 'space-around' }}>
            {TEAM_INFO.members.map((member) => (
              <div key={member.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: member.color
                }} />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF' }}>
                    {member.name}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    {member.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Orientadores */}
        <div className="glass-panel" style={{ padding: '12px 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Sparkles size={18} color="#38BDF8" />
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Orientadores:
            </span>
            <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#FFFFFF', marginTop: '2px' }}>
              Profª. Simone Lacerda & Prof. Rafael Cruz
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
