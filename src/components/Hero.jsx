import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-cyan-400 font-medium tracking-widest mb-4"
                    >
                        HELLO, I'M
                    </motion.p>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                        <span className="text-white">Bala</span> <span className="text-slate-400">Kumaran</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl text-slate-300 mb-8 font-light flex flex-col md:flex-row items-center justify-center gap-2">
                        <span>Data Scientist at</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-semibold">Johnson Electric</span>
                    </h2>

                    <p className="text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
                        Specializing in transforming complex data into actionable insights.
                        Expert in Python, Machine Learning, and Generative AI with 7+ years of experience.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="#contact" className="px-8 py-4 rounded-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition-all shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 group">
                            <Mail size={20} className="group-hover:scale-110 transition-transform" />
                            Contact Me
                        </a>
                        <a href="/cv.pdf" className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold transition-all flex items-center justify-center gap-2 group">
                            <FileText size={20} className="group-hover:scale-110 transition-transform" />
                            Download CV
                        </a>
                    </div>

                    <div className="mt-16 flex justify-center gap-8">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110">
                            <Github size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/bala0423/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors transform hover:scale-110">
                            <Linkedin size={28} />
                        </a>
                        <a href="mailto:balakumaranrinfo@gmail.com" className="text-slate-500 hover:text-cyan-400 transition-colors transform hover:scale-110">
                            <Mail size={28} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
