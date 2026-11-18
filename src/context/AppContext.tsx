import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  ClientReview,
  HubBounty,
  HubPost,
  HubPostCategory,
  Lang,
  Localized,
  ProjectCaseStudy,
  RouteKey,
} from '../types/studio';
import { INITIAL_HUB_BOUNTIES, INITIAL_HUB_POSTS, INITIAL_REVIEWS } from '../data/talentsHubReviews';
import { PORTFOLIO_PROJECTS } from '../data/servicesAndWork';

interface RouteState {
  route: RouteKey;
  params: Record<string, string>;
}

interface NewPostInput {
  authorName: string;
  authorRole: 'founder' | 'talent' | 'collaborator';
  category: HubPostCategory;
  title: string;
  body: string;
  tags: string[];
}

interface NewReviewInput {
  clientName: string;
  clientRole: string;
  company: string;
  category: 'tech' | 'visual' | 'growth' | 'data';
  projectType: string;
  rating: number;
  quote: string;
  outcomeHighlight?: string;
}

interface AppContextValue {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  isRtl: boolean;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: <T>(val: Localized<T>) => T;
  route: RouteKey;
  params: Record<string, string>;
  navigate: (route: RouteKey, params?: Record<string, string>) => void;
  buildHref: (route: RouteKey, params?: Record<string, string>) => string;
  activeCaseStudy: ProjectCaseStudy | null;
  openCaseStudy: (project: ProjectCaseStudy) => void;
  closeCaseStudy: () => void;
  preselectedChips: string[];
  addChipAndGoToBuilder: (chipIds: string[]) => void;
  toggleEstimatorChip: (chipId: string) => void;
  setPreselectedChips: React.Dispatch<React.SetStateAction<string[]>>;
  hubPosts: HubPost[];
  togglePostVote: (postId: string) => void;
  addHubPost: (input: NewPostInput) => void;
  addHubComment: (postId: string, authorName: string, text: string) => void;
  hubBounties: HubBounty[];
  joinBounty: (bountyId: string, memberName: string, specialty: string) => void;
  reviews: ClientReview[];
  addClientReview: (input: NewReviewInput) => void;
}

const VALID_ROUTES: RouteKey[] = ['home', 'work', 'talents', 'hub', 'reviews', 'contact'];

function parseHashLocation(): RouteState {
  if (typeof window === 'undefined') {
    return { route: 'home', params: {} };
  }
  const rawHash = window.location.hash.replace(/^#\/?/, '');
  if (!rawHash) {
    return { route: 'home', params: {} };
  }
  const [pathPart, queryPart] = rawHash.split('?');
  const cleanedPath = (pathPart || 'home').replace(/\/+$/, '').toLowerCase();
  const route: RouteKey = VALID_ROUTES.includes(cleanedPath as RouteKey)
    ? (cleanedPath as RouteKey)
    : 'home';

  const params: Record<string, string> = {};
  if (queryPart) {
    const searchParams = new URLSearchParams(queryPart);
    searchParams.forEach((v, k) => {
      params[k] = v;
    });
  }
  return { route, params };
}

export function buildHashHref(route: RouteKey, params?: Record<string, string>): string {
  const base = route === 'home' ? '#/' : `#/${route}`;
  if (!params || Object.keys(params).length === 0) {
    return base;
  }
  const usp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v) usp.set(k, v);
  });
  const qs = usp.toString();
  return qs ? `${base}?${qs}` : base;
}

