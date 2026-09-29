import React from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';

export default function Footer({
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  onGoTo,
  estimatedTime
}) {
  return (
    <footer style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '0.75rem 3.5rem 1rem 3.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'linear-gradient(to top, rgba(7, 9, 14, 0.95), transparent)',
      zIndex: 20
    }}>
      {/* Esquerda: Instituição e Tempo Estimado */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <span style={{ 
          fontSize: '0.78rem', 
          color: 'var(--text-muted)', 
          fontFamily: 'var(--font-mono)' 
        }}>
          ETEC BENTO QUIRINO • TCC 2026
        </span>

        <span style={{ color: 'rgba(255, 255, 255, 0.1)' }}>|</span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--text-secondary)', fontSize: '0.78rem' }}>
          <Clock size={13} color="#FACC15" />
          <span>Tempo estimado do slide: <strong>{estimatedTime}</strong></span>
        </div>
      </div>

      {/* Centro: Barra de progresso interativa e marcadores */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        {Array.from({ length: totalSlides }).map((_, index) => {
          const isActive = index === currentIndex;
          const isPassed = index < currentIndex;
          return (
            <button
              key={index}
              onClick={() => onGoTo(index)}
              title={`Ir para o slide ${index + 1}`}
              style={{
                width: isActive ? '32px' : '10px',
                height: '6px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                background: isActive 
                  ? 'var(--yellow-primary)' 
                  : isPassed 
                    ? 'rgba(250, 204, 21, 0.4)' 
                    : 'rgba(255, 255, 255, 0.15)',
                boxShadow: isActive ? '0 0 10px rgba(250, 204, 21, 0.6)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            />
          );
        })}
      </div>

      {/* Direita: Contador e Botões de Avanço */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)'
        }}>
          <span style={{ color: 'var(--yellow-primary)', fontWeight: 700 }}>
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span style={{ opacity: 0.4, margin: '0 4px' }}>/</span>
          <span>{String(totalSlides).padStart(2, '0')}</span>
        </div>

        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            onClick={onPrev}
            disabled={currentIndex === 0}
            className="btn-icon"
            style={{
              width: '36px',
              height: '36px',
              opacity: currentIndex === 0 ? 0.3 : 1,
              cursor: currentIndex === 0 ? 'not-allowed' : 'pointer'
            }}
            title="Slide Anterior (Seta Esquerda)"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={onNext}
            disabled={currentIndex === totalSlides - 1}
            className="btn-icon"
            style={{
              width: '36px',
              height: '36px',
              opacity: currentIndex === totalSlides - 1 ? 0.3 : 1,
              cursor: currentIndex === totalSlides - 1 ? 'not-allowed' : 'pointer'
            }}
            title="Próximo Slide (Espaço ou Seta Direita)"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
