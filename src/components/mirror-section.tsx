import { useState } from "react";
import { MIRROR } from "@/data/brief";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

export function MirrorSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="mirror" className="mx-auto max-w-6xl px-4 pt-20 pb-8 sm:px-6 sm:pt-24">
      <Reveal className="mb-10">
        <p className="mb-3 text-xs font-semibold tracking-widest text-primary">
          03 — 核心鑑識
        </p>
        <h2 className="mb-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          結構性同構對照表
        </h2>
        <p className="max-w-3xl text-muted">
          「主計機關不執行統計之職責」與「副總／處長／部長不決定、不犯錯、零職責」——兩者的底層邏輯完全一致：
          <strong className="font-semibold text-foreground">
            用形式上的程序合規，掩蓋實質上的責任真空
          </strong>
          ，並把代價單方面轉嫁給最弱勢的一方。
        </p>
      </Reveal>

      <Reveal>
        <div className="hidden overflow-hidden rounded-xl border border-border bg-card shadow-sm lg:block">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="bg-paper">
                <th className="px-4 py-4 font-semibold">比較維度</th>
                <th className="px-4 py-4 font-semibold text-primary">
                  政府端：不統計、不彙整、不驗證
                </th>
                <th className="px-4 py-4 font-semibold text-destructive">
                  企業端：副總／處長／部長零職責
                </th>
                <th className="px-4 py-4 font-semibold text-warning">
                  共同結構本質
                </th>
              </tr>
            </thead>
            <tbody>
              {MIRROR.map((row) => (
                <tr
                  key={row.dim}
                  className="border-t border-border/70 hover:bg-paper/70"
                >
                  <td className="px-4 py-4 font-semibold whitespace-nowrap">
                    {row.dim}
                  </td>
                  <td className="px-4 py-4 text-muted">{row.gov}</td>
                  <td className="px-4 py-4 text-muted">{row.corp}</td>
                  <td className="px-4 py-4">
                    <span className="mb-1 inline-block rounded-full bg-warning/10 px-2 py-0.5 text-xs font-semibold text-warning">
                      {row.core}
                    </span>
                    <p className="text-muted">{row.coreNote}</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-3 lg:hidden">
          {MIRROR.map((row, i) => {
            const active = open === i;
            return (
              <button
                key={row.dim}
                type="button"
                onClick={() => setOpen(active ? -1 : i)}
                className={cn(
                  "w-full rounded-xl border bg-card p-5 text-left shadow-sm transition-colors duration-150",
                  active ? "border-primary" : "border-border",
                )}
              >
                <p className="mb-3 font-semibold">{row.dim}</p>
                {active && (
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="mb-1 text-xs font-semibold tracking-wide text-primary">
                        政府端
                      </p>
                      <p className="text-muted">{row.gov}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold tracking-wide text-destructive">
                        企業端
                      </p>
                      <p className="text-muted">{row.corp}</p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-semibold tracking-wide text-warning">
                        共同本質
                      </p>
                      <p className="text-muted">
                        <span className="mr-2 inline-block rounded-full bg-warning/10 px-2 py-0.5 text-xs font-semibold text-warning">
                          {row.core}
                        </span>
                        {row.coreNote}
                      </p>
                    </div>
                  </div>
                )}
                {!active && (
                  <p className="text-sm text-subtle">{row.core} — 點擊展開</p>
                )}
              </button>
            );
          })}
        </div>
      </Reveal>

      <Reveal>
        <aside className="mt-8 rounded-r-xl border border-border border-l-4 border-l-primary bg-card px-6 py-5 shadow-sm">
          <p className="mb-2 font-semibold tracking-wide">
            為什麼這個對照框架是降維打擊？
          </p>
          <p className="text-sm text-muted">
            對方最希望你陷入「個人恩怨」的泥沼。這張表直接把戰場拉升到
            <strong className="font-semibold text-foreground">
              公司治理與程序正義
            </strong>
            的高度：你不是在抱怨主管對你不好，你是在指出——這套 PIP 流程，與「只公告、不統計」的卸責式審計，是
            <strong className="font-semibold text-foreground">同一種結構</strong>
            。而且整個論證只靠「誰考核誰、標的是什麼、分母如何變動」的客觀流程事實，不需要證明任何人有惡意。
          </p>
        </aside>
      </Reveal>
    </section>
  );
}
