'use client';
import EthosPageHero from './EthosPageHero';
import { EthosClassification, EthosFoundations, EthosCapacity, EthosArc, EthosGapMap, EthosSequence, EthosDragon, EthosDistinctionsGrid, EthosProprietary } from './EthosMethodSections';
import EthosCta from './EthosCta';
import EthosFooter from './EthosFooter';
export default function EthosApproachPage() { return <><main id="main-content"><EthosPageHero label="The Methodology" lines={['Alignment,','Not Performance.']} lede="Extracted from thousands of hours of real work with real leaders, then organized into a form that can be taught. The roughness, the intuition, the tolerance for ambiguity: those are not gaps in the methodology. They are the methodology." photoSlot="methodHero" /><EthosClassification /><EthosFoundations /><EthosCapacity full /><EthosArc full /><EthosGapMap /><EthosSequence /><EthosDragon /><EthosDistinctionsGrid /><EthosProprietary /><EthosCta /></main><EthosFooter /></>; }
