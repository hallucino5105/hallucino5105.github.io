import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { PRIVACY_POLICY_LAST_UPDATED, POLICY_SECTIONS } from "@/features/suzume_no_namida/privacy_policy";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>プライバシーポリシー | 雀の涙</title>
      </Head>
      <main
        style={{
          minHeight: "100vh",
          backgroundColor: "#09090b",
          color: "#fafafa",
          fontFamily: "var(--fonts-noto-sans-jp), var(--fonts-poppins), 'Segoe UI', sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "4rem 1.5rem",
        }}
      >
        <div style={{ width: "100%", maxWidth: 680 }}>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "3rem" }}
          >
            <div
              style={{
                display: "inline-block",
                padding: "0.3rem 0.9rem",
                borderRadius: "9999px",
                backgroundColor: "#18181b",
                border: "1px solid #27272a",
                fontSize: "0.78rem",
                color: "#a5b4fc",
                fontFamily: "var(--fonts-roboto-mono), monospace",
                marginBottom: "1rem",
                letterSpacing: "0.05em",
              }}
            >
              雀の涙
            </div>
            <h1
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                fontWeight: 700,
                margin: "0 0 0.75rem",
                background: "linear-gradient(90deg, #e2e8f0 0%, #a5b4fc 60%, #818cf8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "-0.01em",
                lineHeight: 1.3,
              }}
            >
              プライバシーポリシー
            </h1>
            <p style={{ color: "#52525b", fontSize: "0.85rem", margin: 0 }}>
              最終更新日：{PRIVACY_POLICY_LAST_UPDATED}
            </p>
          </motion.div>

          {/* Intro */}
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{
              color: "#a1a1aa",
              fontSize: "0.925rem",
              lineHeight: 1.85,
              marginBottom: "2.5rem",
            }}
          >
            本プライバシーポリシーは、アプリ「雀の涙」（以下「本アプリ」）における個人情報・データの取り扱いについて説明します。
          </motion.p>

          {/* Sections */}
          {POLICY_SECTIONS.map((section, i) => (
            <motion.section
              key={section.heading}
              custom={i + 1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              style={{
                marginBottom: "2rem",
                padding: "1.5rem 1.75rem",
                borderRadius: "0.75rem",
                backgroundColor: "#18181b",
                border: "1px solid #27272a",
              }}
            >
              <h2
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#a5b4fc",
                  margin: "0 0 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: 4,
                    height: "1em",
                    borderRadius: 2,
                    background: "linear-gradient(180deg, #6366f1, #a855f7)",
                    flexShrink: 0,
                    marginTop: 1,
                  }}
                />
                {section.heading}
              </h2>
              {section.paragraphs.map((para, j) => (
                <p
                  key={j}
                  style={{
                    color: "#a1a1aa",
                    fontSize: "0.9rem",
                    lineHeight: 1.85,
                    margin: j < section.paragraphs.length - 1 ? "0 0 0.875rem" : 0,
                    whiteSpace: "pre-line",
                  }}
                >
                  {para}
                </p>
              ))}
            </motion.section>
          ))}

          {/* Footer */}
          <motion.p
            custom={POLICY_SECTIONS.length + 2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{
              color: "#3f3f46",
              fontSize: "0.75rem",
              textAlign: "center",
              marginTop: "3rem",
            }}
          >
            © 2026 hallucino5105
          </motion.p>
        </div>
      </main>
    </>
  );
}
