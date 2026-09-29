import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Camera, 
  Upload, 
  CheckCircle2, 
  Layers, 
  Image as ImageIcon 
} from 'lucide-react';

export default function SlidePrototype({ data }) {
  // Permite aos alunos carregarem uma foto real tirada do protótipo na ETEC durante os testes
  const [userPhotos, setUserPhotos] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newUrls = files.map(file => URL.createObjectURL(file));
      setUserPhotos(prev => [...newUrls, ...prev]);
    }
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
      <div>
        <span className="badge-energy">
          {data.subtitle}
        </span>
        <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#FFFFFF', margin: '6px 0 10px 0' }}>
          {data.title}
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '820px' }}>
          Materialização prática em bancada: montagem segura, isolamento galvânico e conformidade com normas.
        </p>
      </div>

      {/* Grid: 3 Destaques Técnicos de Construção + Moldura de Fotos do Protótipo */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1.3fr',
        gap: '24px',
        alignItems: 'stretch',
        margin: 'auto 0'
      }}>
        {/* Esquerda: Cuidados de Engenharia e Montagem */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {data.highlights.map((item, i) => (
            <div key={i} className="glass-panel" style={{
              padding: '1.25rem 1.4rem',
              borderRadius: '14px',
              borderLeft: '4px solid var(--yellow-primary)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <CheckCircle2 size={16} color="#FACC15" />
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                  {item.title}
                </h4>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}

          {/* Destaque Institucional */}
          <div className="glass-panel" style={{
            padding: '12px 16px',
            background: 'rgba(56, 189, 248, 0.08)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <Cpu size={20} color="#38BDF8" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.82rem', color: '#E0F2FE', lineHeight: 1.4 }}>
              <strong>Protótipo de Laboratório:</strong> Montado e validado fisicamente nas bancadas de eletrônica da ETEC Bento Quirino.
            </div>
          </div>
        </div>

        {/* Direita: Moldura Técnica de Fotos do Protótipo */}
        <div className="glass-panel-glow" style={{
          padding: '1.5rem',
          borderRadius: '18px',
          background: 'rgba(11, 15, 23, 0.9)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Camera size={18} color="#FACC15" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#FFFFFF', fontWeight: 600 }}>
                  REGISTRO DO PROTÓTIPO FÍSICO
                </span>
              </div>

              {/* Botão de Upload de Foto Real */}
              <label style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 10px',
                borderRadius: '8px',
                background: 'rgba(250, 204, 21, 0.15)',
                border: '1px solid rgba(250, 204, 21, 0.3)',
                color: 'var(--yellow-primary)',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                <Upload size={13} />
                <span>Inserir Foto Real da Bancada</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
              </label>
            </div>

            {/* Visualização de Fotos ou Diagrama de Bancada */}
            <div style={{
              width: '100%',
              height: '240px',
              borderRadius: '12px',
              background: 'rgba(0, 0, 0, 0.6)',
              border: '1px dashed var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              position: 'relative'
            }}>
              {userPhotos.length > 0 ? (
                <img
                  src={userPhotos[0]}
                  alt="Protótipo E-Energy na Bancada"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              ) : (
                /* Representação Esquemática Técnica do Protótipo */
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '1.5rem',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'rgba(250, 204, 21, 0.1)',
                    border: '1px solid rgba(250, 204, 21, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Layers size={32} color="#FACC15" />
                  </div>

                  <div>
                    <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', margin: '0 0 4px 0' }}>
                      Módulos Integrados em Caixa de Bancada
                    </h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', maxWidth: '380px', margin: 0 }}>
                      Tomada NBR 14136 + Garra SCT-013 + Módulo Relé 10A + ESP32 DevKit V1 com borne de alimentação externa.
                    </p>
                  </div>

                  <span style={{ fontSize: '0.72rem', color: 'var(--yellow-primary)', fontFamily: 'var(--font-mono)' }}>
                    [Clique no botão superior para carregar fotos tiradas na ETEC]
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Legenda Técnica */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '10px',
            borderTop: '1px solid var(--border-subtle)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)'
          }}>
            <span>Montagem: ETEC Bento Quirino</span>
            <span style={{ color: '#4ADE80' }}>✓ Circuito Físico Operacional</span>
          </div>
        </div>
      </div>

      {/* Síntese */}
      <div className="glass-panel" style={{
        padding: '10px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)'
      }}>
        <span>Apresentador: <strong style={{ color: '#4ADE80' }}>Giovani Amadio</strong> (Protótipo & Resultados)</span>
        <span style={{ color: 'var(--yellow-primary)', fontWeight: 600 }}>100% Funcional em Cargas Reais</span>
      </div>
    </div>
  );
}
