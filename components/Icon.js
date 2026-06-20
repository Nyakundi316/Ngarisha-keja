// Lightweight inline icon set (stroke-based). Pass name + className.
// Keeps the project dependency-free (no icon library needed).

const paths = {
  home: <path d="M3 11.5 12 4l9 7.5M5 10v10h14V10M9.5 20v-6h5v6" />,
  office: <path d="M4 21V4h10v17M14 9h6v12M7 8h2M7 12h2M7 16h2M17 13h1M17 17h1" />,
  school: <path d="m12 4 9 5-9 5-9-5 9-5ZM6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M21 9v5" />,
  key: <circle cx="8" cy="8" r="4" />,
  sparkle: <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6.5 6.5l3 3M14.5 14.5l3 3M17.5 6.5l-3 3M9.5 14.5l-3 3" />,
  truck: <path d="M3 6h11v9H3zM14 9h4l3 3v3h-7M6.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17.5 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />,
  hardhat: <path d="M3 17a9 9 0 0 1 18 0M3 17h18M9 8a3 3 0 0 1 6 0v2M9 8v2M15 8v2" />,
  rug: <path d="M4 6h16v12H4zM4 9h16M7 18v2M17 18v2" />,
  sofa: <path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M3 12a2 2 0 0 1 2 2v3h14v-3a2 2 0 0 1 2-2 2 2 0 0 0-2-2H5a2 2 0 0 0-2 2ZM6 17v2M18 17v2" />,
  bed: <path d="M3 8v11M3 18h18v-5a3 3 0 0 0-3-3H3M21 18v1M7 10V8h6v2" />,
  window: <path d="M4 4h16v16H4zM12 4v16M4 12h16" />,
  floor: <path d="M3 20h18M6 20l2-12M18 20l-2-12M8 8h8M9.5 14h5" />,
  drop: <path d="M12 3s6 6.5 6 10.5a6 6 0 0 1-12 0C6 9.5 12 3 12 3Z" />,
  trash: <path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13M10 11v6M14 11v6" />,
  kitchen: <path d="M4 4h16v16H4zM4 12h16M8 7v2M12 7v2M8 16h4" />,
  bug: <path d="M9 8a3 3 0 0 1 6 0M8 9h8v3a4 4 0 0 1-8 0zM8 11H4M16 11h4M7 7 5 5M17 7l2-2M8 16l-2 2M16 16l2 2M12 15v5" />,
  leaf: <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14ZM5 19c3-4 7-7 11-8" />,
  tank: <path d="M5 4h14v16H5zM5 9h14M9 4v5M15 4v5M8 14h8" />,
  shield: <path d="M12 3 5 6v6c0 4 3 7 7 9 4-2 7-5 7-9V6l-7-3ZM9 12l2 2 4-4" />,
  confetti: <path d="m4 20 5-13 6 6-11 7ZM14 4l1 2M18 6l2-1M16 10l2 1M19 13l1 1" />,
  wrench: <path d="M15 4a4 4 0 0 0-1 5l-8 8 2 2 8-8a4 4 0 0 0 5-1 4 4 0 0 0-1-4l-2 2-2-2 2-2a4 4 0 0 0-2 0Z" />,
  calendar: <path d="M4 6h16v15H4zM4 10h16M8 3v4M16 3v4M8 14h3M14 14h2M8 17h3" />,
  clock: <path d="M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />,
  badge: <path d="M12 3 4 6v5c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6l-8-3ZM9 11l2 2 4-4" />,
  building: <path d="M5 21V4h9v17M14 9h5v12M8 8h3M8 12h3M8 16h3M17 13h0M17 17h0" />,
  handshake: <path d="m11 17 1 1a2 2 0 0 0 3 0l4-4M4 7l4-1 4 3-2 2a1.5 1.5 0 0 1-2 0M20 7l-3-1-4 3M3 8l3 5M21 8l-3 5" />,
  chat: <path d="M4 5h16v11H8l-4 4zM8 9h8M8 12h5" />,
  city: <path d="M3 21V9l5-3v15M8 21V3l7 3v15M15 21v-9l5 2v7M3 21h18M11 9h0M11 13h0M18 14h0" />,
  bank: <path d="M3 9 12 4l9 5M4 9h16M5 9v8M9 9v8M15 9v8M19 9v8M3 21h18" />,
  whatsapp: <path d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3ZM9 8c.3 0 .6.2.8.6l.6 1.4c.1.3 0 .6-.2.8l-.5.5c.6 1.2 1.5 2.1 2.7 2.7l.5-.5c.2-.2.5-.3.8-.2l1.4.6c.4.2.6.5.6.8 0 1.2-1 2-2 2-3.3 0-7-3.7-7-7 0-1 .8-2 2-2Z" />,
  phone: <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5V20a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />,
  mail: <path d="M4 5h16v14H4zM4 7l8 6 8-6" />,
  pin: <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11ZM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="m5 12 4 4 10-10" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  star: <path d="m12 3 2.6 5.6L21 9.3l-4.5 4.3 1.1 6.4L12 17l-5.6 3 1.1-6.4L3 9.3l6.4-.7L12 3Z" />,
};

export default function Icon({ name, className = "h-6 w-6" }) {
  const content = paths[name] || paths.sparkle;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
