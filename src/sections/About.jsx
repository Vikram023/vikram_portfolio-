import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const SectionHeader = ({ label, title, subtitle }) => (
    <div style={{ marginBottom: '48px' }}>
        <div className="section-label" style={{ marginBottom: '12px' }}>{label}</div>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', letterSpacing: '-0.02em', color: '#f0f0f5', marginBottom: subtitle ? '12px' : 0 }}>{title}</h2>
        {subtitle && <p style={{ fontSize: '15px', color: 'rgba(240,240,245,0.5)', maxWidth: '520px', lineHeight: '1.7' }}>{subtitle}</p>}
    </div>
);

const About = () => {
    const cards = [
        {
            icon: <GraduationCap size={20} />,
            label: 'Education',
            title: portfolioData.about.education.institution,
            subtitle: portfolioData.about.education.degree,
            detail: `${portfolioData.about.education.duration} · CGPA ${portfolioData.about.education.cgpa}`,
            color: '#4f6ef7',
        },
        {
            icon: <Target size={20} />,
            label: 'Focus Areas',
            items: portfolioData.about.focus,
            color: '#22d3ee',
        },
        {
            icon: <BookOpen size={20} />,
            label: 'Coursework',
            items: portfolioData.about.education.coursework,
            color: '#a78bfa',
        },
    ];

    return (
        <section id="about" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
            <div className="divider" style={{ marginBottom: '80px' }} />

            <SectionHeader
                label="About"
                title="About Me"
                subtitle={portfolioData.about.bio}
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="card"
                        style={{ padding: '24px' }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                            <div style={{ color: card.color, opacity: 0.8 }}>{card.icon}</div>
                            <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,240,245,0.4)' }}>{card.label}</span>
                        </div>

                        {card.title ? (
                            <>
                                <div style={{ fontSize: '20px', fontWeight: '700', color: '#f0f0f5', marginBottom: '4px' }}>{card.title}</div>
                                <div style={{ fontSize: '13px', color: 'rgba(240,240,245,0.5)', marginBottom: '8px' }}>{card.subtitle}</div>
                                <div style={{ fontSize: '12px', fontFamily: 'JetBrains Mono, monospace', color: card.color, background: `${card.color}12`, padding: '4px 10px', borderRadius: '6px', display: 'inline-block' }}>{card.detail}</div>
                            </>
                        ) : (
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {card.items.map((item, j) => (
                                    <span key={j} style={{
                                        padding: '4px 10px', background: `${card.color}10`, border: `1px solid ${card.color}25`,
                                        borderRadius: '6px', fontSize: '12px', fontWeight: '500', color: card.color
                                    }}>{item}</span>
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default About;
