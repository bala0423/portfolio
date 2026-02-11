import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'Johnson Electric',
            role: 'Data Scientist',
            duration: 'Present',
            description: 'Leading data science initiatives to optimize manufacturing processes and improve quality control. Developing predictive maintenance models and leveraging GenAI for internal tools.',
            achievements: [
                'Spearheaded the development of machine learning models for anomaly detection.',
                'Implemented end-to-end data pipelines using Azure and Databricks.',
                'Mentored junior data scientists and collaborated with cross-functional teams.'
            ]
        },
        // Placeholder for previous roles if any, based on "7+ years" implies more history or long tenure.
        // Assuming mostly Johnson Electric or willing to add others later.
    ];

    return (
        <section id="experience" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                    Professional Experience
                </motion.h2>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-slate-800 rounded-full"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`relative mb-12 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 items-center`}
                        >
                            <div className="flex-1 w-full md:w-1/2"></div>

                            {/* Timeline Dot */}
                            <div className="absolute left-[-11px] md:left-1/2 md:-ml-3 w-6 h-6 bg-cyan-500 rounded-full border-4 border-slate-950 z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>

                            <div className="flex-1 w-full md:w-1/2 pl-6 md:pl-0">
                                <div className={`bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-colors ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <Briefcase className="text-cyan-400" size={20} />
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    </div>
                                    <h4 className="text-lg text-cyan-400 mb-1">{exp.company}</h4>
                                    <p className="text-sm text-slate-500 mb-4 font-mono">{exp.duration}</p>
                                    <p className="text-slate-400 mb-4 text-sm leading-relaxed">{exp.description}</p>
                                    <ul className={`text-slate-400 text-sm space-y-2 list-disc inline-block text-left ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                        {/* List alignment trick: always nice to have bullets left aligned inside the block, but for proper RTL feel on left side, maybe standard is better */}
                                        {exp.achievements.map((item, i) => (
                                            <li key={i} className="ml-4">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
