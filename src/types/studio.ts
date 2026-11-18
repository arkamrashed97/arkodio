export type Lang = 'en' | 'ar';

export interface Localized<T = string> {
  en: T;
  ar: T;
}

export type RouteKey = 'home' | 'work' | 'talents' | 'hub' | 'reviews' | 'contact';

export type ServicePillarKey = 'all' | 'tech' | 'visual' | 'growth' | 'data';

export interface ServiceItem {
  id: string;
  pillar: Exclude<ServicePillarKey, 'all'>;
  title: Localized;
  tagline: Localized;
  description: Localized;
  deliverables: Localized<string[]>;
  turnaround: Localized;
  featured?: 'navy' | 'amber-glass' | 'glass';
  spanClass: string;
  iconName:
    | 'Code2'
    | 'Clapperboard'
    | 'Sparkles'
    | 'Palette'
    | 'Wand2'
    | 'Megaphone'
    | 'TrendingUp'
    | 'Briefcase'
    | 'BarChart3'
    | 'Database';
  estimatorChipId: string;
}

export type PortfolioCategoryKey = 'all' | 'web' | 'video' | 'graphic' | 'social' | 'data';

export type ArtworkVariant =
  | 'fintech-platform'
  | 'motion-reel'
  | 'brand-editorial'
  | 'roas-growth'
  | 'bi-cockpit'
  | 'commerce-web'
  | 'sound-campaign'
  | 'ops-automation';

export interface DeliverablePreview {
  label: Localized;
  summary: Localized;
  metricBadge: Localized;
}

export interface ProjectCaseStudy {
  id: string;
  category: Exclude<PortfolioCategoryKey, 'all'>;
  categoryLabel: Localized;
  title: Localized;
  client: Localized;
  year: string;
  duration: Localized;
  headlineMetric: Localized;
  shortSummary: Localized;
  challenge: Localized;
  solution: Localized;
  tools: string[];
  deliverables: DeliverablePreview[];
  impactStats: Array<{
    value: string;
    label: Localized;
  }>;
  teamIds: string[];
  relatedEstimatorIds: string[];
  artwork: ArtworkVariant;
  accentTone: 'amber' | 'navy' | 'slate';
}

export type DepartmentKey = 'all' | 'tech' | 'visual' | 'growth' | 'data';

export interface TalentMember {
  id: string;
  name: Localized;
  role: Localized;
  department: Exclude<DepartmentKey, 'all'>;
  specialtyBadge: Localized;
  bio: Localized;
  skills: string[];
  completedProjects: number;
  yearsCraft: string;
  availability: 'available' | 'sprint';
  avatarInitials: string;
  avatarPalette: {
    bg: string;
    accent: string;
    ring: string;
  };
  featuredProjectIds: string[];
}

export type HubPostCategory = 'update' | 'pitch' | 'resource';

export interface HubComment {
  id: string;
  author: Localized;
  roleBadge: Localized;
  text: Localized;
  timeAgo: Localized;
}

export interface HubPost {
  id: string;
  author: Localized;
  authorInitials: string;
  authorRole: 'founder' | 'talent' | 'collaborator';
  roleLabel: Localized;
  category: HubPostCategory;
  title: Localized;
  body: Localized;
  tags: string[];
  timeAgo: Localized;
  votes: number;
  votedByMe?: boolean;
  comments: HubComment[];
}

export interface HubBounty {
  id: string;
  code: string;
  title: Localized;
  summary: Localized;
  disciplinesNeeded: Localized<string[]>;
  creditReward: string;
  deadline: Localized;
  status: 'open' | 'forming';
  spotsTotal: number;
  spotsFilled: number;
  joinedByMe?: boolean;
  leadName: Localized;
}

export interface ClientReview {
  id: string;
  clientName: Localized;
  clientRole: Localized;
  company: Localized;
  initials: string;
  category: 'tech' | 'visual' | 'growth' | 'data';
  projectType: Localized;
  rating: number;
  quote: Localized;
  beforeMetric?: Localized;
  afterMetric?: Localized;
  dateLabel: Localized;
}

export interface BeforeAfterCase {
  id: string;
  client: Localized;
  discipline: Localized;
  metricName: Localized;
  beforeValue: string;
  afterValue: string;
  deltaLabel: Localized;
  timeframe: Localized;
}

export interface EstimatorServiceChip {
  id: string;
  pillar: Exclude<ServicePillarKey, 'all'>;
  label: Localized;
  basePoints: number;
  baseDays: number;
  squadRole: Localized;
}

export interface FaqItem {
  id: string;
  question: Localized;
  answer: Localized;
}
