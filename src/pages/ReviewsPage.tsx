import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  MessageSquarePlus,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BEFORE_AFTER_CASES } from '../data/talentsHubReviews';
import { GlassCard } from '../components/GlassCard';

export const ReviewsPage: React.FC = () => {
  const { lang, isRtl, t, reviews, addClientReview, buildHref } = useApp();

  const [selectedCat, setSelectedCat] = useState<'all' | 'tech' | 'visual' | 'growth' | 'data'>('all');

  // Submit Review Form State
  const [clientName, setClientName] = useState('');
  const [clientRole, setClientRole] = useState('');
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState<'tech' | 'visual' | 'growth' | 'data'>('tech');
  const [projectType, setProjectType] = useState('');
  const [rating, setRating] = useState(5);
  const [outcomeHighlight, setOutcomeHighlight] = useState('');
  const [quote, setQuote] = useState('');
  const [formError, setFormError] = useState('');
  const [submittedBanner, setSubmittedBanner] = useState(false);

  const filteredReviews = useMemo(() => {
    if (selectedCat === 'all') return reviews;
    return reviews.filter((r) => r.category === selectedCat);
  }, [reviews, selectedCat]);

  const averageRating = useMemo(() => {
    if (reviews.length === 0) return '4.9';
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return Math.min(5, Math.max(4.8, sum / reviews.length)).toFixed(1);
  }, [reviews]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !company.trim() || !quote.trim()) {
      setFormError(
        lang === 'ar'
          ? 'يرجى إدخال الاسم واسم الشركة ونص التقييم.'
          : 'Please fill in your name, company/brand, and review feedback.'
      );
      return;
    }
    setFormError('');
    addClientReview({
      clientName: clientName.trim(),
      clientRole: clientRole.trim() || (lang === 'ar' ? 'شريك ومؤسس' : 'Founder'),
      company: company.trim(),
      category,
      projectType:
        projectType.trim() ||
        (lang === 'ar' ? 'مشروع رقمي متكامل' : 'End-to-End Studio Sprint'),
      rating,
      quote: quote.trim(),
      outcomeHighlight: outcomeHighlight.trim() || undefined,
    });
    setClientName('');
    setClientRole('');
    setCompany('');
    setProjectType('');
    setOutcomeHighlight('');
    setQuote('');
    setRating(5);
    setSubmittedBanner(true);
  };

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="px-3 sm:px-6 pt-6 sm:pt-10 space-y-16">
      <div className="mx-auto max-w-7xl space-y-14">
        {/* =================================================================
            1. OVERALL STUDIO RATING HERO (4.9 / 5.0)
        ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 glass-surface-strong p-6 sm:p-10 flex flex-col justify-between gap-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-soft px-3.5 py-1 text-xs font-extrabold text-amber-deep border border-amber-brand/30">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                {lang === 'ar' ? 'سجل ثقة العملاء الموثق' : 'Verified Client Proof Hub'}
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-navy">
                {lang === 'ar'
                  ? 'آراء العملاء ونتائج الأعمال قبل وبعد أركوديو'
                  : 'Measured Outcomes & Client Wall'}
              </h1>
              <p className="text-sm sm:text-base text-slate-frost leading-relaxed">
                {lang === 'ar'
                  ? 'نؤمن أن جودة التصميم والكود تقاس بالأثر التجاري الفعلي: سرعة التحويل، عائد الإعلانات، ودقة العمليات.'
                  : 'Every testimonial is backed by shipped deliverables, transparent metrics, and long-term studio partnerships.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#submit-review-form"
                className="min-h-[46px] inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm btn-amber"
              >
                <MessageSquarePlus className="h-4 w-4" aria-hidden="true" />
                <span>{lang === 'ar' ? 'أضف تقييمك كعميل' : 'Submit Your Review'}</span>
              </a>
              <a
                href={buildHref('contact')}
                className="min-h-[46px] inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm btn-navy"
              >
                <span>{lang === 'ar' ? 'ابدأ قصة نجاحك معنا' : 'Start Your Project'}</span>
              </a>
            </div>
          </div>

          {/* 4.9 / 5.0 Midnight Navy Rating Breakdown */}
          <div className="lg:col-span-5 navy-bento navy-surface text-white p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-display text-5xl sm:text-6xl font-extrabold text-amber-bright">
                  {averageRating}
                  <span className="text-2xl text-slate-400">/5</span>
                </div>
                <div className="mt-2 flex items-center gap-1 text-amber-bright">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-bright" aria-hidden="true" />
                  ))}
                </div>
              </div>

              <div className="text-end space-y-1">
                <div className="rounded-xl bg-white/10 px-3 py-1.5 text-xs font-extrabold text-white border border-white/15">
                  99.2% {lang === 'ar' ? 'تسليم بالموعد' : 'On-Time QA'}
                </div>
                <div className="text-xs text-slate-300">
                  76% {lang === 'ar' ? 'عقود متجددة' : 'Repeat Partners'}
                </div>
              </div>
            </div>

            {/* Star Distribution Bars */}
            <div className="space-y-2 text-xs">
              {[
                { stars: '5 ★', pct: 92 },
                { stars: '4 ★', pct: 8 },
                { stars: '3 ★', pct: 0 },
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <span dir="ltr" className="w-8 font-bold text-amber-bright">
                    {row.stars}
                  </span>
                  <div className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div
                      style={{ width: `${row.pct}%` }}
                      className="h-full rounded-full bg-amber-bright"
                    />
                  </div>
                  <span dir="ltr" className="w-9 text-right text-slate-300 font-semibold">
                    {row.pct}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =================================================================
            2. BEFORE / AFTER IMPACT METRICS
        ================================================================= */}
        <section className="space-y-6">
          <div className="space-y-1.5">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-amber-deep">
              <TrendingUp className="h-4 w-4" aria-hidden="true" />
              {lang === 'ar' ? 'مقارنات الأداء الموثقة' : 'Before & After Studio Benchmarks'}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy">
              {lang === 'ar' ? 'التحول الرقمي بلغة الأرقام' : 'Measurable Lift Across Every Pillar'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {BEFORE_AFTER_CASES.map((item) => (
              <GlassCard
                key={item.id}
                surface="amber-glass"
                className="p-5 sm:p-6 flex flex-col justify-between gap-4"
              >
                <div className="relative z-10 space-y-1">
                  <span className="text-[11px] font-extrabold text-amber-deep">
                    {t(item.discipline)}
                  </span>
                  <h3 className="font-display text-base font-extrabold text-navy">
                    {t(item.client)}
                  </h3>
                  <p className="text-xs text-slate-frost">{t(item.metricName)}</p>
                </div>

                <div className="relative z-10 rounded-2xl bg-white/90 p-3.5 border border-navy/10 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] font-bold uppercase text-slate-frost">
                      {lang === 'ar' ? 'قبل' : 'Before'}
                    </div>
                    <div dir="ltr" className="font-display text-lg font-bold text-slate-500 line-through">
                      {item.beforeValue}
                    </div>
                  </div>

                  <ArrowIcon className="h-4 w-4 text-amber-brand shrink-0" aria-hidden="true" />

                  <div className="text-end">
                    <div className="text-[10px] font-bold uppercase text-emerald-700">
                      {lang === 'ar' ? 'بعد' : 'After'}
                    </div>
                    <div dir="ltr" className="font-display text-xl font-extrabold text-navy">
                      {item.afterValue}
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between gap-2 text-[11px]">
                  <span className="rounded-lg bg-navy text-amber-bright px-2.5 py-1 font-extrabold">
                    {t(item.deltaLabel)}
                  </span>
                  <span className="text-slate-frost font-medium truncate">
                    {t(item.timeframe)}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* =================================================================
            3. CATEGORIZED CLIENT FEEDBACK WALL
        ================================================================= */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy">
              {lang === 'ar' ? 'جدار تقييمات العملاء' : 'Categorized Client Feedback'}
            </h2>

            <div role="tablist" className="flex flex-wrap gap-2">
              {[
                { key: 'all' as const, label: { en: 'All Reviews', ar: 'جميع الآراء' } },
                { key: 'tech' as const, label: { en: 'Tech & Web', ar: 'الويب والمنصات' } },
                { key: 'visual' as const, label: { en: 'Video & Brand', ar: 'المرئيات والهوية' } },
                { key: 'growth' as const, label: { en: 'Social & Ads', ar: 'النمو والإعلانات' } },
                { key: 'data' as const, label: { en: 'Data & Ops', ar: 'البيانات والعمليات' } },
              ].map((tab) => {
                const active = selectedCat === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCat(tab.key)}
                    className={`min-h-[42px] rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                      active
                        ? 'bg-navy text-amber-bright shadow-sm'
                        : 'glass-pill text-slate-frost hover:text-navy'
                    }`}
                  >
                    {t(tab.label)}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {filteredReviews.map((rev) => (
              <GlassCard
                key={rev.id}
                as="article"
                surface="glass-strong"
                className="p-6 flex flex-col justify-between gap-5"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-amber-brand">
                      {Array.from({ length: Math.round(rev.rating) }).map((_, idx) => (
                        <Star
                          key={idx}
                          className="h-4 w-4 fill-amber-brand text-amber-brand"
                          aria-hidden="true"
                        />
                      ))}
                      <span className="ms-1.5 text-xs font-extrabold text-navy">
                        {rev.rating.toFixed(1)}
                      </span>
                    </div>
                    <span className="rounded-full bg-amber-soft px-3 py-1 text-xs font-extrabold text-amber-deep border border-amber-brand/30">
                      {t(rev.projectType)}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-navy leading-relaxed font-medium">
                    &ldquo;{t(rev.quote)}&rdquo;
                  </p>

                  {(rev.beforeMetric || rev.afterMetric) && (
                    <div className="rounded-xl bg-canvas p-3 border border-navy/8 space-y-1 text-xs">
                      {rev.beforeMetric && (
                        <div className="text-slate-frost font-medium">{t(rev.beforeMetric)}</div>
                      )}
                      {rev.afterMetric && (
                        <div className="text-emerald-800 font-extrabold">{t(rev.afterMetric)}</div>
                      )}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-navy/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-xl bg-navy text-amber-bright font-display text-xs font-extrabold inline-flex items-center justify-center shrink-0">
                      {rev.initials}
                    </span>
                    <div>
                      <div className="text-sm font-extrabold text-navy">{t(rev.clientName)}</div>
                      <div className="text-xs text-slate-frost">
                        {t(rev.clientRole)} · {t(rev.company)}
                      </div>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-frost">
                    {t(rev.dateLabel)}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* =================================================================
            4. INTERACTIVE "SUBMIT YOUR REVIEW" CLIENT FORM
        ================================================================= */}
        <section id="submit-review-form" className="scroll-mt-24">
          <div className="glass-surface-strong p-6 sm:p-10">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-center space-y-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-soft px-3.5 py-1 text-xs font-extrabold text-amber-deep border border-amber-brand/30">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  {lang === 'ar' ? 'شارك تجربتك مع أركوديو' : 'Worked With an Arkodio Pod?'}
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy">
                  {lang === 'ar' ? 'أضف تقييمك مباشرة إلى جدار العملاء' : 'Submit Your Client Review'}
                </h2>
                <p className="text-sm text-slate-frost">
                  {lang === 'ar'
                    ? 'يظهر تقييمك فوراً في جدار العملاء لمساعدة الشركاء الجدد على اتخاذ قرارهم.'
                    : 'Share your candid experience and project impact with our young talent teams.'}
                </p>
              </div>

              {submittedBanner && (
                <div
                  role="status"
                  className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 flex items-center gap-3 text-sm font-bold text-emerald-900"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>
                    {lang === 'ar'
                      ? 'شكراً لك! تمت إضافة تقييمك مباشرة أعلى جدار العملاء.'
                      : 'Thank you! Your review is now live at the top of the Client Wall.'}
                  </span>
                </div>
              )}

              {formError && (
                <p role="alert" className="rounded-xl bg-red-50 border border-red-200 px-4 py-2.5 text-xs font-bold text-red-800">
                  {formError}
                </p>
              )}

              <form onSubmit={handleReviewSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="rev-name" className="block text-xs font-bold text-navy mb-1.5">
                      {lang === 'ar' ? 'اسمك *' : 'Your Name *'}
                    </label>
                    <input
                      id="rev-name"
                      type="text"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Your Name'}
                      className="w-full min-h-[44px] rounded-xl bg-white px-3.5 py-2.5 text-sm text-navy border border-navy/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="rev-role" className="block text-xs font-bold text-navy mb-1.5">
                      {lang === 'ar' ? 'المنصب الوظيفي' : 'Role / Title'}
                    </label>
                    <input
                      id="rev-role"
                      type="text"
                      value={clientRole}
                      onChange={(e) => setClientRole(e.target.value)}
                      placeholder={lang === 'ar' ? 'مثال: المدير التنفيذي' : 'e.g. Founder / Marketing Lead'}
                      className="w-full min-h-[44px] rounded-xl bg-white px-3.5 py-2.5 text-sm text-navy border border-navy/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="rev-company" className="block text-xs font-bold text-navy mb-1.5">
                      {lang === 'ar' ? 'الشركة أو العلامة *' : 'Company / Brand *'}
                    </label>
                    <input
                      id="rev-company"
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={lang === 'ar' ? 'اسم الشركة' : 'Company Name'}
                      className="w-full min-h-[44px] rounded-xl bg-white px-3.5 py-2.5 text-sm text-navy border border-navy/15"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                  <div>
                    <label htmlFor="rev-cat" className="block text-xs font-bold text-navy mb-1.5">
                      {lang === 'ar' ? 'قسم الخدمة' : 'Service Pillar'}
                    </label>
                    <select
                      id="rev-cat"
                      value={category}
                      onChange={(e) => setCategory(e.target.value as 'tech' | 'visual' | 'growth' | 'data')}
                      className="w-full min-h-[44px] rounded-xl bg-white px-3.5 py-2.5 text-sm font-semibold text-navy border border-navy/15"
                    >
                      <option value="tech">{lang === 'ar' ? 'تطوير الويب والمنصات' : 'Tech & Web Dev'}</option>
                      <option value="visual">{lang === 'ar' ? 'المرئيات والموشن والهوية' : 'Visual, Video & Brand'}</option>
                      <option value="growth">{lang === 'ar' ? 'السوشيال ميديا والإعلانات' : 'Social & Paid Growth'}</option>
                      <option value="data">{lang === 'ar' ? 'تحليل البيانات والعمليات' : 'Data & Virtual Ops'}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="rev-outcome" className="block text-xs font-bold text-navy mb-1.5">
                      {lang === 'ar' ? 'أبرز نتيجة تحققت (اختياري)' : 'Key Result Achieved (Optional)'}
                    </label>
                    <input
                      id="rev-outcome"
                      type="text"
                      value={outcomeHighlight}
                      onChange={(e) => setOutcomeHighlight(e.target.value)}
                      placeholder={lang === 'ar' ? 'مثال: +٤٥٪ مبيعات المتجر' : 'e.g. +45% store conversion'}
                      className="w-full min-h-[44px] rounded-xl bg-white px-3.5 py-2.5 text-sm text-navy border border-navy/15"
                    />
                  </div>

                  {/* Interactive 1-5 Star Selector */}
                  <div>
                    <span className="block text-xs font-bold text-navy mb-1.5">
                      {lang === 'ar' ? 'تقييمك بالنجوم' : 'Star Rating'}
                    </span>
                    <div className="min-h-[44px] rounded-xl bg-white px-3 py-1.5 border border-navy/15 flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((starVal) => (
                          <button
                            key={starVal}
                            type="button"
                            onClick={() => setRating(starVal)}
                            aria-label={`${starVal} stars`}
                            className="p-1 rounded-lg hover:bg-amber-soft transition-colors"
                          >
                            <Star
                              className={`h-5 w-5 ${
                                starVal <= rating
                                  ? 'fill-amber-brand text-amber-brand'
                                  : 'text-slate-300'
                              }`}
                              aria-hidden="true"
                            />
                          </button>
                        ))}
                      </div>
                      <span className="text-xs font-extrabold text-navy">{rating}.0 / 5</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="rev-quote" className="block text-xs font-bold text-navy mb-1.5">
                    {lang === 'ar' ? 'تجربتك مع الفريق *' : 'Your Review *'}
                  </label>
                  <textarea
                    id="rev-quote"
                    rows={3}
                    value={quote}
                    onChange={(e) => setQuote(e.target.value)}
                    placeholder={lang === 'ar' ? 'اكتب رأيك بصراحة حول جودة العمل وسرعة التواصل...' : 'Tell us how the squad performed, quality of delivery, and communication...'}
                    className="w-full rounded-xl bg-white px-3.5 py-2.5 text-sm text-navy border border-navy/15"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm sm:text-base btn-amber"
                >
                  <MessageSquarePlus className="h-4 w-4" aria-hidden="true" />
                  <span>{lang === 'ar' ? 'نشر التقييم الآن' : 'Publish Client Review'}</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
