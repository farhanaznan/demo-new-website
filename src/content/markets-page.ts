export const marketsPage = {
  meta: {
    title: 'Markets — Trade Forex, Indices, Metals, Energies, Crypto & Shares',
    description:
      'Access global financial markets across forex, indices, precious metals, energies, cryptocurrencies, and shares with competitive conditions and professional execution.',
  },
  hero: {
    eyebrow: 'Markets · multi-asset engine',
    headline: "The world's largest trading markets",
    lede: 'Access global financial markets with institutional-grade trading conditions and lightning-fast execution — all from one professional platform.',
    primaryCta: 'Start Trading',
    secondaryCta: 'Explore Markets',
  },
  highlights: [
    { value: '60+', label: 'Instruments online' },
    { value: '06', label: 'Asset classes' },
    { value: '1:3000', label: 'Max leverage' },
    { value: '0.0', label: 'Spreads from' },
  ],
  overview: {
    eyebrow: 'Select channel',
    title: 'Explore global markets',
    lede: 'Access diverse trading opportunities across major asset classes with competitive conditions and professional execution.',
  },
  categories: [
    {
      id: 'forex',
      title: 'Forex',
      subtitle: 'Foreign Exchange Market',
      summary:
        'The foreign exchange market offers unparalleled liquidity and trading opportunities across major, minor, and selected exotic currency pairs.',
      body: [
        'Forex is the largest and most liquid financial market in the world, operating around the clock across major sessions in Asia, Europe, and the Americas. Traders can speculate on currency movements driven by interest rates, inflation, geopolitics, and macroeconomic releases — with deep liquidity that supports precise entries and exits.',
        'At Infinite, forex CFDs are delivered through MetaTrader 5 with tight, competitive pricing and leverage designed for both emerging and experienced traders. Whether you focus on majors such as EURUSD and USDJPY, or broaden into cross pairs, you trade in a professional environment built for speed, transparency, and control.',
      ],
      instruments: ['EURUSD', 'GBPUSD', 'USDJPY', 'AUDUSD', 'USDCAD', '40+ pairs'],
      points: [
        'Deep liquidity across major and minor pairs',
        'Spreads from 0.0 pips on selected accounts',
        'Leverage up to 1:3000',
        'Round-the-clock access across global sessions',
      ],
    },
    {
      id: 'indices',
      title: 'Indices',
      subtitle: 'Stock Market Performance',
      summary:
        'Trade global stock indices and gain exposure to entire markets — or market segments — with a single instrument.',
      body: [
        'Index CFDs let you participate in the performance of leading equity benchmarks without buying individual stocks. From US blue-chip benchmarks to European and Asian markets, indices consolidate sector and macro themes into clean, liquid instruments that suit short-term and swing strategies alike.',
        'With Infinite, you can track sentiment around earnings seasons, central-bank decisions, and risk-on / risk-off rotations while keeping execution simple. One position can reflect broad market direction — supported by competitive conditions and fast order handling on MT5.',
      ],
      instruments: ['US indices', 'EU benchmarks', 'UK & AU', 'Asia exposure', '5+ CFDs'],
      points: [
        'Exposure to entire markets in one trade',
        'Access to major global benchmarks',
        'Competitive index CFD conditions',
        'Suitable for news, trend, and EA strategies',
      ],
    },
    {
      id: 'metals',
      title: 'Precious Metals',
      subtitle: 'Safe-Haven Assets',
      summary:
        'Precious metals remain among the most widely traded safe-haven instruments during periods of economic uncertainty and currency volatility.',
      body: [
        'Gold and silver are foundational instruments for traders seeking diversification, inflation hedging themes, or reaction to geopolitical stress. Metal prices respond to real yields, the US dollar, industrial demand, and risk appetite — creating clear catalysts across London and New York sessions.',
        'Infinite provides access to popular precious-metal CFDs with high leverage options and transparent pricing, so you can express tactical or longer-horizon views without the operational friction of physical ownership.',
      ],
      instruments: ['XAUUSD (Gold)', 'XAGUSD (Silver)', 'Safe-haven themes'],
      points: [
        'Trade gold and silver as CFDs',
        'Popular hedge during uncertainty',
        'Leverage up to 1:3000 on selected metals',
        'No need to hold physical bullion',
      ],
    },
    {
      id: 'energies',
      title: 'Energies',
      subtitle: 'Oil and Natural Gas',
      summary:
        'Energies such as oil and natural gas offer dynamic trading opportunities within the global commodities complex.',
      body: [
        'Energy markets move on supply disruptions, OPEC+ policy, inventory data, seasonal demand, and broader growth expectations. That combination produces frequent opportunity for traders who follow fundamentals and technical structure in tandem.',
        'Through Infinite, you can trade leading energy CFDs — including major oil benchmarks — with the same professional platform stack used for forex and metals, keeping portfolio management centralized and execution consistent.',
      ],
      instruments: ['WTI crude', 'Brent crude', 'Natural gas themes'],
      points: [
        'Trade major global energy benchmarks',
        'React to inventory and geopolitical catalysts',
        'High-impact commodity volatility',
        'Integrated with your multi-asset MT5 workspace',
      ],
    },
    {
      id: 'crypto',
      title: 'Cryptocurrencies',
      subtitle: 'Digital Assets',
      summary:
        'Trade popular cryptocurrencies with streamlined access and security-minded execution on an advanced multi-asset platform.',
      body: [
        'Digital assets introduce a distinct volatility profile and a 24/7 market rhythm that many active traders value. Crypto CFDs let you speculate on price direction of leading coins without managing wallets, private keys, or exchange custody workflows.',
        'Infinite brings major cryptocurrencies into the same MetaTrader 5 environment as traditional markets, so you can apply familiar charting, risk tools, and order types while keeping funding and account management unified.',
      ],
      instruments: ['Bitcoin (BTC)', 'Ethereum (ETH)', 'Additional majors'],
      points: [
        'Trade crypto CFDs without a digital wallet',
        'Access popular digital assets on MT5',
        'Around-the-clock market opportunity',
        'Unified account alongside forex and commodities',
      ],
    },
    {
      id: 'shares',
      title: 'Shares',
      subtitle: 'Global Equities',
      summary:
        'Access blue-chip and growth stocks from major global exchanges with competitive trading conditions.',
      body: [
        'Share CFDs open the door to company-level themes — earnings momentum, product cycles, sector leadership, and corporate news — without requiring a traditional stock brokerage setup for every market. Traders can focus on the names that define global equity narratives.',
        'With Infinite, selected global equities are available under professional CFD conditions, helping you diversify beyond FX and commodities while staying inside one coherent trading ecosystem.',
      ],
      instruments: ['US blue chips', 'Growth leaders', 'EU listings'],
      points: [
        'Company-level market exposure',
        'Major global equity themes',
        'Competitive share CFD conditions',
        'Portfolio diversification beyond FX',
      ],
    },
  ],
  why: {
    eyebrow: 'Why Infinite',
    title: 'Professional market access, built for execution',
    lede: 'Experience trading with advanced technology, competitive conditions, and comprehensive multi-asset access.',
    items: [
      {
        title: 'Tight spreads',
        copy: 'Industry-competitive spreads starting from 0.0 pips on selected instruments, supported by deep liquidity for cleaner fills.',
      },
      {
        title: 'Fund protection focus',
        copy: 'Trade with stronger peace of mind through segregated client fund practices and robust platform security measures.',
      },
      {
        title: 'Diverse portfolio',
        copy: 'Access multiple asset classes — forex, indices, metals, energies, crypto, and shares — for clearer diversification and risk management.',
      },
    ],
  },
  cta: {
    title: 'Ready to start trading?',
    lede: 'Join traders worldwide and access global markets with competitive conditions, fast execution, and a platform built for precision.',
    primary: 'Create Account',
    secondary: 'Client Login',
  },
  risk:
    'CFDs and leveraged products carry a high level of risk and may not be suitable for all investors. You can lose more than your initial deposit. Past performance is not a reliable indicator of future results. Please ensure you understand the risks before trading.',
} as const;
