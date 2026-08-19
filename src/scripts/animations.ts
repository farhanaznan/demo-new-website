import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let booted = false;

const mm = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

function revealBatch(selector: string, extras: gsap.TweenVars = {}): void {
  const elements = gsap.utils.toArray<HTMLElement>(selector);
  if (!elements.length) return;

  elements.forEach((element) => {
    const fromY = typeof extras.y === 'number' ? extras.y : 40;
    ScrollTrigger.create({
      trigger: element,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          element,
          { y: fromY },
          { y: 0, duration: 0.55, ease: 'power3.out', clearProps: 'transform' },
        );
      },
    });
  });
}

function initScrollProgress(): void {
  const bar = document.querySelector<HTMLElement>('.scroll-progress-bar');
  if (!bar) return;

  gsap.to(bar, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: document.documentElement,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.25,
    },
  });
}

function initActiveNav(): void {
  const links = gsap.utils.toArray<HTMLAnchorElement>('header nav a[href*="#"]');
  const sections = links
    .map((link) => {
      const href = link.getAttribute('href') || '';
      const hash = href.includes('#') ? `#${href.split('#')[1]}` : '';
      return hash ? document.querySelector<HTMLElement>(hash) : null;
    })
    .filter((section): section is HTMLElement => Boolean(section));

  if (!links.length || !sections.length) return;

  const setActive = (id: string) => {
    links.forEach((link) => {
      const href = link.getAttribute('href') || '';
      const active = href.endsWith(`#${id}`);
      link.classList.toggle('is-active', active);
      link.setAttribute('aria-current', active ? 'true' : 'false');
    });
  };

  sections.forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'top 45%',
      end: 'bottom 45%',
      onEnter: () => setActive(section.id),
      onEnterBack: () => setActive(section.id),
    });
  });
}

function initHero(reduceMotion: boolean): void {
  const brand = document.querySelector<HTMLElement>('.hero-brand');
  const isImageBrand = Boolean(brand?.querySelector('img'));

  if (brand && !brand.dataset.split && !isImageBrand) {
    const text = brand.textContent?.trim() || '';
    brand.dataset.split = 'true';
    brand.innerHTML = text
      .split('')
      .map(
        (char) =>
          `<span class="hero-letter inline-block will-change-transform">${char === ' ' ? '&nbsp;' : char}</span>`,
      )
      .join('');
  }

  if (reduceMotion) {
    gsap.set(
      ['.hero-kicker', '.hero-brand', '.hero-letter', '.hero-title', '.hero-copy', '.hero-cta', '.hero-visual', '.hero-visual-mobile', '.float-chip', '.stats-panel'],
      { clearProps: 'all', opacity: 1 },
    );
    return;
  }

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: () => {
      gsap.set(['.hero-cta > *', '.hero-title', '.hero-copy', '.hero-brand', '.hero-kicker', '.stats-panel'], {
        clearProps: 'opacity,transform',
      });
    },
  });

  tl.from('.hero-kicker', { y: 16, opacity: 0, duration: 0.5 });

  if (isImageBrand) {
    tl.from('.hero-brand', { y: 28, opacity: 0, scale: 0.96, duration: 0.85 }, '-=0.2');
  } else {
    tl.from('.hero-letter', {
      yPercent: 120,
      opacity: 0,
      rotateX: -40,
      duration: 0.8,
      stagger: 0.05,
      transformOrigin: '50% 100%',
    });
  }

  tl.from('.hero-title', { y: 48, opacity: 0, duration: 0.9 }, '-=0.45')
    .from('.hero-copy', { y: 28, opacity: 0, duration: 0.75 }, '-=0.5')
    .from('.hero-cta', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
    .from('.hero-visual-mobile', { y: 24, opacity: 0, duration: 0.7 }, '-=0.35')
    .from('.hero-visual', { x: 60, opacity: 0, duration: 1.05 }, '-=0.7')
    .from('.float-chip', { y: 24, opacity: 0, duration: 0.55, stagger: 0.1 }, '-=0.55')
    .from('.stats-panel', { y: 36, opacity: 0, duration: 0.8 }, '-=0.45');

  tl.add(() => {
    gsap.to('.hero-orb', {
      y: 28,
      x: 12,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: { each: 0.8, from: 'random' },
    });

    gsap.to('.hero-wave', {
      x: 40,
      duration: 7,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to('.float-chip', {
      y: '-=10',
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.4,
    });
  });

  gsap.to('.hero-visual-inner', {
    yPercent: -4,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero-stage',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });

  initLiveTicker();
  initHeroTilt();
}

function initLiveTicker(): void {
  const ticks = gsap.utils.toArray<HTMLElement>('[data-ticker]');
  if (!ticks.length) return;

  const jitter = () => {
    ticks.forEach((el) => {
      const base = Number(el.dataset.base || el.textContent);
      if (Number.isNaN(base)) return;
      const decimals = Number(el.dataset.decimals || '4');
      const variance = Number(el.dataset.variance || '0.0008');
      const next = base + (Math.random() - 0.5) * variance;
      el.textContent = next.toFixed(decimals);
      el.classList.toggle('is-up', next >= base);
      el.classList.toggle('is-down', next < base);
      el.dataset.base = String(next);
    });
  };

  jitter();
  window.setInterval(jitter, 2200);
}

function initHeroTilt(): void {
  if (!finePointer()) return;
  const stage = document.querySelector<HTMLElement>('.hero-visual');
  const inner = document.querySelector<HTMLElement>('.hero-visual-inner');
  if (!stage || !inner) return;

  const onMove = (event: PointerEvent) => {
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    gsap.to(inner, {
      rotateY: x * 10,
      rotateX: -y * 10,
      transformPerspective: 900,
      duration: 0.45,
      ease: 'power2.out',
    });
  };

  const onLeave = () => {
    gsap.to(inner, { rotateX: 0, rotateY: 0, duration: 0.7, ease: 'power3.out' });
  };

  stage.addEventListener('pointermove', onMove);
  stage.addEventListener('pointerleave', onLeave);
}

function initMagneticButtons(): void {
  if (!finePointer() || mm()) return;

  document.querySelectorAll<HTMLElement>('.btn-magnetic').forEach((btn) => {
    const strength = 18;

    btn.addEventListener('pointermove', (event) => {
      const rect = btn.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x / strength,
        y: y / strength,
        duration: 0.35,
        ease: 'power2.out',
      });
    });

    btn.addEventListener('pointerleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: 'power3.out' });
    });
  });
}

function initSpotlights(): void {
  if (!finePointer()) return;

  document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--spot-x', `${x}%`);
      card.style.setProperty('--spot-y', `${y}%`);
    });
  });
}

