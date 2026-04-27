import { ArrowRight, TrendingUp } from "lucide-react"
import { FadeUp, Stagger, StaggerItem } from "@/components/motion"

const caseStudies = [
  {
    industry: "シーシャバー",
    category: "経理自動化",
    title: "売上・仕入管理による帳簿作成の完全自動化",
    challenges: [
      "夜間営業のため経理作業が後回しになり、月末に帳簿が溜まる",
      "フレーバーや炭など多品目の仕入れ管理がExcelでは限界",
    ],
    effects: [
      "売上・仕入データから帳簿を自動生成、経理作業を月20時間削減",
      "リアルタイムで損益が把握でき、経営判断が迅速に",
      "税理士への提出資料も自動出力で顧問料を年間12万円削減",
    ],
  },
  {
    industry: "居酒屋",
    category: "コスト削減",
    title: "原価率改善プロジェクト",
    challenges: [
      "仕入れコストの把握が困難で、原価率が35%を超過",
      "廃棄ロスの発生原因が特定できず、毎月約15万円の損失",
    ],
    effects: [
      "原価率を35%から28%に改善（年間約420万円削減）",
      "AI需要予測により廃棄ロスを70%削減",
      "仕入れ先の最適化で単価を平均8%削減",
    ],
  },
  {
    industry: "カフェチェーン",
    category: "業務効率化",
    title: "多店舗一元管理の実現",
    challenges: [
      "5店舗の在庫・売上データが分散し、集計に毎日2時間以上",
      "店舗間の在庫移動が非効率で、欠品と過剰在庫が頻発",
    ],
    effects: [
      "全店舗データのリアルタイム一元化を達成",
      "事務作業時間を月40時間削減",
      "在庫回転率が1.8倍に向上",
    ],
  },
  {
    industry: "焼肉店",
    category: "法令対応",
    title: "インボイス制度完全対応",
    challenges: [
      "インボイス制度への対応が遅れ、経理業務が混乱",
      "仕入先ごとの適格請求書の管理が煩雑",
    ],
    effects: [
      "適格請求書の自動発行・保存で経理工数50%削減",
      "仕入税額控除の帳簿を自動作成、税務調査にも即座に対応可能",
      "電子帳簿保存法にも完全対応",
    ],
  },
  {
    industry: "ラーメン店",
    category: "人材管理",
    title: "シフト最適化と人件費削減",
    challenges: [
      "シフト作成に毎週5時間以上を費やしていた",
      "繁忙期と閑散期の人員配置が不適切で、人件費率が32%",
    ],
    effects: [
      "AI予測に基づくシフト自動作成で作業時間を90%削減",
      "人件費率を32%から27%に改善（月約25万円削減）",
      "従業員満足度も向上し、離職率が低下",
    ],
  },
]

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeUp>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                導入実績
              </h2>
              <p className="text-muted-foreground">
                豊富な実績で御社の課題を解決します
              </p>
            </div>
          </div>
        </FadeUp>

        <Stagger className="mt-12 space-y-6">
          {caseStudies.map((study, index) => (
            <StaggerItem key={index}>
              <div className="rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                    {study.industry}
                  </span>
                  <span className="rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                    {study.category}
                  </span>
                </div>
                
                <h3 className="mb-4 text-lg font-bold text-foreground">
                  {study.title}
                </h3>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                      課題
                    </h4>
                    <ul className="space-y-2">
                      {study.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-primary">
                      <TrendingUp className="h-4 w-4" />
                      効果
                    </h4>
                    <ul className="space-y-2">
                      {study.effects.map((effect, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                          <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {effect}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
