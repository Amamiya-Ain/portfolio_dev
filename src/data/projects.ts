export type Project = {
  slug: string;                 // URL用
  title: string;                // タイトル
  summary: string;              // 短い説明
  tech: string[];               // 技術スタック
  repoUrl?: string;             // GitHub リポ
  downloadUrl?: string;         // Releases のダウンロードリンク
  updatedAt?: string;           // 最終更新（表示用）
};

export const projects: Project[] = [
  {
    slug: "maze-visualizer-c",
    title: "Maze Visualizer (C)",
    summary: "BFS/DFS/Dijkstra/A* を比較できる迷路可視化ツール（C言語）。",
    tech: ["C", "Algorithms"],
    repoUrl: "https://github.com/Amamiya-Ain/maze-visualizer-c",
    downloadUrl: "https://github.com/Amamiya-Ain/maze-visualizer-c/releases",
    updatedAt: "2025-09-20",
  },
  {
    slug: "poker-ai-ts",
    title: "Poker AI (TypeScript)",
    summary: "役交換＋ポットオッズ＋状況補正で堅実ベットを行うAI。",
    tech: ["TypeScript", "Node.js"],
    repoUrl: "https://github.com/Amamiya-Ain/poker-ai-typescript",
    downloadUrl: "https://github.com/Amamiya-Ain/poker-ai-typescript/releases",
    updatedAt: "2025-09-18",
  },
];