function formatCount(value: number, decimals: number): string {
  if (decimals > 0) return value.toFixed(decimals);
  const rounded = Math.round(value);
  return rounded >= 10000 ? rounded.toLocaleString('en-US') : String(rounded);
}

function initCounters(): void {
  const nodes = gsap.utils.toArray<HTMLElement>('[data-count]');

  nodes.forEach((node) => {
    const target = Number(node.dataset.count);
    const prefix = node.dataset.prefix || '';
    const suffix = node.dataset.suffix || '';
    const decimals = Number(node.dataset.decimals || '0');
    if (Number.isNaN(target)) return;

    const render = (value: number) => {
      node.textContent = `${prefix}${formatCount(value, decimals)}${suffix}`;
    };

    render(0);

    const state = { value: 0 };
    const play = () => {
      gsap.to(state, {
        value: target,
        duration: target >= 1000 ? 2.2 : 1.6,
        ease: 'power3.out',
        onUpdate: () => render(state.value),
        onComplete: () => render(target),
      });
    };

    // Stats in the hero are already on-screen — start after entrance, not on scroll.
    if (node.closest('.stats-panel')) {
      window.setTimeout(play, mm() ? 0 : 1200);
      return;
    }

    ScrollTrigger.create({
      trigger: node,
      start: 'top 88%',
      once: true,
      onEnter: play,
    });
  });
}

function initStepsProgress(): void {
  const section = document.querySelector('#get-started');
  const items = gsap.utils.toArray<HTMLElement>('.step-item');
  const line = document.querySelector<HTMLElement>('.steps-progress-line');
  if (!section || !items.length) return;

  items.forEach((item, index) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 70%',
      onEnter: () => item.classList.add('is-active'),
      onLeaveBack: () => {
        if (index > 0) item.classList.remove('is-active');
      },
    });
  });

  if (line) {
    gsap.fromTo(
      line,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 60%',
          end: 'bottom 50%',
          scrub: true,
        },
      },
    );
  }
}

function initSectionHeaders(): void {
  gsap.utils.toArray<HTMLElement>('.section-intro').forEach((intro) => {
    ScrollTrigger.create({
      trigger: intro,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          intro.children,
          { y: 14 },
          { y: 0, duration: 0.5, stagger: 0.05, ease: 'power3.out', clearProps: 'transform' },
        );
      },
    });
  });
}

