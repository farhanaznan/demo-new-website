export const brand = {
  name: 'demo-new',
  mark: 'D',
  tagline: 'Trade Better. Build a Brighter Future.',
  description:
    'Reliable access to global markets with a focus on precision, stability, and control.',
} as const;

export const links = {
  login: 'https://global-oe.com/account/signin',
  register: 'https://global-oe.com/account/register',
  supportEmail: 'support@demo-new.trade',
} as const;

export const nav = [
  { label: 'Accounts', href: '/#accounts' },
  { label: 'Markets', href: '/#markets' },
  { label: 'Platforms', href: '/#platforms' },
  { label: 'Promotions', href: '/promotion' },
  { label: 'Banking', href: '/#banking' },
  { label: 'About', href: '/#about' },
] as const;

export const stats = [
  { value: '0.0', label: 'Spreads from' },
  { value: '1:3000', label: 'Leverage up to' },
  { value: '0.01', label: 'Micro lot trading' },
  { value: '60+', label: 'Tradable instruments' },
  { value: '24/7', label: 'Dedicated support' },
] as const;

export const features = [
  {
    id: 'withdrawals',
    title: 'Instant Withdrawals',
    copy: 'Ease access to your funds anywhere, anytime — with fast, secure processing.',
  },
  {
    id: 'swap-free',
    title: 'Swap-Free Options',
    copy: 'Hold overnight positions on popular assets with flexible account conditions.',
  },
  {
    id: 'support',
    title: '24/7 Live Support',
    copy: 'Get answers in minutes via live chat or email whenever markets move.',
  },
  {
    id: 'execution',
    title: 'Fast Execution',
    copy: 'Order execution in fractions of a second, built for fast-moving markets.',
  },
  {
    id: 'spreads',
    title: 'Low & Stable Spreads',
    copy: 'Tight spreads starting from 0.0 pips to help protect your edge.',
  },
  {
    id: 'security',
    title: 'Best-in-Class Security',
    copy: 'Client funds held in segregated accounts with ironclad data protection.',
  },
] as const;

export const performance = [
  {
    value: '1B+',
    label: 'Trades executed',
    copy: 'Consistent, transparent conditions across demo-new platforms.',
  },
  {
    value: '<10ms',
    label: 'Execution speed',
    copy: 'Ultra-low latency updates for precise entries and exits.',
  },
  {
    value: '30K+',
    label: 'Active clients',
    copy: 'Traders worldwide trusting demo-new to power their journey.',
  },
] as const;

export const accounts = [
  {
    name: 'MT5 Prime',
    badge: 'Popular',
    minDeposit: '$10',
    summary: 'Perfect for beginners and intermediate traders.',
    points: ['Spreads from 0.0', 'Leverage up to 1:3000', 'Commission-free options'],
  },
  {
    name: 'MT5 Pro',
    badge: 'Advanced',
    minDeposit: '$50',
    summary: 'Built for experienced traders who want tighter control.',
    points: ['Raw pricing focus', 'Fast execution', 'Professional tools'],
  },
  {
    name: 'MT5 Cent',
    badge: 'Starter',
    minDeposit: '$10',
    summary: 'Start smaller and learn with micro-sized exposure.',
    points: ['Cent-based lots', 'Lower capital risk', 'Full MT5 access'],
  },
  {
    name: 'MT5 Infinite',
    badge: 'Rebate',
    minDeposit: '$50',
    summary: 'Earn cashback on every lot with the Infinite rebate program.',
    points: ['$8 per lot rebate', '8 points per lot', 'Redeemable rewards'],
  },
  {
    name: 'MT5 ECN',
    badge: 'ECN',
    minDeposit: '$100',
    summary: 'Direct market access conditions for high-volume strategies.',
    points: ['ECN-style pricing', 'Deep liquidity', 'Transparent costs'],
  },
  {
    name: 'MT5 Bonus',
    badge: 'Promo',
    minDeposit: '$10',
    summary: 'Boost your buying power with promotional credit terms.',
    points: ['Bonus-enabled trading', 'Flexible funding', 'Clear T&Cs'],
  },
] as const;

