import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
    return (
        <section id="experience" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
            <div className="divider" style={{ marginBottom: '80px' }} />
            <div style={{ marginBottom: '48px' }}>
                <div className="section-label" style={{ marginBottom: '12px' }}>Career</div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', letterSpacing: '-0.02em', color: '#f0f0f5' }}>
                    Work <span className="gradient-text">Experience</span>
                </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {portfolioData.experience.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        style={{ display: 'flex', gap: '24px', paddingBottom: '40px' }}
                    >
                        {/* Timeline */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                            <div style={{
                                width: '36px', height: '36px', borderRadius: '10px',
                                background: 'rgba(79,110,247,0.1)', border: '1px solid rgba(79,110,247,0.3)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4f6ef7'
                            }}>
                                <Briefcase size={16} />
                            </div>
                            {i < portfolioData.experience.length - 1 && (
                                <div className="timeline-line" style={{ flex: 1, marginTop: '8px', minHeight: '40px' }} />
                            )}
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1, paddingTop: '4px' }}>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                                <div>
                                    <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#f0f0f5', marginBottom: '2px' }}>{exp.role}</h3>
                                    <div style={{ fontSize: '14px', color: '#4f6ef7', fontWeight: '600' }}>{exp.company}</div>
                                </div>
                                <span style={{
                                    fontSize: '11px', fontWeight: '600', color: 'rgba(240,240,245,0.4)',
                                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
                                    padding: '4px 10px', borderRadius: '6px', fontFamily: 'JetBrains Mono, monospace', whiteSpace: 'nowrap'
                                }}>{exp.duration}</span>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                                {exp.work.map((item, j) => (
                                    <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#4f6ef7', marginTop: '8px', flexShrink: 0 }} />
                                        <p style={{ fontSize: '13px', color: 'rgba(240,240,245,0.6)', lineHeight: '1.6' }}>{item}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Impact metrics */}
                            {Array.isArray(exp.metrics) && exp.metrics.length > 0 && (
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                                    {exp.metrics.map((metric, j) => (
                                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '4px 10px', background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.15)', borderRadius: '6px' }}>
                                            <TrendingUp size={11} style={{ color: '#10b981' }} />
                                            <span style={{ fontSize: '11px', fontWeight: '600', color: '#10b981' }}>{metric}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
