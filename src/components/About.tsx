import { Code, Palette, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code following best practices',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, user-centric interfaces with attention to detail',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed, efficiency, and exceptional user experience',
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 order-2 md:order-1">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with expertise in building modern web
                applications. With a focus on creating seamless user experiences and robust
                backend systems, I bring ideas to life through clean code and innovative solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in software development has equipped me with a diverse skill set,
                allowing me to tackle complex challenges and deliver high-quality products that
                exceed expectations.
              </p>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 gradient-bg rounded-lg blur-3xl opacity-20" />
                <Card className="p-8 relative backdrop-blur-sm border-primary/20">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Experience</span>
                      <span className="font-semibold">3 Years</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Projects Completed</span>
                      <span className="font-semibold">5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Happy Clients</span>
                      <span className="font-semibold">2</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card
                  key={index}
                  className="p-6 card-hover border-primary/20 bg-card/50 backdrop-blur-sm"
                >
                  <div className="mb-4 inline-flex p-3 rounded-lg gradient-bg">
                    <Icon className="text-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
