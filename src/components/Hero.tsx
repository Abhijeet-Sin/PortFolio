import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6 inline-block">
            <span className="text-sm sm:text-base font-medium text-muted-foreground px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Crafting Digital
            <br />
            <span className="gradient-text">Experiences</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full Stack Developer passionate about building elegant, scalable solutions
            that push the boundaries of modern web development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToProjects}
              className="w-full sm:w-auto"
            >
              View Projects
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline-glow"
              size="xl"
              onClick={scrollToContact}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-6 justify-center items-center">
            <a
              href="https://github.com/Abhijeet-Sin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/abhijeet2303/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:hello.abhijeetsingh@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
