import { projects } from "@/data/projects";
import Link from "next/link";

// ✅ generateStaticParams はこの形でOK
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ✅ props を { params }: { params: { slug: string } } と直接書く
export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) return <div style={{ padding: 24 }}>Not Found</div>;

  return (
    <main style={{ maxWidth: 800, margin: "0 auto", padding: 24, display: "grid", gap: 16 }}>
      <Link href="/">← Back</Link>
      <h1 style={{ margin: 0 }}>{p.title}</h1>
      {p.updatedAt && <p style={{ color: "#6b7280", margin: 0 }}>Updated: {p.updatedAt}</p>}
      <p>{p.summary}</p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {p.tech.map((t) => (
          <span key={t} style={{
            fontSize: 12, padding: "2px 8px",
            borderRadius: 999, border: "1px solid #d1d5db"
          }}>{t}</span>
        ))}
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {p.repoUrl && <a href={p.repoUrl} target="_blank">Source on GitHub</a>}
        {p.downloadUrl && <a href={p.downloadUrl} target="_blank">Download (Releases)</a>}
      </div>
    </main>
  );
}
