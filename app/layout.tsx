import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Enrique Bermúdez",
  description:
    "Passionate frontend developer specializing in React, TypeScript, and modern web technologies. View my projects and experience.",
  keywords: "frontend developer, React, TypeScript, Next.js, web development, portfolio",
  authors: [{ name: "Enrique Bermúdez" }],
  openGraph: {
    title: "Enrique Bermúdez",
    description: "Passionate frontend developer specializing in React, TypeScript, and modern web technologies.",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
