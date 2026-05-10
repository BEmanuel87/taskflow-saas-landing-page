const FOOTER_LINKS = ["Privacy", "Terms", "Blog", "Status", "Contact"];

export default function Footer() {
  return (
    <footer className="border-t border-white/7">
      <div className="mx-auto flex max-w-290 flex-wrap items-center justify-between gap-4 px-6 py-10">
        <a href="#" className="font-syne text-lg font-extrabold grad-text">
          TaskFlow
        </a>
        <nav className="flex flex-wrap gap-6">
          {FOOTER_LINKS.map((l) => (
            <a
              key={l}
              href="#"
              className="text-[13px] text-muted hover:text-text transition-colors"
            >
              {l}
            </a>
          ))}
        </nav>
        <p className="text-[13px] text-muted">
          © {new Date().getFullYear()} TaskFlow, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