const AppContext = createContext<AppContextValue | null>(null);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      if (typeof window !== 'undefined') {
        const hashQuery = window.location.hash.includes('?') ? window.location.hash.split('?')[1] : '';
        const usp = new URLSearchParams(window.location.search ? window.location.search : hashQuery);
        const qLang = usp.get('lang');
        if (qLang === 'ar' || qLang === 'en') return qLang;
        const saved = window.localStorage.getItem('arkodio_lang');
        if (saved === 'ar' || saved === 'en') return saved;
      }
    } catch {
      // ignore storage errors on restricted file:// contexts
    }
    return 'en';
  });

  const [routeState, setRouteState] = useState<RouteState>(() => parseHashLocation());
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectCaseStudy | null>(null);
  const [preselectedChips, setPreselectedChips] = useState<string[]>(['chip-web', 'chip-branding']);

  const [hubPosts, setHubPosts] = useState<HubPost[]>(INITIAL_HUB_POSTS);
  const [hubBounties, setHubBounties] = useState<HubBounty[]>(INITIAL_HUB_BOUNTIES);
  const [reviews, setReviews] = useState<ClientReview[]>(INITIAL_REVIEWS);

  const dir: 'ltr' | 'rtl' = lang === 'ar' ? 'rtl' : 'ltr';
  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try {
      window.localStorage.setItem('arkodio_lang', lang);
    } catch {
      // ignore
    }

    const pageTitles: Record<RouteKey, Localized> = {
      home: {
        en: 'Arkodio — Digital Creative & Tech Studio',
        ar: 'أركوديو — استوديو الإبداع الرقمي والتقني المتكامل',
      },
      work: {
        en: 'Our Work & Case Studies — Arkodio Studio',
        ar: 'أعمالنا ودراسات الحالة — استوديو أركوديو',
      },
      talents: {
        en: 'Our Talents & Specialists — Arkodio Studio',
        ar: 'مواهبنا وفريقنا الإبداعي — استوديو أركوديو',
      },
      hub: {
        en: 'Arkodio Hub — Collaboration Portal & Talent Roster',
        ar: 'مجتمع أركوديو — بوابة التعاون والمواهب الشابة',
      },
      reviews: {
        en: 'Client Wall & Verified Reviews (4.9/5) — Arkodio Studio',
        ar: 'آراء العملاء والنتائج الموثقة (٤.٩/٥) — استوديو أركوديو',
      },
      contact: {
        en: 'Smart Project Builder & Contact — Arkodio Studio',
        ar: 'مصمم المشاريع الذكي والتواصل — استوديو أركوديو',
      },
    };
    document.title = pageTitles[routeState.route][lang];
  }, [lang, dir, routeState.route]);

  useEffect(() => {
    const syncFromHash = () => {
      const next = parseHashLocation();
      setRouteState((prev) => {
        if (prev.route !== next.route) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        return next;
      });

      if (next.params.case) {
        const found = PORTFOLIO_PROJECTS.find((p) => p.id === next.params.case);
        if (found) setActiveCaseStudy(found);
      }

      if (next.params.service) {
        const ids = next.params.service.split(',').filter(Boolean);
        if (ids.length > 0) {
          setPreselectedChips((prev) => Array.from(new Set([...prev, ...ids])));
        }
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const setLang = useCallback((nextLang: Lang) => {
    setLangState(nextLang);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const t = useCallback(
    <T,>(val: Localized<T>): T => {
      return val[lang];
    },
    [lang]
  );

  const navigate = useCallback((route: RouteKey, params?: Record<string, string>) => {
    const targetHash = buildHashHref(route, params);
    if (window.location.hash !== targetHash) {
      window.location.hash = targetHash;
    } else {
      setRouteState({ route, params: params || {} });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  const openCaseStudy = useCallback((project: ProjectCaseStudy) => {
    setActiveCaseStudy(project);
  }, []);

  const closeCaseStudy = useCallback(() => {
    setActiveCaseStudy(null);
    if (routeState.params.case) {
      const rest = { ...routeState.params };
      delete rest.case;
      window.history.replaceState(null, '', buildHashHref(routeState.route, rest));
    }
  }, [routeState]);

  const toggleEstimatorChip = useCallback((chipId: string) => {
    setPreselectedChips((prev) =>
      prev.includes(chipId) ? prev.filter((c) => c !== chipId) : [...prev, chipId]
    );
  }, []);

  const addChipAndGoToBuilder = useCallback(
    (chipIds: string[]) => {
      setPreselectedChips(chipIds);
      setActiveCaseStudy(null);
      navigate('contact');
    },
    [navigate]
  );

  const togglePostVote = useCallback((postId: string) => {
    setHubPosts((prev) =>
      prev.map((post) => {
        if (post.id !== postId) return post;
        const nextVoted = !post.votedByMe;
        return {
          ...post,
          votedByMe: nextVoted,
          votes: nextVoted ? post.votes + 1 : Math.max(0, post.votes - 1),
        };
      })
    );
  }, []);

  const addHubPost = useCallback((input: NewPostInput) => {
    const roleLabels: Record<NewPostInput['authorRole'], Localized> = {
      founder: { en: 'Studio Founder', ar: 'مؤسس الاستوديو' },
      talent: { en: 'Core Talent', ar: 'موهبة أساسية' },
      collaborator: { en: 'Collaborator', ar: 'متعاون مبدع' },
    };
    const words = input.authorName.trim().split(/\s+/);
    const initials =
      words.length >= 2
        ? `${words[0][0] || 'A'}${words[1][0] || 'K'}`.toUpperCase()
        : input.authorName.slice(0, 2).toUpperCase() || 'AK';

    const newPost: HubPost = {
      id: `post-${Date.now()}`,
      author: { en: input.authorName, ar: input.authorName },
      authorInitials: initials,
      authorRole: input.authorRole,
      roleLabel: roleLabels[input.authorRole],
      category: input.category,
      title: { en: input.title, ar: input.title },
      body: { en: input.body, ar: input.body },
      tags: input.tags.length > 0 ? input.tags : ['Studio Initiative'],
      timeAgo: { en: 'Just now', ar: 'الآن' },
      votes: 1,
      votedByMe: true,
      comments: [],
    };
    setHubPosts((prev) => [newPost, ...prev]);
  }, []);

  const addHubComment = useCallback((postId: string, authorName: string, text: string) => {
    setHubPosts((prev) =>
      prev.map((post) => {
        if (post.id !== postId) return post;
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              id: `comment-${Date.now()}`,
              author: { en: authorName, ar: authorName },
              roleBadge: { en: 'Hub Member', ar: 'عضو المجتمع' },
              text: { en: text, ar: text },
              timeAgo: { en: 'Just now', ar: 'الآن' },
            },
          ],
        };
      })
    );
  }, []);

  const joinBounty = useCallback((bountyId: string, _memberName: string, _specialty: string) => {
    setHubBounties((prev) =>
      prev.map((b) => {
        if (b.id !== bountyId || b.joinedByMe) return b;
        const nextFilled = Math.min(b.spotsTotal, b.spotsFilled + 1);
        return {
          ...b,
          spotsFilled: nextFilled,
          joinedByMe: true,
        };
      })
    );
  }, []);

  const addClientReview = useCallback((input: NewReviewInput) => {
    const parts = input.clientName.trim().split(/\s+/);
    const initials =
      parts.length >= 2
        ? `${parts[0][0] || 'C'}${parts[1][0] || 'R'}`.toUpperCase()
        : input.clientName.slice(0, 2).toUpperCase() || 'CR';

    const newRev: ClientReview = {
      id: `rev-${Date.now()}`,
      clientName: { en: input.clientName, ar: input.clientName },
      clientRole: { en: input.clientRole, ar: input.clientRole },
      company: { en: input.company, ar: input.company },
      initials,
      category: input.category,
      projectType: { en: input.projectType, ar: input.projectType },
      rating: input.rating,
      quote: { en: input.quote, ar: input.quote },
      afterMetric: input.outcomeHighlight
        ? { en: `Outcome: ${input.outcomeHighlight}`, ar: `النتيجة: ${input.outcomeHighlight}` }
        : undefined,
      dateLabel: { en: 'Verified · Today', ar: 'موثق · اليوم' },
    };
    setReviews((prev) => [newRev, ...prev]);
  }, []);

  const value = useMemo<AppContextValue>(
    () => ({
      lang,
      dir,
      isRtl,
      setLang,
      toggleLang,
      t,
      route: routeState.route,
      params: routeState.params,
      navigate,
      buildHref: buildHashHref,
      activeCaseStudy,
      openCaseStudy,
      closeCaseStudy,
      preselectedChips,
      addChipAndGoToBuilder,
      toggleEstimatorChip,
      setPreselectedChips,
      hubPosts,
      togglePostVote,
      addHubPost,
      addHubComment,
      hubBounties,
      joinBounty,
      reviews,
      addClientReview,
    }),
    [
      lang,
      dir,
      isRtl,
      setLang,
      toggleLang,
      t,
      routeState,
      navigate,
      activeCaseStudy,
      openCaseStudy,
      closeCaseStudy,
      preselectedChips,
      addChipAndGoToBuilder,
      toggleEstimatorChip,
      hubPosts,
      togglePostVote,
      addHubPost,
      addHubComment,
      hubBounties,
      joinBounty,
      reviews,
      addClientReview,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useApp must be used inside AppProvider');
  }
  return ctx;
}
