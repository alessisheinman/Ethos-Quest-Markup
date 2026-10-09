'use client';
import EthosPageHero from './EthosPageHero';
import { EthosTenets, EthosCapacity } from './EthosMethodSections';
import EthosCta from './EthosCta';
import EthosFooter from './EthosFooter';
// ETHOS-5: distilled to three core tenets. The fuller methodology sections (foundations, arc, gap map, intervention,
// distinctions, proprietary) were taken off the page because they gave too much of the method away.
export default function EthosApproachPage() { return <><main id="main-content"><EthosPageHero label="The Methodology" lines={['Alignment,','Not Performance.']} lede="Extracted from thousands of hours of real work with real leaders, then organized into a form that can be taught. The roughness, the intuition, the tolerance for ambiguity: those are not gaps in the methodology. They are the methodology." photoSlot="methodHero" /><EthosTenets /><EthosCapacity full /><EthosCta /></main><EthosFooter /></>; }
