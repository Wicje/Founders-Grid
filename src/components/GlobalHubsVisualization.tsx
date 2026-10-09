import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import {
  MapPin,
  Globe,
  Compass,
  ArrowRight,
  Clock,
  Building2,
  Sparkles,
  RefreshCw,
  Layers,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Move,
  Sun,
  Moon,
} from 'lucide-react';

export interface HubData {
  id: string;
  name: string;
  country: string;
  region: 'Europe' | 'Asia' | 'Americas';
  isHQ?: boolean;
  lat: number;
  lon: number;
  globeIndex: 0 | 1 | 2; // 0: Americas/Atlantic, 1: EMEA, 2: APAC
  startupsCount: number;
  alumniCount: number;
  activeCohort: number;
  pocsCompleted: number;
  capitalRaised: string;
  timeZone: string;
  flagshipPrograms: string[];
  keyPartners: string[];
  focusSectors: { sector: string; percentage: number }[];
  summary: string;
  role: string;
}

export const TENITY_HUBS: HubData[] = [
  {
    id: 'zurich',
    name: 'Zurich',
    country: 'Switzerland',
    region: 'Europe',
    isHQ: true,
    lat: 47.3769,
    lon: 8.5417,
    globeIndex: 1,
    startupsCount: 140,
    alumniCount: 122,
    activeCohort: 18,
    pocsCompleted: 94,
    capitalRaised: '$145M+',
    timeZone: 'Europe/Zurich',
    role: 'Global Headquarters & Core Fund',
    flagshipPrograms: [
      'Global FinTech Accelerator (Flagship)',
      'SIX Corporate Sandbox & PoC Lab',
      'Swiss WealthTech Innovation Residency',
    ],
    keyPartners: ['SIX Group', 'UBS', 'Julius Bär', 'Generali'],
    focusSectors: [
      { sector: 'WealthTech', percentage: 38 },
      { sector: 'Banking & Core Infra', percentage: 32 },
      { sector: 'Digital Assets', percentage: 20 },
      { sector: 'RegTech', percentage: 10 },
    ],
    summary:
      'Tenity global headquarters. The central European nexus connecting private banks, institutional stock exchanges, and tier-1 asset management innovation.',
  },
  {
    id: 'london',
    name: 'London',
    country: 'United Kingdom',
    region: 'Europe',
    lat: 51.5074,
    lon: -0.1278,
    globeIndex: 1,
    startupsCount: 85,
    alumniCount: 73,
    activeCohort: 12,
    pocsCompleted: 62,
    capitalRaised: '$92M+',
    timeZone: 'Europe/London',
    role: 'UK & Cross-Border Capital Hub',
    flagshipPrograms: [
      'UK Open Banking & Payments Sprint',
      'Cross-Border FX & Liquidity Venture Lab',
      'Next-Gen Compliance & AML Intelligence',
    ],
    keyPartners: ['Barclays', 'LSEG', 'Standard Chartered', 'NatWest'],
    focusSectors: [
      { sector: 'Payments & FX', percentage: 40 },
      { sector: 'Open Banking', percentage: 28 },
      { sector: 'RegTech & AI', percentage: 22 },
      { sector: 'InsurTech', percentage: 10 },
    ],
    summary:
      'Positioned at the epicentre of Europe’s deepest capital markets, scaling cross-border liquidity protocols and algorithmic regtech.',
  },
  {
    id: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    region: 'Asia',
    lat: 1.3521,
    lon: 103.8198,
    globeIndex: 2,
    startupsCount: 110,
    alumniCount: 96,
    activeCohort: 14,
    pocsCompleted: 78,
    capitalRaised: '$118M+',
    timeZone: 'Asia/Singapore',
    role: 'Asia-Pacific Regional Gateway',
    flagshipPrograms: [
      'APAC FinTech & Embedded Finance Incubator',
      'MAS Green FinTech & ESG Transition Track',
      'Institutional DeFi & Tokenization Sandbox',
    ],
    keyPartners: ['DBS Bank', 'Franklin Templeton', 'Monetary Authority of Singapore (MAS)', 'UOB'],
    focusSectors: [
      { sector: 'Embedded Finance', percentage: 35 },
      { sector: 'Trade Finance', percentage: 25 },
      { sector: 'ESG & Green Tech', percentage: 22 },
      { sector: 'Web3 & Settlement', percentage: 18 },
    ],
    summary:
      'The gateway to Southeast Asia, driving embedded commerce, green financial instruments, and digital asset custody with leading regional banks.',
  },
  {
    id: 'hongkong',
    name: 'Hong Kong',
    country: 'Hong Kong SAR',
    region: 'Asia',
    lat: 22.3193,
    lon: 114.1694,
    globeIndex: 2,
    startupsCount: 65,
    alumniCount: 56,
    activeCohort: 9,
    pocsCompleted: 44,
    capitalRaised: '$64M+',
    timeZone: 'Asia/Hong_Kong',
    role: 'Greater Bay Area & InsurTech Hub',
    flagshipPrograms: [
      'Greater Bay Area Cross-Border Sandbox',
      'InsurTech Health & Life Innovation Lab',
      'Wealth Management Connect Accelerator',
    ],
    keyPartners: ['AIA', 'Hang Seng Bank', 'Cyberport', 'HKEX'],
    focusSectors: [
      { sector: 'InsurTech', percentage: 42 },
      { sector: 'Cross-Border Wealth', percentage: 30 },
      { sector: 'Virtual Banking', percentage: 18 },
      { sector: 'GovTech/Identity', percentage: 10 },
    ],
    summary:
      'Connecting international founders with the Greater Bay Area and Asia’s largest life insurance and private wealth syndicates.',
  },
  {
    id: 'madrid',
    name: 'Madrid',
    country: 'Spain',
    region: 'Europe',
    lat: 40.4168,
    lon: -3.7038,
    globeIndex: 1,
    startupsCount: 55,
    alumniCount: 47,
    activeCohort: 8,
    pocsCompleted: 38,
    capitalRaised: '$42M+',
    timeZone: 'Europe/Madrid',
    role: 'Southern Europe & LatAm Bridge',
    flagshipPrograms: [
      'Southern Europe FinTech Track',
      'Ibero-America Venture Clienting Sprint',
      'SME Neo-banking & Lending Accelerator',
    ],
    keyPartners: ['Banco Santander', 'BBVA Open Innovation', 'MAPFRE'],
    focusSectors: [
      { sector: 'SME Neo-banking', percentage: 36 },
      { sector: 'Lending & Credit Scoring', percentage: 30 },
      { sector: 'InsurTech', percentage: 24 },
      { sector: 'Payments', percentage: 10 },
    ],
    summary:
      'The high-velocity launchpad bridging Southern European innovation with Latin American enterprise networks and leading Spanish financial institutions.',
  },
  {
    id: 'istanbul',
    name: 'Istanbul',
    country: 'Türkiye',
    region: 'Europe',
    lat: 41.0082,
    lon: 28.9784,
    globeIndex: 1,
    startupsCount: 40,
    alumniCount: 34,
    activeCohort: 7,
    pocsCompleted: 26,
    capitalRaised: '$28M+',
    timeZone: 'Europe/Istanbul',
    role: 'Eurasia Innovation Nexus',
    flagshipPrograms: [
      'Eurasian Banking API Incubator',
      'Cross-Regional Islamic FinTech & Trade Tech',
      'Retail Digital Banking Sprint',
    ],
    keyPartners: ['Türkiye İş Bankası', 'QNB Finansbank', 'Borsa Istanbul'],
    focusSectors: [
      { sector: 'Open Banking APIs', percentage: 38 },
      { sector: 'Retail FinTech', percentage: 32 },
      { sector: 'Islamic FinTech', percentage: 18 },
      { sector: 'Trade & Logistics', percentage: 12 },
    ],
    summary:
      'Straddling two continents, unlocking rapid market expansion across Türkiye, Central Asia, and the Middle East for digital banking disruptors.',
  },
];

