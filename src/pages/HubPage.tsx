import React, { useEffect, useState } from 'react';
import {
  CheckCircle2,
  Flame,
  Layers,
  MessageSquare,
  PlusCircle,
  Send,
  Sparkles,
  ThumbsUp,
  UserPlus,
  Users,
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HubPostCategory } from '../types/studio';
import { GlassCard } from '../components/GlassCard';

export const HubPage: React.FC = () => {
  const {
    lang,
    t,
    params,
    hubPosts,
    togglePostVote,
    addHubPost,
    addHubComment,
    hubBounties,
    joinBounty,
  } = useApp();

  // Wall state
  const [wallFilter, setWallFilter] = useState<'all' | HubPostCategory>('all');
  const [showComposer, setShowComposer] = useState(false);
  const [postAuthor, setPostAuthor] = useState('');
  const [postRole, setPostRole] = useState<'founder' | 'talent' | 'collaborator'>('talent');
  const [postCategory, setPostCategory] = useState<HubPostCategory>('pitch');
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [postTags, setPostTags] = useState('');
  const [postError, setPostError] = useState('');

  // Comments state
  const [openCommentPostId, setOpenCommentPostId] = useState<string | null>('post-1');
  const [commentAuthor, setCommentAuthor] = useState('');
  const [commentText, setCommentText] = useState('');

  // Bounty claim inline state
  const [claimingBountyId, setClaimingBountyId] = useState<string | null>(null);
  const [claimName, setClaimName] = useState('');
  const [claimSpecialty, setClaimSpecialty] = useState('');

  // Join the Roster Pitch state
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantDept, setApplicantDept] = useState('Web Development & Code');
  const [applicantPortfolio, setApplicantPortfolio] = useState('');
  const [applicantTools, setApplicantTools] = useState('');
  const [applicantPitch, setApplicantPitch] = useState('');
  const [pitchError, setPitchError] = useState('');
  const [pitchSubmitting, setPitchSubmitting] = useState(false);
  const [pitchSubmitted, setPitchSubmitted] = useState(false);

  useEffect(() => {
    if (params.section === 'join') {
      const el = document.getElementById('join-roster-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [params.section]);

  const visiblePosts =
    wallFilter === 'all' ? hubPosts : hubPosts.filter((p) => p.category === wallFilter);

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!postAuthor.trim() || !postTitle.trim() || !postBody.trim()) {
      setPostError(
        lang === 'ar'
          ? 'يرجى تعبئة الاسم وعنوان المبادرة والتفاصيل قبل النشر.'
          : 'Please complete your name, initiative title, and message before posting.'
      );
      return;
    }
    setPostError('');
    const parsedTags = postTags
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    addHubPost({
      authorName: postAuthor.trim(),
      authorRole: postRole,
      category: postCategory,
      title: postTitle.trim(),
      body: postBody.trim(),
      tags: parsedTags,
    });
    setPostTitle('');
    setPostBody('');
    setPostTags('');
    setShowComposer(false);
  };

  const handleAddComment = (e: React.FormEvent, postId: string) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const author = commentAuthor.trim() || (lang === 'ar' ? 'عضو أركوديو' : 'Studio Collaborator');
    addHubComment(postId, author, commentText.trim());
    setCommentText('');
  };

  const handleClaimBounty = (e: React.FormEvent, bountyId: string) => {
    e.preventDefault();
    if (!claimName.trim()) return;
    joinBounty(bountyId, claimName.trim(), claimSpecialty.trim() || 'Specialist');
    setClaimingBountyId(null);
    setClaimName('');
    setClaimSpecialty('');
  };

  const handlePitchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim() || !applicantEmail.trim() || !applicantPortfolio.trim() || !applicantPitch.trim()) {
      setPitchError(
        lang === 'ar'
          ? 'يرجى تعبئة الاسم والبريد الإلكتروني ورابط معرض الأعمال ونبذة سريعة عنك.'
          : 'Please enter your name, email, portfolio URL, and short craft pitch.'
      );
      return;
    }
    setPitchError('');
    setPitchSubmitting(true);
    window.setTimeout(() => {
      setPitchSubmitting(false);
      setPitchSubmitted(true);
    }, 450);
  };

  const categoryBadges: Record<HubPostCategory, { en: string; ar: string; classes: string }> = {
    update: {
      en: 'Project Update',
      ar: 'تحديث مشروع',
      classes: 'bg-navy text-amber-bright',
    },
    pitch: {
      en: 'Creative Pitch',
      ar: 'فكرة ومبادرة',
      classes: 'bg-amber-soft text-amber-deep border border-amber-brand/35',
    },
    resource: {
      en: 'Resource Share',
      ar: 'مشاركة أداة',
      classes: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    },
  };

  return (
    <div className="px-3 sm:px-6 pt-6 sm:pt-10 space-y-16">
      <div className="mx-auto max-w-7xl space-y-14">
        {/* Hub Hero Banner */}
        <div className="relative rounded-[28px] navy-bento navy-surface text-white p-6 sm:p-10 lg:p-12 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-amber-bright/25 blur-3xl"
          />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-extrabold text-amber-bright border border-white/15">
                <Users className="h-3.5 w-3.5" aria-hidden="true" />
                {lang === 'ar'
                  ? 'بوابة مجتمع وتعاون أركوديو (للأعضاء والمؤسسين والمبدعين)'
                  : 'Arkodio Member, Founder & Collaborator Portal'}
              </span>
              <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                {lang === 'ar'
                  ? 'حيث تتقاطع الأفكار والمهام المشتركة بين مواهب الاستوديو'
                  : 'Arkodio Hub: Live Studio Wall, Squad Bounties & Roster'}
              </h1>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {lang === 'ar'
                  ? 'مساحة شفافة تجمع مؤسسي الاستوديو وأعضاء الفريق لمشاركة التحديثات، التصويت على الأفكار الجديدة، التقديم على المهام الداخلية المشتركة، واستقطاب ألمع المواهب الشابة.'
                  : 'Where studio founders, core specialists, and rising creators pitch new service bundles, team up on cross-disciplinary bounties, and apply to join our talent pods.'}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setShowComposer((v) => !v)}
                className="min-h-[46px] inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm btn-amber"
              >
                <PlusCircle className="h-4 w-4" aria-hidden="true" />
                <span>{lang === 'ar' ? 'انشر فكرة أو تحديثاً' : 'Post to Idea Wall'}</span>
              </button>
              <a
                href="#join-roster-section"
                className="min-h-[46px] inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors"
              >
                <UserPlus className="h-4 w-4 text-amber-bright" aria-hidden="true" />
                <span>{lang === 'ar' ? 'انضم لقائمة المواهب' : 'Join the Roster'}</span>
              </a>
            </div>
          </div>
        </div>

        {/* =================================================================
            SECTION A + B: Live Idea Wall (Left 7 cols) + Open Bounties (Right 5 cols)
        ================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Live Idea & Collaboration Wall */}
          <section className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="font-display text-2xl font-extrabold text-navy">
                  {lang === 'ar' ? '١. جدار الأفكار والتعاون الحي' : '1. Live Idea & Collaboration Wall'}
                </h2>
                <p className="text-xs sm:text-sm text-slate-frost">
                  {lang === 'ar'
                    ? 'صوّت على المبادرات أو شارك تعليقك ومقترحك مع الفريق'
                    : 'Vote on studio initiatives, share resources, or comment directly'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowComposer((v) => !v)}
                className="min-h-[42px] inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-extrabold btn-navy"
              >
                <PlusCircle className="h-3.5 w-3.5 text-amber-bright" aria-hidden="true" />
                <span>
                  {showComposer
                    ? lang === 'ar'
                      ? 'إخفاء النموذج'
                      : 'Hide Composer'
                    : lang === 'ar'
                      ? 'منشور جديد'
                      : 'New Post'}
                </span>
              </button>
            </div>

            {/* Category Filter Pills */}
            <div role="tablist" className="flex flex-wrap gap-2">
              {[
                { key: 'all' as const, label: { en: 'All Posts', ar: 'الكل' } },
                { key: 'update' as const, label: { en: 'Project Updates', ar: 'تحديثات المشاريع' } },
                { key: 'pitch' as const, label: { en: 'Creative Pitches', ar: 'مقترحات إبداعية' } },
                { key: 'resource' as const, label: { en: 'Resource Shares', ar: 'موارد وأدوات' } },
              ].map((tab) => {
                const active = wallFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setWallFilter(tab.key)}
                    className={`min-h-[40px] rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                      active
                        ? 'bg-navy text-amber-bright'
                        : 'glass-pill text-slate-frost hover:text-navy'
                    }`}
                  >
                    {t(tab.label)}
                  </button>
                );
              })}
            </div>

            {/* Interactive New Post Composer */}
            {showComposer && (
              <form
                onSubmit={handleCreatePost}
                className="glass-surface-strong p-5 sm:p-6 space-y-4 border-2 border-amber-brand/50"
              >
                <h3 className="font-display text-lg font-extrabold text-navy">
                  {lang === 'ar' ? 'نشر مبادرة أو تحديث في مجتمع أركوديو' : 'Publish to Arkodio Studio Wall'}
                </h3>

                {postError && (
                  <p role="alert" className="rounded-xl bg-red-50 border border-red-200 px-3.5 py-2 text-xs font-bold text-red-800">
                    {postError}
                  </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label htmlFor="hub-post-author" className="block text-xs font-bold text-navy mb-1">
                      {lang === 'ar' ? 'اسمك' : 'Your Name'}
                    </label>
                    <input
                      id="hub-post-author"
                      type="text"
                      value={postAuthor}
                      onChange={(e) => setPostAuthor(e.target.value)}
                      placeholder={lang === 'ar' ? 'الاسم الكامل' : 'Your Name'}
                      className="w-full min-h-[42px] rounded-xl bg-white px-3 py-2 text-xs font-semibold text-navy border border-navy/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="hub-post-role" className="block text-xs font-bold text-navy mb-1">
                      {lang === 'ar' ? 'صفتك' : 'Role'}
                    </label>
                    <select
                      id="hub-post-role"
                      value={postRole}
                      onChange={(e) => setPostRole(e.target.value as 'founder' | 'talent' | 'collaborator')}
                      className="w-full min-h-[42px] rounded-xl bg-white px-3 py-2 text-xs font-semibold text-navy border border-navy/15"
                    >
                      <option value="talent">{lang === 'ar' ? 'موهبة أساسية' : 'Core Talent'}</option>
                      <option value="collaborator">{lang === 'ar' ? 'متعاون مبدع' : 'Collaborator'}</option>
                      <option value="founder">{lang === 'ar' ? 'مؤسس الاستوديو' : 'Studio Founder'}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="hub-post-cat" className="block text-xs font-bold text-navy mb-1">
                      {lang === 'ar' ? 'نوع المنشور' : 'Category'}
                    </label>
                    <select
                      id="hub-post-cat"
                      value={postCategory}
                      onChange={(e) => setPostCategory(e.target.value as HubPostCategory)}
                      className="w-full min-h-[42px] rounded-xl bg-white px-3 py-2 text-xs font-semibold text-navy border border-navy/15"
                    >
                      <option value="pitch">{lang === 'ar' ? 'مقترح إبداعي' : 'Creative Pitch'}</option>
                      <option value="update">{lang === 'ar' ? 'تحديث مشروع' : 'Project Update'}</option>
                      <option value="resource">{lang === 'ar' ? 'مشاركة أداة' : 'Resource Share'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="hub-post-title" className="block text-xs font-bold text-navy mb-1">
                    {lang === 'ar' ? 'عنوان الفكرة أو التحديث' : 'Initiative Headline'}
                  </label>
                  <input
                    id="hub-post-title"
                    type="text"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                    placeholder={lang === 'ar' ? 'اكتب عنواناً واضحاً...' : 'Write a concise headline...'}
                    className="w-full min-h-[42px] rounded-xl bg-white px-3.5 py-2 text-sm font-semibold text-navy border border-navy/15"
                  />
                </div>

                <div>
                  <label htmlFor="hub-post-body" className="block text-xs font-bold text-navy mb-1">
                    {lang === 'ar' ? 'التفاصيل' : 'Details'}
                  </label>
                  <textarea
                    id="hub-post-body"
                    rows={3}
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                    placeholder={lang === 'ar' ? 'اشرح الفكرة أو المورد وكيف يفيد الفريق...' : 'Describe your idea, update, or resource...'}
                    className="w-full rounded-xl bg-white px-3.5 py-2.5 text-sm text-navy border border-navy/15"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-end justify-between gap-3">
                  <div className="flex-1">
                    <label htmlFor="hub-post-tags" className="block text-xs font-bold text-navy mb-1">
                      {lang === 'ar' ? 'وسوم (مفصولة بفاصلة)' : 'Tags (comma-separated)'}
                    </label>
                    <input
                      id="hub-post-tags"
                      type="text"
                      value={postTags}
                      onChange={(e) => setPostTags(e.target.value)}
                      placeholder="React, Motion, Growth"
                      className="w-full min-h-[42px] rounded-xl bg-white px-3 py-2 text-xs font-semibold text-navy border border-navy/15"
                    />
                  </div>
                  <button
                    type="submit"
                    className="min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-xs font-extrabold btn-amber"
                  >
                    <Send className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{lang === 'ar' ? 'نشر على الجدار' : 'Publish Post'}</span>
                  </button>
                </div>
              </form>
            )}

            {/* Wall Posts List */}
            <div className="space-y-4">
              {visiblePosts.map((post) => {
                const badge = categoryBadges[post.category];
                const commentsExpanded = openCommentPostId === post.id;

                return (
                  <GlassCard
                    key={post.id}
                    as="article"
                    surface="glass-strong"
                    enableTilt={false}
                    className="p-5 sm:p-6 space-y-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <span className="h-10 w-10 rounded-xl bg-navy text-amber-bright font-display text-xs font-extrabold inline-flex items-center justify-center shrink-0">
                          {post.authorInitials}
                        </span>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-extrabold text-navy">
                              {t(post.author)}
                            </span>
                            <span className="rounded-md bg-navy/[0.06] px-2 py-0.5 text-[10px] font-bold text-slate-frost">
                              {t(post.roleLabel)}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-frost">{t(post.timeAgo)}</span>
                        </div>
                      </div>

                      <span className={`rounded-full px-3 py-1 text-[11px] font-extrabold ${badge.classes}`}>
                        {badge[lang]}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-lg font-extrabold text-navy">
                        {t(post.title)}
                      </h3>
                      <p className="text-sm text-slate-frost leading-relaxed">
                        {t(post.body)}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          dir="ltr"
                          className="rounded-lg bg-white px-2.5 py-1 text-[11px] font-bold text-navy border border-navy/10"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Vote & Comment Actions */}
                    <div className="pt-3 border-t border-navy/10 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => togglePostVote(post.id)}
                        aria-pressed={Boolean(post.votedByMe)}
                        className={`min-h-[40px] inline-flex items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-extrabold transition-colors ${
                          post.votedByMe
                            ? 'bg-amber-brand text-navy shadow-sm'
                            : 'bg-white/85 hover:bg-white text-navy border border-navy/12'
                        }`}
                      >
                        <ThumbsUp className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{post.votes}</span>
                        <span>{lang === 'ar' ? 'تأييد' : 'Support'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setOpenCommentPostId((prev) => (prev === post.id ? null : post.id))
                        }
                        aria-expanded={commentsExpanded}
                        className="min-h-[40px] inline-flex items-center gap-2 rounded-xl bg-white/85 hover:bg-white px-3.5 py-1.5 text-xs font-bold text-slate-frost hover:text-navy border border-navy/12"
                      >
                        <MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>
                          {post.comments.length}{' '}
                          {lang === 'ar' ? 'تعليقات' : 'Comments'}
                        </span>
                      </button>
                    </div>

                    {/* Expandable Comments Thread */}
                    {commentsExpanded && (
                      <div className="rounded-2xl bg-canvas/90 p-4 space-y-3 border border-navy/10">
                        {post.comments.length === 0 ? (
                          <p className="text-xs text-slate-frost">
                            {lang === 'ar'
                              ? 'كن أول من يشارك رأيه على هذه المبادرة.'
                              : 'No comments yet. Share the first studio note below.'}
                          </p>
                        ) : (
                          post.comments.map((c) => (
                            <div
                              key={c.id}
                              className="rounded-xl bg-white p-3 border border-navy/8 space-y-1"
                            >
                              <div className="flex items-center justify-between text-xs">
                                <span className="font-extrabold text-navy">
                                  {t(c.author)}{' '}
                                  <span className="font-semibold text-amber-deep">
                                    · {t(c.roleBadge)}
                                  </span>
                                </span>
                                <span className="text-[11px] text-slate-frost">{t(c.timeAgo)}</span>
                              </div>
                              <p className="text-xs text-slate-frost leading-relaxed">
                                {t(c.text)}
                              </p>
                            </div>
                          ))
                        )}

                        <form
                          onSubmit={(e) => handleAddComment(e, post.id)}
                          className="grid grid-cols-1 sm:grid-cols-12 gap-2 pt-1"
                        >
                          <div className="sm:col-span-4">
                            <label htmlFor={`c-name-${post.id}`} className="sr-only">
                              {lang === 'ar' ? 'الاسم' : 'Your Name'}
                            </label>
                            <input
                              id={`c-name-${post.id}`}
                              type="text"
                              value={commentAuthor}
                              onChange={(e) => setCommentAuthor(e.target.value)}
                              placeholder={lang === 'ar' ? 'اسمك' : 'Your Name'}
                              className="w-full min-h-[40px] rounded-xl bg-white px-3 py-1.5 text-xs font-semibold text-navy border border-navy/15"
                            />
                          </div>
                          <div className="sm:col-span-6">
                            <label htmlFor={`c-text-${post.id}`} className="sr-only">
                              {lang === 'ar' ? 'التعليق' : 'Add comment'}
                            </label>
                            <input
                              id={`c-text-${post.id}`}
                              type="text"
                              value={commentText}
                              onChange={(e) => setCommentText(e.target.value)}
                              placeholder={lang === 'ar' ? 'أضف تعليقاً بناءً...' : 'Add a constructive note...'}
                              className="w-full min-h-[40px] rounded-xl bg-white px-3 py-1.5 text-xs text-navy border border-navy/15"
                            />
                          </div>
                          <button
                            type="submit"
                            className="sm:col-span-2 min-h-[40px] rounded-xl px-3 py-1.5 text-xs font-extrabold btn-navy"
                          >
                            {lang === 'ar' ? 'إرسال' : 'Reply'}
                          </button>
                        </form>
                      </div>
                    )}
                  </GlassCard>
                );
              })}
            </div>
          </section>

          {/* RIGHT: Open Bounties / Internal Cross-Disciplinary Tasks Board */}
          <section className="lg:col-span-5 space-y-5">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-navy inline-flex items-center gap-2">
                <Flame className="h-5 w-5 text-amber-brand" aria-hidden="true" />
                <span>
                  {lang === 'ar'
                    ? '٢. مهام التعاون الداخلية المفتوحة'
                    : '2. Open Squad Bounties'}
                </span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-frost">
                {lang === 'ar'
                  ? 'مشاريع نشطة يجتمع فيها المبرمجون والمصممون وصناع النمو معاً'
                  : 'Active internal collaborations pairing complementary studio disciplines'}
              </p>
            </div>

            <div className="space-y-4">
              {hubBounties.map((bounty) => {
                const isClaiming = claimingBountyId === bounty.id;
                const progressPct = Math.round((bounty.spotsFilled / bounty.spotsTotal) * 100);

                return (
                  <GlassCard
                    key={bounty.id}
                    as="article"
                    surface="amber-glass"
                    enableTilt={false}
                    className="p-5 sm:p-6 space-y-4"
                  >
                    <div className="relative z-10 flex items-center justify-between gap-2">
                      <span
                        dir="ltr"
                        className="rounded-lg bg-navy px-2.5 py-1 font-mono text-xs font-extrabold text-amber-bright"
                      >
                        {bounty.code}
                      </span>
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-navy border border-navy/10">
                        {bounty.creditReward}
                      </span>
                    </div>

                    <div className="relative z-10 space-y-1.5">
                      <h3 className="font-display text-lg font-extrabold text-navy">
                        {t(bounty.title)}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-frost leading-relaxed">
                        {t(bounty.summary)}
                      </p>
                    </div>

                    {/* Disciplines Needed */}
                    <div className="relative z-10 flex flex-wrap gap-1.5">
                      {t(bounty.disciplinesNeeded).map((role, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 rounded-lg bg-white/90 px-2.5 py-1 text-[11px] font-bold text-navy border border-navy/10"
                        >
                          <Layers className="h-3 w-3 text-amber-deep" aria-hidden="true" />
                          {role}
                        </span>
                      ))}
                    </div>

                    {/* Squad Progress */}
                    <div className="relative z-10 space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-frost">
                        <span>
                          {lang === 'ar' ? 'قائد الخلية: ' : 'Squad Lead: '}
                          <strong className="text-navy">{t(bounty.leadName)}</strong>
                        </span>
                        <span>
                          {bounty.spotsFilled}/{bounty.spotsTotal}{' '}
                          {lang === 'ar' ? 'مقاعد محجوزة' : 'Seats Filled'}
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-navy/10 overflow-hidden">
                        <div
                          style={{ width: `${progressPct}%` }}
                          className="h-full rounded-full bg-navy transition-all duration-300"
                        />
                      </div>
                      <div className="text-[11px] font-semibold text-slate-frost">
                        {t(bounty.deadline)}
                      </div>
                    </div>

                    {/* Claim Seat Action */}
                    <div className="relative z-10 pt-2">
                      {bounty.joinedByMe ? (
                        <div className="min-h-[42px] flex items-center justify-center gap-2 rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-2 text-xs font-extrabold text-emerald-800">
                          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                          <span>
                            {lang === 'ar'
                              ? 'تم تسجيل انضمامك لهذه الخلية!'
                              : 'You Claimed a Collaborator Seat!'}
                          </span>
                        </div>
                      ) : isClaiming ? (
                        <form
                          onSubmit={(e) => handleClaimBounty(e, bounty.id)}
                          className="rounded-xl bg-white p-3.5 space-y-2.5 border border-navy/15"
                        >
                          <div>
                            <label htmlFor={`claim-name-${bounty.id}`} className="block text-[11px] font-bold text-navy mb-1">
                              {lang === 'ar' ? 'اسمك الكامل' : 'Collaborator Name'}
                            </label>
                            <input
                              id={`claim-name-${bounty.id}`}
                              type="text"
                              required
                              value={claimName}
                              onChange={(e) => setClaimName(e.target.value)}
                              placeholder={lang === 'ar' ? 'الاسم' : 'Your Name'}
                              className="w-full min-h-[38px] rounded-lg bg-canvas px-3 py-1.5 text-xs font-semibold text-navy border border-navy/15"
                            />
                          </div>
                          <div>
                            <label htmlFor={`claim-spec-${bounty.id}`} className="block text-[11px] font-bold text-navy mb-1">
                              {lang === 'ar' ? 'تخصصك في المهمة' : 'Your Role'}
                            </label>
                            <input
                              id={`claim-spec-${bounty.id}`}
                              type="text"
                              value={claimSpecialty}
                              onChange={(e) => setClaimSpecialty(e.target.value)}
                              placeholder={lang === 'ar' ? 'مثال: Motion Designer' : 'e.g. Motion Designer'}
                              className="w-full min-h-[38px] rounded-lg bg-canvas px-3 py-1.5 text-xs font-semibold text-navy border border-navy/15"
                            />
                          </div>
                          <div className="flex gap-2">
                            <button
                              type="submit"
                              className="flex-1 min-h-[38px] rounded-lg px-3 py-1.5 text-xs font-extrabold btn-amber"
                            >
                              {lang === 'ar' ? 'تأكيد الانضمام' : 'Confirm Seat'}
                            </button>
                            <button
                              type="button"
                              onClick={() => setClaimingBountyId(null)}
                              className="min-h-[38px] rounded-lg px-3 py-1.5 text-xs font-bold bg-canvas text-slate-frost"
                            >
                              {lang === 'ar' ? 'إلغاء' : 'Cancel'}
                            </button>
                          </div>
                        </form>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setClaimingBountyId(bounty.id)}
                          className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-xs font-extrabold btn-navy"
                        >
                          <Users className="h-3.5 w-3.5 text-amber-bright" aria-hidden="true" />
                          <span>
                            {lang === 'ar'
                              ? 'انضم إلى خلية العمل المشتركة'
                              : 'Team Up on This Bounty'}
                          </span>
                        </button>
                      )}
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          </section>
        </div>

        {/* =================================================================
            SECTION C: "Join the Roster" Fast-Track Talent Pitch Form
        ================================================================= */}
        <section id="join-roster-section" className="scroll-mt-24">
          <div className="glass-surface-strong p-6 sm:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-soft px-3.5 py-1 text-xs font-extrabold text-amber-deep border border-amber-brand/30">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  {lang === 'ar' ? 'استقطاب المواهب الشابة' : 'Fast-Track Talent Onboarding'}
                </span>
                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-navy">
                  {lang === 'ar'
                    ? '٣. انضم إلى قائمة مواهب أركوديو'
                    : '3. "Join the Roster" Talent Pitch'}
                </h2>
                <p className="text-sm sm:text-base text-slate-frost leading-relaxed">
                  {lang === 'ar'
                    ? 'هل تتقن تطوير الويب، المونتاج، الموشن جرافيك، التصميم، الإعلانات الممولة، أو تحليل البيانات؟ أرسل معرض أعمالك ليراجعه قادة الأقسام خلال ٤٨ ساعة.'
                    : 'Exceptional at React, video cuts, motion design, brand systems, media buying, or data analytics? Pitch your best 3 works directly to our department leads.'}
                </p>

                <ul className="space-y-2.5 pt-2 text-xs sm:text-sm font-semibold text-navy">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>
                      {lang === 'ar'
                        ? 'مكافآت واضحة وموثقة لكل مرحلة مشروع (Sprint)'
                        : 'Transparent milestone payouts on every client sprint'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>
                      {lang === 'ar'
                        ? 'العمل ضمن خلايا متعددة التخصصات ترفع قيمة أعمالك'
                        : 'Collaborate inside multi-disciplinary pods, never isolated'}
                    </span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden="true" />
                    <span>
                      {lang === 'ar'
                        ? 'وضع اسمك رسمياً ضمن صناع دراسات الحالة المعتمدة'
                        : 'Full portfolio credit on published studio case studies'}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-7">
                {pitchSubmitted ? (
                  <div className="navy-bento navy-surface text-white p-8 text-center space-y-4">
                    <span className="mx-auto h-14 w-14 rounded-2xl bg-amber-bright text-navy inline-flex items-center justify-center">
                      <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-2xl font-extrabold text-white">
                      {lang === 'ar'
                        ? `تم استلام ملفك بنجاح يا ${applicantName}!`
                        : `Roster Pitch Received, ${applicantName}!`}
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      {lang === 'ar'
                        ? 'سيقوم قائد القسم المختص بمراجعة معرض أعمالك والتواصل معك خلال ٤٨ ساعة لإجراء تجربة تعاون قصيرة.'
                        : 'Our discipline lead will review your portfolio link within 48 hours and invite you to an onboarding pod check-in.'}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setPitchSubmitted(false);
                        setApplicantName('');
                        setApplicantEmail('');
                        setApplicantPortfolio('');
                        setApplicantTools('');
                        setApplicantPitch('');
                      }}
                      className="min-h-[44px] rounded-xl px-5 py-2.5 text-xs font-extrabold btn-amber"
                    >
                      {lang === 'ar' ? 'إرسال ترشيح آخر' : 'Submit Another Pitch'}
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handlePitchSubmit}
                    className="rounded-2xl bg-white/90 p-5 sm:p-7 border border-navy/10 shadow-sm space-y-4"
                  >
                    {pitchError && (
                      <p role="alert" className="rounded-xl bg-red-50 border border-red-200 px-4 py-2.5 text-xs font-bold text-red-800">
                        {pitchError}
                      </p>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="pitch-name" className="block text-xs font-bold text-navy mb-1.5">
                          {lang === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                        </label>
                        <input
                          id="pitch-name"
                          type="text"
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          placeholder={lang === 'ar' ? 'اكتب اسمك الكامل' : 'Your Full Name'}
                          className="w-full min-h-[44px] rounded-xl bg-canvas px-3.5 py-2.5 text-sm font-medium text-navy border border-navy/15"
                        />
                      </div>

                      <div>
                        <label htmlFor="pitch-email" className="block text-xs font-bold text-navy mb-1.5">
                          {lang === 'ar' ? 'البريد الإلكتروني *' : 'Email Address *'}
                        </label>
                        <input
                          id="pitch-email"
                          type="email"
                          dir="ltr"
                          value={applicantEmail}
                          onChange={(e) => setApplicantEmail(e.target.value)}
                          placeholder="email@example.com"
                          className="w-full min-h-[44px] rounded-xl bg-canvas px-3.5 py-2.5 text-sm font-medium text-navy border border-navy/15"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="pitch-dept" className="block text-xs font-bold text-navy mb-1.5">
                          {lang === 'ar' ? 'التخصص الرئيسي' : 'Primary Discipline'}
                        </label>
                        <select
                          id="pitch-dept"
                          value={applicantDept}
                          onChange={(e) => setApplicantDept(e.target.value)}
                          className="w-full min-h-[44px] rounded-xl bg-canvas px-3.5 py-2.5 text-sm font-semibold text-navy border border-navy/15"
                        >
                          <option value="Web Development & Code">
                            {lang === 'ar' ? 'تطوير الويب والبرمجة' : 'Web Development & Code'}
                          </option>
                          <option value="Video Editing & Motion Graphics">
                            {lang === 'ar' ? 'مونتاج الفيديو والموشن جرافيك' : 'Video Editing & Motion Graphics'}
                          </option>
                          <option value="Graphic Design & Photo Retouching">
                            {lang === 'ar' ? 'التصميم الجرافيكي ومعالجة الصور' : 'Graphic Design & Photo Retouching'}
                          </option>
                          <option value="Social Media, Paid Ads & BizDev">
                            {lang === 'ar' ? 'السوشيال ميديا، الإعلانات وتطوير الأعمال' : 'Social Media, Paid Ads & BizDev'}
                          </option>
                          <option value="Data Analysis & Virtual Assistance">
                            {lang === 'ar' ? 'تحليل وإدخال البيانات والمساعدة الافتراضية' : 'Data Analysis & Virtual Assistance'}
                          </option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="pitch-portfolio" className="block text-xs font-bold text-navy mb-1.5">
                          {lang === 'ar' ? 'رابط معرض الأعمال (GitHub / Behance / Drive) *' : 'Portfolio Link (GitHub / Behance / Site) *'}
                        </label>
                        <input
                          id="pitch-portfolio"
                          type="url"
                          dir="ltr"
                          value={applicantPortfolio}
                          onChange={(e) => setApplicantPortfolio(e.target.value)}
                          placeholder="https://..."
                          className="w-full min-h-[44px] rounded-xl bg-canvas px-3.5 py-2.5 text-sm font-medium text-navy border border-navy/15"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="pitch-tools" className="block text-xs font-bold text-navy mb-1.5">
                        {lang === 'ar' ? 'أهم الأدوات والتقنيات التي تتقنها' : 'Top Tools & Stack'}
                      </label>
                      <input
                        id="pitch-tools"
                        type="text"
                        value={applicantTools}
                        onChange={(e) => setApplicantTools(e.target.value)}
                        placeholder={lang === 'ar' ? 'مثال: Next.js, After Effects, Power BI...' : 'e.g. TypeScript, After Effects, Meta Ads, Power BI...'}
                        className="w-full min-h-[44px] rounded-xl bg-canvas px-3.5 py-2.5 text-sm font-medium text-navy border border-navy/15"
                      />
                    </div>

                    <div>
                      <label htmlFor="pitch-bio" className="block text-xs font-bold text-navy mb-1.5">
                        {lang === 'ar' ? 'تقديم سريع: ما أقوى مشروع نفذته حتى الآن؟ *' : '60-Second Pitch: What is the strongest build/project you have shipped? *'}
                      </label>
                      <textarea
                        id="pitch-bio"
                        rows={3}
                        value={applicantPitch}
                        onChange={(e) => setApplicantPitch(e.target.value)}
                        placeholder={lang === 'ar' ? 'احكِ لنا بإيجاز عن أثر عملك وساعات تفرغك الأسبوعية...' : 'Share a real outcome from your best work and your weekly sprint availability...'}
                        className="w-full rounded-xl bg-canvas px-3.5 py-2.5 text-sm text-navy border border-navy/15"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={pitchSubmitting}
                      className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm sm:text-base btn-amber"
                    >
                      <UserPlus className="h-4 w-4" aria-hidden="true" />
                      <span>
                        {pitchSubmitting
                          ? lang === 'ar'
                            ? 'جاري إرسال ملفك...'
                            : 'Sending Talent Pitch...'
                          : lang === 'ar'
                            ? 'إرسال طلب الانضمام لأركوديو'
                            : 'Submit Roster Application'}
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
