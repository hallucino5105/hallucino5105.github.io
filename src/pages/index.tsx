import React from "react";
import { motion } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReportingErrorBoundary } from "@/components/error_boudary/reporting_error_boundary";
import { IconBrandGithub, IconBrandX } from "@tabler/icons-react";
import config from "@/root/config";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export default function Index() {
  return (
    <ReportingErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <IndexBody />
        {!config.api.debug.enable ? null : <ReactQueryDevtools initialIsOpen={false} />}
      </QueryClientProvider>
    </ReportingErrorBoundary>
  );
}

const LINKS = [
  {
    icon: IconBrandGithub,
    label: "GitHub",
    sub: "@hallucino5105",
    href: "https://github.com/hallucino5105",
  },
  {
    icon: IconBrandX,
    label: "X (Twitter)",
    sub: "@hallucino5105",
    href: "https://x.com/hallucino5105",
  },
];

const SKILLS = ["TypeScript", "React", "Next.js", "Python", "Node.js", "Rust"];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

function IndexBody() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#09090b",
        color: "#fafafa",
        fontFamily: "var(--fonts-poppins), 'Segoe UI', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      {/* Avatar */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 180 }}
        style={{
          width: 96,
          height: 96,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 38,
          fontWeight: 700,
          marginBottom: "1.5rem",
          boxShadow: "0 0 48px rgba(99, 102, 241, 0.45)",
          userSelect: "none",
        }}
      >
        H
      </motion.div>

      {/* Name */}
      <motion.h1
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          fontSize: "clamp(1.75rem, 5vw, 2.75rem)",
          fontWeight: 700,
          margin: 0,
          background: "linear-gradient(90deg, #e2e8f0 0%, #a5b4fc 50%, #818cf8 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          letterSpacing: "-0.02em",
        }}
      >
        hallucino5105
      </motion.h1>

      {/* Bio */}
      <motion.p
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          color: "#71717a",
          marginTop: "0.625rem",
          marginBottom: "2.5rem",
          fontSize: "1rem",
          textAlign: "center",
          letterSpacing: "0.04em",
        }}
      >
        Developer · Builder · Explorer
      </motion.p>

      {/* Links */}
      <motion.div
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.625rem",
          width: "100%",
          maxWidth: 360,
          marginBottom: "2.5rem",
        }}
      >
        {LINKS.map(({ icon: Icon, label, href, sub }) => (
          <LinkCard key={label} icon={Icon} label={label} sub={sub} href={href} />
        ))}
      </motion.div>

      {/* Skills */}
      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          justifyContent: "center",
          maxWidth: 400,
          marginBottom: "4rem",
        }}
      >
        {SKILLS.map(skill => (
          <span
            key={skill}
            style={{
              padding: "0.3rem 0.9rem",
              borderRadius: "9999px",
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              fontSize: "0.78rem",
              color: "#a1a1aa",
              fontFamily: "var(--fonts-roboto-mono), monospace",
            }}
          >
            {skill}
          </span>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.p
        custom={4}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        style={{ color: "#3f3f46", fontSize: "0.75rem", margin: 0 }}
      >
        © 2026 hallucino5105
      </motion.p>
    </main>
  );
}

type LinkCardProps = {
  icon: React.ElementType;
  label: string;
  sub: string;
  href: string;
};

function LinkCard({ icon: Icon, label, sub, href }: LinkCardProps) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "0.875rem 1.25rem",
        borderRadius: "0.75rem",
        backgroundColor: hovered ? "rgba(99, 102, 241, 0.08)" : "#18181b",
        border: `1px solid ${hovered ? "#6366f1" : "#27272a"}`,
        color: "#fafafa",
        textDecoration: "none",
        transition: "all 0.2s ease",
        boxShadow: hovered ? "0 0 24px rgba(99, 102, 241, 0.15)" : "none",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: "0.5rem",
          backgroundColor: "#27272a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon size={22} color="#a5b4fc" />
      </div>
      <div>
        <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>{label}</div>
        <div style={{ color: "#71717a", fontSize: "0.78rem", marginTop: 2 }}>{sub}</div>
      </div>
    </a>
  );
}

