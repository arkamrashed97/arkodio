import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Menu, Users, X, Rocket } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { RouteKey } from '../types/studio';
import { BrandLogo } from './BrandLogo';

const NAV_ITEMS: Array<{ key: RouteKey; label: { en: string; ar: string } }> = [
  { key: 'home', label: { en: 'Home', ar: 'الرئيسية' } },
  { key: 'work', label: { en: 'Our Work', ar: 'أعمالنا' } },
  { key: 'talents', label: { en: 'Our Talents', ar: 'مواهبنا' } },
  { key: 'reviews', label: { en: 'Reviews', ar: 'آراء العملاء' } },
  { key: 'contact', label: { en: 'Project Builder', ar: 'مصمم المشاريع' } },
];

export const Navbar: React.FC = () => {
  const { lang, toggleLang, t, route, buildHref, hubBounties } = useApp();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [route, lang]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  const openBountiesCount = hubBounties.length;

  return (
    <header className="sticky top-0 z-40 px-3 sm:px-6 pt-3 sm:pt-4">
      <nav
        aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Primary Navigation'}
        className={`mx-auto max-w-7xl transition-all duration-300 rounded-[22px] px-3.5 sm:px-5 py-2.5 ${
          scrolled ? 'glass-surface-strong shadow-lg' : 'glass-surface'
        }`}
      >
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Brand Logo */}
          <a
            href={buildHref('home')}
            className="min-h-[44px] inline-flex items-center rounded-xl px-1.5"
            aria-label="Arkodio Home"
          >
            <BrandLogo size="md" />
          </a>

          {/* Desktop Center Navigation */}
          <div className="hidden xl:flex items-center gap-1 rounded-2xl bg-navy/[0.04] p-1 border border-navy/[0.06]">
            {NAV_ITEMS.map((item) => {
              const active = route === item.key;
              return (
                <a
                  key={item.key}
                  href={buildHref(item.key)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative min-h-[40px] inline-flex items-center px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-colors ${
                    active ? 'text-navy' : 'text-slate-frost hover:text-navy'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="arkodio-nav-active"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute inset-0 rounded-xl bg-white shadow-sm border border-navy/10 -z-10"
                    />
                  )}
                  {t(item.label)}
                </a>
              );
            })}
          </div>

          {/* Right Actions: Community Hub Badge + Language Switcher + Primary CTA */}
          <div className="flex items-center gap-2">
            {/* Community Hub Badge */}
            <a
              href={buildHref('hub')}
              aria-current={route === 'hub' ? 'page' : undefined}
              className={`hidden md:inline-flex min-h-[44px] items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                route === 'hub'
                  ? 'bg-navy text-amber-bright shadow-md'
                  : 'bg-navy/[0.07] text-navy hover:bg-navy hover:text-white border border-navy/10'
              }`}
            >
              <Users className="h-3.5 w-3.5 text-amber-brand shrink-0" aria-hidden="true" />
              <span>{lang === 'ar' ? 'مجتمع أركوديو' : 'Community Hub'}</span>
              <span className="rounded-md bg-amber-brand px-1.5 py-0.5 text-[10px] font-extrabold text-navy">
                {openBountiesCount}
              </span>
            </a>

            {/* Bilingual Toggle (AR / EN) */}
            <button
              type="button"
              onClick={toggleLang}
              aria-label={lang === 'en' ? 'Switch language to Arabic' : 'التبديل إلى اللغة الإنجليزية'}
              className="min-h-[44px] min-w-[44px] inline-flex items-center gap-1.5 rounded-xl bg-white/80 hover:bg-white px-3 py-2 text-xs font-extrabold text-navy border border-navy/12 shadow-sm transition-colors"
            >
              <Globe className="h-4 w-4 text-amber-deep shrink-0" aria-hidden="true" />
              <span>{lang === 'en' ? 'العربية' : 'EN'}</span>
            </button>

            {/* Primary CTA: Start a Project */}
            <a
              href={buildHref('contact')}
              className="hidden sm:inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2 text-sm btn-amber"
            >
              <Rocket className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{lang === 'ar' ? 'ابدأ مشروعك' : 'Start a Project'}</span>
            </a>

            {/* Mobile Drawer Button (Labeled for R-03 / LayoutMobile) */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="arkodio-mobile-menu"
              className="xl:hidden min-h-[44px] inline-flex items-center gap-1.5 rounded-xl bg-navy text-white px-3 py-2 text-xs font-bold shadow-sm"
            >
              {mobileOpen ? (
                <>
                  <X className="h-4 w-4 text-amber-bright" aria-hidden="true" />
                  <span>{lang === 'ar' ? 'إغلاق' : 'Close'}</span>
                </>
              ) : (
                <>
                  <Menu className="h-4 w-4 text-amber-bright" aria-hidden="true" />
                  <span>{lang === 'ar' ? 'القائمة' : 'Menu'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="arkodio-mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="xl:hidden overflow-hidden"
            >
              <div className="mt-3 pt-3 border-t border-navy/10 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {NAV_ITEMS.map((item) => {
                  const active = route === item.key;
                  return (
                    <a
                      key={item.key}
                      href={buildHref(item.key)}
                      className={`min-h-[46px] flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                        active
                          ? 'bg-navy text-white'
                          : 'bg-white/75 text-navy hover:bg-white border border-navy/10'
                      }`}
                    >
                      <span>{t(item.label)}</span>
                      {active && (
                        <span className="h-2 w-2 rounded-full bg-amber-bright" aria-hidden="true" />
                      )}
                    </a>
                  );
                })}

                <a
                  href={buildHref('hub')}
                  className={`min-h-[46px] flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold border ${
                    route === 'hub'
                      ? 'bg-navy text-amber-bright border-navy'
                      : 'bg-amber-soft/80 text-navy border-amber-brand/40'
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <Users className="h-4 w-4 text-amber-deep" aria-hidden="true" />
                    {lang === 'ar' ? 'مجتمع أركوديو التعاوني' : 'Community Hub Portal'}
                  </span>
                  <span className="rounded-md bg-navy text-amber-bright px-2 py-0.5 text-xs font-extrabold">
                    {openBountiesCount} {lang === 'ar' ? 'مهام' : 'Live'}
                  </span>
                </a>

                <a
                  href={buildHref('contact')}
                  className="sm:col-span-2 min-h-[48px] flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm btn-amber"
                >
                  <Rocket className="h-4 w-4" aria-hidden="true" />
                  <span>{lang === 'ar' ? 'ابدأ مشروعك الآن' : 'Start a Project'}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
