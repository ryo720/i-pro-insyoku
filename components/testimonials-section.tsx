import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "田中 健太",
    position: "オーナー",
    company: "居酒屋 やまと（東京都・3店舗）",
    content:
      "導入前は各店舗の数字を集めるだけで半日かかっていました。今はスマホで全店舗の売上・在庫がリアルタイムで見られるので、経営判断のスピードが格段に上がりました。原価率も7%改善し、利益率が大幅にアップしています。",
  },
  {
    name: "佐藤 美咲",
    position: "店長",
    company: "カフェ ブルーム（大阪府）",
    content:
      "発注業務が本当に楽になりました。以前は経験と勘で発注していたため、週末に材料が足りなくなることもありましたが、AI予測のおかげで適正在庫を維持できています。廃棄ロスも激減し、スタッフからも好評です。",
  },
  {
    name: "鈴木 一郎",
    position: "代表取締役",
    company: "株式会社フードクリエイト（愛知県・8店舗）",
    content:
      "多店舗展開を進める中で、管理の限界を感じていました。このシステムのおかげで、新店舗を出しても本部で一括管理できるようになり、店舗数を増やしても管理コストが比例して増えることがなくなりました。",
  },
  {
    name: "山本 恵子",
    position: "経理担当",
    company: "焼肉 牛角亭（福岡県・2店舗）",
    content:
      "インボイス制度の対応に頭を抱えていましたが、このシステムで全て自動化できました。適格請求書の発行から保存まで、経理作業が半分以下になり、月末の締め作業も余裕を持って終えられるようになりました。",
  },
  {
    name: "高橋 誠",
    position: "マネージャー",
    company: "ラーメン 龍神（神奈川県）",
    content:
      "シフト作成に毎週何時間もかかっていたのが、今は30分で完了します。AIが過去の売上データから繁忙時間を予測してくれるので、人員配置も最適化され、人件費を月20万円以上削減できました。スタッフの働きやすさも向上しています。",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            お客様の声
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            導入企業様からいただいた声をご紹介します
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              
              <p className="mb-6 flex-1 text-sm leading-relaxed text-foreground">
                {testimonial.content}
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.position}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
