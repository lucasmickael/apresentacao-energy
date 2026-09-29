import React from 'react';
import { 
  Zap, 
  User, 
  Grid, 
  Tv, 
  HelpCircle, 
  Maximize, 
  Minimize, 
  Volume2, 
  VolumeX 
} from 'lucide-react';
import { sound } from '../utils/audioSynth';

export default function Header({ 
  currentSlide, 
  totalSlides, 
  slideData, 
  speakerInfo, 
  onTogglePresenter, 
  isPresenterOpen,
  onToggleOverview,
  onToggleHelp,
  isFullscreen,
  onToggleFullscreen,
  soundEnabled,
  onToggleSound
}) {
  return (
    <header className="slide-header" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1.25rem 3.5rem 0.5rem 3.5rem',
      position: 'relative',
      zIndex: 20
    }}>
      {/* Esquerda: Identidade do Projeto & Categoria do Slide */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img 
            src="/logo-eenergy.png" 
            alt="E-Energy Logo" 
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              objectFit: 'contain'
            }}
          />
          <span style={{ 
            fontFamily: 'var(--font-display)', 
            fontWeight: 800, 
            fontSize: '1.15rem', 
            letterSpacing: '0.05em',
            color: '#FFFFFF'
          }}>
            E-ENERGY
          </span>
        </div>

        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>|</span>

        <span className="badge-energy">
          {slideData.category}
        </span>
      </div>

      {/* Centro: Integrante da vez */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div className="badge-speaker" style={{
          borderColor: speakerInfo ? speakerInfo.color + '40' : 'var(--border-subtle)',
          boxShadow: speakerInfo ? `0 0 12px ${speakerInfo.color}20` : 'none'
        }}>
          <User size={14} color={speakerInfo ? speakerInfo.color : '#FACC15'} />
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Apresentando:</span>
          <strong style={{ color: speakerInfo ? speakerInfo.color : '#FFFFFF', fontWeight: 600 }}>
            {slideData.speaker}
          </strong>
        </div>
      </div>

      {/* Direita: Controles e Atalhos de Apoio */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        {/* Toggle Som */}
        <button 
          onClick={onToggleSound}
          className="btn-icon"
          title={soundEnabled ? "Desativar efeitos sonoros" : "Ativar efeitos sonoros"}
          aria-label="Som"
        >
          {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </button>

        {/* Modo Apresentador */}
        <button 
          onClick={onTogglePresenter}
          className="btn-secondary"
          style={{
            padding: '8px 14px',
            fontSize: '0.85rem',
            background: isPresenterOpen ? 'rgba(250, 204, 21, 0.15)' : undefined,
            borderColor: isPresenterOpen ? 'var(--yellow-primary)' : undefined,
            color: isPresenterOpen ? 'var(--yellow-primary)' : undefined
          }}
          title="Abrir Modo Apresentador com Roteiro e Cronômetro (Tecla P)"
        >
          <Tv size={16} />
          <span>Modo Apresentador [P]</span>
        </button>

        {/* Visão Geral dos Slides */}
        <button 
          onClick={onToggleOverview}
          className="btn-icon"
          title="Grade de todos os 15 slides (Tecla O ou G)"
          aria-label="Todos os slides"
        >
          <Grid size={18} />
        </button>

        {/* Tela Cheia */}
        <button 
          onClick={onToggleFullscreen}
          className="btn-icon"
          title="Alternar Tela Cheia (Tecla F)"
          aria-label="Tela cheia"
        >
          {isFullscreen ? <Minimize size={18} /> : <Maximize size={18} />}
        </button>

        {/* Ajuda / Atalhos */}
        <button 
          onClick={onToggleHelp}
          className="btn-icon"
          title="Atalhos de teclado (Tecla H)"
          aria-label="Ajuda"
        >
          <HelpCircle size={18} />
        </button>
      </div>
    </header>
  );
}
