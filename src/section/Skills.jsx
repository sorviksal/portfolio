import { useEffect, useRef } from "react";
import {
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiDotnet,
  SiPostgresql,
  SiHtml5,
  SiGithub,
  SiAngular,
  SiCss,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node JS", Icon: SiNodedotjs, color: "#339933" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "ASP.NET Core", Icon: SiDotnet, color: "#512BD4" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  {
    name: "JavaScript",
    Icon: () => (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        style={{ width: 32, height: 32 }}
      />
    ),
  },

  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
  {
    name: "Java",
    Icon: () => (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        alt="Java"
        style={{ width: 32, height: 32 }}
      />
    ),
  },

  { name: "Angular", Icon: SiAngular, color: "#DD0031" },
  { name: "CSS3", Icon: SiCss, color: "#1572B6" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
];

export const TechGlobe = () => {
  const sceneRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const golden = Math.PI * (3 - Math.sqrt(5));

    const nodes = skills.map((skill, i) => {
      const yNorm = 1 - (i / (skills.length - 1)) * 2;
      const rr = Math.sqrt(Math.max(0, 1 - yNorm * yNorm));
      const theta = golden * i;
      return {
        nx: Math.cos(theta) * rr,
        ny: yNorm * 0.42,
        nz: Math.sin(theta) * rr,
        speed: 0.18 + Math.random() * 0.12,
        phase: Math.random() * Math.PI * 2,
        bobAmp: 6 + Math.random() * 8,
        bobSpeed: 0.4 + Math.random() * 0.4,
      };
    });

    let time = 0;
    const animate = () => {
      time += 0.007;
      const s = scene.clientWidth;
      const cx = s / 2;
      const cy = s / 2;
      const R = s * 0.44;

      const children = scene.children;
      nodes.forEach((n, i) => {
        const el = children[i];
        if (!el) return;

        const angle = time * n.speed + n.phase;
        const rx = n.nx * Math.cos(angle) - n.nz * Math.sin(angle);
        const ry = n.ny;
        const rz = n.nx * Math.sin(angle) + n.nz * Math.cos(angle);
        const bob = Math.sin(time * n.bobSpeed + n.phase) * n.bobAmp;

        const x = cx + rx * R;
        const y = cy + ry * R + bob;
        const depth = (rz + 1) / 2;
        const scale = 0.5 + depth * 0.65;
        const opacity = 0.25 + depth * 0.75;

        el.style.left = x + "px";
        el.style.top = y + "px";
        el.style.transform = `translate(-50%,-50%) scale(${scale})`;
        el.style.opacity = opacity;
        el.style.zIndex = Math.round(depth * 100);
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div className="mt-24 flex flex-col items-center animate-fade-in animation-delay-600">
      <p className="text-sm text-muted-foreground mb-8 uppercase tracking-[0.2em]">
        Technologies I work with
      </p>

      <div
        className="relative w-full max-w-[600px] mx-auto"
        style={{ aspectRatio: "1 / 1" }}
      >
        <div ref={sceneRef} className="absolute inset-0">
          {skills.map(({ name, Icon, color }) => (
            <div
              key={name}
              style={{ position: "absolute" }}
             className="flex flex-col items-center gap-1"
            >
        <div
        className="icon-box flex items-center justify-center rounded-xl transition-all duration-300"
        style={{
            "--glow-color": color || "#ffffff",
            width: 56,
            height: 56,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.13)",
            backdropFilter: "blur(6px)",
        }}
        >
        {color ? (
        <Icon
            className="tech-icon"
            style={{ width: 32, height: 32, color }}
        />
        ) : (
        <Icon className="tech-icon" />
        )}
              </div>

              <span
                style={{
                  fontSize: 11,
                  color: "rgba(200,185,255,0.75)",
                  whiteSpace: "nowrap",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechGlobe;