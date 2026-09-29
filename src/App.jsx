import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PresenterModal from './components/PresenterModal';
import SlideOverviewModal from './components/SlideOverviewModal';
import ShortcutsModal from './components/ShortcutsModal';
import ParticlesBackground from './components/ParticlesBackground';
import { motion, AnimatePresence } from 'framer-motion';

// Slides E-Energy
import SlideCover from './components/slides/SlideCover';
import SlideContext from './components/slides/SlideContext';
import SlideProblem from './components/slides/SlideProblem';
import SlideJustification from './components/slides/SlideJustification';
import SlideObjectives from './components/slides/SlideObjectives';
import SlideSolution from './components/slides/SlideSolution';
import SlideComponents from './components/slides/SlideComponents';
import SlideDevelopment from './components/slides/SlideDevelopment';
import SlideWorkflow from './components/slides/SlideWorkflow';
import SlideInterfaceDemo from './components/slides/SlideInterfaceDemo';
import SlidePrototype from './components/slides/SlidePrototype';
import SlideResults from './components/slides/SlideResults';
import SlideBenefits from './components/slides/SlideBenefits';
import SlideChallengesFuture from './components/slides/SlideChallengesFuture';
import SlideConclusion from './components/slides/SlideConclusion';

import { SLIDES, TEAM_INFO } from './data/slidesData';
import { sound } from './utils/audioSynth';

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [navDirection, setNavDirection] = useState('next');
  const [isPresenterOpen, setIsPresenterOpen] = useState(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const currentSlide = SLIDES[currentIndex];
  const nextSlide = currentIndex < SLIDES.length - 1 ? SLIDES[currentIndex + 1] : null;
  const currentSpeaker = TEAM_INFO.members.find(m => m.id === currentSlide.speakerId);

  // Navegação para próximo slide
  const handleNext = useCallback(() => {
    if (currentIndex < SLIDES.length - 1) {
      setNavDirection('next');
      setCurrentIndex((prev) => prev + 1);
      sound.playSlideTransition();
    }
  }, [currentIndex]);

  // Navegação para slide anterior
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setNavDirection('prev');
      setCurrentIndex((prev) => prev - 1);
      sound.playSlideTransition();
    }
  }, [currentIndex]);

  // Pular diretamente para um slide
  const handleGoTo = useCallback((index) => {
    if (index >= 0 && index < SLIDES.length && index !== currentIndex) {
      setNavDirection(index > currentIndex ? 'next' : 'prev');
      setCurrentIndex(index);
      sound.playSlideTransition();
    }
  }, [currentIndex]);

  // Alternar tela cheia
  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  // Escuta de mudanças de tela cheia nativas
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Atalhos Globais de Teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignorar se o foco estiver num input ou textarea
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          handlePrev();
          break;
        case 'Home':
          e.preventDefault();
          handleGoTo(0);
          break;
        case 'End':
          e.preventDefault();
          handleGoTo(SLIDES.length - 1);
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          setIsPresenterOpen(prev => !prev);
          break;
        case 'o':
        case 'O':
        case 'g':
        case 'G':
          e.preventDefault();
          setIsOverviewOpen(prev => !prev);
          break;
        case 'h':
        case 'H':
          e.preventDefault();
          setIsHelpOpen(prev => !prev);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 'Escape':
          setIsPresenterOpen(false);
          setIsOverviewOpen(false);
          setIsHelpOpen(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleGoTo]);

  // Renderizador do Slide Atual
  const renderSlideContent = () => {
    switch (currentIndex) {
      case 0:
        return <SlideCover onNext={handleNext} />;
      case 1:
        return <SlideContext data={currentSlide} />;
      case 2:
        return <SlideProblem data={currentSlide} />;
      case 3:
        return <SlideJustification data={currentSlide} />;
      case 4:
        return <SlideObjectives data={currentSlide} />;
      case 5:
        return <SlideSolution data={currentSlide} />;
      case 6:
        return <SlideComponents data={currentSlide} />;
      case 7:
        return <SlideDevelopment data={currentSlide} />;
      case 8:
        return <SlideWorkflow data={currentSlide} />;
      case 9:
        return <SlideInterfaceDemo data={currentSlide} />;
      case 10:
        return <SlidePrototype data={currentSlide} />;
      case 11:
        return <SlideResults data={currentSlide} />;
      case 12:
        return <SlideBenefits data={currentSlide} />;
      case 13:
        return <SlideChallengesFuture data={currentSlide} />;
      case 14:
        return <SlideConclusion data={currentSlide} />;
      default:
        return <SlideCover onNext={handleNext} />;
    }
  };

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      userSelect: 'none',
      background: 'var(--bg-primary)'
    }}>
      {/* Camada 1: Fundo animado de partículas high-tech */}
      <ParticlesBackground />
      {/* Camada 2: Glow sutil */}
      <div className="cyber-circuit-overlay" style={{ zIndex: 1 }} />

      {/* Camada 3: Cabeçalho */}
      <Header
        currentSlide={currentIndex + 1}
        totalSlides={SLIDES.length}
        slideData={currentSlide}
        speakerInfo={currentSpeaker}
        onTogglePresenter={() => setIsPresenterOpen(prev => !prev)}
        isPresenterOpen={isPresenterOpen}
        onToggleOverview={() => setIsOverviewOpen(prev => !prev)}
        onToggleHelp={() => setIsHelpOpen(prev => !prev)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        soundEnabled={soundEnabled}
        onToggleSound={() => {
          sound.enabled = !soundEnabled;
          setSoundEnabled(!soundEnabled);
        }}
      />

      {/* Camada 4: Área principal dos slides animada com Framer Motion */}
      <main style={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        zIndex: 10,
        minHeight: 0
      }}>
        <AnimatePresence initial={false} mode="wait" custom={navDirection}>
          <motion.div
            key={currentIndex}
            className="slide-wrapper"
            custom={navDirection}
            initial={{ opacity: 0, x: navDirection === 'next' ? 60 : -60, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: navDirection === 'next' ? -60 : 60, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 220, damping: 25 }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%'
            }}
          >
            {renderSlideContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Camada 5: Rodapé com Navegação */}
      <Footer
        currentIndex={currentIndex}
        totalSlides={SLIDES.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onGoTo={handleGoTo}
        estimatedTime={currentSlide.estimatedTime}
      />

      {/* Modal Modo Apresentador com Cronômetro e Roteiro */}
      <PresenterModal
        isOpen={isPresenterOpen}
        onClose={() => setIsPresenterOpen(false)}
        slideData={currentSlide}
        nextSlideData={nextSlide}
        currentIndex={currentIndex}
        totalSlides={SLIDES.length}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      {/* Modal Visão Geral em Grade com os 15 slides */}
      <SlideOverviewModal
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        currentIndex={currentIndex}
        onSelectSlide={handleGoTo}
      />

      {/* Modal de Ajuda de Atalhos */}
      <ShortcutsModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </div>
  );
}
