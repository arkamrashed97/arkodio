import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  X,
  CheckCircle2,
  Wrench,
  Users,
  Rocket,
  Clock,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { STUDIO_TALENTS } from '../data/talentsHubReviews';
import { ProjectArtwork } from './ProjectArtwork';

export const CaseStudyModal: React.FC = () => {
  const { activeCaseStudy, closeCaseStudy, lang, t, navigate, addChipAndGoToBuilder } = useApp();
  const [selectedDeliverableIdx, setSelectedDeliverableIdx] = useState(0);

  useEffect(() => {
    setSelectedDeliverableIdx(0);
  }, [activeCaseStudy?.id]);

  useEffect(() => {
    if (!activeCaseStudy) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCaseStudy();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeCaseStudy, closeCaseStudy]);

  if (!activeCaseStudy) return null;

  const squadMembers = STUDIO_TALENTS.filter((m) =>
    activeCaseStudy.teamIds.includes(m.id)
  );
  const currentDeliverable =
    activeCaseStudy.deliverables[selectedDeliverableIdx] || activeCaseStudy.deliverables[0];

  return (
    <AnimatePresence>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      >
        {/* Frosted Dark Scrim */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCaseStudy}
          className="fixed inset-0 bg-navy/60 backdrop-blur-md"
        />

        {/* Modal Sheet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-4xl max-h-[90dvh] overflow-y-auto rounded-[28px] bg-[#F8FAFC] border border-white shadow-2xl p-5 sm:p-8 text-navy"
        >
          {/* Sticky Top Bar */}
          <div className="flex items-start justify-between gap-4 pb-5 border-b border-navy/10">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-amber-soft px-3 py-1 text-xs font-extrabold text-amber-deep border border-amber-brand/30">
                  {t(activeCaseStudy.categoryLabel)}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-frost">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {t(activeCaseStudy.duration)} · {activeCaseStudy.year}
                </span>
              </div>
              <h2
                id="case-study-modal-title"
                className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-navy"
              >
                {t(activeCaseStudy.title)}
              </h2>
              <p className="mt-1 text-sm font-semibold text-slate-frost">
                {lang === 'ar' ? 'العميل: ' : 'Client: '}
                <span className="text-navy">{t(activeCaseStudy.client)}</span>
              </p>
            </div>

            <button
              type="button"
              onClick={closeCaseStudy}
              aria-label={lang === 'ar' ? 'إغلاق دراسة الحالة' : 'Close case study modal'}
              className="min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded-2xl bg-navy text-white hover:bg-slate-800 transition-colors shrink-0"
            >
              <X className="h-5 w-5 text-amber-bright" aria-hidden="true" />
            </button>
          </div>

          {/* Visual Preview + Impact KPI Strip */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-7">
              <ProjectArtwork variant={activeCaseStudy.artwork} isActive />
            </div>
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
              {activeCaseStudy.impactStats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-4 flex flex-col justify-center ${
                    idx === 0
                      ? 'navy-bento text-white'
                      : 'glass-surface border border-navy/10'
                  }`}
                >
                  <span
                    className={`font-display text-2xl sm:text-3xl font-extrabold ${
                      idx === 0 ? 'text-amber-bright' : 'text-navy'
                    }`}
                  >
                    {stat.value}
                  </span>
                  <span
                    className={`text-xs font-semibold mt-1 ${
                      idx === 0 ? 'text-slate-300' : 'text-slate-frost'
                    }`}
                  >
                    {t(stat.label)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-5 border border-navy/10 shadow-sm">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-amber-deep">
                {lang === 'ar' ? '١. التحدي والمشكلة' : '01. The Challenge'}
              </h3>
              <p className="mt-2 text-sm text-slate-frost leading-relaxed">
                {t(activeCaseStudy.challenge)}
              </p>
            </div>
            <div className="rounded-2xl bg-white p-5 border border-navy/10 shadow-sm">
              <h3 className="text-xs font-extrabold uppercase tracking-wider text-navy">
                {lang === 'ar' ? '٢. الحل الاستراتيجي والتنفيذ' : '02. Arkodio Solution'}
              </h3>
              <p className="mt-2 text-sm text-slate-frost leading-relaxed">
                {t(activeCaseStudy.solution)}
              </p>
            </div>
          </div>

          {/* Interactive Deliverables Preview */}
          <div className="mt-6 rounded-2xl bg-white p-5 border border-navy/10 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="inline-flex items-center gap-2 text-sm font-extrabold text-navy">
                <Sparkles className="h-4 w-4 text-amber-brand" aria-hidden="true" />
                {lang === 'ar' ? 'معاينة المخرجات المسلمة' : 'Interactive Deliverables Preview'}
              </h3>
              <div className="flex flex-wrap gap-1.5" role="tablist">
                {activeCaseStudy.deliverables.map((deliv, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={selectedDeliverableIdx === i}
                    onClick={() => setSelectedDeliverableIdx(i)}
                    className={`min-h-[38px] rounded-xl px-3 py-1.5 text-xs font-bold transition-colors ${
                      selectedDeliverableIdx === i
                        ? 'bg-navy text-amber-bright'
                        : 'bg-canvas text-slate-frost hover:text-navy border border-navy/10'
                    }`}
                  >
                    {t(deliv.label)}
                  </button>
                ))}
              </div>
            </div>

            {currentDeliverable && (
              <div className="mt-4 rounded-xl bg-canvas p-4 border border-navy/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-sm font-bold text-navy">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                    {t(currentDeliverable.label)}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-frost leading-relaxed">
                    {t(currentDeliverable.summary)}
                  </p>
                </div>
                <span className="self-start sm:self-center shrink-0 rounded-xl bg-amber-soft px-3.5 py-2 text-xs font-extrabold text-amber-deep border border-amber-brand/35">
                  {t(currentDeliverable.metricBadge)}
                </span>
              </div>
            )}
          </div>

          {/* Tools Used & Squad Who Built It */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-5 rounded-2xl bg-white p-5 border border-navy/10">
              <h3 className="inline-flex items-center gap-2 text-sm font-extrabold text-navy">
                <Wrench className="h-4 w-4 text-amber-brand" aria-hidden="true" />
                {lang === 'ar' ? 'الأدوات والتقنيات المستخدمة' : 'Tools & Tech Stack'}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeCaseStudy.tools.map((tool) => (
                  <span
                    key={tool}
                    dir="ltr"
                    className="rounded-lg bg-canvas px-2.5 py-1.5 text-xs font-bold text-navy border border-navy/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 rounded-2xl bg-white p-5 border border-navy/10">
              <h3 className="inline-flex items-center gap-2 text-sm font-extrabold text-navy">
                <Users className="h-4 w-4 text-amber-brand" aria-hidden="true" />
                {lang === 'ar' ? 'فريق أركوديو المنفذ للمشروع' : 'Arkodio Talents Who Built This'}
              </h3>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {squadMembers.map((member) => (
                  <button
                    key={member.id}
                    type="button"
                    onClick={() => {
                      closeCaseStudy();
                      navigate('talents', { member: member.id });
                    }}
                    className="min-h-[52px] flex items-center gap-3 rounded-xl bg-canvas hover:bg-amber-soft/50 p-2.5 text-start border border-navy/10 transition-colors"
                  >
                    <span
                      style={{ backgroundColor: member.avatarPalette.bg }}
                      className="h-9 w-9 rounded-xl text-xs font-extrabold text-amber-bright inline-flex items-center justify-center shrink-0"
                    >
                      {member.avatarInitials}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-extrabold text-navy truncate">
                        {t(member.name)}
                      </span>
                      <span className="block text-[11px] text-slate-frost truncate">
                        {t(member.specialtyBadge)}
                      </span>
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-slate-frost shrink-0" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Modal Action Bar */}
          <div className="mt-6 pt-5 border-t border-navy/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <p className="text-xs sm:text-sm font-semibold text-slate-frost">
              {lang === 'ar'
                ? 'هل ترغب في بناء مشروع مشابه بنفس الفريق والتخصصات؟'
                : 'Want our squad to scope a similar deliverable for your brand?'}
            </p>
            <div className="flex flex-wrap gap-2.5">
              <button
                type="button"
                onClick={closeCaseStudy}
                className="min-h-[44px] rounded-xl px-4 py-2.5 text-xs font-bold btn-glass"
              >
                {lang === 'ar' ? 'العودة للمعرض' : 'Back to Gallery'}
              </button>
              <button
                type="button"
                onClick={() => addChipAndGoToBuilder(activeCaseStudy.relatedEstimatorIds)}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm btn-amber"
              >
                <Rocket className="h-4 w-4" aria-hidden="true" />
                <span>{lang === 'ar' ? 'اطلب مشروعاً مشابهاً الآن' : 'Build a Similar Project'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
