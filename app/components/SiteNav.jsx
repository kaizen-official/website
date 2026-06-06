"use client";

import { useEffect, useRef, useState } from "react";
import Pill from "./Pill";
import Aurora from "./Aurora";
import Wordmark from "./Wordmark";

const LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Products", href: "#products" },
  { label: "Why we win", href: "#approach" },
  { label: "Market", href: "#market" },
  { label: "Contact", href: "#demo" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(LINKS[0].href);
  const [hl, setHl] = useState({ left: 0, width: 0, ready: false });

  const listRef = useRef(null);
  const linkRefs = useRef([]);
  const hoverRef = useRef(null);

  const activeIdx = Math.max(
    0,
    LINKS.findIndex((l) => l.href === active)
  );

  // move the sliding highlight to a given link index
  const moveTo = (i) => {
    const el = linkRefs.current[i];
    const list = listRef.current;
    if (!el || !list) return;
    const r = el.getBoundingClientRect();
    const lr = list.getBoundingClientRect();
    setHl({ left: r.left - lr.left, width: r.width, ready: true });
  };

  // scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // scroll-spy → active section
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive("#" + visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.6] }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // keep highlight aligned to active link (when not hovering) + on resize/condense
  useEffect(() => {
    const target = hoverRef.current ?? activeIdx;
    const id = requestAnimationFrame(() => moveTo(target));
    return () => cancelAnimationFrame(id);
  }, [activeIdx, scrolled]);

  useEffect(() => {
    const onResize = () => moveTo(hoverRef.current ?? activeIdx);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [activeIdx]);

  // lock scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
            backgroundColor: scrolled ? "rgba(255,255,255,0.72)" : "transparent",
            backdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
            WebkitBackdropFilter: scrolled ? "blur(16px) saturate(1.4)" : "none",
            border: scrolled
              ? "1px solid rgba(0,0,0,0.07)"
              : "1px solid transparent",
            boxShadow: scrolled
              ? "0 10px 40px -22px rgba(0,0,0,0.35)"
              : "none",
          }}
        >
          {/* wordmark */}
          <a
            href="#top"
            aria-label="Prime Meridian Systems — home"
            className="shrink-0 pl-2"
          >
            <Wordmark className="h-[1.45rem] w-auto" />
          </a>

          {/* center links with sliding highlight */}
          <div
            ref={listRef}
            onMouseLeave={() => {
              hoverRef.current = null;
              moveTo(activeIdx);
            }}
            className="relative hidden items-center lg:flex"
          >
            <span
              aria-hidden="true"
              className="absolute top-1/2 -z-0 h-9 -translate-y-1/2 rounded-full bg-black/[0.06] transition-all duration-300 ease-out"
              style={{
                left: hl.left,
                width: hl.width,
                opacity: hl.ready ? 1 : 0,
              }}
            />
            {LINKS.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                ref={(el) => (linkRefs.current[i] = el)}
                onMouseEnter={() => {
                  hoverRef.current = i;
                  moveTo(i);
                }}
                className="relative z-10 rounded-full px-4 py-2 text-[0.93rem] transition-colors duration-200"
                style={{
                  color:
                    active === l.href ? "var(--ink)" : "var(--muted)",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* right actions */}
          <div className="hidden shrink-0 items-center gap-1.5 md:flex">
            <a
              href="#demo"
              className="rounded-full px-3.5 py-2 text-[0.93rem] text-ink-2 transition-colors hover:bg-black/[0.05]"
            >
              Try it live
            </a>
            <Pill href="#demo" variant="primary" className="!text-[0.88rem]">
              Book a demo
            </Pill>
          </div>

          {/* mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-black/[0.05] md:hidden"
            aria-label="Toggle menu"
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

      {/* full-screen mobile menu */}
      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* backdrop */}
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
        {/* aurora field in the menu */}
        <div
          className="pointer-events-none absolute -right-1/3 -top-1/4 h-[100vmin] w-[100vmin] transition-opacity duration-700"
          style={{ opacity: open ? 0.8 : 0 }}
        >
          <Aurora />
        </div>

        {/* links */}
        <nav className="relative flex h-full flex-col justify-center gap-1 px-7">
          {LINKS.map((l, i) => (
            <a
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
            </a>
          ))}

          <div
            className="mt-10 flex flex-col gap-3 transition-all duration-500"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transitionDelay: open ? `${120 + LINKS.length * 60}ms` : "0ms",
            }}
          >
            <Pill
              href="#demo"
              variant="primary"
              className="w-fit"
              onClick={() => setOpen(false)}
            >
              Book a demo
            </Pill>
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="w-fit text-lg text-muted"
            >
              Try it live →
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
