// True when a value is empty or still a "YOUR_..." placeholder.
export const isPlaceholder = (value) => !value || value.startsWith("YOUR_");

// Some live URLs were given without "https://". Without it, the browser
// treats them as relative links, so we add it at render time.
// The URLs in projects.js stay exactly as you wrote them.
export const withProtocol = (url) =>
  /^https?:\/\//i.test(url) ? url : `https://${url}`;