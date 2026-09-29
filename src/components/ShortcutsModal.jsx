import React from 'react';
import { X, Keyboard, ArrowLeft, ArrowRight, Space, Tv, Grid, Maximize } from 'lucide-react';

export default function ShortcutsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const shortcuts = [
    { key: "→ / Espaço", desc: "Avançar para o próximo slide" },
    { key: "←", desc: "Voltar para o slide anterior" },
    { key: "Home / End", desc: "Ir para o primeiro / último slide" },
    { key: "P", desc: "Abrir / fechar o Modo Apresentador (Roteiro e Cronômetro)" },
    { key: "O / G", desc: "Abrir visão geral em grade dos 15 slides" },
    { key: "F", desc: "Alternar modo Tela Cheia (Fullscreen)" },
    { key: "H", desc: "Abrir / fechar esta janela de atalhos" },
    { key: "Esc", desc: "Fechar modais abertos" }
  ];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(5, 7, 11, 0.85)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      zIndex: 110,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="glass-panel-glow" style={{
        width: '100%',
        maxWidth: '560px',
        background: '#0B0F17',
        padding: '1.75rem',
        borderRadius: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '1.25rem',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '0.75rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Keyboard size={20} color="#FACC15" />
            <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', margin: 0 }}>
              Atalhos do Teclado
            </h3>
          </div>
          <button onClick={onClose} className="btn-icon" style={{ width: '32px', height: '32px' }}>
            <X size={18} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {shortcuts.map((sc, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              borderRadius: '8px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-subtle)'
            }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                {sc.desc}
              </span>
              <kbd style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 600,
                padding: '4px 8px',
                borderRadius: '6px',
                background: 'rgba(250, 204, 21, 0.12)',
                color: 'var(--yellow-primary)',
                border: '1px solid rgba(250, 204, 21, 0.3)'
              }}>
                {sc.key}
              </kbd>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
          <button onClick={onClose} className="btn-primary" style={{ width: '100%', padding: '10px' }}>
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
