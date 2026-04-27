import { Quote } from "lucide-react"

const testimonials = [
  {
    industry: "シーシャバー",
    content:
      "深夜営業中心で経理作業に手が回らず、確定申告前はいつも地獄でした。このシステムで売上と仕入れを入力するだけで帳簿が自動生成されるようになり、税理士さんからも「資料が完璧」と驚かれています。経営数字がリアルタイムで見えるので、新フレーバーの仕入れ判断も的確になりました。",
  },
  {
    industry: "居酒屋（3店舗）",
    content:
      "導入前は各店舗の数字を集めるだけで半日かかっていました。今はスマホで全店舗の売上・在庫がリアルタイムで見られるので、経営判断のスピードが格段に上がりました。原価率も7%改善し、利益率が大幅にアップしています。",
  },
  {
    industry: "カフェ",
    content:
      "発注業務が本当に楽になりました。以前は経験と勘で発注していたため、週末に材料が足りなくなることもありましたが、AI予測のおかげで適正在庫を維持できています。廃棄ロスも激減し、スタッフからも好評です。",
  },
  {
    industry: "焼肉店（2店舗）",
    content:
      "インボイス制度の対応に頭を抱えていましたが、このシステムで全て自動化できました。適格請求書の発行から保存まで、経理作業が半分以下になり、月末の締め作業も余裕を持って終えられるようになりました。",
  },
  {
    industry: "ラーメン店",
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
                <span className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                  {testimonial.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
