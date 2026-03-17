import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'sent', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const formData = new FormData();
            formData.append("access_key", "a6e68ea1-30cd-44ed-a5c3-48b11972db9f");
            formData.append("name", form.name);
            formData.append("email", form.email);
            formData.append("message", form.message);

            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await res.json();

            if (data.success) {
                setStatus('sent');
                setForm({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                console.error("Form error:", data);
                setStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus('error');
        }
    };

    const inputStyle = {
        width: '100%', padding: '10px 14px',
        background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '8px', color: '#f0f0f5', fontSize: '13px', outline: 'none',
        transition: 'border-color 0.2s', fontFamily: 'Inter, sans-serif',
        boxSizing: 'border-box',
    };

    return (
        <section id="contact" style={{ padding: '80px 24px', maxWidth: '1100px', margin: '0 auto' }}>
            <div className="divider" style={{ marginBottom: '80px' }} />
            <div style={{ marginBottom: '48px' }}>
                <div className="section-label" style={{ marginBottom: '12px' }}>Contact</div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: '800', letterSpacing: '-0.02em', color: '#f0f0f5' }}>
                    Let's <span className="gradient-text">Connect</span>
                </h2>
                <p style={{ fontSize: '15px', color: 'rgba(240,240,245,0.5)', marginTop: '12px', maxWidth: '480px', lineHeight: '1.7' }}>
                    Open to full-time roles, research collaborations, and interesting projects. Let's build something great.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {/* Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                        { icon: <Mail size={16} />, label: 'Email', value: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}` },
                        { icon: <Phone size={16} />, label: 'Phone', value: portfolioData.contact.phone, href: `tel:${portfolioData.contact.phone}` },
                        { icon: <MapPin size={16} />, label: 'Location', value: portfolioData.contact.location },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="card"
                            style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}
                        >
                            <div style={{ padding: '8px', background: 'rgba(79,110,247,0.08)', borderRadius: '8px', color: '#4f6ef7', flexShrink: 0 }}>{item.icon}</div>
                            <div>
                                <div style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(240,240,245,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>{item.label}</div>
                                {item.href ? (
                                    <a href={item.href} style={{ fontSize: '13px', color: '#f0f0f5', textDecoration: 'none', fontWeight: '500' }}>{item.value}</a>
                                ) : (
                                    <div style={{ fontSize: '13px', color: '#f0f0f5', fontWeight: '500' }}>{item.value}</div>
                                )}
                            </div>
                        </motion.div>
                    ))}

                    {/* Social */}
                    <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
                        {[
                            { icon: <Github size={18} />, href: portfolioData.contact.github, label: 'GitHub' },
                            { icon: <Linkedin size={18} />, href: portfolioData.contact.linkedin, label: 'LinkedIn' },
                        ].map((s, i) => (
                            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ flex: 1, justifyContent: 'center', padding: '10px' }}>
                                {s.icon} {s.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="card"
                    style={{ padding: '28px' }}
                >
                    {status === 'sent' ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '12px', padding: '40px 0' }}>
                            <CheckCircle size={40} style={{ color: '#10b981' }} />
                            <div style={{ fontSize: '16px', fontWeight: '700', color: '#f0f0f5' }}>Message Sent!</div>
                            <div style={{ fontSize: '13px', color: 'rgba(240,240,245,0.5)', textAlign: 'center' }}>Thank you for reaching out. I'll get back to you soon.</div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <div>
                                <label style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(240,240,245,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>Name</label>
                                <input
                                    value={form.name}
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                    placeholder="Your name"
                                    required
                                    style={inputStyle}
                                    onFocus={e => e.target.style.borderColor = 'rgba(79,110,247,0.5)'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                    disabled={status === 'loading'}
                                />
                            </div>
                            <div>
                                <label style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(240,240,245,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>Email</label>
                                <input
                                    type="email"
                                    value={form.email}
                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                    placeholder="your@email.com"
                                    required
                                    style={inputStyle}
                                    onFocus={e => e.target.style.borderColor = 'rgba(79,110,247,0.5)'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                    disabled={status === 'loading'}
                                />
                            </div>
                            <div>
                                <label style={{ fontSize: '11px', fontWeight: '600', color: 'rgba(240,240,245,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>Message</label>
                                <textarea
                                    value={form.message}
                                    onChange={e => setForm({ ...form, message: e.target.value })}
                                    placeholder="Tell me about your project or opportunity..."
                                    required
                                    rows={5}
                                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                                    onFocus={e => e.target.style.borderColor = 'rgba(79,110,247,0.5)'}
                                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                                    disabled={status === 'loading'}
                                />
                            </div>
                            
                            {status === 'error' && (
                                <div style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px' }}>Something went wrong. Please try again later.</div>
                            )}
                            
                            <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{ justifyContent: 'center', marginTop: '4px', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}>
                                {status === 'loading' ? 'Sending...' : <><Send size={14} /> Send Message</>}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
