import React, { useState } from 'react';
import { 
  Zap, 
  Radio, 
  Cpu, 
  Sliders, 
  Power, 
  Laptop, 
  Tv, 
  ArrowRight, 
  CheckCircle2, 
  Activity 
} from 'lucide-react';

export default function SlideWorkflow({ data }) {
  const [activeStep, setActiveStep] = useState(3);

  const nodes = [
    { id: 1, name: "Rede Elétrica", sub: "127V AC / 60Hz", icon: <Zap size={20} color="#FACC15" /> },
    { id: 2, name: "Sensor SCT-013", sub: "Indução de Corrente", icon: <Radio size={20} color="#38BDF8" /> },
    { id: 3, name: "Condicionador", sub: "Offset DC 1.65V", icon: <Sliders size={20} color="#F59E0B" /> },
    { id: 4, name: "ESP32 (ADC)", sub: "Cálculo RMS & Wi-Fi", icon: <Cpu size={20} color="#4ADE80" /> },
    { id: 5, name: "Interface Web", sub: "Telemetria & Controle", icon: <Laptop size={20} color="#A78BFA" /> },
    { id: 6, name: "Módulo Relé", sub: "Isolação Óptica", icon: <Power size={20} color="#F87171" /> },
    { id: 7, name: "Aparelho Carga", sub: "Equipamento Testado", icon: <Tv size={20} color="#FACC15" /> }
  ];

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
          Dois circuitos integrados: o fluxo contínuo de energia elétrica e o ciclo digital de telemetria e comando.
        </p>
      </div>

      {/* Diagrama Esquemático com Nós Interativos */}
      <div style={{ margin: 'auto 0' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '10px',
          alignItems: 'center',
          position: 'relative'
        }}>
          {nodes.map((node, i) => {
            const isCurrent = activeStep === i;
            return (
              <div
                key={node.id}
                onClick={() => setActiveStep(i)}
                className="glass-panel"
                style={{
                  padding: '14px 10px',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  border: isCurrent ? '2px solid var(--yellow-primary)' : '1px solid var(--border-subtle)',
                  background: isCurrent ? 'rgba(250, 204, 21, 0.12)' : 'rgba(16, 22, 34, 0.75)',
                  boxShadow: isCurrent ? '0 0 25px rgba(250, 204, 21, 0.25)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 8px auto'
                }}>
                  {node.icon}
                </div>

                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: isCurrent ? 'var(--yellow-primary)' : 'var(--text-muted)',
                  fontWeight: 700
                }}>
                  0{node.id}
                </div>

                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFFFFF', marginTop: '2px', lineHeight: 1.2 }}>
                  {node.name}
                </div>

                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  {node.sub}
                </div>
              </div>
            );
          })}
        </div>

        {/* Linha animada de fluxo elétrico e de dados */}
        <div style={{
          marginTop: '1.25rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '16px'
        }}>
          {/* Circuito de Potência */}
          <div className="glass-panel" style={{ padding: '14px 18px', borderLeft: '4px solid #FACC15' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <Zap size={16} color="#FACC15" />
              <strong style={{ fontSize: '0.88rem', color: '#FFFFFF' }}>FLUXO DE POTÊNCIA (ALTA TENSÃO):</strong>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
              Rede 127V → Cabo de Fase abraçado pelo SCT-013 → Contatos do Relé → Tomada do Aparelho Doméstico.
            </p>
          </div>

          {/* Circuito Lógico e de Dados */}
          <div className="glass-panel" style={{ padding: '14px 18px', borderLeft: '4px solid #38BDF8' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <Activity size={16} color="#38BDF8" />
              <strong style={{ fontSize: '0.88rem', color: '#FFFFFF' }}>FLUXO DE TELEMETRIA & CONTROLE:</strong>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
              Sinal AC → Condicionador (Offset 1.65V) → ESP32 (RMS) → Wi-Fi → Interface Web → Comando Relé.
            </p>
          </div>
        </div>
      </div>

      {/* Explicação da Etapa Selecionada */}
      <div className="glass-panel" style={{
        padding: '12px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'rgba(250, 204, 21, 0.05)',
        border: '1px solid rgba(250, 204, 21, 0.25)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="badge-energy" style={{ padding: '2px 8px', fontSize: '0.7rem' }}>
            Etapa {data.diagramSteps[activeStep].step}
          </span>
          <span style={{ fontSize: '0.9rem', color: '#FFFFFF' }}>
            <strong>{data.diagramSteps[activeStep].from}</strong> <ArrowRight size={13} style={{ display: 'inline', margin: '0 4px' }} /> <strong>{data.diagramSteps[activeStep].to}</strong>: {data.diagramSteps[activeStep].desc}
          </span>
        </div>

        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          (Clique nos nós para alternar a explicação)
        </span>
      </div>
    </div>
  );
}
