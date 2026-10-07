'use client';
import EthosHeading from './EthosHeading';
import EthosButton from './EthosButton';
import { EthosSection } from './EthosSections';
export default function EthosCta() { return <EthosSection className="ethos-sand border-t border-[#132040]/10"><div className="grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]"><EthosHeading eyebrow="The Discovery Call" title="The first act of the work." lede="The discovery call is not a sales conversation. The coach listens, mirrors back what was heard, explains the structure, and you decide. The coach does not sell. The coach demonstrates." /><div className="flex lg:justify-end"><EthosButton href="/private-inquiry">Request a Discovery Call</EthosButton></div></div></EthosSection>; }
