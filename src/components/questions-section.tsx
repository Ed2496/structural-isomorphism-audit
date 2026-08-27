import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { QUESTIONS, ULTIMATE } from "@/data/brief";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function QuestionsSection() {
  return (
    <section
      id="questions"
      className="mx-auto max-w-6xl px-4 pt-20 pb-8 sm:px-6 sm:pt-24"
    >
      <Reveal className="mb-10">
        <p className="mb-3 text-xs font-semibold tracking-widest text-primary">
          04 — 實戰武器
        </p>
        <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          兩個純流程問句，封死退路
        </h2>
        <p className="max-w-3xl text-muted">
          不指控越權、不猜測動機，只問「流程依據」。
          <strong className="font-semibold text-foreground">
            對方只要回答，就會自己打自己的臉
          </strong>
          ——因為職務歸屬與職權是組織圖上的物理事實，不可辯。
        </p>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {QUESTIONS.map((q) => (
          <QuestionCard key={q.id} {...q} />
        ))}
      </div>

      <Reveal>
        <aside className="mt-8 rounded-r-xl border border-border border-l-4 border-l-destructive bg-card px-6 py-5 shadow-sm">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <p className="font-semibold tracking-wide">反客為主的終極詰問</p>
            <CopyBtn text={ULTIMATE} />
          </div>
          <p className="text-sm text-muted">「{ULTIMATE}」</p>
        </aside>
      </Reveal>
    </section>
  );
}

function QuestionCard({
  id,
  title,
  quote,
  traps,
}: {
  id: string;
  title: string;
  quote: string;
  traps: string[];
}) {
  return (
    <Reveal>
      <article className="relative overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm">
        <span
          className="pointer-events-none absolute -top-3 right-3 font-display text-7xl font-semibold text-primary/10"
          aria-hidden
        >
          {id}
        </span>
        <p className="mb-3 text-xs font-semibold tracking-widest text-primary">
          問句 {id.slice(1)} — {title}
        </p>
        <blockquote className="mb-4 border-l-2 border-primary pl-4 text-sm leading-relaxed font-medium">
          「{quote}」
        </blockquote>
        <CopyBtn text={quote} />
        <p className="mt-4 text-sm text-muted">無論怎麼答，都是死結：</p>
        <ul className="mt-2 space-y-2">
          {traps.map((t) => (
            <li key={t} className="pl-5 text-sm text-muted">
              <span className="mr-2 -ml-5 font-semibold text-destructive">
                ×
              </span>
              {t}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

function CopyBtn({ text }: { text: string }) {
  const [done, setDone] = useState(false);

  return (
    <Button
      type="button"
      size="sm"
      variant="outline"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          window.setTimeout(() => setDone(false), 1600);
        } catch {
          setDone(false);
        }
      }}
    >
      {done ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      {done ? "已複製" : "複製問句"}
    </Button>
  );
}