// Strategic Syndication Corridors (Americas Globe 0)
const STRATEGIC_CORRIDORS = [
  { id: 'ny', name: 'New York', country: 'United States', lat: 40.7128, lon: -74.006, role: 'Global Institutional LP Network' },
  { id: 'sf', name: 'Silicon Valley', country: 'United States', lat: 37.7749, lon: -122.4194, role: 'Co-Investment Venture Syndicate' },
];

// Orthographic projection math
function projectOrthographic(
  lat: number,
  lon: number,
  centerLat: number,
  centerLon: number,
  radius: number
): { x: number; y: number; visible: boolean } {
  const toRad = Math.PI / 180;
  const phi = lat * toRad;
  const lambda = lon * toRad;
  const phi0 = centerLat * toRad;
  const lambda0 = centerLon * toRad;

  const cosC =
    Math.sin(phi0) * Math.sin(phi) +
    Math.cos(phi0) * Math.cos(phi) * Math.cos(lambda - lambda0);

  if (cosC < -0.05) {
    return { x: 0, y: 0, visible: false };
  }

  const x = radius * Math.cos(phi) * Math.sin(lambda - lambda0);
  const y =
    -radius *
    (Math.cos(phi0) * Math.sin(phi) -
      Math.sin(phi0) * Math.cos(phi) * Math.cos(lambda - lambda0));

  return { x, y, visible: true };
}

