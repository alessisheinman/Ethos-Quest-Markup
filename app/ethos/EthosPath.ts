// Prefixes site-relative links and media with the build's basePath (next.config.ts). It is empty for the real
// deployment and set only for previews served from a subfolder, such as GitHub Pages.
const basePath = process.env.__NEXT_ROUTER_BASEPATH ?? '';
export const withBase = (path: string) => (basePath && path.startsWith('/') && !path.startsWith('//') && !path.startsWith(basePath + '/') ? basePath + path : path);
