import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="absolute right-0 top-1/4 h-64 w-64 rounded-full bg-[#00D4AA]/5 blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-[#00D4AA]/5 blur-3xl" />
      
      <div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
        <p className="mb-4 text-sm font-medium tracking-wider text-[#00D4AA]">
          次世代型・店舗運営支援システム
        </p>
        
        <h1 className="mb-6 text-balance text-4xl font-bold leading-tight text-[#333333] md:text-5xl lg:text-6xl">
          飲食店管理システム
        </h1>

        <h2 className="mb-6 text-balance text-2xl font-bold leading-tight text-[#333333] md:text-3xl lg:text-4xl">
          飲食店経営を
          <br className="md:hidden" />
          <span className="text-[#00D4AA]">デジタルで革新</span>する
        </h2>
        
        <p className="mx-auto mb-10 max-w-2xl text-pretty text-base leading-relaxed text-[#666666] md:text-lg">
          ホールでの注文、キッチンの調理計画、原材料の在庫管理、本部の経理処理まで、
          すべての業務をリアルタイムで同期。AIによる需要予測とビッグデータ活用で、
          持続可能な店舗経営を実現します。
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button 
            size="lg" 
            className="gap-2 rounded-full bg-[#00D4AA] px-8 text-white hover:bg-[#00D4AA]/90"
            asChild
          >
            <Link href="#contact">
              お問い合わせ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="rounded-full border-[#333333] px-8 text-[#333333] hover:bg-gray-50"
            asChild
          >
            <Link href="#features">
              機能を見る
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
