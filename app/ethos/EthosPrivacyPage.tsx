'use client';
import EthosPageHero from './EthosPageHero';
import EthosFooter from './EthosFooter';
import { EthosSection, ethosBody } from './EthosSections';
const sections = [
 ['Information We Collect', 'Placeholder: describe the information collected through private inquiries and use of this website.'],
 ['How We Use It', 'Placeholder: describe the purposes for which inquiry information and website data are used.'],
 ['Confidentiality', 'Placeholder: describe applicable confidentiality practices and any circumstances in which information may be shared.'],
 ['Data Retention', 'Placeholder: specify retention periods and how requests relating to personal information are handled.'],
 ['Contact', 'Placeholder: add the appropriate privacy contact details and the date this policy takes effect.'],
];
export default function EthosPrivacyPage() { return <><main id="main-content"><EthosPageHero label="Legal" lines={['Privacy Policy']} lede="How EthosQuest handles the information you share with us." /><EthosSection className="pt-0 md:pt-0 lg:pt-0"><div className="max-w-[800px]"><p className={ethosBody + ' mb-12 border-l-2 border-[#9E1B34] pl-6'}>Draft placeholder. The following sections are awaiting the final privacy policy.</p>{sections.map(([heading, body]) => <section key={heading} className="mb-10"><h2 className="font-accent text-[26px] leading-[1.2] md:text-[30px]">{heading}</h2><p className={ethosBody + ' mt-4'}>{body}</p></section>)}</div></EthosSection></main><EthosFooter /></>; }
