// src/app/page.tsx
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: 24, display: "grid", gap: 24 }}>
      <section style={{ display: "grid", gap: 8 }}>
        <h1 style={{ margin: 0 }}>Amamiya-Ain Portfolio</h1>
        <p style={{ margin: 0 }}>
          Kyushu Univ. M1 / C, TypeScript / AtCoder Green / 2位+Audience賞（Poker AI）
        </p>
        <p style={{ margin: 0 }}>
          作品は以下からダウンロードできます（GitHub Releases）。研究：自動車×警告音×人間工学。
        </p>
      </section>

      <section style={{ display: "grid", gap: 16 }}>
        <h2 style={{ margin: 0 }}>Projects</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16
        }}>
          {projects.map((p) => <ProjectCard key={p.slug} p={p} />)}
        </div>
      </section>
    </main>
  );
}
