"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";
import { navItems } from "@/data/site";

const DESKTOP_QUERY = "(min-width: 768px)";

export function Navbar() {
  const menuId = useId();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState(navItems[0]?.id ?? "home");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const currentSection = visibleSections[0]?.target;

        if (currentSection?.id) {
          setActiveId(currentSection.id);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0.08, 0.18, 0.32, 0.48],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const mediaQuery = window.matchMedia(DESKTOP_QUERY);
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    mediaQuery.addEventListener("change", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      mediaQuery.removeEventListener("change", closeOnDesktop);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#101010]/72 px-3 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl md:px-4">
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Go to home"
          className="group flex items-center gap-3 rounded-full pr-3 text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:text-white/75"
        >
          <span className="inline-flex size-11 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-neutral-900/80 shadow-lg shadow-black/20 transition group-hover:border-[var(--hero-accent)]/40">
            <Image
              src="/darth-vader-logo.svg"
              alt="Darth Vader logo"
              width={44}
              height={44}
              className="h-full w-full object-cover"
              priority
            />
          </span>
          <span className="hidden text-xs text-white/78 sm:inline">AY</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              item={item}
              isActive={item.id === activeId}
            />
          ))}
        </nav>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="group relative grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white transition hover:border-[var(--hero-accent)]/45 hover:bg-[var(--hero-accent)]/10 md:hidden"
        >
          <span className="sr-only">
            {isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-current transition duration-300 ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-5 bg-current transition duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-5 bg-current transition duration-300 ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <MobileMenu
        id={menuId}
        isOpen={isMenuOpen}
        activeId={activeId}
        onClose={closeMenu}
      />
    </header>
  );
}

function NavLink({
  item,
  isActive,
}: {
  item: (typeof navItems)[number];
  isActive: boolean;
}) {
  return (
    <a
      href={`#${item.id}`}
      aria-current={isActive ? "page" : undefined}
      className={`rounded-full px-4 py-2 text-sm transition ${
        isActive
          ? "bg-white text-black shadow-[0_8px_24px_rgba(255,255,255,0.12)]"
          : "text-white/58 hover:bg-white/[0.06] hover:text-white"
      }`}
    >
      {item.label}
    </a>
  );
}

function MobileMenu({
  id,
  isOpen,
  activeId,
  onClose,
}: {
  id: string;
  isOpen: boolean;
  activeId: string;
  onClose: () => void;
}) {
  return (
    <div
      id={id}
      className={`fixed inset-0 top-0 z-[-1] transition md:hidden ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        aria-label="Close navigation menu"
      />

      <div
        className={`absolute left-4 right-4 top-24 overflow-hidden rounded-3xl border border-white/10 bg-[#171717] p-2 shadow-[0_18px_60px_rgba(0,0,0,0.38)] transition duration-300 sm:left-6 sm:right-6 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-3 opacity-0"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <nav className="grid gap-1" aria-label="Mobile navigation links">
          {navItems.map((item) => {
            const isActive = item.id === activeId;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-2xl px-4 py-3 text-sm transition ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white/68 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
