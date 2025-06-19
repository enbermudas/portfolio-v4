export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">About Me</h2>

          <div className="text-center mb-12">
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a passionate frontend developer with over 7 years of experience creating digital experiences that
                are not only visually appealing but also highly functional and user-friendly.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                My journey in web development started with a curiosity about how softwares work, and it has evolved into
                a deep passion for crafting exceptional user interfaces using modern technologies like React and
                TypeScript.
              </p>

              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies or reading a bit of high fantasy books.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-12">
            <div className="text-center p-6 bg-slate-700/50 rounded-lg border border-slate-600/50">
              <h3 className="text-3xl font-bold text-white mb-2">7+</h3>
              <p className="text-slate-300 text-sm">Years Experience</p>
            </div>
            <div className="text-center p-6 bg-slate-700/50 rounded-lg border border-slate-600/50">
              <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
              <p className="text-slate-300 text-sm">Available</p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Clean Code</h3>
              <p className="text-slate-300">
                Writing maintainable, scalable, and efficient code following best practices.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 002 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Responsive Design</h3>
              <p className="text-slate-300">Creating seamless experiences across all devices and screen sizes.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
              <p className="text-slate-300">Optimizing applications for speed, accessibility, and user experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
