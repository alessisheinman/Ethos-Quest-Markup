'use client';
import { MotionConfig } from 'framer-motion';
import EthosNav from './EthosNav';
import EthosFloatingCta from './EthosFloatingCta';
export default function EthosRoot({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user"><div className="ethos-root selection:bg-[#9E1B34]/35"><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[70] focus:bg-[#F7F4EE] focus:p-4">Skip to content</a><EthosNav /><div className="pointer-events-none fixed inset-0 z-[60] opacity-[0.028] mix-blend-multiply" aria-hidden="true"><svg width="100%" height="100%"><filter id="ethos-grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#ethos-grain)" /></svg></div>{children}<EthosFloatingCta /></div></MotionConfig>;
}
