'use client';
import { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { ethosEase } from './EthosHero';
export default function EthosReveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
 const ref = useRef<HTMLDivElement>(null); const seen = useInView(ref, { once: true, margin: '-10% 0px' }); const reduced = useReducedMotion();
 return <motion.div ref={ref} initial={false} animate={seen || reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={{ duration: reduced ? 0 : 0.9, delay, ease: ethosEase }} className={className}>{children}</motion.div>;
}