export const markets = [
  {
    id: 'forex',
    title: 'Forex',
    subtitle: 'Foreign Exchange Market',
    detail: 'Unparalleled liquidity across major and minor currency pairs.',
    points: ['40+ currency pairs', 'Up to 1:3000 leverage'],
  },
  {
    id: 'indices',
    title: 'Indices',
    subtitle: 'Stock Market Performance',
    detail: 'Gain exposure to entire markets with a single instrument.',
    points: ['5+ global indices', 'Up to 1:2000 leverage'],
  },
  {
    id: 'metals',
    title: 'Precious Metals',
    subtitle: 'Safe-Haven Assets',
    detail: 'Popular safe-haven instruments during economic uncertainty.',
    points: ['Gold and Silver', 'Up to 1:3000 leverage'],
  },
  {
    id: 'energies',
    title: 'Energies',
    subtitle: 'Oil and Natural Gas',
    detail: 'Dynamic trading opportunities in global energy commodities.',
    points: ['WTI & Brent', 'Up to 1:3000 leverage'],
  },
  {
    id: 'crypto',
    title: 'Cryptocurrencies',
    subtitle: 'Digital Assets',
    detail: 'Trade popular cryptocurrencies with ease on MT5.',
    points: ['BTC, ETH & more', 'No digital wallet required'],
  },
  {
    id: 'shares',
    title: 'Shares',
    subtitle: 'Global Equities',
    detail: 'Access blue-chip and growth stocks from major exchanges.',
    points: ['Major US & EU stocks', 'Competitive conditions'],
  },
] as const;

export const steps = [
  {
    step: '01',
    title: 'Register',
    copy: 'Choose an account type and complete our fast, secure application.',
  },
  {
    step: '02',
    title: 'Verify',
    copy: 'Use digital onboarding for quick identity verification.',
  },
  {
    step: '03',
    title: 'Fund',
    copy: 'Deposit with trusted local and global payment methods.',
  },
  {
    step: '04',
    title: 'Trade',
    copy: 'Access forex, metals, indices, crypto, and energies on MT5.',
  },
] as const;

export const platforms = [
  {
    name: 'MetaTrader 5',
    badge: 'Core',
    copy: 'Professional charting, Expert Advisors, and multi-asset trading in one platform.',
  },
  {
    name: 'Web Terminal',
    badge: 'Instant',
    copy: 'Trade from your browser with no install — full market access on the go.',
  },
  {
    name: 'Mobile Apps',
    badge: 'Anywhere',
    copy: 'Monitor positions and execute from iOS and Android with the same conditions.',
  },
] as const;

export const whyUs = [
  {
    title: 'Spreads from 0.0 pips',
    copy: 'Competitively tight spreads designed to help maximize your margins.',
  },
  {
    title: 'Commission-free options',
    copy: 'Trade selected accounts without commission friction.',
  },
  {
    title: 'Fast & secure withdrawals',
    copy: 'Peace of mind with streamlined withdrawal processes.',
  },
  {
    title: 'Segregated funds',
    copy: 'Client funds kept separate for stronger capital protection.',
  },
  {
    title: 'Leverage up to 1:3000',
    copy: 'Amplify market exposure with responsible risk controls.',
  },
  {
    title: 'Local payment rails',
    copy: 'Hassle-free deposits through trusted regional providers.',
  },
] as const;

export const seaCustomers = [
  { code: 'id', name: 'Indonesia', city: 'Jakarta', traders: 8200 },
  { code: 'th', name: 'Thailand', city: 'Bangkok', traders: 6100 },
  { code: 'vn', name: 'Vietnam', city: 'Ho Chi Minh', traders: 5400 },
  { code: 'ph', name: 'Philippines', city: 'Manila', traders: 4800 },
  { code: 'sg', name: 'Singapore', city: 'Singapore', traders: 3200 },
  { code: 'my', name: 'Malaysia', city: 'Kuala Lumpur', traders: 3900 },
  { code: 'kh', name: 'Cambodia', city: 'Phnom Penh', traders: 2100 },
  { code: 'la', name: 'Laos', city: 'Vientiane', traders: 900 },
  { code: 'mm', name: 'Myanmar', city: 'Yangon', traders: 1500 },
  { code: 'bn', name: 'Brunei', city: 'Bandar Seri Begawan', traders: 600 },
] as const;
