import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Clapperboard,
  Sparkles,
  Palette,
  Wand2,
  Megaphone,
  TrendingUp,
  Briefcase,
  BarChart3,
  Database,
  Rocket,
  Layers,
  Zap,
  ShieldCheck,
  Users,
  Star,
  Pause,
  Play,
  Plus,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import {
  PORTFOLIO_PROJECTS,
  SERVICE_PILLARS,
  STUDIO_SERVICES,
} from '../data/servicesAndWork';
import { ServiceItem, ServicePillarKey } from '../types/studio';
import { GlassCard } from '../components/GlassCard';
import { ProjectArtwork } from '../components/ProjectArtwork';

const SERVICE_ICONS: Record<ServiceItem['iconName'], React.ComponentType<{ className?: string }>> = {
  Code2,
  Clapperboard,
  Sparkles,
  Palette,
  Wand2,
  Megaphone,
  TrendingUp,
  Briefcase,
  BarChart3,
  Database,
};

export const HomePage: React.FC = () => {
  const {
    lang,
    isRtl,
    t,
    buildHref,
    openCaseStudy,
    addChipAndGoToBuilder,
    reviews,
  } = useApp();

  const [selectedPillar, setSelectedPillar] = useState<ServicePillarKey>('all');
  const [hoveredWorkId, setHoveredWorkId] = useState<string | null>('madar-pay-os');
  const [marqueePaused, setMarqueePaused] = useState(false);

  const filteredServices =
    selectedPillar === 'all'
      ? STUDIO_SERVICES
      : STUDIO_SERVICES.filter((s) => s.pillar === selectedPillar);

  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 4);
  const marqueeList = [...reviews, ...reviews];

  return (
    <div className="space-y-20 sm:space-y-28 pt-6 sm:pt-10">
      {/* =====================================================================
          1. HERO SECTION — Frosted Glass Centerpiece over Amber & Navy Geometry
      ===================================================================== */}
      <section className="px-3 sm:px-6">
        <div className="mx-auto max-w-7xl relative">
          {/* Architectural Layered Geometric Under-Blocks (Inspired by Arkodio Emblem) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-5 right-[6%] sm:right-[10%] h-28 sm:h-40 w-52 sm:w-80 rounded-[28px] shadow-amber"
            style={{
              background: 'linear-gradient(135deg, #FFB020 0%, #F5A623 100%)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-5 left-[4%] sm:left-[7%] h-28 sm:h-36 w-52 sm:w-72 rounded-[28px] opacity-90"
            style={{
              background: 'linear-gradient(135deg, #FDE68A 0%, #F5A623 100%)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 right-2 sm:right-6 h-36 sm:h-48 w-48 sm:w-72 rounded-[28px] bg-navy shadow-navy border border-white/15"
          />

          {/* Centerpiece Frosted-Glass Hero Card */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 rounded-[28px] sm:rounded-[34px] p-6 sm:p-10 lg:p-14 border border-white/90 shadow-glass overflow-visible"
            style={{
              background:
                'linear-gradient(125deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.58) 54%, rgba(255, 224, 163, 0.56) 85%, rgba(226, 232, 240, 0.66) 100%)',
              backdropFilter: 'blur(26px) saturate(170%)',
              WebkitBackdropFilter: 'blur(26px) saturate(170%)',
            }}
          >
            {/* Signature Smoked-Charcoal Floating Squircle Corner Badge (Reference Emblem Accent) */}
            <div
              dir="ltr"
              className="hidden sm:flex smoked-glass-badge absolute -top-5 right-6 lg:right-10 h-16 w-20 lg:h-20 lg:w-24 rounded-[22px] flex-col items-center justify-center text-white select-none"
            >
              <span className="font-display text-sm lg:text-base font-bold text-amber-bright">
                &lt;/&gt;
              </span>
              <div className="mt-1.5 flex items-end gap-1 h-3.5" aria-hidden="true">
                <span className="w-1 h-2 rounded-full bg-amber-bright" />
                <span className="w-1 h-3.5 rounded-full bg-white" />
                <span className="w-1 h-2.5 rounded-full bg-amber-brand" />
                <span className="w-1 h-1.5 rounded-full bg-slate-300" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              {/* Left / Main Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-white/80 px-3.5 py-1.5 text-xs font-extrabold text-navy border border-navy/10 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" aria-hidden="true" />
                  <span>
                    {lang === 'ar'
                      ? 'متاحون الآن لمشاريع الربع القادم · ١٠ تخصصات رقمية متكاملة'
                      : 'Open for New Studio Sprints · 10 End-to-End Capabilities'}
                  </span>
                </div>

                <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold text-navy leading-[1.14] tracking-tight">
                  {lang === 'ar' ? (
                    <>
                      استوديو <span className="text-amber-deep">أركوديو</span>: قوة المواهب الشابة لبناء حضورك الرقمي من الكود إلى النمو
                    </>
                  ) : (
                    <>
                      Young Digital Minds Engineering{' '}
                      <span className="underline decoration-amber-brand decoration-4 underline-offset-4">
                        Code, Motion &amp; Growth
                      </span>{' '}
                      Under One Roof.
                    </>
                  )}
                </h1>

                <p className="text-base sm:text-lg text-slate-frost leading-relaxed max-w-2xl font-medium">
                  {lang === 'ar'
                    ? 'نجمع نخبة المطورين، صناع الفيديو والموشن، مصممي الهويات، خبراء الإعلانات، ومحللي البيانات في فرق عمل متجانسة تنفذ مشروعك بسرعة قياسية وجودة مضمونة ١٠٠٪.'
                    : 'Arkodio unites specialized young web architects, video and motion directors, brand designers, media buyers, and data analysts into agile squads built to ship complete digital products.'}
                </p>

                {/* Dual CTAs */}
                <div className="pt-1 flex flex-wrap items-center gap-3.5">
                  <a
                    href={buildHref('contact')}
                    className="min-h-[50px] inline-flex items-center justify-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm sm:text-base btn-amber"
                  >
                    <Rocket className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{lang === 'ar' ? 'اطلب خدمة الآن' : 'Request a Service'}</span>
                  </a>

                  <a
                    href={buildHref('work')}
                    className="min-h-[50px] inline-flex items-center justify-center gap-2.5 rounded-2xl px-6 py-3.5 text-sm sm:text-base btn-glass"
                  >
                    <Layers className="h-4 w-4 text-navy shrink-0" aria-hidden="true" />
                    <span>{lang === 'ar' ? 'استكشف أعمالنا' : 'Explore Our Work'}</span>
                  </a>
                </div>
              </div>

              {/* Right / Architectural Emblem Card + Floating Glass Stat Pills */}
              <div className="lg:col-span-5 space-y-4">
                {/* Signature Arkodio Frosted Brand Plaque (Direct Homage to Uploaded Reference) */}
                <div className="relative rounded-[24px] p-6 sm:p-7 bg-white/65 border border-white/95 shadow-glass overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-8 right-6 h-28 w-32 rounded-full bg-amber-bright/45 blur-2xl"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-10 right-0 h-24 w-28 rounded-tl-3xl bg-navy/10"
                  />
                  <div dir="ltr" className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-frost bg-navy/[0.06] px-2.5 py-1 rounded-lg">
                      &lt;arkodio.studio /&gt;
                    </span>
                    <span className="text-[11px] font-extrabold text-amber-deep bg-amber-soft px-2.5 py-1 rounded-lg border border-amber-brand/30">
                      ALL-IN-ONE PODS
                    </span>
                  </div>

                  <div dir="ltr" className="relative z-10 my-5 text-center">
                    <div className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-navy">
                      Arkodio
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-frost">
                      <span>Code</span>
                      <span className="text-amber-brand">•</span>
                      <span>Motion</span>
                      <span className="text-amber-brand">•</span>
                      <span>Growth</span>
                      <span className="text-amber-brand">•</span>
                      <span>Data</span>
                    </div>
                  </div>

                  {/* Mini Discipline Bar */}
                  <div className="relative z-10 grid grid-cols-2 gap-2 text-xs font-bold">
                    <a
                      href={buildHref('talents')}
                      className="min-h-[40px] flex items-center justify-center rounded-xl bg-navy text-white hover:bg-slate-800 px-3 py-2 transition-colors"
                    >
                      {lang === 'ar' ? 'تعرف على المواهب' : 'Meet 28 Specialists'}
                    </a>
                    <a
                      href={buildHref('hub')}
                      className="min-h-[40px] flex items-center justify-center rounded-xl bg-amber-soft text-navy hover:bg-amber-brand/40 px-3 py-2 border border-amber-brand/35 transition-colors"
                    >
                      {lang === 'ar' ? 'بوابة التعاون الحية' : 'Open Studio Hub'}
                    </a>
                  </div>
                </div>

                {/* 3 Floating Glass Stat Pills */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {[
                    {
                      value: '140+',
                      label: { en: 'Completed Projects', ar: 'مشروع مكتمل' },
                    },
                    {
                      value: '28',
                      label: { en: 'Active Talents', ar: 'موهبة نشطة' },
                    },
                    {
                      value: '99.2%',
                      label: { en: 'Client Satisfaction', ar: 'رضا العملاء' },
                    },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="glass-pill rounded-2xl p-3 sm:p-4 text-center"
                    >
                      <div className="font-display text-xl sm:text-2xl font-extrabold text-navy">
                        {stat.value}
                      </div>
                      <div className="mt-0.5 text-[11px] sm:text-xs font-bold text-slate-frost leading-snug">
                        {t(stat.label)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          2. ALL-IN-ONE SERVICES BENTO GRID (10 Capabilities across 4 Pillars)
      ===================================================================== */}
      <section id="services" className="px-3 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-amber-deep">
                {lang === 'ar' ? 'منظومة الخدمات الشاملة' : 'End-to-End Studio Capabilities'}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-navy">
                {lang === 'ar'
                  ? 'كل ما تحتاجه علامتك الرقمية في شبكة بنتو متكاملة'
                  : 'Every Discipline Your Brand Needs, Engineered in Sync'}
              </h2>
              <p className="text-sm sm:text-base text-slate-frost">
                {lang === 'ar'
                  ? 'بدلاً من التعاقد مع جهات متفرقة، اختر التخصصات المطلوبة وسيعمل فريقنا المتكامل على تسليمها بتناغم تام.'
                  : 'Filter by studio pillar or click any capability to add it straight into your custom project estimator.'}
              </p>
            </div>

            {/* Interactive Category Filter Tabs */}
            <div
              role="tablist"
              aria-label={lang === 'ar' ? 'تصنيف الخدمات' : 'Service categories'}
              className="flex flex-wrap gap-2"
            >
              {SERVICE_PILLARS.map((pillar) => {
                const active = selectedPillar === pillar.key;
                return (
                  <button
                    key={pillar.key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedPillar(pillar.key)}
                    className={`min-h-[44px] rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                      active
                        ? 'bg-navy text-amber-bright shadow-md'
                        : 'glass-pill text-slate-frost hover:text-navy'
                    }`}
                  >
                    {t(pillar.label)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Asymmetric Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
            {filteredServices.map((service) => {
              const IconComp = SERVICE_ICONS[service.iconName];
              const isNavy = service.featured === 'navy';
              const isAmberGlass = service.featured === 'amber-glass';
              const span =
                selectedPillar === 'all' ? service.spanClass : 'md:col-span-1 lg:col-span-6';

              return (
                <GlassCard
                  key={service.id}
                  as="article"
                  surface={isNavy ? 'navy' : isAmberGlass ? 'amber-glass' : 'glass'}
                  className={`${span} p-6 sm:p-7 flex flex-col justify-between gap-5`}
                >
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`h-11 w-11 rounded-2xl inline-flex items-center justify-center shrink-0 ${
                          isNavy
                            ? 'bg-amber-bright text-navy'
                            : 'bg-navy text-amber-bright shadow-sm'
                        }`}
                      >
                        <IconComp className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          isNavy
                            ? 'bg-white/10 text-amber-bright border border-white/15'
                            : 'bg-white/80 text-slate-frost border border-navy/10'
                        }`}
                      >
                        {t(service.turnaround)}
                      </span>
                    </div>

                    <div>
                      <h3
                        className={`font-display text-xl sm:text-2xl font-extrabold ${
                          isNavy ? 'text-white' : 'text-navy'
                        }`}
                      >
                        {t(service.title)}
                      </h3>
                      <p
                        className={`mt-1.5 text-sm font-semibold ${
                          isNavy ? 'text-amber-bright/95' : 'text-amber-deep'
                        }`}
                      >
                        {t(service.tagline)}
                      </p>
                      <p
                        className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                          isNavy ? 'text-slate-300' : 'text-slate-frost'
                        }`}
                      >
                        {t(service.description)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 relative z-10 pt-2 border-t border-current/10">
                    <div className="flex flex-wrap gap-1.5">
                      {t(service.deliverables).map((item, idx) => (
                        <span
                          key={idx}
                          className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[11px] font-bold ${
                            isNavy
                              ? 'bg-white/[0.08] text-slate-200 border border-white/10'
                              : 'bg-white/85 text-navy border border-navy/10'
                          }`}
                        >
                          <CheckCircle2
                            className={`h-3 w-3 shrink-0 ${
                              isNavy ? 'text-amber-bright' : 'text-emerald-600'
                            }`}
                            aria-hidden="true"
                          />
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => addChipAndGoToBuilder([service.estimatorChipId])}
                        className={`min-h-[44px] inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold transition-all ${
                          isNavy
                            ? 'btn-amber'
                            : 'bg-navy text-white hover:bg-slate-800 shadow-sm'
                        }`}
                      >
                        <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>
                          {lang === 'ar' ? 'أضف إلى حاسبة المشروع' : 'Add to Project Scope'}
                        </span>
                      </button>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. FEATURED WORK PREVIEW — Interactive Hover-to-Play / Tap Showcase
      ===================================================================== */}
      <section className="px-3 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-amber-deep">
                {lang === 'ar' ? 'مختارات من دراسات الحالة' : 'Interactive Portfolio Showcase'}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-navy">
                {lang === 'ar'
                  ? 'مشاريع حقيقية تقودها الأرقام والإتقان البصري'
                  : 'Hover or Tap to Preview Live Studio Deliverables'}
              </h2>
            </div>

            <a
              href={buildHref('work')}
              className="self-start sm:self-auto min-h-[44px] inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm btn-navy"
            >
              <span>{lang === 'ar' ? 'عرض كل الأعمال (٨ مشاريع)' : 'View All 8 Case Studies'}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {featuredProjects.map((project) => {
              const isHovered = hoveredWorkId === project.id;
              return (
                <GlassCard
                  key={project.id}
                  as="article"
                  surface="glass-strong"
                  className="p-5 sm:p-6 flex flex-col justify-between gap-5"
                >
                  <div
                    onMouseEnter={() => setHoveredWorkId(project.id)}
                    onFocus={() => setHoveredWorkId(project.id)}
                    className="space-y-4"
                  >
                    <div className="relative">
                      <ProjectArtwork variant={project.artwork} isActive={isHovered} />
                      <button
                        type="button"
                        onClick={() =>
                          setHoveredWorkId((prev) => (prev === project.id ? null : project.id))
                        }
                        aria-pressed={isHovered}
                        className="absolute bottom-3 right-3 z-20 min-h-[36px] inline-flex items-center gap-1.5 rounded-xl bg-white/90 hover:bg-white px-3 py-1.5 text-[11px] font-extrabold text-navy shadow-md border border-navy/10"
                      >
                        <Play className="h-3 w-3 fill-amber-brand text-amber-brand" aria-hidden="true" />
                        <span>
                          {isHovered
                            ? lang === 'ar'
                              ? 'معاينة نشطة'
                              : 'Preview Active'
                            : lang === 'ar'
                              ? 'تشغيل المعاينة'
                              : 'Play Preview'}
                        </span>
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-amber-soft px-3 py-1 text-xs font-extrabold text-amber-deep border border-amber-brand/30">
                        {t(project.categoryLabel)}
                      </span>
                      <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        {t(project.headlineMetric)}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-display text-xl font-extrabold text-navy">
                        {t(project.title)}
                      </h3>
                      <p className="mt-1.5 text-sm text-slate-frost leading-relaxed">
                        {t(project.shortSummary)}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-navy/10 flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          dir="ltr"
                          className="rounded-md bg-navy/[0.05] px-2 py-1 text-[11px] font-bold text-slate-frost"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => openCaseStudy(project)}
                      className="min-h-[44px] inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold btn-amber shrink-0"
                    >
                      <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{lang === 'ar' ? 'تفاصيل المشروع' : 'Open Case Study'}</span>
                    </button>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. WHY ARKODIO — 3D Tilt Glass & Midnight Pillars
      ===================================================================== */}
      <section className="px-3 sm:px-6">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-amber-deep">
              {lang === 'ar' ? 'لماذا يختارنا المؤسسون؟' : 'The Arkodio Advantage'}
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-navy">
              {lang === 'ar'
                ? 'مرونة الجيل الرقمي الجديد مع انضباط الوكالات العالمية'
                : 'Built Differently From Slow Legacy Agencies & Solo Freelancers'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              {
                icon: Sparkles,
                surface: 'amber-glass' as const,
                badge: '01',
                title: { en: 'Youthful Innovation', ar: 'ابتكار شبابي متجدد' },
                desc: {
                  en: 'Digital-native specialists fluent in modern web stacks, kinetic visual formats, and real-time social algorithms.',
                  ar: 'مواهب شابة تعيش قلب التطور التقني وتصنع محتوى ومنصات تواكب ذائقة الجمهور المعاصر.',
                },
              },
              {
                icon: Zap,
                surface: 'navy' as const,
                badge: '02',
                title: { en: 'Rapid Sprint Velocity', ar: 'سرعة تنفيذ قياسية' },
                desc: {
                  en: 'Zero bloated account-layer delays. Talk directly with the builders shipping weekly milestones.',
                  ar: 'بدون بيروقراطية معقدة؛ تواصل مباشر مع المنفذين وتسليم مراحل واضحة كل أسبوع.',
                },
              },
              {
                icon: Users,
                surface: 'glass' as const,
                badge: '03',
                title: { en: 'Multi-Disciplinary Synergy', ar: 'تناغم التخصصات معاً' },
                desc: {
                  en: 'Your React developer, motion designer, media buyer, and data analyst build inside one shared pod.',
                  ar: 'المبرمج، المصمم، المونتير، وخبير الإعلانات يعملون كفريق واحد لخدمة هدف تجاري مشترك.',
                },
              },
              {
                icon: ShieldCheck,
                surface: 'glass-strong' as const,
                badge: '04',
                title: { en: '100% Quality Guarantee', ar: 'ضمان جودة ١٠٠٪' },
                desc: {
                  en: 'Dual internal QA on code, visuals, and data accuracy before any milestone hits your inbox.',
                  ar: 'مراجعة فنية مزدوجة للكود والتصميم والبيانات قبل التسليم مع التزام تام بالمواصفات.',
                },
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              const isNavy = item.surface === 'navy';
              return (
                <GlassCard
                  key={idx}
                  surface={item.surface}
                  className="p-6 flex flex-col justify-between gap-6"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`h-12 w-12 rounded-2xl inline-flex items-center justify-center ${
                        isNavy ? 'bg-amber-bright text-navy' : 'bg-navy text-amber-bright'
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span
                      className={`font-display text-sm font-extrabold ${
                        isNavy ? 'text-slate-400' : 'text-slate-frost'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3
                      className={`font-display text-lg font-extrabold ${
                        isNavy ? 'text-white' : 'text-navy'
                      }`}
                    >
                      {t(item.title)}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        isNavy ? 'text-slate-300' : 'text-slate-frost'
                      }`}
                    >
                      {t(item.desc)}
                    </p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. CLIENT REVIEWS MARQUEE — Infinite Smooth Glass Strip with Pause Control
      ===================================================================== */}
      <section className="space-y-6 overflow-hidden py-2">
        <div className="px-3 sm:px-6">
          <div className="mx-auto max-w-7xl flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-amber-deep">
                {lang === 'ar' ? 'تقييم ٤.٩ من ٥ عبر عملائنا' : '4.9 / 5.0 Verified Studio Rating'}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-navy">
                {lang === 'ar' ? 'ماذا يقول شركاء النجاح عن أركوديو' : 'Trusted by Ambitious Founders & Teams'}
              </h2>
            </div>

            <div className="flex items-center gap-2.5">
              {/* R-39 Mandatory Pause Control for Continuous Motion */}
              <button
                type="button"
                onClick={() => setMarqueePaused((p) => !p)}
                aria-pressed={marqueePaused}
                className="min-h-[44px] inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-xs font-bold btn-glass"
              >
                {marqueePaused ? (
                  <>
                    <Play className="h-3.5 w-3.5 text-navy" aria-hidden="true" />
                    <span>{lang === 'ar' ? 'تشغيل الشريط' : 'Resume Scroll'}</span>
                  </>
                ) : (
                  <>
                    <Pause className="h-3.5 w-3.5 text-navy" aria-hidden="true" />
                    <span>{lang === 'ar' ? 'إيقاف مؤقت' : 'Pause Scroll'}</span>
                  </>
                )}
              </button>

              <a
                href={buildHref('reviews')}
                className="min-h-[44px] inline-flex items-center rounded-xl px-4 py-2 text-xs font-extrabold btn-amber"
              >
                {lang === 'ar' ? 'جدار التقييمات الكامل' : 'Open Client Wall'}
              </a>
            </div>
          </div>
        </div>

        <div className="marquee-wrapper relative w-full overflow-hidden py-3">
          <div
            className={`${isRtl ? 'marquee-track-rtl' : 'marquee-track-ltr'} ${
              marqueePaused ? 'marquee-paused' : ''
            } gap-4 px-4`}
          >
            {marqueeList.map((rev, idx) => (
              <article
                key={`${rev.id}-${idx}`}
                className="w-[320px] sm:w-[390px] shrink-0 glass-surface p-5 sm:p-6 flex flex-col justify-between gap-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-0.5 text-amber-brand" aria-label={`${rev.rating} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className="h-4 w-4 fill-amber-brand text-amber-brand"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="rounded-lg bg-amber-soft px-2.5 py-1 text-[11px] font-extrabold text-amber-deep">
                      {t(rev.projectType)}
                    </span>
                  </div>

                  <p className="text-sm text-navy leading-relaxed font-medium">
                    &ldquo;{t(rev.quote)}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-navy/10 flex items-center gap-3">
                  <span className="h-10 w-10 rounded-xl bg-navy text-amber-bright font-display text-xs font-extrabold inline-flex items-center justify-center shrink-0">
                    {rev.initials}
                  </span>
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold text-navy truncate">
                      {t(rev.clientName)}
                    </div>
                    <div className="text-[11px] text-slate-frost truncate">
                      {t(rev.clientRole)} · {t(rev.company)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          6. CONVERSION CLIMAX BANNER
      ===================================================================== */}
      <section className="px-3 sm:px-6">
        <div className="mx-auto max-w-7xl relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-4 left-8 h-24 w-56 rounded-3xl bg-amber-brand/80 blur-md"
          />
          <div className="relative z-10 glass-surface-strong p-7 sm:p-11 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy">
                {lang === 'ar'
                  ? 'جاهز لتحويل فكرتك إلى منصة وهوية ونمو قابل للقياس؟'
                  : 'Ready to Assemble Your Custom Arkodio Talent Squad?'}
              </h2>
              <p className="text-sm sm:text-base text-slate-frost">
                {lang === 'ar'
                  ? 'جرب مصمم المشاريع التفاعلي وحدد الخدمات والجدول الزمني في أقل من دقيقة.'
                  : 'Select your exact mix of services, timeline, and goals in our 60-second interactive Project Builder.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={buildHref('contact')}
                className="min-h-[48px] inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-sm sm:text-base btn-amber"
              >
                <Rocket className="h-4 w-4" aria-hidden="true" />
                <span>{lang === 'ar' ? 'ابدأ تصميم مشروعك' : 'Launch Project Builder'}</span>
              </a>
              <a
                href={buildHref('hub')}
                className="min-h-[48px] inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm sm:text-base btn-navy"
              >
                <Users className="h-4 w-4 text-amber-bright" aria-hidden="true" />
                <span>{lang === 'ar' ? 'استكشف مجتمع أركوديو' : 'Visit Arkodio Hub'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
