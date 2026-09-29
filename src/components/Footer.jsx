import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="wrap" style={{ padding: "32px 24px", color: "var(--slate)", fontSize: ".9rem" }}>
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
