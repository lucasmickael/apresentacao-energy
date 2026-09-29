import React from 'react';
import { Zap, EyeOff, TrendingUp, HelpCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

export default function SlideContext({ data }) {
  const icons = {
    Zap: <Zap size={28} color="#FACC15" />,
    EyeOff: <EyeOff size={28} color="#38BDF8" />,
    TrendingUp: <TrendingUp size={28} color="#4ADE80" />
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative'
      }}
    >
      {/* Título e Subtítulo */}
      <motion.div variants={itemVariants}>
        <span className="badge-energy" style={{ marginBottom: '8px' }}>
          {data.subtitle}
        </span>
        <h2 style={{ fontSize: '2.8rem', fontWeight: 800, color: '#FFFFFF', margin: '6px 0 10px 0' }}>
          {data.title}
        </h2>
        <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '780px' }}>
          A eletricidade é a força motriz invisível de nossas vidas: consumimos a todo instante, mas sem a percepção imediata do seu custo real.
        </p>
      </motion.div>

      {/* Grid de 3 Cards Conceituais */}
      <motion.div 
        variants={itemVariants}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          margin: 'auto 0'
        }}
      >
        {data.cards.map((card, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.02 }}
            className="glass-panel" 
            style={{
              padding: '2rem 1.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '18px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: i === 0 ? 'rgba(250, 204, 21, 0.08)' : i === 1 ? 'rgba(56, 189, 248, 0.08)' : 'rgba(74, 222, 128, 0.08)',
              pointerEvents: 'none'
            }} />

            <div>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                {icons[card.icon] || <Zap size={28} color="#FACC15" />}
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '12px' }}>
                {card.title}
              </h3>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {card.desc}
              </p>
            </div>

            <div style={{
              marginTop: '1.5rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border-subtle)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-muted)'
            }}>
              <span>DIMENSÃO 0{i + 1}</span>
              <span style={{ color: 'var(--yellow-primary)' }}>●</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Conclusão do Slide */}
      <motion.div variants={itemVariants} className="glass-panel" style={{
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        background: 'rgba(250, 204, 21, 0.05)',
        border: '1px solid rgba(250, 204, 21, 0.2)'
      }}>
        <div style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: 'var(--yellow-primary)',
          color: '#0B0F17',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 800,
          fontSize: '0.85rem'
        }}>
          !
        </div>
        <span style={{ fontSize: '0.92rem', color: '#F1F5F9' }}>
          <strong>O Paradoxo da Gestão:</strong> Ninguém consegue economizar ou tomar decisões racionais sobre algo que não consegue visualizar em tempo real.
        </span>
      </motion.div>
    </motion.div>
  );
}
