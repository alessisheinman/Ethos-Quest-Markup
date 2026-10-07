'use client';
import EthosPageHero from './EthosPageHero';
import { EthosLens, EthosPatterns, EthosStructure, EthosChange, EthosArcs, EthosReadiness } from './EthosMethodSections';
import EthosCta from './EthosCta';
import EthosFooter from './EthosFooter';
export default function EthosLeadersPage() { return <><main id="main-content"><EthosPageHero label="For Leaders" lines={['The Single Point','of Highest Leverage']} lede="EthosQuest works exclusively with senior leaders. When a leader's thinking is clouded by unresolved patterns, the consequences cascade through every level of the business. When it clears, the business transforms, often without any operational change at all." photoSlot="ceoHero" /><EthosLens slot="ceoLens" /><EthosPatterns full /><EthosStructure /><EthosChange /><EthosArcs /><EthosReadiness /><EthosCta /></main><EthosFooter /></>; }
