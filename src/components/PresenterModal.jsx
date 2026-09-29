import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  Pause, 
  RotateCcw, 
  Clock, 
  User, 
  Sparkles, 
  ShieldAlert, 
  ArrowRight, 
  Volume2, 
  ChevronRight, 
  ChevronLeft 
} from 'lucide-react';
import { sound } from '../utils/audioSynth';

export default function PresenterModal({
  isOpen,
  onClose,
  slideData,
  nextSlideData,
  currentIndex,
  totalSlides,
  onPrev,
  onNext
}) {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  // Cronômetro da apresentação
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  if (!isOpen) return null;

  const formatTime = (totalSec) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleResetTimer = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(5, 7, 11, 0.88)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div className="glass-panel-glow" style={{
        width: '100%',
        maxWidth: '1200px',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: '#0B0F17',
        border: '1px solid rgba(250, 204, 21, 0.4)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(250, 204, 21, 0.15)'
      }}>
        {/* Barra Superior do Modo Apresentador */}
        <div style={{
          padding: '1rem 1.75rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(15, 23, 42, 0.6)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span className="badge-energy" style={{ background: 'rgba(250, 204, 21, 0.15)' }}>
              MODO APRESENTADOR • BANCA TCC
            </span>
            <span style={{ color: 'var(--text-muted)' }}>|</span>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              Slide <strong>{currentIndex + 1}</strong> de {totalSlides} — <strong style={{ color: '#FFFFFF' }}>{slideData.title}</strong>
            </span>
          </div>

          {/* Cronômetro e Controles de Tempo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 14px',
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '10px',
              border: '1px solid var(--border-subtle)'
            }}>
              <Clock size={16} color="#FACC15" />
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '1.1rem', 
                fontWeight: 700, 
                color: seconds > 900 ? '#F87171' : '#FACC15' 
              }}>
                {formatTime(seconds)}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                (Meta: 12-15 min)
              </span>

              <button
                onClick={() => setIsRunning(!isRunning)}
                className="btn-icon"
                style={{ width: '28px', height: '28px' }}
                title={isRunning ? "Pausar cronômetro" : "Iniciar cronômetro"}
              >
                {isRunning ? <Pause size={14} /> : <Play size={14} />}
              </button>

              <button
                onClick={handleResetTimer}
                className="btn-icon"
                style={{ width: '28px', height: '28px' }}
                title="Zerar cronômetro"
              >
                <RotateCcw size={14} />
              </button>
            </div>

            <button
              onClick={onClose}
              className="btn-icon"
              style={{ width: '36px', height: '36px', color: '#F87171' }}
              title="Fechar Modo Apresentador [Esc ou P]"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Corpo Principal Dividido em Duas Colunas */}
        <div style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: '24px',
          padding: '1.75rem',
          overflow: 'hidden'
        }}>
          {/* Coluna Esquerda: O Roteiro de Fala Oral Completo */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            overflowY: 'auto',
            paddingRight: '12px'
          }}>
            {/* Quem Fala */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 18px',
              background: 'rgba(250, 204, 21, 0.08)',
              border: '1px solid rgba(250, 204, 21, 0.3)',
              borderRadius: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'var(--yellow-primary)',
                  color: '#0B0F17',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.9rem'
                }}>
                  {slideData.speaker.split(' ')[0][0]}
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--yellow-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Apresentador Responsável
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF' }}>
                    {slideData.speaker}
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Tempo deste slide</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: '#FACC15', fontFamily: 'var(--font-mono)' }}>
                  ~{slideData.estimatedTime}
                </div>
              </div>
            </div>

            {/* Texto do Roteiro de Fala Oral */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '14px',
              padding: '1.5rem',
              flex: 1
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '1rem',
                color: 'var(--yellow-primary)',
                fontWeight: 600,
                fontSize: '0.9rem'
              }}>
                <Volume2 size={18} />
                <span>ROTEIRO DE FALA SUGERIDO (PORTUGUÊS BRASILEIRO):</span>
              </div>

              <div style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#F1F5F9',
                whiteSpace: 'pre-line',
                fontFamily: 'var(--font-sans)',
                fontWeight: 400
              }}>
                {slideData.script}
              </div>
            </div>

            {/* Dica de Postura e Entonação */}
            {slideData.presenterTips && (
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '12px 16px',
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: '10px',
                fontSize: '0.88rem',
                color: '#E0F2FE'
              }}>
                <Sparkles size={18} color="#38BDF8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#38BDF8' }}>Dica de Apresentação: </strong>
                  {slideData.presenterTips}
                </div>
              </div>
            )}
          </div>

          {/* Coluna Direita: Dica de Defesa da Banca & Próximo Slide */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            overflowY: 'auto'
          }}>
            {/* Dica de Defesa da Banca */}
            <div style={{
              background: 'rgba(239, 68, 68, 0.08)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '14px',
              padding: '1.25rem'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '8px',
                color: '#F87171',
                fontWeight: 700,
                fontSize: '0.85rem'
              }}>
                <ShieldAlert size={18} />
                <span>ORIENTAÇÃO PARA DEFESA COM A BANCA:</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#FEE2E2', lineHeight: 1.6 }}>
                {slideData.bancaDefenseTip}
              </p>
            </div>

            {/* Prévia do Próximo Slide */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '14px',
              padding: '1.25rem',
              flex: 1,
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '10px'
              }}>
                <div style={{
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase'
                }}>
                  A seguir no Slide {currentIndex + 2 > totalSlides ? 'Fim' : currentIndex + 2}
                </div>
                {nextSlideData && (
                  <span className="badge-speaker" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                    Fala: {nextSlideData.speaker.split(' ')[0]}
                  </span>
                )}
              </div>

              {nextSlideData ? (
                <div style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '10px',
                  padding: '1rem',
                  flex: 1
                }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--yellow-primary)', fontWeight: 600 }}>
                    {nextSlideData.category}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', margin: '6px 0 10px 0' }}>
                    {nextSlideData.title}
                  </h4>
                  <p style={{ 
                    fontSize: '0.82rem', 
                    color: 'var(--text-secondary)',
                    lineHeight: 1.5,
                    display: '-webkit-box',
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {nextSlideData.script}
                  </p>
                </div>
              ) : (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem'
                }}>
                  Este é o último slide da apresentação!
                </div>
              )}
            </div>

            {/* Botões de Navegação Rápida no Modo Apresentador */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={onPrev}
                disabled={currentIndex === 0}
                className="btn-secondary"
                style={{ flex: 1, padding: '12px' }}
              >
                <ChevronLeft size={18} />
                <span>Slide Anterior</span>
              </button>
              <button
                onClick={onNext}
                disabled={currentIndex === totalSlides - 1}
                className="btn-primary"
                style={{ flex: 1, padding: '12px' }}
              >
                <span>Avançar Slide</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
