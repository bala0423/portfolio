import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 border-t border-slate-900">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-6 mb-8">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/bala0423/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:balakumaranrinfo@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
                <p className="text-slate-600 text-sm">
                    © {new Date().getFullYear()} Bala Kumaran. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
