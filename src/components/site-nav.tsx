import { ArrowUp } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";
import { NAV } from "@/data/brief";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteNav() {
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState<string | null>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const ids = NAV.map((n) => n.id);
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        setProgress(max > 0 ? h.scrollTop / max : 0);
        setShowTop(h.scrollTop > 480);
        let next: string | null = null;
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 110) next = id;
        }
        setCurrent(next);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#gov"
        className="sr-only focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        跳至主要內容
      </a>
      <div
        className="progress-bar pointer-events-none fixed top-0 left-0 z-50 h-0.5 w-full bg-primary"
        style={{ "--progress": progress } as CSSProperties}
        aria-hidden
      />
      <nav
        className="fixed top-0.5 right-0 left-0 z-50 border-b border-border bg-background/90 backdrop-blur-md"
        aria-label="頁面導覽"
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <a
            href="#"
            className="shrink-0 text-sm font-semibold tracking-wide text-primary"
          >
            結構性同構鑑識
          </a>
          <div className="flex gap-0.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  "rounded-md px-3 py-2 text-sm whitespace-nowrap text-muted transition-colors duration-150 hover:bg-paper hover:text-foreground",
                  current === item.id && "bg-paper font-semibold text-primary",
                )}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <Button
        type="button"
        size="icon"
        variant="ink"
        aria-label="回到頂部"
        className={cn(
          "fixed right-5 bottom-5 z-40 rounded-full shadow-lg transition-[opacity,transform] duration-200",
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0",
        )}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="size-5" />
      </Button>
    </>
  );
}
