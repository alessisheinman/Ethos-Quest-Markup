'use client';
import { withBase } from './EthosPath';
import { ArrowUpRight } from 'lucide-react';
import EthosPageHero from './EthosPageHero';
import EthosHeading from './EthosHeading';
import EthosReveal from './EthosReveal';
import EthosButton from './EthosButton';
import EthosCta from './EthosCta';
import EthosFooter from './EthosFooter';
import { EthosSection, ethosBody } from './EthosSections';
import { ethosAudiences, audiencePath, type EthosAudience } from './EthosAudiences';

const line = 'border-[#132040]/12';
const small = 'text-[15px] leading-[1.75] text-[#132040]/70';

// One landing page per Who We Serve profile (ETHOS-9).
export default function EthosAudiencePage({ audience }: { audience: EthosAudience }) {
 const others = ethosAudiences.filter(a => a.slug !== audience.slug);
 // FAQ structured data so search and AI assistants can read the questions this page answers.
 const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: audience.questions.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) };
 return <><main id="main-content">
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
  <EthosPageHero label="Who We Serve" lines={audience.lines} lede={audience.lede} photoSlot={audience.slug} />

  <EthosSection className="ethos-sand">
   <EthosHeading eyebrow="The Pressures" title="What this seat carries." />
   <div className={'mt-12 grid border-t sm:grid-cols-2 ' + (audience.pressures.length > 3 ? 'lg:grid-cols-4' : 'lg:grid-cols-3') + ' ' + line}>{audience.pressures.map(([title, body], i) => <EthosReveal key={title} delay={i * 0.06} className={'border-b py-8 sm:pr-8 lg:border-b-0 ' + line}><h3 className="text-[21px] leading-[1.3] md:text-[23px]">{title}</h3><p className={small + ' mt-4'}>{body}</p></EthosReveal>)}</div>
  </EthosSection>

  <EthosSection>
   <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
    <div className="lg:sticky lg:top-32 lg:self-start"><EthosHeading eyebrow="The Work" title="How coaching helps." /><p className={ethosBody + ' mt-8 max-w-[440px]'}>There is no set program. Every coaching partnership starts with where you are and the questions advice alone cannot answer.</p><div className="mt-10 flex"><EthosButton href="/private-inquiry">Begin a Private Inquiry</EthosButton></div></div>
    <div className={'border-t ' + line}>{audience.work.map(([title, body], i) => <EthosReveal key={title} delay={i * 0.05}><div className={'grid gap-3 border-b py-7 md:grid-cols-[240px_1fr] md:gap-10 ' + line}><h3 className="text-[21px] leading-[1.3] md:text-[23px]">{title}</h3><p className={small}>{body}</p></div></EthosReveal>)}</div>
   </div>
  </EthosSection>

  <EthosSection className="ethos-sand">
   <EthosHeading eyebrow="Questions Leaders Ask" title="In your own words." />
   <div className={'mt-12 border-t ' + line}>{audience.questions.map(([q, a], i) => <EthosReveal key={q} delay={i * 0.05}><div className={'grid gap-4 border-b py-8 md:grid-cols-[1fr_1fr] md:gap-16 ' + line}><h3 className="font-accent text-[20px] leading-[1.45] md:text-[23px]">{q}</h3><p className={ethosBody}>{a}</p></div></EthosReveal>)}</div>
  </EthosSection>

  <EthosSection>
   <EthosHeading eyebrow="Who We Serve" title="Other leaders we work with." />
   <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{others.map(other => <a key={other.slug} href={withBase(audiencePath(other))} className={'group flex items-center justify-between gap-4 border p-5 text-[16px] transition-colors hover:border-[#9E1B34] hover:text-[#9E1B34] ' + line}>{other.name}<ArrowUpRight size={17} strokeWidth={1.4} className="shrink-0" /></a>)}</div>
  </EthosSection>

  <EthosCta />
 </main><EthosFooter /></>;
}
