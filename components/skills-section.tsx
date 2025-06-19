import { skills } from "@/lib/data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { SkillLevel } from "@/lib/types"

const skillLevelColors: Record<SkillLevel, string> = {
  Beginner: "bg-slate-600 text-slate-200 border-slate-500",
  Intermediate: "bg-blue-600 text-blue-100 border-blue-500",
  Advanced: "bg-emerald-600 text-emerald-100 border-emerald-500",
  Expert: "bg-purple-600 text-purple-100 border-purple-500",
}

export function SkillsSection() {
  const skillCategories = {
    frontend: skills.filter((skill) => skill.category === "frontend"),
    backend: skills.filter((skill) => skill.category === "backend"),
    tools: skills.filter((skill) => skill.category === "tools"),
    design: skills.filter((skill) => skill.category === "design"),
  }

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 dark:text-white mb-12">Skills & Technologies</h2>

          {/* Skills Legend */}
          <Card className="mb-12 bg-slate-100 dark:bg-slate-700 border-slate-200 dark:border-slate-600">
            <CardHeader>
              <CardTitle className="text-lg text-center">Skill Level Guide</CardTitle>
              <CardDescription className="text-center">Understanding my proficiency levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center">
                  <Badge className={`mb-2 ${skillLevelColors.Beginner}`}>Beginner</Badge>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Basic understanding, can work with guidance
                  </p>
                </div>
                <div className="text-center">
                  <Badge className={`mb-2 ${skillLevelColors.Intermediate}`}>Intermediate</Badge>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Solid foundation, can work independently</p>
                </div>
                <div className="text-center">
                  <Badge className={`mb-2 ${skillLevelColors.Advanced}`}>Advanced</Badge>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Deep knowledge, can solve complex problems
                  </p>
                </div>
                <div className="text-center">
                  <Badge className={`mb-2 ${skillLevelColors.Expert}`}>Expert</Badge>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Mastery level, can teach and architect solutions
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">Frontend</h3>
              <div className="space-y-3">
                {skillCategories.frontend.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600"
                  >
                    <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <Badge className={skillLevelColors[skill.level]}>{skill.level}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">Backend</h3>
              <div className="space-y-3">
                {skillCategories.backend.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600"
                  >
                    <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <Badge className={skillLevelColors[skill.level]}>{skill.level}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">Tools</h3>
              <div className="space-y-3">
                {skillCategories.tools.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600"
                  >
                    <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <Badge className={skillLevelColors[skill.level]}>{skill.level}</Badge>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 text-center">Design</h3>
              <div className="space-y-3">
                {skillCategories.design.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between p-3 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600"
                  >
                    <span className="font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <Badge className={skillLevelColors[skill.level]}>{skill.level}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
