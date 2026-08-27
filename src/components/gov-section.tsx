import type { ReactNode } from "react";
import { CHAIN } from "@/data/brief";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function GovSection() {
  return (
    <section id="gov" className="mx-auto max-w-6xl px-4 pt-20 pb-8 sm:px-6 sm:pt-24">
      <Reveal className="mb-10">
        <p className="mb-3 text-xs font-semibold tracking-widest text-primary">
          01 — 政府端
        </p>
        <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          公告存在，監督不存在
        </h2>
        <p className="max-w-3xl text-muted">
          以「因公派員出國考察費用」為例：主計總處設有查詢平台，但頁面明示「僅提供資訊公告平台，連結資訊由各機關人員維護」。
          <strong className="font-semibold text-foreground">
            沒有全國加總、沒有跨機關比較、沒有異常警示
          </strong>
          ——民眾要得到總數，只能自行下載各機關月表逐一加總。
        </p>
      </Reveal>

      <Reveal>
        <p className="mb-4 text-sm text-subtle">
          正常的公共支出問責鏈，應該是一條不間斷的閉環：
        </p>
        <ol className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-0">
          {CHAIN.map((node, i) => (
            <li key={node.label} className="flex flex-1 items-stretch sm:min-w-28">
              {i > 0 && (
                <span
                  className="flex items-center px-1 text-subtle sm:px-2"
                  aria-hidden
                >
                  <span className="sm:hidden">↓</span>
                  <span className="hidden sm:inline">→</span>
                </span>
              )}
              <div
                className={cn(
                  "relative flex-1 rounded-lg border bg-card px-3 py-4 text-center text-sm font-semibold shadow-sm",
                  node.status === "ok"
                    ? "border-primary/40"
                    : "border-destructive/40 bg-destructive/5 text-muted",
                )}
              >
                <span
                  className={cn(
                    "absolute -top-2 right-2 rounded-full px-2 py-0.5 text-xs font-medium tracking-wide text-primary-foreground",
                    node.status === "ok" ? "bg-primary" : "bg-destructive",
                  )}
                >
                  {node.status === "ok" ? "運作中" : "斷裂"}
                </span>
                {node.label}
                {node.note && (
                  <small className="mt-1 block font-normal text-muted">
                    {node.note}
                  </small>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

      <Callout title="「公告」證明了什麼？">
        各機關按月公告的執行表，只能證明「機關發布了一份資料」
        <strong className="font-semibold text-foreground">，不能</strong>
        證明費用必要、成果有效、或支出沒有被錯列。公告是揭露義務的完成，不是實質責任的完成。
      </Callout>

      <Callout title="閉環斷裂的代價，由誰承擔？" tone="danger">
        人民自行統計只能做到三件事：建立可重現的事實基礎、找出疑似異常、提交給立法院／審計部／監察院。它
        <strong className="font-semibold text-foreground">不能</strong>
        命令機關停止支出、不能要求退回款項、不能處分任何人。政府把本應由行政體系完成的彙整與分析，
        <strong className="font-semibold text-foreground">
          轉嫁給了最無力的人民
        </strong>
        。
      </Callout>

      <Callout title="一句話定性" tone="warn">
        不是沒有公告，而是
        <strong className="font-semibold text-foreground">
          公告沒有接上統計；統計沒有接上查核；查核沒有必然接上處分
        </strong>
        。透明化停在敘事層——這就是「表演性透明」（Performative Transparency）。
      </Callout>
    </section>
  );
}

function Callout({
  title,
  children,
  tone = "primary",
}: {
  title: string;
  children: ReactNode;
  tone?: "primary" | "danger" | "warn";
}) {
  const border =
    tone === "danger"
      ? "border-l-destructive"
      : tone === "warn"
        ? "border-l-warning"
        : "border-l-primary";
  return (
    <Reveal>
      <aside
        className={cn(
          "mt-7 rounded-r-xl border border-border border-l-4 bg-card px-6 py-5 shadow-sm",
          border,
        )}
      >
        <p className="mb-2 font-semibold tracking-wide">{title}</p>
        <p className="text-sm text-muted">{children}</p>
      </aside>
    </Reveal>
  );
}
