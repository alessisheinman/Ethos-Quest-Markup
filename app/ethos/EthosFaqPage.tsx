'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import EthosPageHero from './EthosPageHero';
import EthosCta from './EthosCta';
import EthosFooter from './EthosFooter';
import { ethosFaqs } from './EthosContent';
import { EthosSection } from './EthosSections';
import { ethosEase } from './EthosHero';
export default function EthosFaqPage() {
 const [active, setActive] = useState<number | null>(0);
 return <><main id="main-content"><EthosPageHero label="FAQ" lines={['Common Questions']} lede="If you have a question not addressed here, reach out through the inquiry form. A coach answers every genuine question directly." /><EthosSection className="pt-0 md:pt-0 lg:pt-0"><div className="mx-auto max-w-[900px]">{ethosFaqs.map(([question, answer], i) => <div key={question} className="border-t border-[#132040]/12 last:border-b"><h2><button id={'ethos-question-' + i} aria-expanded={active === i} aria-controls={'ethos-answer-' + i} onClick={() => setActive(active === i ? null : i)} className="flex w-full items-start justify-between gap-8 bg-transparent py-6 text-left text-[#132040] transition-colors hover:text-[#9E1B34]"><span className="text-[21px] leading-[1.4] md:text-[24px]">{question}</span><motion.span animate={{ rotate: active === i ? 45 : 0 }} className="mt-1 shrink-0 text-[#9E1B34]"><Plus size={24} strokeWidth={1.4} /></motion.span></button></h2><AnimatePresence initial={false}>{active === i && <motion.div key={'answer-' + i} id={'ethos-answer-' + i} role="region" aria-labelledby={'ethos-question-' + i} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease: ethosEase }} className="overflow-hidden"><p className="max-w-[760px] pb-8 text-[17px] leading-[1.8] text-[#132040]/75">{answer}</p></motion.div>}</AnimatePresence></div>)}</div></EthosSection><EthosCta /></main><EthosFooter /></>;
}
