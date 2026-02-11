import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        "Python", "Databricks", "TensorFlow", "Generative AI",
        "LLM", "OpenAI", "Azure", "GCP", "Git", "SQL",
        "Machine Learning"
    ];

    return (
        <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                    Technical Skills
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            className="px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
