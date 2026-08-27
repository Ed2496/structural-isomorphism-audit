import { createFileRoute } from "@tanstack/react-router";
import { CorpSection } from "@/components/corp-section";
import { Finale } from "@/components/finale";
import { GovSection } from "@/components/gov-section";
import { Hero } from "@/components/hero";
import { MirrorSection } from "@/components/mirror-section";
import { QuestionsSection } from "@/components/questions-section";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteNav />
      <Hero />
      <main>
        <GovSection />
        <CorpSection />
        <MirrorSection />
        <QuestionsSection />
        <Finale />
      </main>
      <footer className="border-t border-border bg-paper px-4 py-8 text-center text-xs tracking-wide text-subtle">
        結構性同構鑑識 ｜ 公告 ≠ 監督 · 流程 ≠ 負責 ｜
        本頁內容為制度結構分析，基於客觀流程事實，不涉及動機指控
      </footer>
    </div>
  );
}
