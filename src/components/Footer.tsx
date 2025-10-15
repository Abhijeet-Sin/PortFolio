import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-muted-foreground">
              © {currentYear} Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="text-primary fill-primary" size={16} />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
