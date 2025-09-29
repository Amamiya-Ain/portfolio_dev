"use client";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div style={{
      border: "1px solid #e5e7eb",
      borderRadius: 12,
      padding: 16,
      display: "grid",
      gap: 8
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
        <h3 style={{ margin: 0 }}>{p.title}</h3>
        {p.updatedAt && (
          <span style={{ fontSize: 12, color: "#6b7280" }}>Updated: {p.updatedAt}</span>
        )}
      </div>
      <p style={{ margin: 0 }}>{p.summary}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {p.tech.map((t) => (
          <span key={t} style={{
            fontSize: 12, padding: "2px 8px",
            borderRadius: 999, border: "1px solid #d1d5db"
          }}>{t}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link href={`/projects/${p.slug}`}>Details →</Link>
        {p.repoUrl && <a href={p.repoUrl} target="_blank">Source</a>}
        {p.downloadUrl && <a href={p.downloadUrl} target="_blank">Download</a>}
      </div>
    </div>
  );
}
