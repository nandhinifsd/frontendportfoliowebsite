import { profile } from "../data/profile";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-soft/60">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-center text-sm text-muted">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}