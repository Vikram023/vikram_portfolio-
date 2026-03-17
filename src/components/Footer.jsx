import React from 'react';
import { Github, Linkedin, Code, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    const links = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Research', href: '#research' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '40px 24px', maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                {/* Brand */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                        width: '28px', height: '28px', borderRadius: '7px',
                        background: 'linear-gradient(135deg, #4f6ef7, #22d3ee)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '12px', fontWeight: '800', color: '#fff'
                    }}>{portfolioData.profile.initials}</div>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(240,240,245,0.6)' }}>{portfolioData.profile.name}</span>
                </div>

                {/* Nav links */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {links.map(link => (
                        <a key={link.name} href={link.href} style={{
                            padding: '5px 12px', fontSize: '12px', color: 'rgba(240,240,245,0.35)',
                            textDecoration: 'none', borderRadius: '6px', transition: 'color 0.15s',
                            fontWeight: '500'
                        }}
                            onMouseEnter={e => e.target.style.color = 'rgba(240,240,245,0.7)'}
                            onMouseLeave={e => e.target.style.color = 'rgba(240,240,245,0.35)'}
                        >{link.name}</a>
                    ))}
                </div>

                {/* Socials */}
                <div style={{ display: 'flex', gap: '12px' }}>
                    {[
                        { icon: <Github size={16} />, href: portfolioData.contact.github },
                        { icon: <Linkedin size={16} />, href: portfolioData.contact.linkedin },
                        { icon: <Code size={16} />, href: portfolioData.contact.leetcode },
                    ].map((s, i) => (
                        <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                            style={{ color: 'rgba(240,240,245,0.3)', transition: 'color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#f0f0f5'}
                            onMouseLeave={e => e.currentTarget.style.color = 'rgba(240,240,245,0.3)'}
                        >{s.icon}</a>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.04)', display: 'flex', justifyContent: 'center' }}>
                <p style={{ fontSize: '12px', color: 'rgba(240,240,245,0.2)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    © {new Date().getFullYear()} {portfolioData.profile.name} · Built with <Heart size={11} style={{ color: '#f472b6' }} /> React & Vite
                </p>
            </div>
        </footer>
    );
};

export default Footer;
