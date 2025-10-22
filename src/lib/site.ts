export const site = {
  name: "ClarityAccess",
  shortName: "ClarityAccess",
  description:
    "ClarityAccess is a sleek, professional SaaS for secure access and user management.",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://clarityaccess.vercel.app"
  ).replace(/\/+$/, ""),
  locale: "en_US",
  creator: "@clarityaccess",
  themeColorLight: "#ffffff",
  themeColorDark: "#0b1120",
  twitterHandle: "@clarityaccess",
  ogImage: "/og-default.png",
  keywords: [
    "SaaS",
    "Access Management",
    "Authentication",
    "User Provisioning",
    "RBAC",
  ],
  links: {
    github: "https://github.com/rokstr86/clarityaccess-next",
    twitter: "https://x.com/clarityaccess",
  },
} as const
