// Re-mounts on every route change so each page fades in with a slight lift.
// Animation lives in globals.css (.page-enter) and is disabled for
// prefers-reduced-motion by the global media query.
export default function Template({ children }) {
  return <div className="page-enter">{children}</div>;
}
