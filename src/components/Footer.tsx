import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs">Built with Next.js, TypeScript &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
