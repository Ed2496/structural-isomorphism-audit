import { Reveal } from "@/components/reveal";

export function Finale() {
  return (
    <section
      id="finale"
      className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6"
    >
      <Reveal>
        <div className="mx-auto mb-10 h-0.5 w-14 rounded-full bg-primary" />
        <p className="mx-auto max-w-3xl font-display text-2xl leading-relaxed font-semibold sm:text-3xl">
          這不是個人的怠惰或惡意，
          <br />
          而是<span className="text-destructive">同一套卸責結構</span>：
          <br />
          上位者保留權力與名義，
          <br />
          卻把
          <span className="text-primary">統計、驗證、決定、承擔後果</span>
          的責任掏空——
          <br />
          最後由人民或基層員工，
          <br />
          承擔整理資料、自證清白、吞下錯誤結果的全部成本。
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-muted">
          程序上的根本瑕疵，在勞資爭議或內部申訴中，將直接摧毀整份文件的合法性與證據力。
          <br />
          因為當你把這張表拍在桌上時，你是在說：
          <strong className="font-semibold text-foreground">
            「你們連做戲的劇本，都寫錯了部門和職稱。」
          </strong>
        </p>
      </Reveal>
    </section>
  );
}
