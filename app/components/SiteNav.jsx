"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import BookDemoPill from "./BookDemoPill";
import Aurora from "./Aurora";
import Wordmark from "./Wordmark";

const LINKS = [
  { label: "About us", href: "/about" },
  { label: "Our offerings", href: "/offerings" },
  { label: "Why we win", href: "/why-we-win" },
  { label: "Contact us", href: "/contact" },
];

export default function SiteNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hl, setHl] = useState({ left: 0, width: 0, ready: false });

  const listRef = useRef(null);
  const linkRefs = useRef([]);
  const hoverRef = useRef(null);

  const activeHref =
    LINKS.find((l) => pathname === l.href || pathname.startsWith(`${l.href}/`))
      ?.href ?? "";

  const activeIdx = Math.max(
    0,
    LINKS.findIndex((l) => l.href === activeHref)
  );

  const moveTo = (i) => {
    const el = linkRefs.current[i];
    const list = listRef.current;
    if (!el || !list) return;
    const r = el.getBoundingClientRect();
    const lr = list.getBoundingClientRect();
    setHl({ left: r.left - lr.left, width: r.width, ready: true });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = hoverRef.current ?? (activeHref ? activeIdx : -1);
    if (target < 0) {
      setHl((h) => ({ ...h, ready: false }));
      return;
    }
    const id = requestAnimationFrame(() => moveTo(target));
    return () => cancelAnimationFrame(id);
  }, [activeIdx, activeHref, scrolled]);

  useEffect(() => {
    const onResize = () => {
      const target = hoverRef.current ?? (activeHref ? activeIdx : -1);
      if (target >= 0) moveTo(target);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIdx, activeHref]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";
  const navSolid = scrolled || !isHome;

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50 flex justify-center transition-[padding] duration-500"
        style={{ padding: scrolled ? "0.65rem 1rem" : "1.1rem 1rem" }}
      >
        <div
          className="flex w-full items-center justify-between gap-4 rounded-full px-3 py-2 transition-[max-width,background-color,box-shadow,border-color] duration-500 ease-out"
          style={{
            maxWidth: scrolled ? "60rem" : "84rem",
            backgroundColor: navSolid
              ? "rgba(255,255,255,0.72)"
              : "transparent",
            backdropFilter: navSolid ? "blur(16px) saturate(1.4)" : "none",
            WebkitBackdropFilter: navSolid
              ? "blur(16px) saturate(1.4)"
              : "none",
            border: navSolid
              ? "1px solid rgba(0,0,0,0.07)"
              : "1px solid transparent",
            boxShadow: navSolid
              ? "0 10px 40px -22px rgba(0,0,0,0.35)"
              : "none",
          }}
        >
          <Link
            href="/"
            aria-label="Prime Meridian Systems - home"
            className="shrink-0 pl-2"
          >
            <Wordmark className="h-10 w-auto" />
          </Link>

          <div
            ref={listRef}
            onMouseLeave={() => {
              hoverRef.current = null;
              if (activeHref) moveTo(activeIdx);
            }}
            className="relative hidden items-center lg:flex"
          >
            <span
              aria-hidden="true"
              className="absolute top-1/2 z-0 h-9 -translate-y-1/2 rounded-full bg-black/6 transition-all duration-300 ease-out"
              style={{
                left: hl.left,
                width: hl.width,
                opacity: hl.ready && activeHref ? 1 : 0,
              }}
            />
            {LINKS.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                ref={(el) => {
                  linkRefs.current[i] = el;
                }}
                onMouseEnter={() => {
                  hoverRef.current = i;
                  moveTo(i);
                }}
                className="relative z-10 rounded-full px-4 py-2 text-[0.93rem] transition-colors duration-200"
                style={{
                  color:
                    activeHref === l.href ? "var(--ink)" : "var(--muted)",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden shrink-0 items-center md:flex">
            <BookDemoPill variant="primary" className="text-[0.88rem]!" />
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/5 md:hidden"
            aria-label="Toggle menu"
            title="Toggle menu"
            aria-expanded={open}
          >
            <div className="flex flex-col items-center gap-[5px]">
              <span
                className="h-[2px] w-5 rounded bg-ink transition-all duration-300"
                style={{
                  transform: open ? "translateY(3.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="h-[2px] w-5 rounded bg-ink transition-all duration-300"
                style={{
                  transform: open
                    ? "translateY(-3.5px) rotate(-45deg)"
                    : "none",
                }}
              />
            </div>
          </button>
        </div>
      </header>

      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <div
          onClick={() => setOpen(false)}
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            opacity: open ? 1 : 0,
            background: "rgba(244,244,242,0.9)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        />
        <div
          className="pointer-events-none absolute -right-1/3 -top-1/4 h-[100vmin] w-[100vmin] transition-opacity duration-700"
          style={{ opacity: open ? 0.8 : 0 }}
        >
          <Aurora />
        </div>

        <nav className="relative flex h-full flex-col justify-center gap-1 px-7">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="display py-2 text-5xl text-ink transition-all duration-500"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(20px)",
                transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
              }}
            >
              {l.label}
            </Link>
          ))}

          <div
            className="mt-10 flex flex-col gap-3 transition-all duration-500"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transitionDelay: open ? `${120 + LINKS.length * 60}ms` : "0ms",
            }}
          >
            <BookDemoPill
              variant="primary"
              className="w-fit"
              onClick={() => setOpen(false)}
            />
          </div>
        </nav>
      </div>
    </>
  );
}
