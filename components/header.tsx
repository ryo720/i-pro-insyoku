"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const MAIN_SITE = "https://www.i-pro.site"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href={`${MAIN_SITE}/`} className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-foreground">
              I-<span className="text-primary">PRO</span>
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          <Link className="text-sm font-medium text-foreground transition-colors hover:text-foreground" href={`${MAIN_SITE}/`}>
            TOP
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                サービス
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link href={`${MAIN_SITE}/services/consulting`}>ITコンサルティング</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`${MAIN_SITE}/services/development`}>受託開発</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`${MAIN_SITE}/services/ses`}>SES</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" href={`${MAIN_SITE}/products`}>
            プロダクト
          </Link>
          <Link className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" href={`${MAIN_SITE}/company`}>
            会社情報
          </Link>
          <Link className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" href={`${MAIN_SITE}/careers`}>
            採用情報
          </Link>
          <Link className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground" href={`${MAIN_SITE}/contact`}>
            お問い合わせ
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild>
            <Link href={`${MAIN_SITE}/contact`}>お問い合わせ</Link>
          </Button>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}
        >
          <span className="sr-only">{mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"}</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col gap-4 p-4">
            <Link 
              href={`${MAIN_SITE}/`} 
              className="text-sm font-medium text-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              TOP
            </Link>
            <div className="space-y-2">
              <span className="text-sm font-medium text-foreground">サービス</span>
              <div className="ml-4 space-y-2">
                <Link 
                  href={`${MAIN_SITE}/services/consulting`} 
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  ITコンサルティング
                </Link>
                <Link 
                  href={`${MAIN_SITE}/services/development`} 
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  受託開発
                </Link>
                <Link 
                  href={`${MAIN_SITE}/services/ses`} 
                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SES
                </Link>
              </div>
            </div>
            <Link 
              href={`${MAIN_SITE}/products`} 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              プロダクト
            </Link>
            <Link 
              href={`${MAIN_SITE}/company`} 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              会社情報
            </Link>
            <Link 
              href={`${MAIN_SITE}/careers`} 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              採用情報
            </Link>
            <Link 
              href={`${MAIN_SITE}/contact`} 
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              お問い合わせ
            </Link>
            <Button 
              className="mt-2 w-full"
              asChild
            >
              <Link href={`${MAIN_SITE}/contact`}>お問い合わせ</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
