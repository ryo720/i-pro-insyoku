import { BarChart3, Brain, ClipboardCheck, Receipt, Truck, Utensils } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "統合ダッシュボード",
    description: "発注履歴、在庫状況、売上推移に加え、天候情報までを一元表示。正確なデータに基づいた迅速な意思決定を支援します。",
  },
  {
    icon: Brain,
    title: "AI発注リスト",
    description: "過去の販売実績、リアルタイム在庫、天気予報等のデータをAIが分析し、最適な発注リストを自動生成します。",
  },
  {
    icon: ClipboardCheck,
    title: "入庫検品・ラベル管理",
    description: "ハンディ端末で品質・数量を厳密にチェック。QRコードラベルで原材料から調理済み品まで徹底したトレーサビリティを確保。",
  },
  {
    icon: Utensils,
    title: "補充調理計画",
    description: "調理済み品の在庫不足時、システムが自動的に補充調理計画を策定。仕込みの優先順位を明確化し、提供スピードを向上。",
  },
  {
    icon: Truck,
    title: "サプライヤー連携",
    description: "管理者がAIの提案を調整するだけで、システムから直接サプライヤーへ発注データを送信。発注業務の工数を大幅に削減。",
  },
  {
    icon: Receipt,
    title: "インボイス完全対応",
    description: "軽減税率（8%）と標準税率（10%）を正確に区分。適格簡易請求書の自動発行でコンプライアンスを徹底。",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            機能
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            飲食店運営のあらゆる課題を解決する高度な機能群
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
