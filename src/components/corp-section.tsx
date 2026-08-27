import { TIMELINE } from "@/data/brief";
import { Reveal } from "@/components/reveal";

export function CorpSection() {
  return (
    <section id="corp" className="mx-auto max-w-6xl px-4 pt-20 pb-8 sm:px-6 sm:pt-24">
      <Reveal className="mb-10">
        <p className="mb-3 text-xs font-semibold tracking-widest text-primary">
          02 — 企業端
        </p>
        <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          PIP 流程三環踩空：一條自己打自己的鏈
        </h2>
        <p className="max-w-3xl text-muted">
          這條鏈的殺傷力在於：
          <strong className="font-semibold text-foreground">
            完全不需要動機猜測
          </strong>
          。不需要證明副總指使、不需要證明報復——只用「誰屬於哪個部門、誰有權對誰動手」這個組織圖上的物理事實，整件事就站不住。
        </p>
      </Reveal>

      <div className="relative ml-2 border-l-2 border-destructive/30 pl-7 sm:ml-3">
        {TIMELINE.map((item) => (
          <Reveal key={item.when} className="relative mb-8">
            <span className="absolute top-2 -left-9 size-3 rounded-full border-2 border-destructive bg-card" />
            <p className="mb-2 text-xs font-semibold tracking-widest text-destructive">
              {item.when}
            </p>
            <article className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <h3 className="mb-3 font-display text-lg font-semibold">
                {item.title}
                <span className="ml-2 inline-block rounded-full border border-destructive/30 bg-destructive/10 px-2.5 py-0.5 align-middle text-xs font-semibold tracking-wide text-destructive">
                  {item.badge}
                </span>
              </h3>
              {item.body.map((p) => (
                <p key={p.slice(0, 16)} className="mb-2 text-sm text-muted">
                  {p}
                </p>
              ))}
              <p className="mt-3 border-t border-dashed border-border pt-3 text-sm font-semibold text-destructive">
                → {item.verdict}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="rounded-xl bg-ink px-6 py-8 text-center text-ink-foreground shadow-md">
          <p className="font-display text-lg font-semibold leading-relaxed sm:text-xl">
            <span className="text-destructive">無效的考核</span>
            <span className="px-2 font-normal text-subtle">→</span>
            <span className="text-destructive">無依據的調職</span>
            <span className="px-2 font-normal text-subtle">→</span>
            <span className="text-destructive">無標的的 PIP</span>
          </p>
          <p className="mt-3 text-sm text-hero-muted">
            三環相扣，每一環的地基都是上一環的空心。這不是「員工績效不足」的故事，是一條流程從頭到尾沒有一個環節站得住的故事。
          </p>
        </div>
      </Reveal>
    </section>
  );
}
