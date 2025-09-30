// src/app/about/page.tsx

'use client';
import Link from 'next/link';
import PlasmicHomepage3 from "../../../components/plasmic/portfolio_dev/PlasmicHomepage3";

export default function Page() {
  return (
    <>
      <nav style={{padding:12, position:'sticky', top:0, background:'#fff', zIndex:9999}}>
        <Link href="/">Home</Link> {' | '}
        <Link href="/About">About</Link> {' | '}
        <Link href="/Projects">Projects</Link> {' | '}
        <Link href="/Achievements">Achievements</Link> {' | '}
        <Link href="/Blog">Blog</Link> {' | '}
      </nav>
      <PlasmicHomepage3 />
      <div className="plasmic-root">
      </div>
    </>
  );
}