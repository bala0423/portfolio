import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                    Education
                </motion.h2>

                <div className="max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 flex items-start gap-6 hover:border-cyan-500/50 transition-colors"
                    >
                        <div className="bg-cyan-500/10 p-4 rounded-xl text-cyan-400 hidden sm:block">
                            <GraduationCap size={40} />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Master of Engineering (ME)</h3>
                            <p className="text-cyan-400 text-lg mb-4">College of Engineering, Guindy (CEG), Anna University</p>
                            <p className="text-slate-400 leading-relaxed">
                                Specialized in advanced engineering concepts and research methodologies.
                                Built a conflict-free foundation for data analysis and critical thinking.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Education;
