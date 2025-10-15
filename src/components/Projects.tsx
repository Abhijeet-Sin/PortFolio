import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  github: string;
  live: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'DIGIFACTORY',
      description: 'Industrial automation dashboards with real-time data visualization.',
      fullDescription:
        'Developed an advanced industrial automation dashboard in React for monitoring real-time machine performance, tool status, and program availability. Integrated 3D visualizations with Three.js and Excel-style interfaces using Sheet.js. Implemented Redux and i18n for scalable state management and multilingual support, improving performance, maintainability, and data visualization efficiency.',
      tags: [ 'React.js', 'Redux' , 'Redux Toolkit' , 'Three.js' , 'Sheet.js' , 'XLSX' , 'CoreUI' , 'i18n' , 'Jest' , 'React Testing Library' , 'JavaScript'],
      image: 'https://prototool.com/wp-content/uploads/2023/04/Types-of-CNC-machines.webp',
      github: 'https://github.com',
      live: 'https://demo.com',
    },
    {
      id: 2,
      title: 'ODOO CUSTOM SOLUTIONS',
      description: 'Customized Odoo modules with biometric and workflow integration.',
      fullDescription:
        'Customized and extended Odoo modules across HR, Sales, and Employee management. Integrated biometric devices like Matrix and ESSL for real-time attendance tracking. Delivered client demos and onboarding, mentored junior developers, and optimized UI/UX through iterative feedback, leveraging React, Tailwind CSS, PostgreSQL, and XML for seamless business automation.',
      tags: ['Odoo 13–17', 'React.js', 'JavaScript', 'Tailwind CSS',  'QWeb',  'PostgreSQL',  'XML' , 'Git', 'Biometric Integration'],
      image: 'https://braincuber.com/wp-content/uploads/2024/12/1-All-You-Need-to-Know-About-Odoo-1.webp',
      github: 'https://github.com',
      live: 'https://demo.com',
    },
    {
      id: 3,
      title: 'MUSICLY APP',
      description: 'Full-stack music streaming platform with Stripe payments.',
      fullDescription:
        'Created a full-stack music streaming platform supporting OAuth 2.0 authentication, playlist management, and subscription handling via Stripe. Integrated search, filtering, and offline mode using MongoDB and Express.js. Designed a responsive, dynamic music player with rich playback controls, enhancing user experience and accessibility across devices.',
      tags: ['Vue.js',  'Express.js',  'Node.js',  'MongoDB',  'MUI',  'Stripe',  'OAuth 2.0',  'Parcel',  'EJS',  'JavaScript',],
      image: 'https://theonetechnologies.com/posts/files/02cc5322-c06b-4957-b27a-2fe5b6845648.png',
      github: 'https://github.com',
      live: 'https://demo.com',
    },
    {
      id: 4,
      title: 'STOMATIGGY APP',
      description: 'Food delivery platform with real-time order tracking.',
      fullDescription:
        'Built a responsive food delivery web application featuring restaurant listings, menus, and advanced filtering by cuisine and ratings. Implemented secure order placement, cart management, and PayPal payment integration. Added Nodemailer-based notifications and real-time order tracking via Node.js backend for seamless user experience and operational efficiency.',
      tags: ['React.js',  'Node.js',  'MongoDB',  'Tailwind CSS',  'Bootstrap Icons',  'PayPal API',  'Nodemailer',  'JavaScript',],
      image: 'https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/5c2dd049775555d2d4093e0c2dfeae5dce619d8d',
      github: 'https://github.com',
      live: 'https://demo.com',
    },
    {
      id: 5,
      title: 'RentOFast',
      description: 'Rent Collection Website',
      fullDescription:
        'Under Development ....',
      tags: ['React.js',  'Node.js',  'MongoDB',  'Tailwind CSS',  'Bootstrap Icons',  'Stripe',  'Nodemailer',  'JavaScript'],
      image: 'https://assets-news.housing.com/news/wp-content/uploads/2025/01/20222707/Untitled-design_20250120_222533_0000.png',
      github: 'https://github.com',
      live: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 gradient-bg mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden card-hover cursor-pointer border-primary/20 bg-card/50 backdrop-blur-sm group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription>{selectedProject.description}</DialogDescription>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                />
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.fullDescription}
                </p>
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-lg bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="hero" asChild className="flex-1">
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      View Live
                    </a>
                  </Button>
                  <Button variant="outline-glow" asChild className="flex-1">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2" size={16} />
                      View Code
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
