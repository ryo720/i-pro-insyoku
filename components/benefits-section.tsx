import { CheckCircle2 } from "lucide-react"
import { FadeUp, Stagger, StaggerItem } from "@/components/motion"

const benefits = [
  {
    category: "コスト削減",
    items: [
      "事務工数の大幅削減",
      "FLコスト（原材料費）の適正化",
      "廃棄ロスの最小化",
    ],
  },
  {
    category: "業務効率化",
    items: [
      "サービススピードの向上",
      "在庫管理の自動化",
      "発注業務の簡素化",
    ],
  },
  {
    category: "経営支援",
    items: [
      "データに基づく意思決定",
      "不正リスクの軽減",
      "多店舗展開への対応",
    ],
  },
  {
    category: "法令遵守",
    items: [
      "インボイス制度完全対応",
      "適格請求書の自動発行",
      "仕入税額控除の帳簿自動作成",
    ],
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <FadeUp>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              導入効果
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              KPIの劇的な改善と包括的な経営支援を実現
            </p>
          </div>
        </FadeUp>

        <Stagger className="grid items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <StaggerItem key={index} className="h-full">
              <div className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
                <h3 className="mb-4 text-lg font-semibold text-primary">
                  {benefit.category}
                </h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeUp delay={0.12}>
          <div className="mt-16 rounded-xl bg-primary/5 p-8 md:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="mb-4 text-xl font-bold text-foreground md:text-2xl">
                飲食店経営のすべてをデジタル化
              </h3>
              <p className="text-muted-foreground">
                在庫や売上だけでなく、人材管理や請求管理までを網羅する一元管理システム。
                全店舗のデータが統一された形式で蓄積されるため、新店舗展開時も迅速に高度な管理体制を構築できます。
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
