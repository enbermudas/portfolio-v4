"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circle */}
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-3xl"
          style={{
            top: "10%",
            right: "10%",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        {/* Triangle */}
        <div
          className="absolute w-0 h-0 border-l-[150px] border-r-[150px] border-b-[260px] border-l-transparent border-r-transparent border-b-cyan-500/10"
          style={{
            top: "60%",
            left: "5%",
            transform: `translateY(${scrollY * -0.2}px) rotate(15deg)`,
          }}
        />

        {/* Hexagon */}
        <div
          className="absolute w-32 h-32 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 transform rotate-45"
          style={{
            top: "20%",
            left: "15%",
            clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            transform: `translateY(${scrollY * 0.4}px) rotate(${45 + scrollY * 0.1}deg)`,
          }}
        />

        {/* Rectangle */}
        <div
          className="absolute w-40 h-24 bg-gradient-to-r from-pink-500/15 to-rose-500/15 rounded-lg transform rotate-12"
          style={{
            bottom: "20%",
            right: "20%",
            transform: `translateY(${scrollY * -0.3}px) rotate(${12 + scrollY * 0.05}deg)`,
          }}
        />

        {/* Small Circles */}
        <div
          className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-yellow-500/25 to-orange-500/25"
          style={{
            top: "40%",
            right: "30%",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />

        <div
          className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
          style={{
            bottom: "40%",
            left: "25%",
            transform: `translateY(${scrollY * -0.4}px)`,
          }}
        />

        {/* Diamond */}
        <div
          className="absolute w-24 h-24 bg-gradient-to-r from-violet-500/15 to-purple-500/15 transform rotate-45"
          style={{
            top: "70%",
            right: "40%",
            transform: `translateY(${scrollY * 0.25}px) rotate(${45 + scrollY * 0.08}deg)`,
          }}
        />

        {/* Floating Lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M100,200 Q300,100 500,300 T900,200"
            stroke="url(#lineGradient1)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M200,400 Q400,300 600,500 T1000,400"
            stroke="url(#lineGradient2)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Enrique Bermúdez
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">Frontend Developer</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Passionate about creating beautiful, functional, and user-centered digital experiences. I specialize in
              modern web technologies and love bringing ideas to life through code.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-lg shadow-blue-500/25"
            >
              <Link href="#projects">View My Work</Link>
            </Button>
            <a href="/cv.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <Link
              href="https://github.com/enbermudas"
              className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 p-2 rounded-full hover:bg-slate-800"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/enbermudez/"
              className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 p-2 rounded-full hover:bg-slate-800"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:enrique.bermudez.dev@gmail.com"
              className="text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 p-2 rounded-full hover:bg-slate-800"
            >
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