// Simplified continent landmass polygons (lat, lon)
const CONTINENT_POLYGONS: { id: string; points: [number, number][] }[] = [
  // Europe
  {
    id: 'europe',
    points: [
      [36, -9], [43, -9], [44, 0], [48, -4], [51, 2], [54, 8], [58, 6], [62, 5],
      [68, 14], [71, 26], [69, 32], [66, 42], [60, 40], [55, 38], [50, 36],
      [46, 30], [41, 29], [38, 24], [36, 15], [38, 1], [36, -5], [36, -9],
    ],
  },
  // United Kingdom / Ireland
  {
    id: 'uk',
    points: [
      [50, -5], [54, -4], [58, -3], [58, -5], [56, -6], [53, -3], [51, -1], [50, -5],
    ],
  },
  // Africa
  {
    id: 'africa',
    points: [
      [36, -5], [37, 10], [32, 25], [30, 32], [22, 37], [12, 44], [2, 45], [-4, 40],
      [-11, 40], [-26, 33], [-34, 18], [-30, 17], [-22, 14], [-15, 12], [-4, 9],
      [4, 9], [5, 1], [4, -7], [10, -14], [14, -17], [21, -17], [32, -9], [36, -5],
    ],
  },
  // Asia
  {
    id: 'asia',
    points: [
      [41, 29], [47, 40], [55, 38], [62, 55], [68, 70], [70, 95], [72, 130],
      [64, 170], [55, 140], [45, 135], [40, 130], [35, 128], [30, 122], [22, 114],
      [10, 107], [1, 104], [8, 98], [15, 80], [22, 70], [25, 55], [30, 48],
      [36, 36], [41, 29],
    ],
  },
  // Indian subcontinent
  {
    id: 'india',
    points: [
      [25, 68], [30, 75], [28, 85], [22, 88], [15, 80], [8, 77], [12, 75], [20, 72], [25, 68],
    ],
  },
  // Japan & Korea
  {
    id: 'japan',
    points: [
      [31, 130], [35, 135], [40, 140], [45, 145], [43, 141], [37, 137], [33, 130], [31, 130],
    ],
  },
  // Australia
  {
    id: 'australia',
    points: [
      [-12, 130], [-15, 136], [-12, 142], [-18, 146], [-24, 153], [-32, 152],
      [-38, 145], [-37, 140], [-35, 115], [-25, 113], [-20, 115], [-12, 130],
    ],
  },
  // North America
  {
    id: 'northAmerica',
    points: [
      [70, -160], [72, -130], [68, -100], [60, -85], [55, -60], [45, -65], [42, -70],
      [35, -75], [28, -80], [22, -88], [18, -95], [15, -92], [10, -84], [15, -90],
      [22, -105], [30, -115], [38, -123], [48, -124], [58, -135], [65, -165], [70, -160],
    ],
  },
  // South America
  {
    id: 'southAmerica',
    points: [
      [10, -75], [8, -60], [4, -50], [-4, -36], [-12, -37], [-23, -42], [-34, -53],
      [-52, -68], [-55, -70], [-45, -74], [-30, -72], [-15, -75], [-4, -80], [4, -77], [10, -75],
    ],
  },
];

interface GlobeConfig {
  id: string;
  name: string;
  subtitle: string;
  centerLat: number;
  centerLon: number;
  radius: number;
  hubs: HubData[];
}

interface GlobalHubsVisualizationProps {
  onHubExplore?: (hubName: string) => void;
}