function initSeaCustomers(reduceMotion: boolean): void {
  const section = document.querySelector<HTMLElement>('.sea-customers');
  if (!section) return;

  const cards = gsap.utils.toArray<HTMLElement>('[data-sea-card]');
  const nameEl = section.querySelector<HTMLElement>('[data-sea-active-name]');
  let active = 0;
  let timer: number | undefined;

  const animateCount = (card: HTMLElement) => {
    const node = card.querySelector<HTMLElement>('[data-sea-count]');
    if (!node) return;
    const target = Number(node.dataset.seaCount);
    if (Number.isNaN(target)) return;
    const state = { value: 0 };
    gsap.to(state, {
      value: target,
      duration: reduceMotion ? 0.01 : 1.1,
      ease: 'power3.out',
      onUpdate: () => {
        node.textContent = Math.round(state.value).toLocaleString('en-US');
      },
      onComplete: () => {
        node.textContent = target.toLocaleString('en-US');
      },
    });

    const fill = card.querySelector<HTMLElement>('.sea-card-fill');
    if (fill) {
      gsap.fromTo(
        fill,
        { scaleX: 0 },
        { scaleX: 1, duration: reduceMotion ? 0.01 : 0.9, ease: 'power2.out' },
      );
    }
  };

  const setActive = (index: number) => {
    active = (index + cards.length) % cards.length;
    cards.forEach((card, i) => {
      const on = i === active;
      card.classList.toggle('is-active', on);
      card.setAttribute('aria-pressed', String(on));
      if (on) {
        const country = card.querySelector('.font-display')?.textContent?.trim() || '';
        if (nameEl) nameEl.textContent = country;
        animateCount(card);
      }
    });
  };

  const startCycle = () => {
    window.clearInterval(timer);
    if (reduceMotion || cards.length < 2) return;
    timer = window.setInterval(() => setActive(active + 1), 2800);
  };

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      setActive(index);
      startCycle();
    });
    card.addEventListener('pointerenter', () => {
      if (!finePointer()) return;
      setActive(index);
      window.clearInterval(timer);
    });
    card.addEventListener('pointerleave', () => startCycle());
  });

  ScrollTrigger.create({
    trigger: section,
    start: 'top 75%',
    once: true,
    onEnter: () => {
      setActive(0);
      startCycle();
    },
  });

  if (!reduceMotion) {
    const grid = section.querySelector('.sea-grid') || section;
    ScrollTrigger.create({
      trigger: grid,
      start: 'top 92%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          cards,
          { y: 12 },
          {
            y: 0,
            duration: 0.45,
            stagger: 0.03,
            ease: 'power3.out',
            clearProps: 'transform',
          },
        );
      },
    });

    document.querySelectorAll<HTMLElement>('.sea-marquee').forEach((row, index) => {
      if (window.getComputedStyle(row.parentElement || row).display === 'none') return;
      const track = row.querySelector<HTMLElement>('.sea-marquee-track');
      if (!track) return;

      const distance = track.scrollWidth / 2;
      const goingLeft = row.classList.contains('sea-marquee--left');

      const tween = gsap.fromTo(
        track,
        { x: goingLeft ? 0 : -distance },
        {
          x: goingLeft ? -distance : 0,
          duration: 38 + index * 6,
          ease: 'none',
          repeat: -1,
        },
      );

      row.addEventListener('pointerenter', () => {
        tween.timeScale(0.12);
      });
      row.addEventListener('pointerleave', () => {
        tween.timeScale(1);
      });
    });
  }
}

export function initHomeAnimations(): void {
  if (booted) return;
  booted = true;

  const reduceMotion = mm();

  initScrollProgress();
  initActiveNav();
  initHero(reduceMotion);
  initMagneticButtons();
  initSpotlights();
  initCounters();
  initStepsProgress();
  initSectionHeaders();
  initSeaCustomers(reduceMotion);

  if (!reduceMotion) {
    revealBatch('.feature-card');
    revealBatch('.account-panel');
    revealBatch('.market-item', { y: 32 });
    revealBatch('.step-item');
    revealBatch('.platform-card');
    revealBatch('.why-card');
    revealBatch('.perf-item', { y: 24 });
    revealBatch('.rebate-panel');

    const finalCta = document.querySelector('.final-cta');
    if (finalCta) {
      ScrollTrigger.create({
        trigger: finalCta,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            finalCta,
            { y: 24 },
            { y: 0, duration: 0.6, ease: 'power3.out', clearProps: 'transform' },
          );
        },
      });
    }
  }

  requestAnimationFrame(() => ScrollTrigger.refresh());
}
