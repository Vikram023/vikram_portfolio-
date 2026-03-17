import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {name: 'Home', href:'#'},
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certificates', href: '#research' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
                background: scrolled ? 'rgba(5,5,8,0.92)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                transition: 'all 0.3s ease',
            }}
        >
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                {/* Logo */}
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                    <div style={{
                        width: '30px', height: '30px', borderRadius: '8px',
                        background: 'linear-gradient(135deg, #4f6ef7, #22d3ee)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '13px', fontWeight: '800', color: '#fff'
                    }}>{portfolioData.profile.initials}</div>
                    <span style={{ fontSize: '14px', fontWeight: '700', color: '#f0f0f5', letterSpacing: '-0.01em' }}>{portfolioData.profile.name}</span>
                </a>

                {/* Desktop Nav */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }} className="hidden-mobile">
                    {navLinks.map(link => (
                        <a key={link.name} href={link.href} style={{
                            padding: '6px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: '500',
                            color: 'rgba(240,240,245,0.6)', textDecoration: 'none',
                            transition: 'color 0.15s, background 0.15s',
                        }}
                            onMouseEnter={e => { e.target.style.color = '#f0f0f5'; e.target.style.background = 'rgba(255,255,255,0.05)'; }}
                            onMouseLeave={e => { e.target.style.color = 'rgba(240,240,245,0.6)'; e.target.style.background = 'transparent'; }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <a href="#contact" className="btn-primary" style={{ padding: '7px 16px', fontSize: '12px' }}>
                        Hire Me
                    </a>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
      `}</style>
        </nav>
    );
};

export default Navbar;
