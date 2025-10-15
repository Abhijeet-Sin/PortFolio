import { Card } from '@/components/ui/card';
import {
  Code2,
  Database,
  Palette,
  Server,
  Smartphone,
  Cloud,
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: [
        { name: 'React ', level: 95 },
        { name: 'TypeScript', level: 50 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vue.js', level: 35 },
        { name: 'Next.js', level: 45 },
      ],
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: [
        { name: 'Node.js / Express', level: 70 },
        { name: 'Python', level: 85 },
        { name: 'REST APIs', level: 95 },
        { name: 'GraphQL', level: 15 },
        { name: 'Django', level: 15 },
      ],
    },
    {
      icon: Database,
      title: 'Database & Storage',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'SQL', level: 90 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 20 },
        { name: 'Firebase', level: 20 },
      ],
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', level: 15 },
        { name: 'Docker', level: 15 },
        { name: 'CI/CD', level: 15 },
        { name: 'Kubernetes', level: 15 },
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: [
        { name: 'React Native', level: 15 },
        { name: 'PWA', level: 60 },
      ],
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: [
        { name: 'UI/UX Design', level: 65 },
        { name: 'Figma', level: 60 },
        { name: 'Git / GitHub', level: 90 },
        { name: 'Agile / Scrum', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg gradient-bg">
                      <Icon className="text-foreground" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-muted-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm font-medium text-primary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full gradient-bg transition-all duration-1000 ease-out rounded-full"
                            style={{
                              width: `${skill.level}%`,
                              animation: `slideIn 1s ease-out ${skillIndex * 0.1}s both`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            width: 0%;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
