import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, BarChart3, FileText, Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Research = () => {
    return (
        <section id="research" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
            <div className="divider" style={{ marginBottom: '80px' }} />
            <div style={{ marginBottom: '48px' }}>
                <div className="section-label" style={{ marginBottom: '12px' }}>Verified Credentials</div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', letterSpacing: '-0.02em', color: '#f0f0f5' }}>
                    My <span className="gradient-text">Certificates</span>
                </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {portfolioData.research.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="card"
                        style={{ padding: '32px' }}
                    >
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
                            {/* Left */}
                            <div style={{ flex: '1', minWidth: '260px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                    <div style={{ padding: '6px', background: 'rgba(79,110,247,0.1)', borderRadius: '8px', color: '#4f6ef7' }}>
                                        <FlaskConical size={16} />
                                    </div>
                                    <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,240,245,0.35)' }}>{item.focus}</span>
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#f0f0f5', marginBottom: '10px', letterSpacing: '-0.01em' }}>{item.title}</h3>
                                <p style={{ fontSize: '13px', color: 'rgba(240,240,245,0.5)', lineHeight: '1.7', marginBottom: '20px' }}>{item.description}</p>

                                {/* Metrics */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                    {Object.entries(item.metrics).map(([key, val]) => (
                                        <div key={key} style={{ padding: '8px 16px', background: 'rgba(79,110,247,0.06)', border: '1px solid rgba(79,110,247,0.15)', borderRadius: '8px' }}>
                                            <div style={{ fontSize: '16px', fontWeight: '800', color: '#818cf8', letterSpacing: '-0.01em' }}>{val}</div>
                                            <div style={{ fontSize: '10px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(240,240,245,0.3)', marginTop: '2px' }}>{key}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Details */}
                            <div style={{ flex: '1', minWidth: '260px', background: 'rgba(255,255,255,0.02)', borderRadius: '10px', padding: '20px', border: '1px solid rgba(255,255,255,0.04)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                                    <FileText size={14} style={{ color: 'rgba(240,240,245,0.3)' }} />
                                    <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,240,245,0.3)' }}>course Details</span>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {item.details.map((detail, j) => (
                                        <div key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <span style={{ fontSize: '11px', fontWeight: '700', color: '#4f6ef7', fontFamily: 'JetBrains Mono, monospace', marginTop: '1px', flexShrink: 0 }}>0{j + 1}</span>
                                            <p style={{ fontSize: '12px', color: 'rgba(240,240,245,0.55)', lineHeight: '1.6' }}>{detail}</p>
                                        </div>
                                    ))}
                                </div>

                                {((item.github && item.github !== '#') || (item.live && item.live !== '#')) && (
                                    <div style={{ display: 'flex', gap: '8px', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                        {item.github && item.github !== '#' && (
                                            <a href={item.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '6px 12px', fontSize: '11px' }}>
                                                <Github size={12} /> Code
                                            </a>
                                        )}
                                        {item.live && item.live !== '#' && (
                                            <a href={item.live} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '6px 12px', fontSize: '11px' }}>
                                                <ExternalLink size={12} /> Check Certificate
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Research;
