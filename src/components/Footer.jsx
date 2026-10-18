import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-surface-alt py-8 border-t border-line">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-6 mb-8">
                    <a href="https://github.com/bala0423" target="_blank" rel="noopener noreferrer" className="text-soft hover:text-ink transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/bala0423/" target="_blank" rel="noopener noreferrer" className="text-soft hover:text-primary-strong transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:balakumaranrinfo@gmail.com" className="text-soft hover:text-primary transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
                <p className="text-muted text-sm" suppressHydrationWarning>
                    © {new Date().getFullYear()} Balakumaran R. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
