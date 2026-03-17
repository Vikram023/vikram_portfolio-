import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
    const stats = [
        { value: `${portfolioData.about.stats.problemsSolved}`, label: 'LeetCode Problems', sub: 'Problem solving practice', color: '#4f6ef7' },
        { value: 'Elite', label: 'NPTEL IoT', sub: 'Top performance certification', color: '#22d3ee' },
        { value: 'Qualified', label: 'Binary Blitz', sub: 'Web Hackathon (Round 1)', color: '#a78bfa' },
        { value: `${portfolioData.projects.length}+`, label: 'Projects', sub: 'Full-stack builds', color: '#10b981' },
    ];

    return (
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px 60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="card"
                        style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}
                    >
                        <div style={{ width: '3px', height: '40px', background: stat.color, borderRadius: '3px', flexShrink: 0 }} />
                        <div>
                            <div style={{ fontSize: '24px', fontWeight: '800', color: '#f0f0f5', letterSpacing: '-0.02em', lineHeight: 1 }}>{stat.value}</div>
                            <div style={{ fontSize: '13px', fontWeight: '600', color: 'rgba(240,240,245,0.7)', marginTop: '4px' }}>{stat.label}</div>
                            <div style={{ fontSize: '11px', color: 'rgba(240,240,245,0.3)', marginTop: '2px' }}>{stat.sub}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;
