import React from 'react';
import { Mail, MessageCircle, ArrowUpRight, Layers, Users, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const { lang, buildHref, addChipAndGoToBuilder } = useApp();

  return (
    <footer className="mt-20 px-3 sm:px-6 pb-8">
      <div className="mx-auto max-w-7xl navy-bento navy-surface text-white p-7 sm:p-10 lg:p-12 relative overflow-hidden">
        {/* Subtle Warm Amber Corner Bloom */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #FFB020 0%, #F5A623 60%, transparent 100%)',
          }}
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          {/* Column 1: Brand Manifesto (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo variant="light" size="lg" showSubBadge />
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md">
              {lang === 'ar'
                ? 'استوديو إبداعي وتقني يقوده نخبة من المواهب الشابة المتخصصة. نجمع هندسة الويب، المونتاج والموشن، التسويق بالنمو، وتحليل البيانات في منظومة تنفيذ واحدة.'
                : 'An end-to-end digital creative and engineering studio powered by top young specialists uniting web architecture, visual motion, performance growth, and data operations.'}
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={buildHref('contact')}
                className="min-h-[44px] inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm btn-amber"
              >
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span>{lang === 'ar' ? 'صمّم نطاق مشروعك' : 'Build Your Project Scope'}</span>
              </a>
              <a
                href={buildHref('hub')}
                className="min-h-[44px] inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-colors"
              >
                <Users className="h-4 w-4 text-amber-bright" aria-hidden="true" />
                <span>{lang === 'ar' ? 'انضم لمواهب أركوديو' : 'Join Arkodio Hub'}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Studio Architecture Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-amber-bright">
              {lang === 'ar' ? 'أقسام المنصة' : 'Studio Platform'}
            </h2>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <a href={buildHref('home')} className="inline-flex min-h-[36px] items-center hover:text-amber-bright transition-colors">
                  {lang === 'ar' ? 'الرئيسية والخدمات الشاملة' : 'Home & Bento Capabilities'}
                </a>
              </li>
              <li>
                <a href={buildHref('work')} className="inline-flex min-h-[36px] items-center hover:text-amber-bright transition-colors">
                  {lang === 'ar' ? 'معرض الأعمال ودراسات الحالة' : 'Our Work & Case Studies'}
                </a>
              </li>
              <li>
                <a href={buildHref('talents')} className="inline-flex min-h-[36px] items-center hover:text-amber-bright transition-colors">
                  {lang === 'ar' ? 'نخبة المواهب والفريق' : 'Our Talents & Squads'}
                </a>
              </li>
              <li>
                <a href={buildHref('hub')} className="inline-flex min-h-[36px] items-center hover:text-amber-bright transition-colors">
                  {lang === 'ar' ? 'بوابة التعاون ومجتمع أركوديو' : 'Arkodio Collaboration Hub'}
                </a>
              </li>
              <li>
                <a href={buildHref('reviews')} className="inline-flex min-h-[36px] items-center hover:text-amber-bright transition-colors">
                  {lang === 'ar' ? 'جدار آراء العملاء (٤.٩/٥)' : 'Client Wall & Reviews (4.9/5)'}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Scope Shortcuts & Studio Desk (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-amber-bright">
              {lang === 'ar' ? 'ابدأ بتحديد تخصصك فوراً' : 'Instant Service Bundles'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {[
                { ids: ['chip-web', 'chip-branding'], label: { en: 'Web + Brand Launch', ar: 'موقع + هوية كاملة' } },
                { ids: ['chip-video', 'chip-motion', 'chip-ads'], label: { en: 'Reels + Motion + Ads', ar: 'ريلز + موشن + إعلانات' } },
                { ids: ['chip-data', 'chip-va'], label: { en: 'BI Analytics + VA Pod', ar: 'تحليل بيانات + تشغيل رقمي' } },
                { ids: ['chip-social', 'chip-bizdev'], label: { en: 'Social + B2B Growth', ar: 'سوشيال + تطوير أعمال' } },
              ].map((bundle, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => addChipAndGoToBuilder(bundle.ids)}
                  className="min-h-[38px] inline-flex items-center gap-1.5 rounded-xl bg-white/[0.08] hover:bg-amber-brand hover:text-navy px-3 py-1.5 text-xs font-semibold text-slate-200 border border-white/15 transition-colors"
                >
                  <Layers className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{bundle.label[lang]}</span>
                </button>
              ))}
            </div>

            <div className="pt-2 space-y-2 text-sm text-slate-300">
              <a
                href="mailto:hello@arkodio.studio"
                className="min-h-[40px] inline-flex items-center gap-2 hover:text-amber-bright transition-colors"
              >
                <Mail className="h-4 w-4 text-amber-bright" aria-hidden="true" />
                <span dir="ltr">hello@arkodio.studio</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <MessageCircle className="h-4 w-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>
                  {lang === 'ar'
                    ? 'فرق عمل مرنة عبر القاهرة، الرياض، ودبي (رد خلال ساعتين)'
                    : 'Distributed MENA & Global Pods · Under 2-hour response window'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Identity Strip */}
        <div className="relative z-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-300">
          <p>
            © {new Date().getFullYear()} Arkodio Studio.{' '}
            {lang === 'ar'
              ? 'جميع الحقوق محفوظة — صُنع بشغف المواهب الرقمية الشابة.'
              : 'All rights reserved. Crafted by young multi-disciplinary digital builders.'}
          </p>
          <p dir="ltr" className="font-mono text-[11px] text-amber-bright">
            &lt;Arkodio /&gt; · RTL + LTR Ready
          </p>
        </div>
      </div>
    </footer>
  );
};
