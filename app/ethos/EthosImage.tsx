'use client';
import { withBase } from './EthosPath';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
export default function EthosImage({ src, alt = '', className = '', eager = false, ratio = 'aspect-[4/5]', tone = 'normal' }: { src: string; alt?: string; className?: string; eager?: boolean; ratio?: string; tone?: 'normal' | 'warm' }) {
 const ref = useRef<HTMLDivElement>(null); const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] }); const y = useTransform(scrollYProgress, [0,1], [-28,28]); const reduced = useReducedMotion();
 return <div ref={ref} className={'relative overflow-hidden ' + ratio + ' ' + className}><motion.img src={withBase(src)} alt={alt} loading={eager ? 'eager' : 'lazy'} className={'absolute -top-[28px] h-[calc(100%+56px)] w-full object-cover ' + (tone === 'warm' ? 'saturate-[0.9] sepia-[0.12]' : 'saturate-[0.92]')} style={{ y: reduced ? 0 : y }} /></div>;
}
