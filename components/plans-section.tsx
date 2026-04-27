import { ArrowRight, Clock, Zap } from "lucide-react"
import { FadeUp, Stagger, StaggerItem } from "@/components/motion"

const plans = [
  {
    icon: Zap,
    title: "クイック導入プラン",
    duration: "14日間",
    description: "すでに運用ルールが固まっており、早急にシステム切り替えやインボイス対応を行いたいお客様向け",
    features: [
      "アカウント発行・クラウド環境構築",
      "基本データのインポート",
      "インボイス対応の初期設定",
      "機材設定（ラベルプリンター等）",
      "リモート操作説明（1〜2回）",
    ],
    highlight: "スピード重視",
  },
  {
    icon: Clock,
    title: "DXコンサルティングプラン",
    duration: "約3ヶ月",
    description: "業務のムダを排除し、AI予測や在庫連動を最大限に活用して利益率を改善したいお客様向け",
    features: [
      "現状分析（As-Is）とTo-Be設計",
      "BPR（業務再構築）提案",
      "個別カスタマイズ設定",
      "AI予測の初期学習・精度向上",
      "多段階トレーニング・伴走支援",
    ],
    highlight: "戦略重視",
    recommended: true,
  },
]

export function PlansSection() {
  return (
    <section id="plans" className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeUp>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              導入プラン
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              お客様の状況に合わせて最適なプランをご提案します
            </p>
          </div>
        </FadeUp>

        <Stagger className="grid items-stretch gap-8 md:grid-cols-2">
          {plans.map((plan, index) => (
            <StaggerItem key={index} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-xl border bg-card p-8 transition-all duration-300 hover:shadow-lg ${
                  plan.recommended ? "border-primary" : "border-border"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3 left-6 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                    おすすめ
                  </div>
                )}
                
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <plan.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {plan.title}
                    </h3>
                    <p className="text-sm text-primary">{plan.duration}</p>
                  </div>
                </div>

                <p className="mb-6 text-sm text-muted-foreground">
                  {plan.description}
                </p>

                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-foreground">
                      <ArrowRight className="h-3 w-3 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {plan.highlight}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp delay={0.12}>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            ※実際の導入スケジュールはお客様に合わせて柔軟に対応します
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
