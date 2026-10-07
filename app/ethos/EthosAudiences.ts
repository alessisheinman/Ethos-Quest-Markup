// Who We Serve profiles (ETHOS-9). Each profile is a card on the home page and a landing page at /who-we-serve/<slug>.
// Draft copy for Alexia to rewrite. Each profile's hero photo options live in EthosPhotoOptions.ts under its slug.
export type EthosAudience = {
 slug: 'private-equity-ceos' | 'fund-managers' | 'family-office-leaders' | 'founders-scaling' | 'family-business-ceos' | 'ceos-facing-an-exit';
 name: string;
 card: string;
 lines: [string, string];
 lede: string;
 pressures: [string, string][];
 work: [string, string][];
 questions: [string, string][];
};

export const ethosAudiences: EthosAudience[] = [
 {
  slug: 'private-equity-ceos',
  name: 'Private Equity CEOs',
  card: 'A finite hold period, an explicit value-creation plan, and a board that measures every quarter against it.',
  lines: ['Private Equity CEOs', 'Leading Against the Clock'],
  lede: 'The hold period is finite, the plan is explicit, and every quarter is read against it. EthosQuest gives private equity-backed CEOs a place to think clearly about the decisions the plan does not settle.',
  pressures: [
   ['A clock that never stops', 'Three to five years to deliver a value-creation plan you may not have written. Every quarter is measured against it, and drift is noticed quickly.'],
   ['Two sets of expectations', 'The sponsor wants pace and visibility. The organization needs steadiness and a reason to follow. Holding both without splitting yourself between them is the job.'],
   ['Decisions about people', 'Underperformance has to be addressed sooner than feels comfortable, often with people who built the business long before the deal.'],
   ['Your own next chapter', 'The exit is on the calendar from day one. What it means for you, and what comes after, rarely gets discussed.'],
  ],
  work: [
   ['Clarity on priorities', 'Separating what the plan requires from what the noise demands, so attention goes where value is actually created.'],
   ['Steadiness under scrutiny', 'Room to examine the patterns that surface under pressure before they show up in the board pack.'],
   ['Your own position with the board', 'Preparing for the conversations with the sponsor and the deal team that matter most, from a clear sense of what you think.'],
  ],
  questions: [
   ['I’m a portfolio company CEO two years into a five-year hold and the plan is slipping. Would coaching help?', 'It can. The work starts with what is actually driving the slippage, including what may be getting avoided, then turns to the decisions in front of you. The aim is clearer judgment, not a new set of slides.'],
   ['A private equity firm has just appointed me to run a business I didn’t build. Where would we start?', 'With an honest baseline: what you are inheriting, what the plan asks of you, and what you bring to it. From there, the work follows the decisions you face as they arrive.'],
  ],
 },
 {
  slug: 'fund-managers',
  name: 'Fund Managers',
  card: 'Responsible for other people’s capital, judged on every call, and rarely allowed to show doubt.',
  lines: ['Fund Managers', 'Judgment Under Scrutiny'],
  lede: 'You allocate capital on behalf of others and are measured on every decision. EthosQuest gives fund managers a confidential space to examine the judgment behind the decisions, not just the outcomes.',
  pressures: [
   ['Conviction on demand', 'Investors and teams expect certainty. Doubt is part of good judgment, but there is rarely anywhere to voice it.'],
   ['Results that arrive late', 'Decisions made today are judged years from now, and the feedback in between is noisy.'],
   ['A team of strong opinions', 'Partners and analysts are talented and independent. Building a culture where they challenge each other well is its own work.'],
   ['The next fund', 'Fundraising, performance, and reputation run together, and the pressure follows you home.'],
  ],
  work: [
   ['Seeing your own patterns', 'How you respond to losses, to wins, and to people who disagree with you shapes the portfolio more than any model.'],
   ['Thinking out loud, safely', 'A thinking partner outside the firm and outside the market, with no position to protect.'],
   ['The long game', 'Decisions about the firm, the team, and your own role over a career, not only the next allocation.'],
  ],
  questions: [
   ['I run a fund and I keep second-guessing a large position I still believe in. Is that something coaching can help with?', 'Coaching does not give investment advice. What it can do is help you separate conviction from attachment, and see what is driving the second-guessing, so the decision is genuinely yours.'],
   ['I lead a team of senior investors who rarely agree. Would coaching help me lead them?', 'Yes. The work looks at your own part in the dynamic, and at how you hold disagreement without either suppressing it or letting it stall decisions.'],
  ],
 },
 {
  slug: 'family-office-leaders',
  name: 'Family Office Leaders',
  card: 'Stewarding wealth across generations, where every investment decision is also a family decision.',
  lines: ['Family Office Leaders', 'Wealth, Family, and Legacy'],
  lede: 'Leading a family office means balancing investment discipline with the expectations, relationships, and values of the family it serves. EthosQuest offers a private space to think through decisions where business and family cannot be separated.',
  pressures: [
   ['Every decision is personal', 'Investment choices touch inheritances, relationships, and identity. Few decisions are only financial.'],
   ['More than one generation', 'The founder’s priorities and the next generation’s ambitions rarely line up neatly.'],
   ['Governance without a playbook', 'Who decides, how, and with whose agreement often stays unwritten until it is tested.'],
   ['Discretion', 'Many of the hardest questions cannot be discussed with the family, the staff, or peers.'],
  ],
  work: [
   ['Clarity on your role', 'Whether you are a family member or a professional leader, understanding whose interests you serve and where your own judgment fits.'],
   ['Preparing the transitions', 'Succession, the next generation’s entry, and the conversations that have been postponed for years.'],
   ['Decisions aligned with values', 'Making sure the choices the office makes reflect what the family actually stands for.'],
  ],
  questions: [
   ['I’m 60 and run my family’s office, and my children don’t want to take it over. Would coaching help?', 'Yes. The work holds the practical questions about succession alongside the personal ones: what you want your role to become, what you want to hand on, and how to talk about it with your family.'],
   ['I’m a non-family executive leading a family office. How do I handle pressure from different family members?', 'By getting clear on your mandate and your own boundaries first. Coaching gives you a confidential place to work through the dynamics before they reach the boardroom.'],
  ],
 },
 {
  slug: 'founders-scaling',
  name: 'Founders Scaling',
  card: 'Scaling from twenty million to three hundred million, with too many initiatives and too little finished.',
  lines: ['Founders Scaling', 'Growth Without Losing Yourself'],
  lede: 'Scaling from twenty million to three hundred million. Too many initiatives, resources spread thin, always busy, always chasing, nothing finished. The work is about focus, finishing, and building the capacity to slow down without disappearing.',
  pressures: [
   ['Everything at once', 'Too many initiatives, resources spread thin, always busy, and little that actually gets finished.'],
   ['Outgrowing your own role', 'What made the company work at twenty million is not what it needs at three hundred. That includes you.'],
   ['Letting go', 'Handing over decisions you have always made, and trusting people to make them differently.'],
  ],
  work: [
   ['Focus and finishing', 'Choosing fewer things and seeing them through, starting with your own calendar.'],
   ['The capacity to slow down', 'Learning to pause without feeling that the company will stall without you.'],
   ['The CEO the next stage needs', 'Seeing which of your strengths still serve the company, and which now get in its way.'],
  ],
  questions: [
   ['My company has tripled in two years and I’m busier than ever but less effective. Would coaching help?', 'Very often, yes. The work looks at where your attention is actually going and why, then helps you build the focus the next stage requires.'],
   ['I’m a founder and my board is talking about bringing in an experienced CEO. How should I think about it?', 'Start with what you want, separately from what you fear. Coaching gives you room to look at the decision honestly before it is made for you.'],
  ],
 },
 {
  slug: 'family-business-ceos',
  name: 'Family Business CEOs',
  card: 'Leading the institution a parent built, with decisions shaped by an approval no one asked for out loud.',
  lines: ['Family Business CEOs', 'Whose Life Are You Living?'],
  lede: 'Leading the institution a parent built, with decisions quietly shaped by an approval that was never asked for out loud. The work is about seeing whose life you are actually living, and choosing it.',
  pressures: [
   ['An inherited standard', 'The business carries a parent’s expectations long after the handover, often without anyone saying so.'],
   ['Family at the table', 'Siblings, spouses, and shareholders who are also relatives make every business decision a family one.'],
   ['Succession in both directions', 'Taking over from the generation before while preparing for the one after.'],
  ],
  work: [
   ['Seeing the patterns', 'Recognizing which choices are yours and which are inherited.'],
   ['Choosing your own direction', 'Leading the business toward what you believe in, not only what was expected.'],
   ['The difficult conversations', 'Preparing for the family discussions that have been postponed for years.'],
  ],
  questions: [
   ['I took over my father’s company and still feel I’m running it for him. Is that something coaching addresses?', 'Yes. It is one of the most common starting points. The work helps you see where his expectations still shape your decisions, so you can choose which ones to keep.'],
   ['My siblings and I disagree about the future of the family business. Can coaching help?', 'Coaching works with you, not with the family as a group. It can help you get clear on your own position and how to hold it in those conversations.'],
  ],
 },
 {
  slug: 'ceos-facing-an-exit',
  name: 'CEOs Facing an Exit',
  card: 'Selling something you built is not a transaction. Part of you goes with it.',
  lines: ['CEOs Facing an Exit', 'What Comes After'],
  lede: 'Selling something you built is not a transaction. Part of you goes with it. The work holds the identity transition alongside the practical decisions, and stays present for what comes after.',
  pressures: [
   ['An identity tied to the company', 'For years, the business has answered the question of who you are.'],
   ['Decisions with no second chance', 'Timing, buyers, terms, and your team’s future, all decided once.'],
   ['The day after', 'The calendar empties, the phone goes quiet, and the next chapter has no plan.'],
  ],
  work: [
   ['Clarity before signing', 'Knowing what you actually want from the sale, beyond the number.'],
   ['Holding both sides', 'Making the practical decisions while giving the personal transition its due.'],
   ['Building what comes next', 'Working out what gives your time meaning once the company no longer does.'],
  ],
  questions: [
   ['I’m a 55-year-old leader looking to sell my business. Would coaching help?', 'Yes. The work holds the practical decisions about the sale alongside the personal ones, so you sign knowing what you want and stay steady through what comes after.'],
   ['I sold my company six months ago and feel lost. Is that normal?', 'It is very common, and rarely talked about. Coaching gives you space to understand what you have lost and to decide what you want to build next.'],
  ],
 },
];

export const audiencePath = (audience: EthosAudience) => '/who-we-serve/' + audience.slug;
export function audienceMetadata(audience: EthosAudience) {
 const title = audience.name + ' | EthosQuest';
 return { title, description: audience.lede, openGraph: { title, description: audience.lede } };
}
