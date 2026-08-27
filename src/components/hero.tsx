import { Landmark, Building2 } from "lucide-react";

export function Hero() {
  return (
    <header className="hero-wash relative flex min-h-svh items-center justify-center overflow-hidden px-4 pt-28 pb-20 text-center text-ink-foreground sm:px-6">
      <div className="relative z-10 mx-auto max-w-3xl">
        <p className="mb-8 inline-block rounded-full border border-primary/40 px-4 py-1.5 text-xs tracking-widest text-primary-foreground/80">
          公告 ≠ 監督　·　流程 ≠ 負責
        </p>
        <h1 className="mb-7 font-display text-4xl leading-tight font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-subtle line-through decoration-destructive decoration-4">
            形式合規
          </span>
          的外殼之下
          <br />
          是一場<span className="text-primary-foreground">系統性卸責</span>
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-base text-hero-muted sm:text-lg">
          一個在政府：審計與主計機關「只公告、不統計、不驗證」。
          <br className="hidden sm:block" />
          一個在企業：副總、處長、部長「不決定、不犯錯、零職責」。
          <br className="hidden sm:block" />
          兩個看似無關的戰場，運轉的是
          <strong className="font-semibold text-primary-foreground">
            同一套卸責結構
          </strong>
          。
        </p>
        <div className="flex flex-wrap items-stretch justify-center gap-4">
          <article className="w-full max-w-xs rounded-xl border border-border bg-card p-6 text-left text-foreground shadow-sm sm:w-72">
            <p className="mb-2 flex items-center gap-2 text-xs tracking-widest text-primary">
              <Landmark className="size-3.5" aria-hidden />
              宏觀治理層
            </p>
            <h2 className="mb-2 font-display text-lg font-semibold">
              主計／審計機關
            </h2>
            <p className="text-sm text-muted">
              只提供連結平台，不做全國加總、交叉比對與異常偵測
            </p>
          </article>
          <div
            className="hidden items-center font-display text-2xl font-semibold text-primary-foreground italic sm:flex"
            aria-hidden
          >
            ≡
          </div>
          <article className="w-full max-w-xs rounded-xl border border-border bg-card p-6 text-left text-foreground shadow-sm sm:w-72">
            <p className="mb-2 flex items-center gap-2 text-xs tracking-widest text-destructive">
              <Building2 className="size-3.5" aria-hidden />
              微觀管理層
            </p>
            <h2 className="mb-2 font-display text-lg font-semibold">
              副總 ／ 處長 ／ 部長
            </h2>
            <p className="text-sm text-muted">
              不做出明確權責決定，不承擔管理失敗的責任
            </p>
          </article>
        </div>
      </div>
    </header>
  );
}
