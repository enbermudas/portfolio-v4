import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Enrique Bermúdez</h3>
              <p className="text-slate-300 mb-4">
                Frontend Developer passionate about creating beautiful and functional web experiences.
              </p>
              <div className="flex space-x-4">
                <Link href="https://github.com/enbermudas" className="text-slate-300 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/enbermudez/" className="text-slate-300 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="mailto:enrique.bermudez.dev@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-slate-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#skills" className="text-slate-300 hover:text-white transition-colors">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-slate-300 hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#experience" className="text-slate-300 hover:text-white transition-colors">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-slate-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-slate-300">
                <p>enrique.bermudez.dev@gmail.com</p>
                <p>+54 (342) 629 5266</p>
                <p>Santa Fe, Argentina</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-300 flex items-center justify-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Enrique Bermúdez © 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
