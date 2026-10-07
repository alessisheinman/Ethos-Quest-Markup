export const ethosMedia = {
 heroFilm: '/media/dawn.mp4',
 heroPoster: '/media/dawn-poster.jpg',
 notebook: '/media/ethos-notebook.png',
 atrium: '/media/atrium.jpg',
 facade: '/media/facade.jpg',
 windowFigure: '/media/window-figure.jpg',
 conversation: '/media/conversation.jpg',
 windowsOffice: '/media/windows-office.jpg',
 readingRoom: '/media/reading-room.jpg',
 study: '/media/study.jpg',
 tower: '/media/tower.jpg',
};

// Financial District hero candidates for Samuel to choose between (ETHOS-3).
// The hero shows arrows while there is more than one; trim to the pick to remove them.
// `focus` is an optional CSS object-position; the hero anchors to the top when it is omitted.
// `original` restores the first framing (centered, running under the banner) for side-by-side comparison.
type EthosHeroOption = { label: string; film: string; poster: string; focus?: string; original?: boolean };
const ethosHeroShots: EthosHeroOption[] = [
 { label: 'Golden hour', film: '/media/hero/fidi-golden-hour.mp4', poster: '/media/hero/fidi-golden-hour-poster.jpg' },
 { label: 'Among the towers', film: '/media/hero/fidi-towers.mp4', poster: '/media/hero/fidi-towers-poster.jpg' },
 { label: 'Night', film: '/media/hero/fidi-night.mp4', poster: '/media/hero/fidi-night-poster.jpg' },
 { label: 'From the harbor', film: '/media/hero/fidi-harbor.mp4', poster: '/media/hero/fidi-harbor-poster.jpg', focus: 'center 55%' },
 { label: 'Downtown towers', film: '/media/hero/fidi-towers-daylight.mp4', poster: '/media/hero/fidi-towers-daylight-poster.jpg' },
 { label: 'Blue hour from above', film: '/media/hero/fidi-blue-hour.mp4', poster: '/media/hero/fidi-blue-hour-poster.jpg', focus: 'center 75%' },
 { label: 'Brooklyn Bridge at night', film: '/media/hero/fidi-bridge-night.mp4', poster: '/media/hero/fidi-bridge-night-poster.jpg' },
 { label: 'One World Trade', film: '/media/hero/fidi-one-wtc.mp4', poster: '/media/hero/fidi-one-wtc-poster.jpg', focus: 'center 35%' },
 { label: 'Overcast skyline', film: '/media/hero/fidi-overcast.mp4', poster: '/media/hero/fidi-overcast-poster.jpg', focus: 'center 55%' },
 { label: 'Summer harbor', film: '/media/hero/fidi-summer-harbor.mp4', poster: '/media/hero/fidi-summer-harbor-poster.jpg', focus: 'center 35%' },
];
// Options 1-10: refocused framing. Options 11-20: the same shots in the original framing.
export const ethosHeroOptions: EthosHeroOption[] = [
 ...ethosHeroShots,
 ...ethosHeroShots.map(shot => ({ ...shot, label: shot.label + ' (original framing)', focus: undefined, original: true })),
];
