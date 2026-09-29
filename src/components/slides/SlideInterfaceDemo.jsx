import React, { useState, useEffect } from 'react';
import { 
  Power, 
  Wifi, 
  Activity, 
  Zap, 
  Sliders, 
  CheckCircle, 
  Tv, 
  Sun, 
  Fan, 
  Flame, 
  RotateCcw,
  Sparkles 
} from 'lucide-react';
import { sound } from '../../utils/audioSynth';

export default function SlideInterfaceDemo({ data }) {
  const [isRelayOn, setIsRelayOn] = useState(true);
  const [selectedLoad, setSelectedLoad] = useState('lamp');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  // Perfis de carga realistas
  const loadProfiles = {
    standby: { name: "Standby TV / Box", current: 0.06, power: 7.6, icon: <Tv size={16} /> },
    lamp: { name: "Lâmpada LED", current: 0.12, power: 15.2, icon: <Sun size={16} /> },
    fan: { name: "Ventilador de Mesa", current: 0.51, power: 64.8, icon: <Fan size={16} /> },
    iron: { name: "Ferro de Passar", current: 9.45, power: 1200.0, icon: <Flame size={16} /> }
  };

  const activeProfile = loadProfiles[selectedLoad];
  const displayCurrent = isRelayOn ? activeProfile.current : 0.00;
  const displayPower = isRelayOn ? activeProfile.power : 0.0;

  // Toggle do Relé com Efeito Sonoro e Feedback Visual
  const handleToggleRelay = () => {
    const newState = !isRelayOn;
    setIsRelayOn(newState);
    sound.playRelayClick(newState);
    setFeedbackMsg(newState ? "Carga AC energizada via Relé (127V)" : "Carga desenergizada remotamente (0V)");
    setTimeout(() => setFeedbackMsg(''), 3000);
  };

  const handleChangeLoad = (key) => {
    setSelectedLoad(key);
    sound.playBeep();
  };

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
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <span className="badge-energy">
            {data.subtitle}
          </span>
          <h2 style={{ fontSize: '2.6rem', fontWeight: 800, color: '#FFFFFF', margin: '4px 0 6px 0' }}>
            {data.title}
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '780px' }}>
            Painel digital intuitivo para acompanhamento em tempo real e corte imediato de alimentação.
          </p>
        </div>

        <div style={{
          padding: '6px 12px',
          borderRadius: '8px',
          background: 'rgba(250, 204, 21, 0.1)',
          border: '1px solid rgba(250, 204, 21, 0.3)',
          color: 'var(--yellow-primary)',
          fontSize: '0.78rem',
          fontFamily: 'var(--font-mono)',
          fontWeight: 600
        }}>
          ● CONCEITO & DEMO INTERATIVA
        </div>
      </div>

      {/* Simulador Interativo do Dashboard E-Energy */}
      <div className="glass-panel-glow" style={{
        padding: '1.5rem 2rem',
        borderRadius: '20px',
        background: 'rgba(11, 15, 23, 0.92)',
        border: '1px solid rgba(250, 204, 21, 0.35)',
        margin: 'auto 0'
      }}>
        {/* Barra de Status do Sistema */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-subtle)',
          paddingBottom: '12px',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '9999px',
              background: 'rgba(74, 222, 128, 0.1)',
              border: '1px solid rgba(74, 222, 128, 0.25)',
              color: '#4ADE80',
              fontSize: '0.75rem',
              fontWeight: 600
            }}>
              <Wifi size={13} />
              <span>ESP32 CONECTADO (Rede E-Energy)</span>
            </div>

            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              IP: 192.168.4.1 • Latência: ~15ms
            </span>
          </div>

          {/* LED de Estado do Relé */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Status do Relé:</span>
            <span style={{
              padding: '3px 8px',
              borderRadius: '6px',
              fontSize: '0.72rem',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              background: isRelayOn ? 'rgba(74, 222, 128, 0.2)' : 'rgba(239, 68, 68, 0.2)',
              color: isRelayOn ? '#4ADE80' : '#F87171',
              border: isRelayOn ? '1px solid #4ADE80' : '1px solid #F87171'
            }}>
              {isRelayOn ? "ALIMENTAÇÃO ATIVA" : "CIRCUITO DESLIGADO"}
            </span>
          </div>
        </div>

        {/* Três Métricas em Tempo Real + Botão de Comando Central */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr 1.3fr',
          gap: '16px',
          alignItems: 'center',
          marginBottom: '18px'
        }}>
          {/* Card Corrente (IRMS) */}
          <div className="glass-panel" style={{ padding: '14px', background: 'rgba(0, 0, 0, 0.4)' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              CORRENTE EFICAZ (IRMS)
            </div>
            <div style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: isRelayOn ? 'var(--yellow-primary)' : 'var(--text-muted)',
              fontFamily: 'var(--font-display)',
              margin: '4px 0'
            }}>
              {displayCurrent.toFixed(2)} <span style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>A</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
              Sensor SCT-013 • ADC 12 bits
            </div>
          </div>

          {/* Card Tensão */}
          <div className="glass-panel" style={{ padding: '14px', background: 'rgba(0, 0, 0, 0.4)' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              TENSÃO DE REDE NOMINAL
            </div>
            <div style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#38BDF8',
              fontFamily: 'var(--font-display)',
              margin: '4px 0'
            }}>
              127.0 <span style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>V</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
              Rede de Campinas • 60 Hz
            </div>
          </div>

          {/* Card Potência */}
          <div className="glass-panel" style={{ padding: '14px', background: 'rgba(0, 0, 0, 0.4)' }}>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              POTÊNCIA ESTIMADA
            </div>
            <div style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: isRelayOn ? '#4ADE80' : 'var(--text-muted)',
              fontFamily: 'var(--font-display)',
              margin: '4px 0'
            }}>
              {displayPower.toFixed(1)} <span style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>W</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>
              Cálculo P = V × I
            </div>
          </div>

          {/* Botão de Comando do Relé */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px',
            background: isRelayOn ? 'rgba(74, 222, 128, 0.05)' : 'rgba(239, 68, 68, 0.05)',
            border: isRelayOn ? '1px solid rgba(74, 222, 128, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '14px'
          }}>
            <button
              onClick={handleToggleRelay}
              className={isRelayOn ? "btn-secondary" : "btn-primary"}
              style={{
                width: '100%',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                fontSize: '0.95rem',
                fontWeight: 700,
                background: isRelayOn ? '#EF4444' : '#22C55E',
                color: '#FFFFFF',
                boxShadow: isRelayOn ? '0 0 20px rgba(239, 68, 68, 0.4)' : '0 0 20px rgba(34, 197, 94, 0.4)',
                border: 'none'
              }}
            >
              <Power size={18} />
              <span>{isRelayOn ? "DESLIGAR APARELHO" : "LIGAR APARELHO"}</span>
            </button>

            <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
              Clique para simular comutação física do relé
            </span>
          </div>
        </div>

        {/* Seletor de Cargas de Demonstração */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
              Simular Carga Conectada:
            </span>

            <div style={{ display: 'flex', gap: '8px' }}>
              {Object.entries(loadProfiles).map(([key, item]) => {
                const isCurrent = selectedLoad === key;
                return (
                  <button
                    key={key}
                    onClick={() => handleChangeLoad(key)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '5px 12px',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: isCurrent ? '1px solid var(--yellow-primary)' : '1px solid var(--border-subtle)',
                      background: isCurrent ? 'rgba(250, 204, 21, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                      color: isCurrent ? 'var(--yellow-primary)' : 'var(--text-secondary)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {feedbackMsg && (
            <div style={{
              fontSize: '0.75rem',
              color: '#FACC15',
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Sparkles size={13} />
              <span>{feedbackMsg}</span>
            </div>
          )}
        </div>
      </div>

      {/* Nota de Usabilidade */}
      <div className="glass-panel" style={{
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)'
      }}>
        <span>💡 <strong>Objetivo de UX:</strong> Interface enxuta e intuitiva para que qualquer pessoa compreenda seu consumo em menos de 3 segundos.</span>
        <span style={{ color: 'var(--yellow-primary)', fontWeight: 600 }}>Sem jargões técnicos na tela</span>
      </div>
    </div>
  );
}
