import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', ...new Set(portfolioData.projects.map(p => p.category))];
    const filtered = filter === 'All' ? portfolioData.projects : portfolioData.projects.filter(p => p.category === filter);

    return (
        <section id="projects" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
            <div className="divider" style={{ marginBottom: '80px' }} />

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px', marginBottom: '48px' }}>
                <div>
                    <div className="section-label" style={{ marginBottom: '12px' }}>Case Studies</div>
                    <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', letterSpacing: '-0.02em', color: '#f0f0f5' }}>
                        Selected <span className="gradient-text">Projects</span>
                    </h2>
                </div>
                <div style={{ display: 'flex', gap: '6px', padding: '4px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px' }}>
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setFilter(cat)} style={{
                            padding: '6px 14px', borderRadius: '7px', fontSize: '12px', fontWeight: '600',
                            border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                            background: filter === cat ? '#f0f0f5' : 'transparent',
                            color: filter === cat ? '#050508' : 'rgba(240,240,245,0.4)',
                        }}>
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <AnimatePresence mode="popLayout">
                    {filtered.map((project, i) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.97 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            className="card"
                            style={{ padding: '28px 32px' }}
                        >
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between' }}>
                                {/* Left */}
                                <div style={{ flex: '1', minWidth: '260px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                        <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f6ef7' }}>{project.category}</span>
                                        <span style={{ width: '3px', height: '3px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                                        <span style={{ fontSize: '11px', color: 'rgba(240,240,245,0.3)' }}>Case Study</span>
                                    </div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#f0f0f5', marginBottom: '8px', letterSpacing: '-0.01em' }}>{project.title}</h3>
                                    <p style={{ fontSize: '13px', color: 'rgba(240,240,245,0.5)', lineHeight: '1.6', marginBottom: '16px', maxWidth: '400px' }}>{project.description}</p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                        {project.techStack.map(tech => (
                                            <span key={tech} style={{
                                                padding: '3px 9px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                                                borderRadius: '5px', fontSize: '11px', fontWeight: '600', color: 'rgba(240,240,245,0.5)',
                                                fontFamily: 'JetBrains Mono, monospace'
                                            }}>{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right */}
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px', minWidth: '200px' }}>
                                    {/* Metrics */}
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                        {project.metrics.map((m, j) => (
                                            <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                <TrendingUp size={12} style={{ color: '#10b981', flexShrink: 0 }} />
                                                <span style={{ fontSize: '12px', fontWeight: '600', color: '#10b981' }}>{m}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        {project.github !== '#' && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '7px 14px', fontSize: '12px' }}>
                                                <Github size={13} /> Code
                                            </a>
                                        )}
                                        {project.live !== '#' && (
                                            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '7px 14px', fontSize: '12px' }}>
                                                <ExternalLink size={13} /> Live
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Problem / Solution */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                <div>
                                    <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,240,245,0.25)', marginBottom: '6px' }}>Problem</div>
                                    <p style={{ fontSize: '12px', color: 'rgba(240,240,245,0.45)', lineHeight: '1.6' }}>{project.problem}</p>
                                </div>
                                <div>
                                    <div style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,240,245,0.25)', marginBottom: '6px' }}>Solution</div>
                                    <p style={{ fontSize: '12px', color: 'rgba(240,240,245,0.45)', lineHeight: '1.6' }}>{project.solution}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
