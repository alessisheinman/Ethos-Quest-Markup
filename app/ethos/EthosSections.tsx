'use client';
import EthosReveal from './EthosReveal';
export const ethosSpace = 'px-6 py-20 md:px-[48px] md:py-24 lg:py-28 min-[1440px]:px-[64px]';
export const ethosBody = 'text-[17px] leading-[1.8] text-[#132040]/75';
export function EthosSection({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) { return <section id={id} className={ethosSpace + ' ' + className}><EthosReveal className="mx-auto max-w-[1280px]">{children}</EthosReveal></section>; }
