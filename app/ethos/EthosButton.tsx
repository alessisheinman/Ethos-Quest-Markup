'use client';
import { withBase } from './EthosPath';
import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
export default function EthosButton({ children, href, secondary = false, light = false, className = '', type = 'button' }: { children: string; href?: string; secondary?: boolean; light?: boolean; className?: string; type?: 'button' | 'submit' }) {
 const [isHovered, setHovered] = useState(false);
 const tone = secondary
  ? (light ? 'border border-[#F7F4EE]/70 text-[#F7F4EE] hover:bg-[#F7F4EE]/10 ' : 'border border-[#132040]/45 text-[#132040] hover:border-[#132040] ')
  : 'bg-[#9E1B34] text-white hover:bg-[#7F1529] ';
 const classes = 'font-accent inline-flex w-auto max-w-full items-center justify-center gap-3 px-[24px] py-[15px] text-[12px] font-semibold uppercase tracking-[0.14em] transition-colors duration-500 sm:text-[13px] ' + tone + className;
 const content = <><span className="relative inline-block h-[22px] overflow-hidden leading-none sm:h-[24px]"><span className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ transform: isHovered ? 'translateY(-50%)' : 'translateY(0%)' }}>{[0,1].map(copy => <span key={copy} aria-hidden={copy === 1 ? true : undefined} className="flex h-[22px] items-center justify-center whitespace-nowrap leading-none sm:h-[24px]">{children}</span>)}</span></span><span className="relative h-[18px] w-[18px] shrink-0 overflow-hidden" aria-hidden="true"><ArrowRight size={18} strokeWidth={1.6} className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ opacity: isHovered ? 0 : 1, transform: isHovered ? 'translate(6px,-6px) scale(0.8)' : 'translate(0,0) scale(1)' }} /><ArrowUpRight size={18} strokeWidth={1.6} className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? 'translate(0,0) scale(1)' : 'translate(-6px,6px) scale(0.8)' }} /></span></>;
 const events = { onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), onFocus: () => setHovered(true), onBlur: () => setHovered(false) };
 return href ? <a href={withBase(href)} className={classes} {...events}>{content}</a> : <button type={type} className={classes} {...events}>{content}</button>;
}
