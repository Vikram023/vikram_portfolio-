import React from 'react';
import { motion } from 'framer-motion';

const BentoGrid = ({ children, className }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 ${className}`}>
            {children}
        </div>
    );
};

export const BentoItem = ({ children, className, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`bento-card rounded-3xl p-6 flex flex-col justify-between group overflow-hidden relative ${className}`}
        >
            <div className="absolute inset-0 bg-liner-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full">{children}</div>
        </motion.div>
    );
};

export default BentoGrid;
