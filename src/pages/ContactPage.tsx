import React, { useMemo, useState } from 'react';
import {
  Check,
  CheckCircle2,
  ChevronDown,
  Copy,
  Layers,
  Mail,
  MessageCircle,
  Rocket,
  Share2,
  Sparkles,
  Users,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ESTIMATOR_CHIPS } from '../data/servicesAndWork';
import { STUDIO_FAQS } from '../data/talentsHubReviews';
import { GlassCard } from '../components/GlassCard';

const TIMELINE_OPTIONS = [
  {
    id: 'rush',
    multiplier: 1.25,
    label: { en: 'Express Sprint (1 to 2 Weeks)', ar: 'مسار سريع مكثف (١ إلى ٢ أسبوع)' },
    desc: { en: 'Priority parallel pod execution', ar: 'أولوية قصوى وفريق متفرغ بالكامل' },
  },
  {
    id: 'standard',
    multiplier: 1.0,
    label: { en: 'Balanced Launch (3 to 5 Weeks)', ar: 'إطلاق متوازن (٣ إلى ٥ أسابيع)' },
    desc: { en: 'Ideal cadence for multi-service builds', ar: 'الإيقاع المثالي للمشاريع المتكاملة' },
  },
  {
    id: 'comprehensive',
    multiplier: 0.95,
    label: { en: 'Full Flagship Ecosystem (6 to 8 Weeks)', ar: 'منظومة شاملة كبرى (٦ إلى ٨ أسابيع)' },
    desc: { en: 'Deep platform + brand + data rollout', ar: 'بناء عميق للمنصة والهوية والبيانات' },
  },
  {
    id: 'retainer',
    multiplier: 0.9,
    label: { en: 'Monthly Growth & Ops Retainer', ar: 'شراكة تشغيل ونمو شهرية مستمرة' },
    desc: { en: 'Dedicated ongoing creative & tech pod', ar: 'فريق شهري مخصص للتطوير والمحتوى والإعلانات' },
  },
];

const GOAL_CHIPS = [
  { id: 'launch', label: { en: 'Launch New Brand / Product', ar: 'إطلاق علامة أو منتج جديد' } },
  { id: 'roas', label: { en: 'Scale Sales & Ad ROAS', ar: 'مضاعفة المبيعات وعائد الإعلانات' } },
  { id: 'rebrand', label: { en: 'Upgrade Visual & Web Presence', ar: 'تطوير الهوية والموقع الحالي' } },
  { id: 'content', label: { en: 'High-Retention Video & Reels Engine', ar: 'صناعة محتوى وفيديوهات عالية الانتشار' } },
  { id: 'ops', label: { en: 'Automate Dashboards & Data Ops', ar: 'أتمتة لوحات البيانات والعمليات' } },
];

