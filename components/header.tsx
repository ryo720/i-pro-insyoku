"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link href="https://www.i-pro.site/" className="flex items-center">
          <span className="text-xl font-bold">
            <span className="text-[#00D4AA]">I-</span>
            <span className="text-[#333333]">PRO</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link 
            href="https://www.i-pro.site/" 
            className="text-sm text-[#333333] transition-colors hover:text-[#00D4AA]"
          >
            TOP
          </Link>
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm text-[#333333] transition-colors hover:text-[#00D4AA]">
              サービス
              <ChevronDown className="h-3 w-3" />
            </button>
            <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
              <div className="min-w-40 rounded-lg border border-gray-100 bg-white p-2 shadow-lg">
                <Link 
                  href="https://www.i-pro.site/" 
                  className="block rounded px-3 py-2 text-sm text-[#333333] transition-colors hover:bg-gray-50 hover:text-[#00D4AA]"
                >
                  ITコンサルティング
                </Link>
                <Link 
                  href="https://www.i-pro.site/" 
                  className="block rounded px-3 py-2 text-sm text-[#333333] transition-colors hover:bg-gray-50 hover:text-[#00D4AA]"
                >
                  受託開発
                </Link>
                <Link 
                  href="https://www.i-pro.site/" 
                  className="block rounded px-3 py-2 text-sm text-[#333333] transition-colors hover:bg-gray-50 hover:text-[#00D4AA]"
                >
                  SES
                </Link>
              </div>
            </div>
          </div>
          <Link 
            href="#" 
            className="text-sm text-[#333333] transition-colors hover:text-[#00D4AA]"
          >
            プロダクト
          </Link>
          <Link 
            href="https://www.i-pro.site/" 
            className="text-sm text-[#333333] transition-colors hover:text-[#00D4AA]"
          >
            会社情報
          </Link>
          <Link 
            href="https://www.i-pro.site/" 
            className="text-sm text-[#333333] transition-colors hover:text-[#00D4AA]"
          >
            採用情報
          </Link>
          <Link 
            href="https://www.i-pro.site/" 
            className="text-sm text-[#333333] transition-colors hover:text-[#00D4AA]"
          >
            お問い合わせ
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button 
            className="rounded-full bg-[#00D4AA] px-6 text-white hover:bg-[#00D4AA]/90"
            asChild
          >
            <Link href="https://www.i-pro.site/">
              お問い合わせ
            </Link>
          </Button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="メニューを開く"
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-[#333333]" /> : <Menu className="h-6 w-6 text-[#333333]" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link 
              href="https://www.i-pro.site/" 
              className="text-sm text-[#333333] transition-colors hover:text-[#00D4AA]"
              onClick={() => setMobileMenuOpen(false)}
            >
              TOP
            </Link>
            <div className="space-y-2">
              <span className="text-sm text-[#333333]">サービス</span>
              <div className="ml-4 space-y-2">
                <Link 
                  href="https://www.i-pro.site/" 
                  className="block text-sm text-[#666666] transition-colors hover:text-[#00D4AA]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ITコンサルティング
                </Link>
                <Link 
                  href="https://www.i-pro.site/" 
                  className="block text-sm text-[#666666] transition-colors hover:text-[#00D4AA]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  受託開発
                </Link>
                <Link 
                  href="https://www.i-pro.site/" 
                  className="block text-sm text-[#666666] transition-colors hover:text-[#00D4AA]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SES
                </Link>
              </div>
            </div>
            <Link 
              href="#" 
              className="text-sm text-[#333333] transition-colors hover:text-[#00D4AA]"
              onClick={() => setMobileMenuOpen(false)}
            >
              プロダクト
            </Link>
            <Link 
              href="https://www.i-pro.site/" 
              className="text-sm text-[#333333] transition-colors hover:text-[#00D4AA]"
              onClick={() => setMobileMenuOpen(false)}
            >
              会社情報
            </Link>
            <Link 
              href="https://www.i-pro.site/" 
              className="text-sm text-[#333333] transition-colors hover:text-[#00D4AA]"
              onClick={() => setMobileMenuOpen(false)}
            >
              採用情報
            </Link>
            <Link 
              href="https://www.i-pro.site/" 
              className="text-sm text-[#333333] transition-colors hover:text-[#00D4AA]"
              onClick={() => setMobileMenuOpen(false)}
            >
              お問い合わせ
            </Link>
            <Button 
              className="mt-2 w-full rounded-full bg-[#00D4AA] text-white hover:bg-[#00D4AA]/90"
              asChild
            >
              <Link href="https://www.i-pro.site/">
                お問い合わせ
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
