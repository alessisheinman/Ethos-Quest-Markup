import EthosAudiencePage from '../../ethos/EthosAudiencePage';
import { ethosAudiences, audienceMetadata } from '../../ethos/EthosAudiences';
const audience = ethosAudiences.find(a => a.slug === 'leaders-facing-an-exit')!;
export const metadata = audienceMetadata(audience);
export default function Page() { return <EthosAudiencePage audience={audience} />; }