export const ContactPage: React.FC = () => {
  const {
    lang,
    t,
    preselectedChips,
    toggleEstimatorChip,
    setPreselectedChips,
  } = useApp();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [timelineId, setTimelineId] = useState<string>('standard');
  const [selectedGoals, setSelectedGoals] = useState<string[]>(['launch', 'roas']);

  // Contact Details
  const [clientName, setClientName] = useState('');
  const [clientContact, setClientContact] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [formError, setFormError] = useState('');
  const [briefReference, setBriefReference] = useState<string | null>(null);

  // Quick copy email state
  const [copiedEmail, setCopiedEmail] = useState(false);
  // FAQ Accordion state
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const selectedServiceObjects = useMemo(
    () => ESTIMATOR_CHIPS.filter((c) => preselectedChips.includes(c.id)),
    [preselectedChips]
  );

  const selectedTimeline =
    TIMELINE_OPTIONS.find((tl) => tl.id === timelineId) || TIMELINE_OPTIONS[1];

  const estimateSummary = useMemo(() => {
    const rawPoints = selectedServiceObjects.reduce((sum, s) => sum + s.basePoints, 0);
    const multiDiscount = selectedServiceObjects.length >= 3 ? 0.9 : 1;
    const low = Math.round(rawPoints * selectedTimeline.multiplier * multiDiscount);
    const high = Math.round(low * 1.28);
    const estDays = Math.max(
      5,
      Math.round(
        (selectedServiceObjects.reduce((sum, s) => sum + s.baseDays, 0) * 0.65) /
          (timelineId === 'rush' ? 1.35 : 1)
      )
    );
    return { low, high, estDays };
  }, [selectedServiceObjects, selectedTimeline, timelineId]);

  const toggleGoal = (goalId: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId) ? prev.filter((g) => g !== goalId) : [...prev, goalId]
    );
  };

  const handleStepNext = (targetStep: 1 | 2 | 3) => {
    if (targetStep > 1 && preselectedChips.length === 0) {
      setFormError(
        lang === 'ar'
          ? 'يرجى اختيار خدمة واحدة على الأقل للمتابعة.'
          : 'Please select at least one service chip to calculate your squad.'
      );
      return;
    }
    setFormError('');
    setStep(targetStep);
  };

  const handleSubmitBrief = (e: React.FormEvent) => {
    e.preventDefault();
    if (preselectedChips.length === 0) {
      setFormError(
        lang === 'ar' ? 'يرجى اختيار خدمة واحدة على الأقل.' : 'Please choose at least one service.'
      );
      setStep(1);
      return;
    }
    if (!clientName.trim() || !clientContact.trim()) {
      setFormError(
        lang === 'ar'
          ? 'يرجى إدخال اسمك وبريدك الإلكتروني أو رقم واتساب للتواصل.'
          : 'Please enter your name and email or WhatsApp number.'
      );
      return;
    }
    setFormError('');
    const code = `ARK-${Math.floor(1000 + Math.random() * 9000)}`;
    setBriefReference(code);
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('hello@arkodio.studio').catch(() => {});
    }
    setCopiedEmail(true);
    window.setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <div className="px-3 sm:px-6 pt-6 sm:pt-10 space-y-16">
      <div className="mx-auto max-w-7xl space-y-14">
        {/* Page Header */}
        <div className="space-y-3 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-soft px-3.5 py-1 text-xs font-extrabold text-amber-deep border border-amber-brand/30">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {lang === 'ar' ? 'مصمم المشاريع التفاعلي والتواصل الذكي' : 'Interactive Multi-Step Project Estimator'}
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-navy">
            {lang === 'ar'
              ? 'ابنِ نطاق مشروعك وحدد فريقك في ٣ خطوات ذكية'
              : 'Configure Your Services, Timeline & Squad'}
          </h1>
          <p className="text-sm sm:text-base text-slate-frost leading-relaxed">
            {lang === 'ar'
              ? 'انقر على الخدمات التي تحتاجها علامتك، اختر الإطار الزمني وأهدافك، واحصل فوراً على تصور الفريق والتكلفة التقديرية.'
              : 'Click chips to combine web engineering, visual production, growth campaigns, or data ops, then send your blueprint straight to our studio desk.'}
          </p>
        </div>

        {/* =================================================================
            1. MULTI-STEP PROJECT BUILDER + LIVE BLUEPRINT SIDEBAR
        ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          {/* LEFT: 3-Step Interactive Builder (8 cols) */}
          <div className="lg:col-span-8 glass-surface-strong p-5 sm:p-8 space-y-6">
            {/* Step Progress Pills */}
            <div className="grid grid-cols-3 gap-2 pb-5 border-b border-navy/10">
              {[
                { num: 1 as const, label: { en: '1. Select Services', ar: '١. اختر الخدمات' } },
                { num: 2 as const, label: { en: '2. Timeline & Pace', ar: '٢. المدة الزمنية' } },
                { num: 3 as const, label: { en: '3. Goals & Launch', ar: '٣. الأهداف والإرسال' } },
              ].map((s) => {
                const active = step === s.num;
                const done = step > s.num || Boolean(briefReference);
                return (
                  <button
                    key={s.num}
                    type="button"
                    onClick={() => !briefReference && handleStepNext(s.num)}
                    className={`min-h-[44px] rounded-xl px-3 py-2 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 transition-all ${
                      active
                        ? 'bg-navy text-amber-bright shadow-md'
                        : done
                          ? 'bg-amber-soft text-navy border border-amber-brand/40'
                          : 'bg-white/75 text-slate-frost border border-navy/10'
                    }`}
                  >
                    {done && <Check className="h-3.5 w-3.5 text-emerald-700 shrink-0" aria-hidden="true" />}
                    <span className="truncate">{t(s.label)}</span>
                  </button>
                );
              })}
            </div>

            {formError && (
              <p role="alert" className="rounded-xl bg-red-50 border border-red-200 px-4 py-2.5 text-xs font-bold text-red-800">
                {formError}
              </p>
            )}

            {briefReference ? (
              /* Confirmation Receipt State */
              <div className="rounded-2xl bg-white p-6 sm:p-8 border-2 border-amber-brand/50 space-y-5 text-center">
                <span className="mx-auto h-14 w-14 rounded-2xl bg-navy text-amber-bright inline-flex items-center justify-center">
                  <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                </span>
                <div className="space-y-1.5">
                  <span
                    dir="ltr"
                    className="inline-block rounded-lg bg-amber-soft px-3 py-1 font-mono text-xs font-extrabold text-amber-deep"
                  >
                    BRIEF ID: {briefReference}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy">
                    {lang === 'ar'
                      ? `تم استلام مخطط مشروعك يا ${clientName}!`
                      : `Project Blueprint Locked In, ${clientName}!`}
                  </h2>
                  <p className="text-sm text-slate-frost max-w-lg mx-auto">
                    {lang === 'ar'
                      ? 'يقوم قائد الاستوديو الآن بتجهيز عرض فني ومالي مفصل بناءً على التخصصات التي اخترتها، وسنتواصل معك خلال ساعتين.'
                      : 'Our studio lead is assembling your exact multi-disciplinary pod and milestone roadmap. Expect a personal reply within 2 business hours.'}
                  </p>
                </div>

                <div className="rounded-xl bg-canvas p-4 text-start space-y-2 border border-navy/10">
                  <div className="text-xs font-extrabold text-navy">
                    {lang === 'ar' ? 'ملخص الخدمات المختارة:' : 'Selected Capabilities:'}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedServiceObjects.map((item) => (
                      <span
                        key={item.id}
                        className="rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-navy border border-navy/10"
                      >
                        {t(item.label)}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setBriefReference(null);
                    setStep(1);
                  }}
                  className="min-h-[44px] rounded-xl px-5 py-2.5 text-xs font-extrabold btn-navy"
                >
                  {lang === 'ar' ? 'تصميم مشروع جديد آخر' : 'Configure Another Project'}
                </button>
              </div>
            ) : step === 1 ? (
              /* STEP 1: Service Chips */
              <div className="space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-extrabold text-navy">
                      {lang === 'ar'
                        ? 'ما الخدمات التي تحتاجها في مشروعك؟'
                        : 'Which capabilities should we combine for you?'}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-frost">
                      {lang === 'ar'
                        ? 'اختر ٣ خدمات أو أكثر للحصول تلقائياً على خصم تناغم الفريق ١٠٪'
                        : 'Select 3+ capabilities to unlock our 10% Multi-Disciplinary Pod bundle'}
                    </p>
                  </div>

                  {preselectedChips.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setPreselectedChips([])}
                      className="min-h-[38px] rounded-lg px-3 py-1.5 text-xs font-bold text-slate-frost hover:text-navy bg-white/80 border border-navy/10"
                    >
                      {lang === 'ar' ? 'مسح التحديد' : 'Clear Selection'}
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ESTIMATOR_CHIPS.map((chip) => {
                    const selected = preselectedChips.includes(chip.id);
                    return (
                      <button
                        key={chip.id}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => toggleEstimatorChip(chip.id)}
                        className={`min-h-[60px] rounded-2xl p-3.5 text-start flex items-center justify-between gap-3 border transition-all ${
                          selected
                            ? 'bg-navy text-white border-navy shadow-md'
                            : 'bg-white/85 hover:bg-white text-navy border-navy/12'
                        }`}
                      >
                        <div>
                          <div className="text-xs sm:text-sm font-extrabold">
                            {t(chip.label)}
                          </div>
                          <div
                            className={`text-[11px] mt-0.5 ${
                              selected ? 'text-amber-bright' : 'text-slate-frost'
                            }`}
                          >
                            + {t(chip.squadRole)}
                          </div>
                        </div>
                        <span
                          className={`h-6 w-6 rounded-lg inline-flex items-center justify-center shrink-0 ${
                            selected
                              ? 'bg-amber-bright text-navy'
                              : 'bg-canvas text-slate-400 border border-navy/10'
                          }`}
                        >
                          <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleStepNext(2)}
                    className="min-h-[48px] inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm btn-amber"
                  >
                    <span>{lang === 'ar' ? 'التالي: اختيار المدة الزمنية' : 'Next: Select Timeline'}</span>
                  </button>
                </div>
              </div>
            ) : step === 2 ? (
              /* STEP 2: Timeline Selection */
              <div className="space-y-5">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-navy">
                    {lang === 'ar'
                      ? 'ما الإطار الزمني المفضل للتنفيذ؟'
                      : 'How fast do you need to launch?'}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-frost">
                    {lang === 'ar'
                      ? 'نضبط حجم خلية العمل حسب سرعة الإطلاق المطلوبة.'
                      : 'We size your parallel talent pod around your target launch window.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {TIMELINE_OPTIONS.map((tl) => {
                    const active = timelineId === tl.id;
                    return (
                      <button
                        key={tl.id}
                        type="button"
                        aria-pressed={active}
                        onClick={() => setTimelineId(tl.id)}
                        className={`rounded-2xl p-4 text-start border transition-all space-y-1 ${
                          active
                            ? 'bg-navy text-white border-navy shadow-md'
                            : 'bg-white/85 hover:bg-white text-navy border-navy/12'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-extrabold">{t(tl.label)}</span>
                          {active && (
                            <span className="h-2.5 w-2.5 rounded-full bg-amber-bright" aria-hidden="true" />
                          )}
                        </div>
                        <p className={`text-xs ${active ? 'text-slate-300' : 'text-slate-frost'}`}>
                          {t(tl.desc)}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-3 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="min-h-[46px] rounded-xl px-5 py-2.5 text-xs sm:text-sm btn-glass"
                  >
                    {lang === 'ar' ? 'السابق' : 'Back'}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStepNext(3)}
                    className="min-h-[48px] rounded-xl px-6 py-3 text-sm btn-amber"
                  >
                    {lang === 'ar' ? 'التالي: أهداف المشروع والتواصل' : 'Next: Project Goals & Details'}
                  </button>
                </div>
              </div>
            ) : (
              /* STEP 3: Goals + Contact Submission */
              <form onSubmit={handleSubmitBrief} className="space-y-5">
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-extrabold text-navy">
                    {lang === 'ar' ? 'حدد أهدافك الرئيسية وبيانات التواصل' : 'Primary Goals & Studio Handoff'}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {GOAL_CHIPS.map((g) => {
                      const active = selectedGoals.includes(g.id);
                      return (
                        <button
                          key={g.id}
                          type="button"
                          aria-pressed={active}
                          onClick={() => toggleGoal(g.id)}
                          className={`min-h-[40px] rounded-xl px-3.5 py-1.5 text-xs font-bold border transition-all ${
                            active
                              ? 'bg-amber-brand text-navy border-amber-brand font-extrabold'
                              : 'bg-white text-slate-frost border-navy/12 hover:text-navy'
                          }`}
                        >
                          {t(g.label)}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="builder-name" className="block text-xs font-bold text-navy mb-1.5">
                      {lang === 'ar' ? 'الاسم الكامل *' : 'Your Name *'}
                    </label>
                    <input
                      id="builder-name"
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Your Name'}
                      className="w-full min-h-[44px] rounded-xl bg-white px-3.5 py-2.5 text-sm text-navy border border-navy/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="builder-contact" className="block text-xs font-bold text-navy mb-1.5">
                      {lang === 'ar' ? 'البريد أو واتساب *' : 'Email or WhatsApp *'}
                    </label>
                    <input
                      id="builder-contact"
                      type="text"
                      dir="ltr"
                      value={clientContact}
                      onChange={(e) => setClientContact(e.target.value)}
                      placeholder="name@company.com / +966..."
                      className="w-full min-h-[44px] rounded-xl bg-white px-3.5 py-2.5 text-sm text-navy border border-navy/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="builder-company" className="block text-xs font-bold text-navy mb-1.5">
                      {lang === 'ar' ? 'اسم المشروع / الشركة' : 'Brand / Company'}
                    </label>
                    <input
                      id="builder-company"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder={lang === 'ar' ? 'اختياري' : 'Optional'}
                      className="w-full min-h-[44px] rounded-xl bg-white px-3.5 py-2.5 text-sm text-navy border border-navy/15"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="builder-notes" className="block text-xs font-bold text-navy mb-1.5">
                    {lang === 'ar' ? 'ملاحظات إضافية حول فكرتك' : 'Project Brief or Reference Links'}
                  </label>
                  <textarea
                    id="builder-notes"
                    rows={3}
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    placeholder={lang === 'ar' ? 'شاركنا أي تفاصيل أو روابط تود أن يطلع عليها الفريق...' : 'Tell us what you are building, key features, or target market...'}
                    className="w-full rounded-xl bg-white px-3.5 py-2.5 text-sm text-navy border border-navy/15"
                  />
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="min-h-[46px] rounded-xl px-5 py-2.5 text-xs sm:text-sm btn-glass"
                  >
                    {lang === 'ar' ? 'السابق' : 'Back'}
                  </button>

                  <button
                    type="submit"
                    className="min-h-[48px] inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm sm:text-base btn-amber"
                  >
                    <Rocket className="h-4 w-4" aria-hidden="true" />
                    <span>
                      {lang === 'ar' ? 'إرسال مخطط المشروع الآن' : 'Submit Project Blueprint'}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT: Live Blueprint Estimator Sidebar (4 cols) */}
          <aside className="lg:col-span-4 navy-bento navy-surface text-white p-6 sm:p-7 space-y-6 sticky top-24">
            <div className="flex items-center justify-between gap-2 pb-4 border-b border-white/10">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-amber-bright">
                <Layers className="h-4 w-4" aria-hidden="true" />
                <span>{lang === 'ar' ? 'ملخص نطاق المشروع الحي' : 'Live Scope Blueprint'}</span>
              </div>
              <span className="rounded-lg bg-white/10 px-2.5 py-1 text-xs font-bold text-white">
                {selectedServiceObjects.length}{' '}
                {lang === 'ar' ? 'خدمات' : 'Selected'}
              </span>
            </div>

            {selectedServiceObjects.length === 0 ? (
              <p className="text-xs text-slate-300 leading-relaxed">
                {lang === 'ar'
                  ? 'انقر على الخدمات من القائمة لعرض التشكيلة المقترحة من المواهب والتقدير الزمني.'
                  : 'Select one or more service chips to preview your assigned talent squad and estimated sprint range.'}
              </p>
            ) : (
              <>
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-300">
                    {lang === 'ar' ? 'أعضاء الخلية المقترحون:' : 'Recommended Arkodio Pod:'}
                  </div>
                  <ul className="space-y-1.5">
                    {selectedServiceObjects.map((item) => (
                      <li
                        key={item.id}
                        className="flex items-center justify-between gap-2 rounded-xl bg-white/[0.07] px-3 py-2 text-xs border border-white/10"
                      >
                        <span className="font-bold text-white truncate">{t(item.squadRole)}</span>
                        <Users className="h-3.5 w-3.5 text-amber-bright shrink-0" aria-hidden="true" />
                      </li>
                    ))}
                  </ul>
                </div>

                {selectedServiceObjects.length >= 3 && (
                  <div className="rounded-xl bg-amber-brand/20 border border-amber-bright/40 px-3.5 py-2.5 text-xs font-bold text-amber-bright">
                    {lang === 'ar'
                      ? 'تم تفعيل خصم تناغم التخصصات المتعددة (-١٠٪)'
                      : '10% Multi-Disciplinary Synergy Bundle Applied'}
                  </div>
                )}

                <div className="rounded-2xl bg-white/[0.08] p-4 border border-white/12 space-y-3">
                  <div>
                    <div className="text-[11px] text-slate-300">
                      {lang === 'ar' ? 'الاستثمار التقديري للمشروع' : 'Estimated Sprint Investment'}
                    </div>
                    <div dir="ltr" className="font-display text-2xl sm:text-3xl font-extrabold text-amber-bright mt-0.5">
                      ${estimateSummary.low.toLocaleString()} – ${estimateSummary.high.toLocaleString()}
                    </div>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-slate-300">
                      {lang === 'ar' ? 'المدة التقديرية' : 'Estimated Delivery'}
                    </span>
                    <span className="font-extrabold text-white">
                      ~{estimateSummary.estDays}{' '}
                      {lang === 'ar' ? 'يوم عمل' : 'Business Days'}
                    </span>
                  </div>
                </div>
              </>
            )}
          </aside>
        </div>

        {/* =================================================================
            2. DIRECT QUICK-CONTACT CARDS
        ================================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <GlassCard surface="amber-glass" className="p-6 space-y-4">
            <div className="relative z-10 flex items-center justify-between">
              <span className="h-11 w-11 rounded-2xl bg-navy text-amber-bright inline-flex items-center justify-center">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-extrabold text-emerald-800 border border-emerald-200">
                {lang === 'ar' ? 'رد فوري' : 'Fastest Channel'}
              </span>
            </div>
            <div className="relative z-10 space-y-1">
              <h2 className="font-display text-lg font-extrabold text-navy">
                {lang === 'ar' ? 'واتساب الاستوديو المباشر' : 'WhatsApp Direct Desk'}
              </h2>
              <p className="text-xs text-slate-frost">
                {lang === 'ar'
                  ? 'تحدث مباشرة مع منسق المشاريع لمناقشة فكرتك صوتياً أو نصياً.'
                  : 'Chat directly with a studio producer for rapid scoping & voice notes.'}
              </p>
            </div>
            <a
              href="https://wa.me/201000000000"
              target="_blank"
              rel="noreferrer"
              className="relative z-10 min-h-[44px] w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold btn-navy"
            >
              <span>{lang === 'ar' ? 'بدء محادثة واتساب' : 'Message on WhatsApp'}</span>
            </a>
          </GlassCard>

          <GlassCard surface="glass-strong" className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="h-11 w-11 rounded-2xl bg-navy text-amber-bright inline-flex items-center justify-center">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </span>
              <span dir="ltr" className="text-xs font-bold text-slate-frost">
                hello@arkodio.studio
              </span>
            </div>
            <div className="space-y-1">
              <h2 className="font-display text-lg font-extrabold text-navy">
                {lang === 'ar' ? 'البريد الرسمي وكراسات الشروط' : 'Email & RFP Briefs'}
              </h2>
              <p className="text-xs text-slate-frost">
                {lang === 'ar'
                  ? 'مثالي لإرسال ملفات الهوية والعروض الرسمية وكراسات المواصفات.'
                  : 'Send detailed RFPs, decks, or enterprise partnership inquiries.'}
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href="mailto:hello@arkodio.studio"
                className="flex-1 min-h-[44px] inline-flex items-center justify-center rounded-xl px-3 py-2 text-xs font-extrabold btn-amber"
              >
                {lang === 'ar' ? 'إرسال بريد' : 'Send Email'}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="min-h-[44px] inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-bold btn-glass"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-700" aria-hidden="true" />
                    <span>{lang === 'ar' ? 'تم النسخ' : 'Copied'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{lang === 'ar' ? 'نسخ' : 'Copy'}</span>
                  </>
                )}
              </button>
            </div>
          </GlassCard>

          <GlassCard surface="glass-strong" className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="h-11 w-11 rounded-2xl bg-navy text-amber-bright inline-flex items-center justify-center">
                <Share2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-xs font-bold text-slate-frost">@arkodio.studio</span>
            </div>
            <div className="space-y-1">
              <h2 className="font-display text-lg font-extrabold text-navy">
                {lang === 'ar' ? 'قنواتنا الإبداعية' : 'Studio Social Channels'}
              </h2>
              <p className="text-xs text-slate-frost">
                {lang === 'ar'
                  ? 'شاهد كواليس المشاريع اليومية وأحدث تجارب الموشن والبرمجة.'
                  : 'Watch daily behind-the-scenes reels, UI motion breakdowns, and case drops.'}
              </p>
            </div>
            <div dir="ltr" className="grid grid-cols-2 gap-2 text-xs font-extrabold">
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="min-h-[40px] flex items-center justify-center rounded-xl bg-canvas hover:bg-amber-soft text-navy border border-navy/10 transition-colors"
              >
                Behance
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="min-h-[40px] flex items-center justify-center rounded-xl bg-canvas hover:bg-amber-soft text-navy border border-navy/10 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </GlassCard>
        </section>

        {/* =================================================================
            3. STUDIO FAQ ACCORDION
        ================================================================= */}
        <section className="space-y-6">
          <div className="space-y-1.5">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy">
              {lang === 'ar' ? 'الأسئلة الشائعة حول آلية العمل' : 'Studio Workflow & Guarantee FAQs'}
            </h2>
            <p className="text-sm text-slate-frost">
              {lang === 'ar'
                ? 'إجابات واضحة حول كيف تدير خلايانا المشاريع ثنائية اللغة وتضمن الجودة.'
                : 'Specific answers on how our multi-disciplinary pods scope, deliver, and hand off work.'}
            </p>
          </div>

          <div className="space-y-3">
            {STUDIO_FAQS.map((faq) => {
              const expanded = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="glass-surface-strong overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    aria-expanded={expanded}
                    onClick={() => setOpenFaqId((prev) => (prev === faq.id ? null : faq.id))}
                    className="w-full min-h-[56px] px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-start"
                  >
                    <span className="font-display text-sm sm:text-base font-extrabold text-navy">
                      {t(faq.question)}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-navy shrink-0 transition-transform duration-200 ${
                        expanded ? 'rotate-180 text-amber-deep' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {expanded && (
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-frost leading-relaxed border-t border-navy/8">
                      {t(faq.answer)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
