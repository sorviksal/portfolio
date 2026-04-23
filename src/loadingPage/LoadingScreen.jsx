import { useState, useEffect, useRef } from "react";
const LINES = [
  {
    prefix: "$",
    parts: [
      { text: " software development life cycle ", color: "#4ade80" },
      { text: ".......", color: "#4ade80" },
    ],
    delay: 400,
  },
  {
    prefix: "$",
    parts: [
      { text: " loading modules: [", color: "#4ade80" },
      { text: "design", color: "#60a5fa" },
      { text: ", ", color: "#4ade80" },
      { text: "code", color: "#60a5fa" },
      { text: ", ", color: "#4ade80" },
      { text: "ai", color: "#60a5fa" },
      { text: ", ", color: "#4ade80" },
      { text: "cloud", color: "#60a5fa" },
      { text: "] ... ", color: "#4ade80" },
      { text: "done", color: "#4ade80", bold: true },
    ],
    delay: 900,
  },
  {
    prefix: "$",
    parts: [
      { text: " compiling interface ......... ", color: "#4ade80" },
      { text: "done", color: "#4ade80", bold: true },
    ],
    delay: 1500,
  },
  {
    prefix: "$",
    parts: [
      { text: " deploying to production ...... ", color: "#4ade80" },
      { text: "done", color: "#4ade80", bold: true },
    ],
    delay: 2200,
  },
  {
    prefix: ">",
    prefixColor: "#4ade80",
    parts: [
      { text: " ready. launching Me ", color: "#e2e8f0" },
    ],
    delay: 3000,
    showCursor: true,
  },
];

const TOTAL_DURATION = 4200; // ms before onDone fires

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f172a",
    backgroundImage:
      "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(30,58,100,0.35) 0%, transparent 70%)",
    zIndex: 9999,
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
    transition: "opacity 0.6s ease",
  },
  window: {
    width: "min(520px, 90vw)",
    background: "#111827",
    borderRadius: "12px",
    boxShadow:
      "0 0 0 1px rgba(255,255,255,0.07), 0 32px 80px rgba(0,0,0,0.6), 0 0 60px rgba(30,58,100,0.3)",
    overflow: "hidden",
  },
  titlebar: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "14px 16px",
    background: "#1a2332",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
  },
  dot: (color) => ({
    width: 12,
    height: 12,
    borderRadius: "50%",
    backgroundColor: color,
    flexShrink: 0,
  }),
  titleText: {
    marginLeft: "8px",
    fontSize: "0.72rem",
    color: "#94a3b8",
    letterSpacing: "0.02em",
    userSelect: "none",
  },
  body: {
    padding: "24px 28px 28px",
    minHeight: "140px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  lineRow: {
    display: "flex",
    alignItems: "baseline",
    fontSize: "0.85rem",
    lineHeight: 1.6,
    whiteSpace: "pre",
  },
  prefix: (color = "#4ade80") => ({
    color,
    marginRight: "2px",
    userSelect: "none",
  }),
  cursor: {
    display: "inline-block",
    width: "9px",
    height: "15px",
    backgroundColor: "#f87171",
    marginLeft: "2px",
    verticalAlign: "middle",
    animation: "caretBlink 0.9s step-end infinite",
  },
};

// Inject keyframe once
const injectKeyframe = () => {
  if (document.getElementById("__loading-kf")) return;
  const s = document.createElement("style");
  s.id = "__loading-kf";
  s.textContent = `
    @keyframes caretBlink { 0%,100%{opacity:1} 50%{opacity:0} }
    @keyframes loadingFadeOut { to { opacity: 0; pointer-events: none; } }
  `;
  document.head.appendChild(s);
};

export default function LoadingScreen({ onDone, username = "skai@phnom-penh" }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [fading, setFading] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    injectKeyframe();

    // Reveal lines one by one
    const timers = LINES.map((line, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay)
    );

    // Fade out & call onDone
    const exitTimer = setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        if (!doneRef.current) {
          doneRef.current = true;
          onDone?.();
        }
      }, 600);
    }, TOTAL_DURATION);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(exitTimer);
    };
  }, [onDone]);

  return (
    <div
      style={{
        ...styles.overlay,
        opacity: fading ? 0 : 1,
        pointerEvents: fading ? "none" : "all",
      }}
    >
      <div style={styles.window}>
        {/* Title bar */}
        <div style={styles.titlebar}>
          <div style={styles.dot("#ef4444")} />
          <div style={styles.dot("#eab308")} />
          <div style={styles.dot("#22c55e")} />
          <span style={styles.titleText}>{username} ~ zsh</span>
        </div>

        {/* Terminal body */}
        <div style={styles.body}>
          {LINES.map((line, i) =>
            visibleLines.includes(i) ? (
              <div key={i} style={styles.lineRow}>
                <span style={styles.prefix(line.prefixColor || "#4ade80")}>
                  {line.prefix}
                </span>
                {line.parts.map((part, j) => (
                  <span
                    key={j}
                    style={{
                      color: part.color,
                      fontWeight: part.bold ? 600 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}
                {line.showCursor && (
                  <span style={styles.cursor} />
                )}
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}