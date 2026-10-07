'use client';
import EthosPageHero from './EthosPageHero';
import { EthosBassel, EthosBasselCareer, EthosOrigin, EthosValues, EthosStance } from './EthosMethodSections';
import EthosCta from './EthosCta';
import EthosFooter from './EthosFooter';
export default function EthosAboutPage() { return <><main id="main-content"><EthosPageHero label="About" lines={['Why EthosQuest','Exists']} lede="Leaders face their hardest decisions alone. They should not have to. EthosQuest exists to ensure that every leader has a thinking partner worthy of the moment." photoSlot="aboutHero" /><EthosBassel /><EthosBasselCareer /><EthosOrigin /><EthosValues /><EthosStance /><EthosCta /></main><EthosFooter /></>; }
