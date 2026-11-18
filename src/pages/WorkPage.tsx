import React, { useMemo, useState } from 'react';
import { Eye, Play, RotateCcw, Search, Sparkles, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_PROJECTS } from '../data/servicesAndWork';
import { STUDIO_TALENTS } from '../data/talentsHubReviews';
import { PortfolioCategoryKey } from '../types/studio';
import { GlassCard } from '../components/GlassCard';
import { ProjectArtwork } from '../components/ProjectArtwork';

export const WorkPage: React.FC = () => {
  const { lang, t, openCaseStudy, buildHref } = useApp();
  const [activeCategory, setActiveCategory] = useState<PortfolioCategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePreviewId, setActivePreviewId] = useState<string | null>('madar-pay-os');

  const filteredProjects = useMemo(() => {
    return PORTFOLIO_PROJECTS.filter((proj) => {
      const catMatch = activeCategory === 'all' || proj.category === activeCategory;
      if (!catMatch) return false;
      const q = searchQuery.trim().toLowerCase();
      if (!q) return true;
      return (
        proj.title.en.toLowerCase().includes(q) ||
        proj.title.ar.includes(q) ||
        proj.client.en.toLowerCase().includes(q) ||
        proj.client.ar.includes(q) ||
        proj.tools.some((tool) => tool.toLowerCase().includes(q))
      );
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="px-3 sm:px-6 pt-6 sm:pt-10 space-y-10">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header Hero Card */}
        <div className="relative rounded-[28px] glass-surface-strong p-6 sm:p-10 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -right-12 h-56 w-56 rounded-full bg-amber-brand/30 blur-3xl"
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-soft px-3.5 py-1 text-xs font-extrabold text-amber-deep border border-amber-brand/30">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                {lang === 'ar' ? 'معرض أعمال أركوديو ودراسات الحالة' : 'Arkodio Case Study Archive'}
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-navy">
                {lang === 'ar'
                  ? 'نتائج حقيقية صنعتها مواهبنا الشابة عبر كل التخصصات'
                  : 'Selected Builds, Kinetic Films & Growth Engines'}
              </h1>
              <p className="text-sm sm:text-base text-slate-frost leading-relaxed">
                {lang === 'ar'
                  ? 'اضغط على أي مشروع لفتح دراسة الحالة الكاملة: التحدي، الحل، الأدوات المستخدمة، معاينة المخرجات، والفريق الذي نفذه.'
                  : 'Click any project card to inspect the full case study: client challenge, engineering & creative solution, tools used, deliverables preview, and the Arkodio talents behind it.'}
              </p>
            </div>

            {/* Search Input with Accessible Label */}
            <div className="w-full lg:w-80">
              <label htmlFor="portfolio-search" className="block text-xs font-bold text-navy mb-1.5">
                {lang === 'ar' ? 'ابحث باسم المشروع أو الأداة' : 'Search by project, client, or tool'}
              </label>
              <div className="relative">
                <Search
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 start-3.5 h-4 w-4 text-slate-frost"
                  aria-hidden="true"
                />
                <input
                  id="portfolio-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={lang === 'ar' ? 'مثال: React, Power BI, Reels...' : 'e.g. React, Power BI, Reels...'}
                  className="w-full min-h-[46px] rounded-xl bg-white/90 ps-10 pe-4 py-2.5 text-sm font-medium text-navy placeholder:text-slate-400 border border-navy/15 focus:border-navy"
                />
              </div>
            </div>
          </div>

          {/* Dynamic Category Filter Tabs */}
          <div
            role="tablist"
            aria-label={lang === 'ar' ? 'فلترة المعرض' : 'Filter portfolio categories'}
            className="relative z-10 mt-7 pt-6 border-t border-navy/10 flex flex-wrap gap-2"
          >
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const active = activeCategory === cat.key;
              const count =
                cat.key === 'all'
                  ? PORTFOLIO_PROJECTS.length
                  : PORTFOLIO_PROJECTS.filter((p) => p.category === cat.key).length;

              return (
                <button
                  key={cat.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`min-h-[44px] inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                    active
                      ? 'bg-navy text-amber-bright shadow-md'
                      : 'bg-white/80 text-slate-frost hover:text-navy border border-navy/10'
                  }`}
                >
                  <span>{t(cat.label)}</span>
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-[11px] font-extrabold ${
                      active ? 'bg-amber-bright text-navy' : 'bg-navy/[0.07] text-navy'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State (R-27 Compliance) */}
        {filteredProjects.length === 0 ? (
          <div className="glass-surface p-10 text-center space-y-4">
            <h2 className="font-display text-xl font-extrabold text-navy">
              {lang === 'ar'
                ? 'لا توجد مشاريع مطابقة لبحثك الحالي'
                : 'No case studies match your current filter'}
            </h2>
            <p className="text-sm text-slate-frost max-w-md mx-auto">
              {lang === 'ar'
                ? 'جرب كلمة مفتاحية أخرى أو أعد ضبط الفلاتر لعرض جميع دراسات الحالة الثماني في الاستوديو.'
                : 'Try a broader tool or industry keyword, or reset filters to explore all 8 studio case studies.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="min-h-[44px] inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm btn-amber"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              <span>{lang === 'ar' ? 'إعادة ضبط الفلاتر' : 'Reset All Filters'}</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => {
              const isPlaying = activePreviewId === project.id;
              const squad = STUDIO_TALENTS.filter((m) => project.teamIds.includes(m.id));

              return (
                <GlassCard
                  key={project.id}
                  as="article"
                  surface="glass-strong"
                  className="p-5 sm:p-6 flex flex-col justify-between gap-5"
                >
                  <div
                    onMouseEnter={() => setActivePreviewId(project.id)}
                    onFocus={() => setActivePreviewId(project.id)}
                    className="space-y-4"
                  >
                    <div className="relative">
                      <ProjectArtwork variant={project.artwork} isActive={isPlaying} />
                      <button
                        type="button"
                        onClick={() =>
                          setActivePreviewId((prev) => (prev === project.id ? null : project.id))
                        }
                        aria-pressed={isPlaying}
                        className="absolute bottom-3 right-3 z-20 min-h-[36px] inline-flex items-center gap-1.5 rounded-xl bg-white/90 hover:bg-white px-3 py-1.5 text-[11px] font-extrabold text-navy shadow-md border border-navy/10"
                      >
                        <Play className="h-3 w-3 fill-amber-brand text-amber-brand" aria-hidden="true" />
                        <span>
                          {isPlaying
                            ? lang === 'ar'
                              ? 'معاينة نشطة'
                              : 'Live Preview'
                            : lang === 'ar'
                              ? 'تشغيل المعاينة'
                              : 'Preview'}
                        </span>
                      </button>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="rounded-full bg-amber-soft px-3 py-1 text-xs font-extrabold text-amber-deep border border-amber-brand/30">
                        {t(project.categoryLabel)}
                      </span>
                      <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-extrabold text-emerald-700 border border-emerald-200">
                        {t(project.headlineMetric)}
                      </span>
                    </div>

                    <div>
                      <h2 className="font-display text-xl sm:text-2xl font-extrabold text-navy">
                        {t(project.title)}
                      </h2>
                      <p className="mt-1 text-xs font-bold text-slate-frost">
                        {t(project.client)} · {t(project.duration)}
                      </p>
                      <p className="mt-2 text-sm text-slate-frost leading-relaxed">
                        {t(project.shortSummary)}
                      </p>
                    </div>

                    {/* Tools Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          dir="ltr"
                          className="rounded-lg bg-navy/[0.05] px-2.5 py-1 text-[11px] font-bold text-navy border border-navy/8"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Squad Strip + Open Modal Button */}
                  <div className="pt-4 border-t border-navy/10 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2 rtl:space-x-reverse">
                        {squad.map((m) => (
                          <span
                            key={m.id}
                            title={t(m.name)}
                            style={{ backgroundColor: m.avatarPalette.bg }}
                            className="h-8 w-8 rounded-full border-2 border-white text-[10px] font-extrabold text-amber-bright inline-flex items-center justify-center"
                          >
                            {m.avatarInitials}
                          </span>
                        ))}
                      </div>
                      <span className="text-xs font-bold text-slate-frost inline-flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" aria-hidden="true" />
                        {squad.length} {lang === 'ar' ? 'مواهب مشاركة' : 'Talents'}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => openCaseStudy(project)}
                      className="min-h-[44px] inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm btn-amber"
                    >
                      <Eye className="h-4 w-4" aria-hidden="true" />
                      <span>{lang === 'ar' ? 'عرض دراسة الحالة' : 'Inspect Case Study'}</span>
                    </button>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        )}

        {/* Bottom Custom Brief Callout */}
        <div className="navy-bento navy-surface text-white p-6 sm:p-9 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className="space-y-1">
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-white">
              {lang === 'ar'
                ? 'لديك مشروع يدمج أكثر من تخصص من هذه الأعمال؟'
                : 'Have a multi-disciplinary project in mind?'}
            </h2>
            <p className="text-sm text-slate-300">
              {lang === 'ar'
                ? 'اختر الخدمات المطلوبة في مصمم المشاريع وسنرشح لك التشكيلة المثالية من مواهبنا.'
                : 'Configure your exact service mix and timeline in our interactive Project Builder.'}
            </p>
          </div>
          <a
            href={buildHref('contact')}
            className="min-h-[46px] inline-flex items-center rounded-xl px-5 py-2.5 text-sm btn-amber shrink-0"
          >
            {lang === 'ar' ? 'صمّم مشروعك الآن' : 'Configure Your Project'}
          </a>
        </div>
      </div>
    </div>
  );
};
