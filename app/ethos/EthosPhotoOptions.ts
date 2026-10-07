// Photo candidates for Samuel to choose between, three per slot. The slot shows arrows while it has more than one;
// trim a slot to its pick to remove them. Sources are listed in MEDIA-CREDITS.md.
export type EthosPhoto = { label: string; src: string; alt: string };

const o = (label: string, file: string, alt: string): EthosPhoto => ({ label, src: '/media/options/' + file + '.jpg', alt });

export const ethosPhotoOptions = {
 // Home: The Lens (portrait). "Are you living the life you think you are living?"
 lens: [
  o('Reflection', 'lens-reflection', 'A man in a suit reflected in an office window'),
  o('Converging lines', 'lens-oculus', 'The white ribs of the Oculus converging overhead'),
  o('Standing still', 'lens-standing-still', 'A woman standing still while a crowd moves past her'),
 ],
 // For Leaders page: The Lens, different photos from the home page.
 ceoLens: [
  o('Skyline at night', 'ceo-lens-nyc-night', 'A silhouette in a dark room overlooking the New York skyline at night'),
  o('Wall Street', 'ceo-lens-wall-street', 'A man in a suit on Wall Street beside the Stock Exchange flags'),
  o('Yellow cab', 'ceo-lens-taxi', 'A man in a suit stepping into a New York yellow cab'),
 ],
 // About page hero: a thinking partner worthy of the moment.
 aboutHero: [
  o('On a Manhattan street', 'about-hero-manhattan-street', 'Two professionals reviewing a document on a Manhattan street'),
  o('Crossing downtown', 'about-hero-crossing', 'A man and a woman in suits crossing a downtown New York street'),
  o('Walking and talking', 'about-hero-walking-talking', 'Two professionals in conversation walking through Manhattan'),
 ],
 // Who We Serve landing page heroes, keyed by profile slug (see EthosAudiences.ts).
 'private-equity-ceos': [
  o('Wall Street', 'pe-wall-street', 'Two professionals talking outside the New York Stock Exchange'),
  o('Hudson Yards', 'pe-hudson-yards', 'The glass towers of Hudson Yards in Manhattan'),
  o('The tower at night', 'pe-tower-night', 'A Midtown office tower with its windows lit at night'),
 ],
 'fund-managers': [
  o('The screen', 'fund-chart-screen', 'A man standing before a large chart display in a dark room'),
  o('The desk', 'fund-trading-desk', 'Two men discussing a position at a trading desk'),
  o('Wall Street', 'fund-wall-street', 'The Wall Street street sign in black and white'),
 ],
 'family-office-leaders': [
  o('Upper East Side', 'office-upper-east-side', 'An elegant limestone building on the Upper East Side'),
  o('Central Park West', 'office-san-remo', 'The San Remo towers above Central Park in autumn'),
  o('The townhouse', 'office-townhouse', 'A classic Manhattan townhouse facade'),
 ],
 'founders-scaling': [
  o('By the Manhattan Bridge', 'founders-manhattan-bridge', 'A young founder working on a laptop with the Manhattan Bridge behind'),
  o('On the Brooklyn Bridge', 'founders-brooklyn-bridge', 'A founder sitting on the Brooklyn Bridge with downtown towers behind'),
  o('Empire State view', 'founders-empire-window', 'A founder sitting at a window facing the Empire State Building'),
 ],
 'family-business-ceos': [
  o('The institution', 'family-katzs', 'A long-established family delicatessen on the Lower East Side'),
  o('The old sign', 'family-cafeteria', 'The faded sign of an old red-brick New York cafeteria'),
  o('The corner shop', 'family-corner-deli', 'A corner deli beneath fire escapes on a New York street'),
 ],
 'ceos-facing-an-exit': [
  o('The commute, one last time', 'exit-subway', 'A man with a briefcase heading down into a New York subway station'),
  o('Sunset downtown', 'exit-sunset', 'The sun setting behind the Lower Manhattan skyline'),
  o('The old pier', 'exit-pier-dusk', 'Old pier posts in the water with the Manhattan skyline at dusk'),
 ],
 // Methodology page hero: unmistakably New York.
 methodHero: [
  o('One World Trade at sunset', 'method-hero-one-wtc-window', 'A silhouette at a window facing One World Trade Center at sunset'),
  o('Empire State at dusk', 'method-hero-empire-dusk', 'The Empire State Building lit at dusk above Midtown Manhattan'),
  o('Through the window', 'method-hero-empire-window', 'Midtown Manhattan and the Empire State Building framed by tall windows'),
 ],
 // Home: Who We Serve (background).
 who: [
  o('Boardroom, dark', 'who-boardroom-dark', ''),
  o('Boardroom, bright', 'who-boardroom-bright', ''),
  o('Signing', 'who-signing', ''),
 ],
 // For Leaders page hero: the view from the top.
 ceoHero: [
  o('Window over the city', 'ceo-hero-nyc-window', 'A person at a tall window looking down over New York City'),
  o('Empire State', 'ceo-hero-empire-state', 'A man in a suit with the Empire State Building behind him'),
  o('High above', 'ceo-hero-high-above', 'A woman silhouetted at a window high above New York'),
 ],
 // Home: The Core Capacity (dark background).
 capacity: [
  o('Conversation', 'capacity-conversation', ''),
  o('Storm over the skyline', 'capacity-storm', ''),
  o('One lit window', 'capacity-lit-window', ''),
 ],
 // Methodology page: The Core Capacity, different photos from the home page.
 capacityMethod: [
  o('Conversation', 'capacity-method-conversation', ''),
  o('Storm over Manhattan', 'capacity-method-storm', ''),
  o('Lit windows', 'capacity-method-lit-windows', ''),
 ],
 // Home: The Methodology panel.
 panelMethod: [
  o('Stock Exchange columns', 'panel-method-nyse', ''),
  o('Stock Exchange entrance', 'panel-method-nyse-entrance', ''),
  o('Writing', 'panel-method-writing', ''),
 ],
 // Home: Private Inquiry panel.
 panelInquiry: [
  o('Private door', 'panel-inquiry-door', ''),
  o('Coffee for two', 'panel-inquiry-coffee', ''),
  o('Phone face down', 'panel-inquiry-phone', ''),
 ],
};
export type EthosPhotoSlot = keyof typeof ethosPhotoOptions;
