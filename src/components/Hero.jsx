import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, FileText, MapPin, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const focusAreas = ['LLM Applications', 'Agentic AI', 'RAG', 'Machine Learning', 'Data Engineering'];

const Hero = () => {
    const sectionRef = useRef(null);
    const [activeFocus, setActiveFocus] = useState(0);

    // Cycle the highlighted focus area.
    useEffect(() => {
        const id = setInterval(() => setActiveFocus((i) => (i + 1) % focusAreas.length), 2200);
        return () => clearInterval(id);
    }, []);

    // Spotlight follows the pointer via CSS variables (no re-render).
    const handlePointerMove = (e) => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--x', `${e.clientX - rect.left}px`);
        el.style.setProperty('--y', `${e.clientY - rect.top}px`);
    };

    return (
        <section
            id="home"
            ref={sectionRef}
            onPointerMove={handlePointerMove}
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 z-0" aria-hidden="true">
                <div className="absolute inset-0 bg-grid"></div>
                <div className="absolute top-20 left-20 w-72 h-72 bg-lime-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
                <div className="absolute inset-0 spotlight"></div>
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
                        className="text-green-600 font-medium tracking-widest mb-4"
                    >
                        HELLO, I'M
                    </motion.p>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
                        <span className="text-slate-900">Balakumaran</span>{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-lime-400 to-green-600 bg-[length:200%_auto] animate-shimmer">R</span>
                    </h1>

                    <h2 className="text-2xl md:text-3xl mb-4 font-semibold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">GenAI / AI Engineer</span>
                    </h2>

                    <p className="text-slate-700 mb-6 font-light text-base md:text-lg">
                        {focusAreas.map((area, i) => (
                            <span key={area}>
                                {i > 0 && <span className="text-slate-500"> • </span>}
                                <button
                                    type="button"
                                    onMouseEnter={() => setActiveFocus(i)}
                                    onFocus={() => setActiveFocus(i)}
                                    className={`relative transition-colors duration-300 ${activeFocus === i ? 'text-green-700' : 'text-slate-700'}`}
                                >
                                    {area}
                                    {activeFocus === i && (
                                        <motion.span
                                            layoutId="focus-underline"
                                            className="absolute left-0 right-0 -bottom-0.5 h-px bg-green-500"
                                        />
                                    )}
                                </button>
                            </span>
                        ))}
                    </p>

                    <p className="text-slate-500 mb-8 flex items-center justify-center gap-2 text-sm md:text-base">
                        <MapPin size={18} className="text-green-600 shrink-0" />
                        <span>Chennai, India | Open to Relocation</span>
                    </p>

                    <p className="text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed text-lg">
                        8 years across generative AI, machine learning and data engineering. Currently building
                        production LLM and agentic AI systems at Johnson Electric.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 py-4 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold transition-colors shadow-lg shadow-green-500/25 hover:shadow-green-500/50 flex items-center justify-center gap-2 group"
                        >
                            <Mail size={20} className="group-hover:scale-110 transition-transform" />
                            Contact Me
                        </motion.a>
                        {/* Resume PDF must be placed at public/Balakumaran_R_Resume.pdf */}
                        <motion.a
                            href="/Balakumaran_R_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="px-8 py-4 rounded-full bg-white hover:bg-green-50 text-green-800 border border-green-200 hover:border-green-400 font-semibold transition-colors flex items-center justify-center gap-2 group"
                        >
                            <FileText size={20} className="group-hover:-translate-y-0.5 transition-transform" />
                            Download Resume
                        </motion.a>
                    </div>

                    <div className="mt-16 flex justify-center gap-8">
                        <a href="https://github.com/bala0423" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-slate-500 hover:text-slate-900 transition-all hover:scale-125 hover:-translate-y-1">
                            <Github size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/bala0423/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-500 hover:text-green-700 transition-all hover:scale-125 hover:-translate-y-1">
                            <Linkedin size={28} />
                        </a>
                        <a href="mailto:balakumaranrinfo@gmail.com" aria-label="Email" className="text-slate-500 hover:text-green-600 transition-all hover:scale-125 hover:-translate-y-1">
                            <Mail size={28} />
                        </a>
                    </div>
                </motion.div>
            </div>

            <a
                href="#about"
                aria-label="Scroll to About"
                className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-slate-500 hover:text-green-600 transition-colors animate-bounce"
            >
                <ChevronDown size={32} />
            </a>
        </section>
    );
};

export default Hero;
