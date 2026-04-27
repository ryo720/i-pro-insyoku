import Link from "next/link"

const footerLinks = {
  services: {
    title: "サービス",
    links: [
      { label: "ITコンサルティング", href: "https://www.i-pro.site/" },
      { label: "受託開発", href: "https://www.i-pro.site/" },
      { label: "SES", href: "https://www.i-pro.site/" },
    ],
  },
  company: {
    title: "企業情報",
    links: [
      { label: "会社情報", href: "https://www.i-pro.site/" },
      { label: "採用情報", href: "https://www.i-pro.site/" },
      { label: "お問い合わせ", href: "https://www.i-pro.site/" },
    ],
  },
  product: {
    title: "プロダクト",
    links: [
      { label: "自社プロダクト", href: "#" },
    ],
  },
}

export function Footer() {
  return (
    <footer className="bg-white py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <Link href="https://www.i-pro.site/" className="inline-block text-xl font-bold">
              <span className="text-[#00D4AA]">I-</span>
              <span className="text-[#333333]">PRO</span>
            </Link>
            <p className="mt-4 text-sm text-[#333333]">
              株式会社I-PRO
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#666666]">
              〒141-0022
              <br />
              東京都品川区東五反田5丁目22番5号
              <br />
              ライオンズガーデン池田山210号
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-[#333333]">
              {footerLinks.services.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#666666] transition-colors hover:text-[#00D4AA]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-[#333333]">
              {footerLinks.company.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#666666] transition-colors hover:text-[#00D4AA]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-[#333333]">
              {footerLinks.product.title}
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#666666] transition-colors hover:text-[#00D4AA]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#666666]">
            © 2026 株式会社I-PRO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
