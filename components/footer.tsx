import Link from "next/link"

const MAIN_SITE = "https://www.i-pro.site"

const footerLinks = {
  services: {
    title: "サービス",
    links: [
      { label: "ITコンサルティング", href: `${MAIN_SITE}/services/consulting` },
      { label: "受託開発", href: `${MAIN_SITE}/services/development` },
      { label: "SES", href: `${MAIN_SITE}/services/ses` },
    ],
  },
  company: {
    title: "企業情報",
    links: [
      { label: "会社情報", href: `${MAIN_SITE}/company` },
      { label: "採用情報", href: `${MAIN_SITE}/careers` },
      { label: "お問い合わせ", href: `${MAIN_SITE}/contact` },
    ],
  },
  product: {
    title: "プロダクト",
    links: [
      { label: "自社プロダクト", href: `${MAIN_SITE}/products` },
    ],
  },
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href={`${MAIN_SITE}/`} className="inline-block text-xl font-bold text-foreground">
              I-<span className="text-primary">PRO</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              株式会社I-PRO
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              〒141-0022
              <br />
              東京都品川区東五反田5丁目22番5号
              <br />
              ライオンズガーデン池田山210号
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">
              {footerLinks.services.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">
              {footerLinks.company.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">
              {footerLinks.product.title}
            </h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.product.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2026 株式会社I-PRO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
