import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            お気軽にご相談ください
          </h2>
          <p className="mb-10 text-muted-foreground">
            課題のヒアリングから最適なソリューションのご提案まで、専門のコンサルタントが対応いたします。
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link href="https://www.i-pro.site/" target="_blank" rel="noopener noreferrer">
                お問い合わせ
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border text-foreground hover:bg-secondary"
              asChild
            >
              <Link href="https://www.i-pro.site/" target="_blank" rel="noopener noreferrer">
                採用情報を見る
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
