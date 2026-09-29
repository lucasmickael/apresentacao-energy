import React from 'react';
import { X, Grid, Clock, User, ArrowUpRight } from 'lucide-react';
import { SLIDES } from '../data/slidesData';

export default function SlideOverviewModal({
  isOpen,
  onClose,
  currentIndex,
  onSelectSlide
}) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(5, 7, 11, 0.92)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2.5rem'
    }}>
      <div className="glass-panel-glow" style={{
        width: '100%',
        maxWidth: '1300px',
        height: '88vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: '#0B0F17'
      }}>
        {/* Header da Grade */}
        <div style={{
          padding: '1.25rem 2rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(15, 23, 42, 0.6)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Grid size={22} color="#FACC15" />
            <div>
              <h2 style={{ fontSize: '1.2rem', color: '#FFFFFF', margin: 0 }}>
                Estrutura de Slides — E-Energy (TCC 2026)
              </h2>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '2px 0 0 0' }}>
                Clique em qualquer miniatura para navegar diretamente durante a arguição da banca examinadora.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="btn-icon"
            style={{ width: '38px', height: '38px' }}
            title="Fechar grade (Esc ou O)"
          >
            <X size={20} />
          </button>
        </div>

        {/* Grade de 15 Miniaturas */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          padding: '1.75rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '16px'
        }}>
          {SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={slide.id}
                onClick={() => {
                  onSelectSlide(index);
                  onClose();
                }}
                className="glass-panel"
                style={{
                  padding: '14px',
                  cursor: 'pointer',
                  border: isActive ? '2px solid var(--yellow-primary)' : '1px solid var(--border-subtle)',
                  background: isActive ? 'rgba(250, 204, 21, 0.08)' : 'rgba(15, 23, 42, 0.6)',
                  boxShadow: isActive ? '0 0 20px rgba(250, 204, 21, 0.25)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '145px',
                  borderRadius: '12px'
                }}
              >
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px'
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: isActive ? 'var(--yellow-primary)' : 'var(--text-muted)'
                    }}>
                      SLIDE {String(slide.id).padStart(2, '0')}
                    </span>

                    <span style={{
                      fontSize: '0.68rem',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      color: 'var(--text-secondary)'
                    }}>
                      {slide.category}
                    </span>
                  </div>

                  <h4 style={{
                    fontSize: '0.95rem',
                    color: isActive ? '#FFFFFF' : '#E2E8F0',
                    lineHeight: 1.3,
                    margin: '0 0 6px 0'
                  }}>
                    {slide.title}
                  </h4>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '8px',
                  marginTop: '10px',
                  fontSize: '0.72rem',
                  color: 'var(--text-secondary)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <User size={12} color="#FACC15" />
                    <span>{slide.speaker.split(' ')[0]}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                    <Clock size={11} />
                    <span>{slide.estimatedTime}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