export const GlobalHubsVisualization: React.FC<GlobalHubsVisualizationProps> = ({
  onHubExplore,
}) => {
  const [selectedHubId, setSelectedHubId] = useState<string>('zurich');
  const [hoveredHubId, setHoveredHubId] = useState<string | null>(null);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [themeMode, setThemeMode] = useState<'architectural' | 'midnight'>('architectural');
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [activeGlobeIndex, setActiveGlobeIndex] = useState<number>(1); // 1 = EMEA default

  // Rotational state offsets for the 3 globes
  const [rotationOffsets, setRotationOffsets] = useState<[number, number, number]>([0, 0, 0]);

  // Dragging state
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragGlobeIndexRef = useRef<number | null>(null);

  // Real-time clock update
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Gentle ambient auto-rotation
  useEffect(() => {
    if (!isAutoRotate) return;
    const interval = setInterval(() => {
      setRotationOffsets((prev) => [
        (prev[0] + 0.15) % 360,
        (prev[1] + 0.15) % 360,
        (prev[2] + 0.15) % 360,
      ]);
    }, 50);
    return () => clearInterval(interval);
  }, [isAutoRotate]);

  // Find active hub
  const activeHub = useMemo(() => {
    return (
      TENITY_HUBS.find((h) => h.id === (hoveredHubId || selectedHubId)) ||
      TENITY_HUBS[0]
    );
  }, [hoveredHubId, selectedHubId]);

  // Sync active globe index when selectedHub changes
  useEffect(() => {
    const target = TENITY_HUBS.find((h) => h.id === selectedHubId);
    if (target) {
      setActiveGlobeIndex(target.globeIndex);
    }
  }, [selectedHubId]);

  // Globe configurations matching the Khula Pinterest triptych
  const globes: GlobeConfig[] = useMemo(() => [
    {
      id: 'americas',
      name: 'AMERICAS',
      subtitle: 'Global LP & Co-Investment Corridors',
      centerLat: 20,
      centerLon: -85 + rotationOffsets[0],
      radius: 110,
      hubs: [],
    },
    {
      id: 'emea',
      name: 'EMEA',
      subtitle: 'Zurich HQ • London • Madrid • Istanbul',
      centerLat: 35,
      centerLon: 15 + rotationOffsets[1],
      radius: 110,
      hubs: TENITY_HUBS.filter((h) => h.globeIndex === 1),
    },
    {
      id: 'apac',
      name: 'ASIA-PACIFIC',
      subtitle: 'Singapore Regional Gateway • Hong Kong SAR',
      centerLat: 15,
      centerLon: 110 + rotationOffsets[2],
      radius: 110,
      hubs: TENITY_HUBS.filter((h) => h.globeIndex === 2),
    },
  ], [rotationOffsets]);

  // Formatting local city time
  const formatCityTime = useCallback(
    (timeZone: string) => {
      try {
        return new Intl.DateTimeFormat('en-GB', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(currentTime);
      } catch {
        return '--:--:--';
      }
    },
    [currentTime]
  );

  // Mouse drag handlers for interactive rotating
  const handleMouseDown = (e: React.MouseEvent, globeIdx: number) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragGlobeIndexRef.current = globeIdx;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || dragGlobeIndexRef.current === null) return;
    const deltaX = e.clientX - dragStartXRef.current;
    dragStartXRef.current = e.clientX;
    const idx = dragGlobeIndexRef.current;
    setRotationOffsets((prev) => {
      const next = [...prev] as [number, number, number];
      next[idx] = (next[idx] + deltaX * 0.45) % 360;
      return next;
    });
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    dragGlobeIndexRef.current = null;
  };

  // Touch handlers for mobile/tablet drag
  const handleTouchStart = (e: React.TouchEvent, globeIdx: number) => {
    if (e.touches.length > 0) {
      isDraggingRef.current = true;
      dragStartXRef.current = e.touches[0].clientX;
      dragGlobeIndexRef.current = globeIdx;
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || dragGlobeIndexRef.current === null || e.touches.length === 0) return;
    const clientX = e.touches[0].clientX;
    const deltaX = clientX - dragStartXRef.current;
    dragStartXRef.current = clientX;
    const idx = dragGlobeIndexRef.current;
    setRotationOffsets((prev) => {
      const next = [...prev] as [number, number, number];
      next[idx] = (next[idx] + deltaX * 0.45) % 360;
      return next;
    });
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    dragGlobeIndexRef.current = null;
  };

  // Render SVG globe
  const renderGlobeSVG = (config: GlobeConfig, globeIdx: number) => {
    const { centerLat, centerLon, radius } = config;
    const cx = 140;
    const cy = 140;

    // Projected continent paths
    const continentPaths = CONTINENT_POLYGONS.map((poly) => {
      let d = '';
      let firstVisible = false;
      poly.points.forEach(([lat, lon], idx) => {
        const p = projectOrthographic(lat, lon, centerLat, centerLon, radius);
        if (p.visible) {
          const sx = cx + p.x;
          const sy = cy + p.y;
          if (idx === 0 || !firstVisible) {
            d += `M ${sx.toFixed(1)} ${sy.toFixed(1)} `;
            firstVisible = true;
          } else {
            d += `L ${sx.toFixed(1)} ${sy.toFixed(1)} `;
          }
        }
      });
      if (d.length > 0) d += 'Z';
      return { id: poly.id, d };
    }).filter((p) => p.d.length > 0);

    // Parallels (latitude rings)
    const latitudeAngles = [-60, -30, 0, 30, 60];
    const parallelPaths = latitudeAngles.map((lat) => {
      let d = '';
      let started = false;
      for (let lon = -180; lon <= 180; lon += 5) {
        const p = projectOrthographic(lat, lon, centerLat, centerLon, radius);
        if (p.visible) {
          const sx = cx + p.x;
          const sy = cy + p.y;
          if (!started) {
            d += `M ${sx.toFixed(1)} ${sy.toFixed(1)} `;
            started = true;
          } else {
            d += `L ${sx.toFixed(1)} ${sy.toFixed(1)} `;
          }
        } else {
          started = false;
        }
      }
      return d;
    }).filter((d) => d.length > 0);

    // Meridians (longitude rings)
    const meridianAngles = [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150, 180];
    const meridianPaths = meridianAngles.map((lon) => {
      let d = '';
      let started = false;
      for (let lat = -85; lat <= 85; lat += 5) {
        const p = projectOrthographic(lat, lon, centerLat, centerLon, radius);
        if (p.visible) {
          const sx = cx + p.x;
          const sy = cy + p.y;
          if (!started) {
            d += `M ${sx.toFixed(1)} ${sy.toFixed(1)} `;
            started = true;
          } else {
            d += `L ${sx.toFixed(1)} ${sy.toFixed(1)} `;
          }
        } else {
          started = false;
        }
      }
      return d;
    }).filter((d) => d.length > 0);

    // Visible Hub Nodes for this globe
    const visibleHubs = config.hubs
      .map((hub) => {
        const p = projectOrthographic(hub.lat, hub.lon, centerLat, centerLon, radius);
        return {
          ...hub,
          screenX: cx + p.x,
          screenY: cy + p.y,
          visible: p.visible,
        };
      })
      .filter((h) => h.visible);

    // Visible Strategic Corridors (Globe 0)
    const visibleCorridors = globeIdx === 0
      ? STRATEGIC_CORRIDORS.map((c) => {
          const p = projectOrthographic(c.lat, c.lon, centerLat, centerLon, radius);
          return {
            ...c,
            screenX: cx + p.x,
            screenY: cy + p.y,
            visible: p.visible,
          };
        }).filter((c) => c.visible)
      : [];

    // Inter-hub Great-Circle Arcs from Zurich (Globe 1)
    const zurichHub = TENITY_HUBS.find((h) => h.id === 'zurich');
    const arcsFromZurich = globeIdx === 1 && zurichHub
      ? visibleHubs
          .filter((h) => h.id !== 'zurich')
          .map((dest) => {
            const zP = projectOrthographic(zurichHub.lat, zurichHub.lon, centerLat, centerLon, radius);
            const dP = projectOrthographic(dest.lat, dest.lon, centerLat, centerLon, radius);
            if (!zP.visible || !dP.visible) return null;
            const x1 = cx + zP.x;
            const y1 = cy + zP.y;
            const x2 = cx + dP.x;
            const y2 = cy + dP.y;
            const mx = (x1 + x2) / 2;
            const my = (y1 + y2) / 2 - 16; // curve upwards
            return {
              id: `${dest.id}-arc`,
              path: `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`,
            };
          })
          .filter(Boolean)
      : [];

    const isLight = themeMode === 'architectural';

    return (
      <div
        className="relative group select-none cursor-grab active:cursor-grabbing"
        onMouseDown={(e) => handleMouseDown(e, globeIdx)}
        onTouchStart={(e) => handleTouchStart(e, globeIdx)}
      >
        <svg
          viewBox="0 0 280 280"
          className="w-full max-w-[340px] mx-auto h-auto transition-transform duration-300 group-hover:scale-[1.02]"
          style={{ filter: isLight ? 'drop-shadow(0 14px 28px rgba(0,0,0,0.06))' : 'drop-shadow(0 14px 32px rgba(0,0,0,0.5))' }}
        >
          <defs>
            {/* Atmospheric gradient for sphere */}
            <radialGradient id={`sphere-grad-${globeIdx}`} cx="38%" cy="32%" r="68%">
              <stop
                offset="0%"
                stopColor={isLight ? '#FFFFFF' : '#1A2126'}
                stopOpacity={isLight ? '0.9' : '0.8'}
              />
              <stop
                offset="75%"
                stopColor={isLight ? '#E5EAEB' : '#0B0F12'}
                stopOpacity="0.95"
              />
              <stop
                offset="100%"
                stopColor={isLight ? '#CFD7D9' : '#030507'}
                stopOpacity="1"
              />
            </radialGradient>

            {/* Glowing outer aura */}
            <radialGradient id={`glow-aura-${globeIdx}`} cx="50%" cy="50%" r="50%">
              <stop
                offset="80%"
                stopColor={isLight ? '#F0386B' : '#00E5FF'}
                stopOpacity="0.08"
              />
              <stop
                offset="100%"
                stopColor={isLight ? '#F0386B' : '#00E5FF'}
                stopOpacity="0"
              />
            </radialGradient>

            {/* Hub Pulse beacon */}
            <radialGradient id={`hub-pulse-${globeIdx}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F0386B" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F0386B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Aura Outer Glow */}
          <circle cx={cx} cy={cy} r={radius + 18} fill={`url(#glow-aura-${globeIdx})`} />

          {/* Base Sphere */}
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill={`url(#sphere-grad-${globeIdx})`}
            stroke={isLight ? 'rgba(0,0,0,0.18)' : 'rgba(255,255,255,0.22)'}
            strokeWidth="1.2"
          />

          {/* Graticule Latitude Lines */}
          <g
            stroke={isLight ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.12)'}
            strokeWidth="0.8"
            strokeDasharray="2 3"
            fill="none"
          >
            {parallelPaths.map((d, i) => (
              <path key={`lat-${i}`} d={d} />
            ))}
          </g>

          {/* Graticule Longitude Lines */}
          <g
            stroke={isLight ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.12)'}
            strokeWidth="0.8"
            strokeDasharray="2 3"
            fill="none"
          >
            {meridianPaths.map((d, i) => (
              <path key={`mer-${i}`} d={d} />
            ))}
          </g>

          {/* Prime Equator Highlight */}
          {parallelPaths[2] && (
            <path
              d={parallelPaths[2]}
              stroke={isLight ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.28)'}
              strokeWidth="1.1"
              fill="none"
            />
          )}

          {/* Projected Continents */}
          <g
            fill={isLight ? 'rgba(30, 41, 49, 0.14)' : 'rgba(255, 255, 255, 0.16)'}
            stroke={isLight ? 'rgba(20, 30, 38, 0.45)' : 'rgba(255, 255, 255, 0.55)'}
            strokeWidth="1"
            strokeLinejoin="round"
          >
            {continentPaths.map((p) => (
              <path key={p.id} d={p.d} />
            ))}
          </g>

          {/* Great-Circle Inter-Hub Arcs */}
          {arcsFromZurich.map((arc) =>
            arc ? (
              <path
                key={arc.id}
                d={arc.path}
                fill="none"
                stroke="#F0386B"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                opacity="0.75"
              />
            ) : null
          )}

          {/* Strategic Corridors for Americas Globe */}
          {visibleCorridors.map((c) => (
            <g key={c.id}>
              <circle
                cx={c.screenX}
                cy={c.screenY}
                r="3"
                fill={isLight ? '#334155' : '#94A3B8'}
              />
              <circle
                cx={c.screenX}
                cy={c.screenY}
                r="6"
                fill="none"
                stroke={isLight ? 'rgba(51, 65, 85, 0.4)' : 'rgba(148, 163, 184, 0.4)'}
                strokeWidth="0.8"
              />
              <text
                x={c.screenX + 8}
                y={c.screenY + 3}
                fontSize="7.5"
                fontWeight="600"
                fill={isLight ? '#1E293B' : '#CBD5E1'}
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                {c.name}
              </text>
            </g>
          ))}

          {/* Hub Pins on Sphere */}
          {visibleHubs.map((hub) => {
            const isSelected = hub.id === selectedHubId;
            const isHovered = hub.id === hoveredHubId;
            const isActive = isSelected || isHovered;

            return (
              <g
                key={hub.id}
                className="cursor-pointer transition-transform"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedHubId(hub.id);
                  if (onHubExplore) onHubExplore(hub.name);
                }}
                onMouseEnter={() => setHoveredHubId(hub.id)}
                onMouseLeave={() => setHoveredHubId(null)}
              >
                {/* Hit area */}
                <circle
                  cx={hub.screenX}
                  cy={hub.screenY}
                  r="14"
                  fill="transparent"
                />

                {/* Animated Pulsing Beacon when active */}
                {isActive && (
                  <>
                    <circle
                      cx={hub.screenX}
                      cy={hub.screenY}
                      r="16"
                      fill={`url(#hub-pulse-${globeIdx})`}
                      className="animate-ping opacity-75"
                    />
                    <circle
                      cx={hub.screenX}
                      cy={hub.screenY}
                      r="9"
                      fill="none"
                      stroke="#F0386B"
                      strokeWidth="1.2"
                    />
                  </>
                )}

                {/* Outer Hub Ring */}
                <circle
                  cx={hub.screenX}
                  cy={hub.screenY}
                  r={hub.isHQ ? '5.5' : '4'}
                  fill={isActive ? '#F0386B' : isLight ? '#0F172A' : '#FFFFFF'}
                  stroke={hub.isHQ ? '#F59E0B' : '#FFFFFF'}
                  strokeWidth={hub.isHQ ? '1.8' : '1.2'}
                  style={{
                    filter: isActive
                      ? 'drop-shadow(0 0 6px rgba(240, 56, 107, 0.8))'
                      : 'none',
                  }}
                />

                {/* HQ Indicator Center Dot */}
                {hub.isHQ && (
                  <circle
                    cx={hub.screenX}
                    cy={hub.screenY}
                    r="2"
                    fill="#F59E0B"
                  />
                )}

                {/* City Name Label */}
                <text
                  x={hub.screenX + 8}
                  y={hub.screenY + 3.5}
                  fontSize="8.5"
                  fontWeight={isActive ? '700' : '600'}
                  fill={
                    isActive
                      ? '#F0386B'
                      : isLight
                      ? '#0F172A'
                      : '#FFFFFF'
                  }
                  fontFamily="system-ui, -apple-system, sans-serif"
                  style={{ textShadow: isLight ? '0 1px 2px rgba(255,255,255,0.8)' : '0 1px 3px rgba(0,0,0,0.9)' }}
                >
                  {hub.name}
                  {hub.isHQ && ' (HQ)'}
                </text>
              </g>
            );
          })}

          {/* Interactive Drag hint indicator */}
          <g opacity="0.45" transform={`translate(${cx - 16}, ${cy + radius - 16})`}>
            <circle cx="16" cy="6" r="8" fill={isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.08)'} />
            <path
              d="M 11 6 L 14 3 M 11 6 L 14 9 M 21 6 L 18 3 M 21 6 L 18 9"
              stroke={isLight ? '#475569' : '#94A3B8'}
              strokeWidth="1"
              strokeLinecap="round"
            />
          </g>
        </svg>

        {/* Globe Title Header in Khula Minimalist Style */}
        <div className="text-center mt-3">
          <div className="flex items-center justify-center gap-2">
            <span
              className={`text-xs font-mono tracking-widest uppercase font-bold ${
                isLight ? 'text-slate-800' : 'text-white'
              }`}
            >
              {config.name}
            </span>
          </div>
          <p
            className={`text-[11px] mt-0.5 max-w-[240px] mx-auto line-clamp-1 ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            {config.subtitle}
          </p>
        </div>
      </div>
    );
  };

  const isLight = themeMode === 'architectural';

  return (
    <section
      id="global-hubs"
      className={`relative py-20 sm:py-28 overflow-hidden transition-colors duration-500 border-t ${
        isLight
          ? 'bg-[#dee2e3] text-slate-900 border-slate-300'
          : 'bg-[#090D10] text-white border-white/10'
      } scroll-mt-20`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle architectural background graph paper grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: isLight
            ? 'radial-gradient(#94A3B8 0.75px, transparent 0.75px), linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)'
            : 'radial-gradient(#334155 0.75px, transparent 0.75px), linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '24px 24px, 96px 96px, 96px 96px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP EDITORIAL HEADER (KHULA OPERATES GLOBAL STYLE) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-black/10 dark:border-white/10">
          <div>
            {/* Top eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-wider font-semibold uppercase mb-4 bg-black/5 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-black/10 dark:border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#F0386B] animate-pulse" />
              GLOBAL PRESENCE & ACCELERATION HUBS
            </div>

            {/* Main Title inspired directly by Khula Operates Global */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] uppercase">
              ACROSS THE <br className="hidden sm:inline" />
              <span className="text-[#F0386B]">GLOBE.</span>
            </h2>

            <p
              className={`mt-4 text-sm sm:text-base max-w-2xl leading-relaxed ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              Tenity unites world-class founders and institutional banking giants across 6 international financial nerve centers, deploying pre-seed venture capital, bespoke PoC sandboxes, and cross-border expansion rails.
            </p>
          </div>

          {/* Interactive controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Theme Toggle (Architectural Light vs Midnight) */}
            <button
              onClick={() => setThemeMode(isLight ? 'midnight' : 'architectural')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium border transition-all ${
                isLight
                  ? 'bg-white/80 hover:bg-white border-slate-300 text-slate-800 shadow-sm'
                  : 'bg-white/5 hover:bg-white/10 border-white/15 text-slate-200'
              }`}
              title="Toggle Architectural Light vs Midnight display"
            >
              {isLight ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-slate-600" />
                  <span>MIDNIGHT MODE</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>ARCHITECTURAL LIGHT</span>
                </>
              )}
            </button>

            {/* Auto-rotation switch */}
            <button
              onClick={() => setIsAutoRotate(!isAutoRotate)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-medium border transition-all ${
                isAutoRotate
                  ? 'bg-[#F0386B]/10 border-[#F0386B]/40 text-[#F0386B]'
                  : isLight
                  ? 'bg-white/80 border-slate-300 text-slate-700'
                  : 'bg-white/5 border-white/15 text-slate-300'
              }`}
            >
              <RefreshCw
                className={`w-3.5 h-3.5 ${isAutoRotate ? 'animate-spin' : ''}`}
                style={{ animationDuration: '6s' }}
              />
              <span>{isAutoRotate ? 'AUTO-DRIFT ON' : 'AUTO-DRIFT OFF'}</span>
            </button>
          </div>
        </div>

        {/* QUICK HUB SELECTOR PILLS STRIP */}
        <div className="py-6 overflow-x-auto scrollbar-none flex items-center gap-2.5">
          <span
            className={`text-xs font-mono uppercase tracking-wider font-bold whitespace-nowrap mr-1 ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            SELECT HUB:
          </span>
          {TENITY_HUBS.map((hub) => {
            const isSelected = hub.id === selectedHubId;
            return (
              <button
                key={hub.id}
                onClick={() => {
                  setSelectedHubId(hub.id);
                  if (onHubExplore) onHubExplore(hub.name);
                }}
                className={`group flex items-center gap-2.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap border ${
                  isSelected
                    ? 'bg-[#F0386B] text-white border-[#F0386B] shadow-md shadow-[#F0386B]/25 scale-[1.02]'
                    : isLight
                    ? 'bg-white/60 hover:bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                    : 'bg-white/5 hover:bg-white/10 text-slate-300 border-white/10 hover:border-white/20'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isSelected
                      ? 'bg-white'
                      : hub.isHQ
                      ? 'bg-amber-400'
                      : 'bg-[#F0386B]'
                  }`}
                />
                <span>{hub.name}</span>
                {hub.isHQ && (
                  <span
                    className={`text-[10px] px-1 py-0.2 rounded font-bold uppercase ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-amber-500/15 text-amber-700 dark:text-amber-300'
                    }`}
                  >
                    HQ
                  </span>
                )}
                <span
                  className={`text-[11px] opacity-75 font-normal ml-0.5 ${
                    isSelected ? 'text-white' : 'text-slate-500 dark:text-slate-400'
                  }`}
                >
                  ({hub.startupsCount}+)
                </span>
              </button>
            );
          })}
        </div>

        {/* TRIPTYCH GLOBE SHOWCASE (THE KHULA 3-EARTH DESIGN) */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 py-6 items-center">
          {globes.map((g, idx) => (
            <div
              key={g.id}
              className={`p-4 sm:p-6 rounded-3xl transition-all duration-300 ${
                activeGlobeIndex === idx
                  ? isLight
                    ? 'bg-white/85 ring-2 ring-[#F0386B]/40 shadow-xl'
                    : 'bg-white/[0.04] ring-2 ring-[#F0386B]/40 shadow-2xl'
                  : isLight
                  ? 'bg-white/40 hover:bg-white/60'
                  : 'bg-white/[0.02] hover:bg-white/[0.04]'
              }`}
            >
              {renderGlobeSVG(g, idx)}
            </div>
          ))}
        </div>

        {/* DRAG INTERACTION HINT */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 pt-2 pb-6">
          <Move className="w-3.5 h-3.5" />
          <span>Interactive Spheres: Drag horizontally on any globe to rotate in 360°</span>
        </div>

        {/* DOCKED ACTIVE HUB INSPECTOR CARD */}
        <div
          className={`mt-6 rounded-3xl p-6 sm:p-8 lg:p-10 transition-all border shadow-lg ${
            isLight
              ? 'bg-white border-slate-300/80 shadow-slate-200'
              : 'bg-[#12171B] border-white/10 shadow-black/60'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Hub Identity & Role */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#F0386B]">
                  {activeHub.region} REGIONAL ECOSYSTEM
                </span>
                {activeHub.isHQ && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30">
                    <Sparkles className="w-3 h-3" />
                    GLOBAL HEADQUARTERS
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-3">
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  {activeHub.name}
                </h3>
                <span
                  className={`text-sm sm:text-base font-medium ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  {activeHub.country}
                </span>
              </div>

              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                {activeHub.summary}
              </p>

              {/* Coordinates and Live Local Time */}
              <div
                className={`p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4 text-xs font-mono border ${
                  isLight
                    ? 'bg-slate-100/80 border-slate-200 text-slate-700'
                    : 'bg-white/5 border-white/10 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#F0386B]" />
                  <span>
                    LAT {activeHub.lat.toFixed(4)}° • LON {activeHub.lon.toFixed(4)}°
                  </span>
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <Clock className="w-4 h-4 text-emerald-500" />
                  <span>LOCAL TIME: {formatCityTime(activeHub.timeZone)}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    if (onHubExplore) {
                      onHubExplore(activeHub.name);
                    }
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#F0386B] hover:bg-[#d9295b] text-white font-semibold text-sm transition-all shadow-md shadow-[#F0386B]/25 hover:shadow-lg active:scale-[0.98]"
                >
                  <span>Connect with {activeHub.name} Hub</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Middle Column: Hard Metrics & Sectors */}
            <div className="lg:col-span-4 space-y-6">
              <h4
                className={`text-xs font-mono uppercase tracking-wider font-bold ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                PORTFOLIO & COHORT METRICS
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <div
                  className={`p-4 rounded-2xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-black text-[#F0386B]">
                    {activeHub.startupsCount}+
                  </div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    Startups Accelerated
                  </div>
                </div>

                <div
                  className={`p-4 rounded-2xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-black text-emerald-500">
                    {activeHub.pocsCompleted}
                  </div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    Corporate PoCs Concluded
                  </div>
                </div>

                <div
                  className={`p-4 rounded-2xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-black">
                    {activeHub.capitalRaised}
                  </div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    Follow-on Capital
                  </div>
                </div>

                <div
                  className={`p-4 rounded-2xl border ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-white/5 border-white/10'
                  }`}
                >
                  <div className="text-2xl sm:text-3xl font-black text-amber-500">
                    {activeHub.activeCohort}
                  </div>
                  <div className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                    Active Cohort Teams
                  </div>
                </div>
              </div>

              {/* Sector Breakdown */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">
                  Focus Sectors
                </div>
                <div className="space-y-2">
                  {activeHub.focusSectors.map((sec) => (
                    <div key={sec.sector}>
                      <div className="flex justify-between text-xs font-mono mb-1">
                        <span>{sec.sector}</span>
                        <span className="font-semibold">{sec.percentage}%</span>
                      </div>
                      <div
                        className={`h-1.5 w-full rounded-full overflow-hidden ${
                          isLight ? 'bg-slate-200' : 'bg-white/10'
                        }`}
                      >
                        <div
                          className="h-full bg-[#F0386B] rounded-full transition-all duration-500"
                          style={{ width: `${sec.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Flagship Programs & Key Institutional Partners */}
            <div className="lg:col-span-3 space-y-6">
              {/* Flagship Programs */}
              <div>
                <h4
                  className={`text-xs font-mono uppercase tracking-wider font-bold mb-3 ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  FLAGSHIP PROGRAMS
                </h4>
                <div className="space-y-2.5">
                  {activeHub.flagshipPrograms.map((prog, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-xl text-xs font-medium border flex items-start gap-2.5 ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 text-slate-800'
                          : 'bg-white/5 border-white/10 text-slate-200'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F0386B] mt-1.5 shrink-0" />
                      <span>{prog}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Partners */}
              <div>
                <h4
                  className={`text-xs font-mono uppercase tracking-wider font-bold mb-2.5 ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  INSTITUTIONAL PARTNERS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeHub.keyPartners.map((partner) => (
                    <span
                      key={partner}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border ${
                        isLight
                          ? 'bg-white border-slate-300 text-slate-800'
                          : 'bg-white/5 border-white/10 text-slate-300'
                      }`}
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BOTTOM METRICS TICKER IN KHULA SIGNATURE STYLE */}
        <div
          className={`mt-10 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono ${
            isLight
              ? 'border-slate-300 text-slate-600'
              : 'border-white/10 text-slate-400'
          }`}
        >
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-bold text-slate-900 dark:text-white">
              TENITY GLOBAL FOOTPRINT:
            </span>
            <span>06 METROPOLITAN HUBS</span>
            <span>•</span>
            <span>495+ ACCELERATED STARTUPS</span>
            <span>•</span>
            <span>280+ VALIDATED POCS</span>
            <span>•</span>
            <span>$480M+ ECOSYSTEM CAPITAL</span>
          </div>

          <div className="flex items-center gap-2 tracking-widest text-[11px] uppercase">
            <span>ZURICH</span>
            <span>•</span>
            <span>LONDON</span>
            <span>•</span>
            <span>SINGAPORE</span>
            <span>•</span>
            <span>HONG KONG</span>
            <span>•</span>
            <span>MADRID</span>
            <span>•</span>
            <span>ISTANBUL</span>
          </div>
        </div>

      </div>
    </section>
  );
};
