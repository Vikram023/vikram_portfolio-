import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const SkillCategory = ({ title, skills, color, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="card"
            style={{ padding: '24px' }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />
                <span style={{ fontSize: '13px', fontWeight: '700', color: '#f0f0f5' }}>{title}</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills.map((skill, i) => (
                    <span key={i} style={{
                        padding: '5px 12px',
                        background: `${color}10`,
                        border: `1px solid ${color}25`,
                        borderRadius: '6px',
                        fontSize: '12px',
                        fontWeight: '500',
                        color: 'rgba(240,240,245,0.7)',
                    }}>{skill}</span>
                ))}
            </div>
        </motion.div>
    );
};


const Skills = () => {
    const categories = [
        { title: 'Programming', skills: portfolioData.skills.programming, color: '#4f6ef7' },
        { title: 'Frontend', skills: portfolioData.skills.machineLearning, color: '#22d3ee' },
        { title: 'Backend & APIS', skills: portfolioData.skills.deepLearning, color: '#a78bfa' },
        { title: 'Database', skills: portfolioData.skills.nlpGenAi, color: '#f472b6' },
        { title: 'Frameworks & Tools', skills: portfolioData.skills.frameworksTools, color: '#34d399' },
        { title: 'Core CS', skills: portfolioData.skills.coreCs, color: '#fb923c' },
    ];

    return (
        <section id="skills" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
            <div className="divider" style={{ marginBottom: '80px' }} />
            <div style={{ marginBottom: '48px' }}>
                <div className="section-label" style={{ marginBottom: '12px' }}>Technical Arsenal</div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', letterSpacing: '-0.02em', color: '#f0f0f5' }}>
                    Skills & <span className="gradient-text">Expertise</span>
                </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                {categories.map((cat, i) => (
                    <SkillCategory key={i} {...cat} delay={i * 0.08} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
