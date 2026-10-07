'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import EthosButton from './EthosButton';
import { ethosEase } from './EthosHero';

// Always-reachable inquiry button, bottom right. Appears once the visitor scrolls past the top of the page
// (so it never doubles up with the hero's own button) and stays off the inquiry page itself.
export default function EthosFloatingCta() {
 const path = usePathname().replace(/(.)\/$/, '$1'); // GitHub Pages serves pages with a trailing slash
 const { scrollY } = useScroll();
 const [shown, setShown] = useState(false);
 useMotionValueEvent(scrollY, 'change', value => setShown(value > 480));
 if (path === '/private-inquiry') return null;
 return <AnimatePresence>{shown && <motion.div key="floating-inquiry" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} transition={{ duration: 0.5, ease: ethosEase }} className="fixed bottom-5 right-5 z-30 md:bottom-8 md:right-8"><EthosButton href="/private-inquiry" className="shadow-[0_10px_30px_rgba(19,32,64,0.28)]">Begin a Private Inquiry</EthosButton></motion.div>}</AnimatePresence>;
}
