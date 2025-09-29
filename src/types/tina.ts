// TinaCMS TypeScript types for the astrology blog

export interface TinaMarkdownContent {
  type: string;
  children: Array<{
    type: string;
    text?: string;
    children?: any[];
    url?: string;
    alt?: string;
    title?: string;
  }>;
}

// Astrology-specific enums
export type ZodiacSign =
  | 'aries' | 'taurus' | 'gemini' | 'cancer'
  | 'leo' | 'virgo' | 'libra' | 'scorpio'
  | 'sagittarius' | 'capricorn' | 'aquarius' | 'pisces';

export type BlogCategory =
  | 'zodiac-signs' | 'horoscopes' | 'compatibility' | 'birth-charts'
  | 'moon-phases' | 'planetary-transits' | 'tarot-readings'
  | 'crystal-healing' | 'spiritual-guidance' | 'cosmic-humor'
  | 'astro-memes' | 'sign-roasting';

export type TargetAudience =
  | 'astrology-beginners' | 'zodiac-enthusiasts' | 'spiritual-seekers'
  | 'cosmic-skeptics' | 'meme-lovers';

export type HumorLevel = 'subtle' | 'moderate' | 'savage' | 'brutal';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

// TinaCMS Blog Post Interface
export interface TinaBlogPost {
  // Basic metadata
  title: string;
  description: string;
  pubDate: string;
  updatedDate?: string;
  author: string;

  // Content metadata
  category?: BlogCategory;
  tags: string[];
  readingTime?: number;
  difficulty?: DifficultyLevel;

  // Images and media
  heroImage?: string;
  heroImageAlt?: string;

  // SEO and social
  draft?: boolean;
  featured?: boolean;

  // Astrology-specific metadata
  zodiacSign?: ZodiacSign;
  targetAudience?: TargetAudience;
  humorLevel?: HumorLevel;
  relatedSigns?: string[];
  relatedPosts?: string[];

  // Content
  body: TinaMarkdownContent;

  // System fields
  _sys: {
    filename: string;
    basename: string;
    breadcrumbs: string[];
    path: string;
    relativePath: string;
    extension: string;
  };
}

// TinaCMS Template Types
export interface AstrologyCardTemplate {
  name: 'AstrologyCard';
  title: string;
  description: string;
  zodiacSign: ZodiacSign;
}

export interface HumorBreakTemplate {
  name: 'HumorBreak';
  text: string;
  style: 'quote' | 'callout' | 'warning';
}

// Utility type for TinaCMS collections
export interface TinaCollection {
  blog: TinaBlogPost;
}

// Zodiac sign display information
export const ZODIAC_SIGNS: Record<ZodiacSign, {
  symbol: string;
  element: string;
  dates: string;
  emoji: string;
}> = {
  aries: { symbol: '♈', element: 'Fire', dates: 'Mar 21 - Apr 19', emoji: '🐏' },
  taurus: { symbol: '♉', element: 'Earth', dates: 'Apr 20 - May 20', emoji: '🐂' },
  gemini: { symbol: '♊', element: 'Air', dates: 'May 21 - Jun 20', emoji: '👯‍♀️' },
  cancer: { symbol: '♋', element: 'Water', dates: 'Jun 21 - Jul 22', emoji: '🦀' },
  leo: { symbol: '♌', element: 'Fire', dates: 'Jul 23 - Aug 22', emoji: '🦁' },
  virgo: { symbol: '♍', element: 'Earth', dates: 'Aug 23 - Sep 22', emoji: '👸' },
  libra: { symbol: '♎', element: 'Air', dates: 'Sep 23 - Oct 22', emoji: '⚖️' },
  scorpio: { symbol: '♏', element: 'Water', dates: 'Oct 23 - Nov 21', emoji: '🦂' },
  sagittarius: { symbol: '♐', element: 'Fire', dates: 'Nov 22 - Dec 21', emoji: '🏹' },
  capricorn: { symbol: '♑', element: 'Earth', dates: 'Dec 22 - Jan 19', emoji: '🐐' },
  aquarius: { symbol: '♒', element: 'Air', dates: 'Jan 20 - Feb 18', emoji: '🏺' },
  pisces: { symbol: '♓', element: 'Water', dates: 'Feb 19 - Mar 20', emoji: '🐠' }
};

// Color scheme for the brutal design
export const ASTROLOGY_COLORS = {
  primary: '#4CA6DF',    // Trust/Calm blue
  secondary: '#BFFF00',  // Hope/Growth lime
  accent: '#FF6B00',     // Energy/Motivation orange
  tertiary: '#EE99B8',   // Empathy/Connection pink
  deep: '#5E18EB',       // Depth/Mystical purple
} as const;