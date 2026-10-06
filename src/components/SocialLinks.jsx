import { profile } from "../data/profile";
import { isPlaceholder } from "../utils/links";
import { GitHubIcon, LinkedInIcon } from "./Icons";

const socials = [
  { label: "GitHub", url: profile.github, Icon: GitHubIcon },
  { label: "LinkedIn", url: profile.linkedin, Icon: LinkedInIcon },
];

const circle =
  "flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink";

export default function SocialLinks({ className = "" }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ label, url, Icon }) => (
        <li key={label}>
          {isPlaceholder(url) ? (
            <span
              role="img"
              aria-label={`${label} (link not added yet)`}
              title={`${label} link coming soon`}
              className={`${circle} opacity-50`}
            >
              <Icon />
            </span>
          ) : (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} profile (opens in new tab)`}
              className={`${circle} transition-colors hover:border-accent hover:text-accent`}
            >
              <Icon />
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}