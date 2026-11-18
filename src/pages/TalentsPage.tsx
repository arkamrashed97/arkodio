import React, { useMemo, useState } from 'react';
import {
  Award,
  Briefcase,
  CheckCircle2,
  ExternalLink,
  RotateCcw,
  Sparkles,
  Users,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { DEPARTMENT_TABS, STUDIO_TALENTS } from '../data/talentsHubReviews';
import { PORTFOLIO_PROJECTS } from '../data/servicesAndWork';
import { DepartmentKey } from '../types/studio';
import { GlassCard } from '../components/GlassCard';

const DEPT_CHIP_MAP: Record<Exclude<DepartmentKey, 'all'>, string[]> = {
  tech: ['chip-web'],
  visual: ['chip-video', 'chip-motion'],
  growth: ['chip-social', 'chip-ads'],
  data: ['chip-data', 'chip-va'],
};

export const TalentsPage: React.FC = () => {
  const { lang, t, params, openCaseStudy, addChipAndGoToBuilder, buildHref, navigate } = useApp();
  const [selectedDept, setSelectedDept] = useState<DepartmentKey>('all');
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const highlightedMemberId = params.member || null;

  const filteredTalents = useMemo(() => {
    return STUDIO_TALENTS.filter((member) => {
      const deptMatch = selectedDept === 'all' || member.department === selectedDept;
      const availMatch = !onlyAvailable || member.availability === 'available';
      return deptMatch && availMatch;
    });
  }, [selectedDept, onlyAvailable]);

  return (
    <div className="px-3 sm:px-6 pt-6 sm:pt-10 space-y-10">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header Card */}
        <div className="relative rounded-[28px] glass-surface-strong p-6 sm:p-10 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 right-8 h-56 w-56 rounded-full bg-amber-brand/30 blur-3xl"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-soft px-3.5 py-1 text-xs font-extrabold text-amber-deep border border-amber-brand/30">
                <Users className="h-3.5 w-3.5" aria-hidden="true" />
                {lang === 'ar' ? 'العقول الشابة خلف أركوديو' : 'The Young Specialists Behind Arkodio'}
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-navy">
                {lang === 'ar'
                  ? 'نخبة المواهب الرقمية في فرق متناغمة'
                  : 'Meet the Builders, Directors & Strategists'}
              </h1>
              <p className="text-sm sm:text-base text-slate-frost leading-relaxed">
                {lang === 'ar'
                  ? 'تصفح رؤساء الخلايا والمختصين حسب القسم، واطلع على المشاريع الفعلية التي نفذها كل عضو داخل الاستوديو.'
                  : 'Explore our core studio leads by discipline, inspect their verified project count, and jump straight into the live studio work they shipped.'}
              </p>
            </div>

            {/* Availability Filter Switch */}
            <div className="flex items-center gap-3 self-start lg:self-end">
              <button
                type="button"
                role="switch"
                aria-checked={onlyAvailable}
                onClick={() => setOnlyAvailable((v) => !v)}
                className={`min-h-[44px] inline-flex items-center gap-2.5 rounded-xl px-4 py-2 text-xs font-extrabold border transition-colors ${
                  onlyAvailable
                    ? 'bg-emerald-700 text-white border-emerald-800'
                    : 'bg-white/85 text-navy border-navy/15'
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    onlyAvailable ? 'bg-amber-bright' : 'bg-emerald-600'
                  }`}
                  aria-hidden="true"
                />
                <span>
                  {lang === 'ar' ? 'المتاحون فوراً فقط' : 'Immediately Available Only'}
                </span>
              </button>
            </div>
          </div>

          {/* Department Filter Tabs */}
          <div
            role="tablist"
            aria-label={lang === 'ar' ? 'أقسام المواهب' : 'Talent departments'}
            className="relative z-10 mt-7 pt-6 border-t border-navy/10 flex flex-wrap gap-2"
          >
            {DEPARTMENT_TABS.map((tab) => {
              const active = selectedDept === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setSelectedDept(tab.key);
                    if (highlightedMemberId) {
                      navigate('talents');
                    }
                  }}
                  className={`min-h-[44px] rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                    active
                      ? 'bg-navy text-amber-bright shadow-md'
                      : 'bg-white/80 text-slate-frost hover:text-navy border border-navy/10'
                  }`}
                >
                  {t(tab.label)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State */}
        {filteredTalents.length === 0 ? (
          <div className="glass-surface p-10 text-center space-y-4">
            <h2 className="font-display text-xl font-extrabold text-navy">
              {lang === 'ar'
                ? 'لا يوجد أعضاء مطابقون لهذا الفلتر حالياً'
                : 'No specialists match this exact filter'}
            </h2>
            <button
              type="button"
              onClick={() => {
                setSelectedDept('all');
                setOnlyAvailable(false);
              }}
              className="min-h-[44px] inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm btn-amber"
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              <span>{lang === 'ar' ? 'عرض كل المواهب' : 'Show All Talents'}</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredTalents.map((member) => {
              const isHighlighted = highlightedMemberId === member.id;
              const memberProjects = PORTFOLIO_PROJECTS.filter((p) =>
                member.featuredProjectIds.includes(p.id)
              );

              return (
                <GlassCard
                  key={member.id}
                  as="article"
                  surface={isHighlighted ? 'amber-glass' : 'glass-strong'}
                  className={`p-6 flex flex-col justify-between gap-5 ${
                    isHighlighted ? 'ring-2 ring-amber-brand' : ''
                  }`}
                >
                  <div className="space-y-4 relative z-10">
                    {/* Top Profile Row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3.5">
                        {/* Studio Geometric Portrait Avatar */}
                        <div
                          style={{ backgroundColor: member.avatarPalette.bg }}
                          className="relative h-14 w-14 rounded-2xl flex items-center justify-center text-amber-bright font-display text-lg font-extrabold shadow-md shrink-0 border-2 border-amber-brand/50"
                        >
                          {member.avatarInitials}
                          <span
                            aria-hidden="true"
                            className={`absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white ${
                              member.availability === 'available'
                                ? 'bg-emerald-500'
                                : 'bg-amber-brand'
                            }`}
                          />
                        </div>

                        <div>
                          <h2 className="font-display text-lg font-extrabold text-navy">
                            {t(member.name)}
                          </h2>
                          <p className="text-xs font-bold text-slate-frost">
                            {t(member.role)}
                          </p>
                          <span className="mt-1 inline-block rounded-md bg-amber-soft px-2 py-0.5 text-[11px] font-extrabold text-amber-deep border border-amber-brand/30">
                            {t(member.specialtyBadge)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-frost leading-relaxed">
                      {t(member.bio)}
                    </p>

                    {/* Completed Projects & Availability Metrics */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <div className="rounded-xl bg-white/80 p-2.5 border border-navy/8">
                        <div className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-frost">
                          <Award className="h-3.5 w-3.5 text-amber-brand" aria-hidden="true" />
                          {lang === 'ar' ? 'مشاريع منجزة' : 'Studio Builds'}
                        </div>
                        <div className="font-display text-lg font-extrabold text-navy">
                          {member.completedProjects}
                        </div>
                      </div>

                      <div className="rounded-xl bg-white/80 p-2.5 border border-navy/8">
                        <div className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-frost">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                          {lang === 'ar' ? 'الحالة' : 'Status'}
                        </div>
                        <div className="text-xs font-extrabold text-navy mt-1">
                          {member.availability === 'available'
                            ? lang === 'ar'
                              ? 'متاح لمشروع جديد'
                              : 'Ready for Sprint'
                            : lang === 'ar'
                              ? 'متاح الأسبوع القادم'
                              : 'Next Sprint Slot'}
                        </div>
                      </div>
                    </div>

                    {/* Top Skills */}
                    <div>
                      <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-frost mb-1.5">
                        {lang === 'ar' ? 'أبرز المهارات' : 'Core Skills'}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {member.skills.map((skill) => (
                          <span
                            key={skill}
                            dir="ltr"
                            className="rounded-lg bg-navy/[0.06] px-2.5 py-1 text-[11px] font-bold text-navy"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Featured Studio Work Links + Request Specialist CTA */}
                  <div className="pt-4 border-t border-navy/10 space-y-3 relative z-10">
                    <div>
                      <div className="text-[11px] font-extrabold text-navy mb-1.5">
                        {lang === 'ar'
                          ? 'أعمال مميزة داخل الاستوديو:'
                          : 'Featured Studio Work:'}
                      </div>
                      <div className="space-y-1.5">
                        {memberProjects.slice(0, 2).map((proj) => (
                          <button
                            key={proj.id}
                            type="button"
                            onClick={() => openCaseStudy(proj)}
                            className="w-full min-h-[38px] flex items-center justify-between gap-2 rounded-xl bg-white/85 hover:bg-amber-soft/60 px-3 py-1.5 text-xs font-bold text-navy border border-navy/10 transition-colors text-start"
                          >
                            <span className="truncate">{t(proj.title)}</span>
                            <ExternalLink className="h-3.5 w-3.5 text-amber-deep shrink-0" aria-hidden="true" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => addChipAndGoToBuilder(DEPT_CHIP_MAP[member.department])}
                      className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold btn-navy"
                    >
                      <Briefcase className="h-3.5 w-3.5 text-amber-bright" aria-hidden="true" />
                      <span>
                        {lang === 'ar'
                          ? `اطلب فريق ${t(member.name).split(' ')[0]}`
                          : `Work with ${member.name.en.split(' ')[0]}'s Pod`}
                      </span>
                    </button>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        )}

        {/* Young Creator Roster Pitch Banner */}
        <div className="glass-surface-strong p-6 sm:p-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-amber-deep">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              <span>{lang === 'ar' ? 'هل أنت موهبة شابة متميزة؟' : 'Are You a Top Young Creator or Engineer?'}</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-navy">
              {lang === 'ar'
                ? 'قدم معرض أعمالك وانضم إلى خلايا أركوديو التعاونية'
                : 'Pitch Your Portfolio & Join the Arkodio Roster'}
            </h2>
            <p className="text-sm text-slate-frost">
              {lang === 'ar'
                ? 'نستقطب المبدعين في البرمجة، المونتاج، التصميم، الإعلانات، والبيانات عبر بوابة مجتمع أركوديو.'
                : 'Apply through Arkodio Hub to collaborate on paid multi-disciplinary sprints with fellow specialists.'}
            </p>
          </div>

          <a
            href={buildHref('hub', { section: 'join' })}
            className="min-h-[46px] inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm btn-amber shrink-0"
          >
            <span>{lang === 'ar' ? 'انتقل لاستمارة الانضمام' : 'Apply via Arkodio Hub'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
