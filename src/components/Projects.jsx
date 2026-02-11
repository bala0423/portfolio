import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'Predictive Maintenance System',
            description: 'Developed an end-to-end predictive maintenance solution using IoT sensor data to forecast equipment failures, reducing downtime by 15%.',
            tags: ['Python', 'scikit-learn', 'IoT', 'Azure'],
            links: { demo: '#', github: '#' }
        },
        {
            title: 'GenAI Document Assistant',
            description: 'Built a RAG-based document Q&A system using OpenAI GPT-4 and vector databases to streamline internal knowledge retrieval.',
            tags: ['OpenAI', 'LangChain', 'Pinecone', 'React'],
            links: { demo: '#', github: '#' }
        },
        {
            title: 'Customer Churn Analysis',
            description: 'Analyzed customer behavior patterns to identify churn risks and recommended retention strategies based on data-driven insights.',
            tags: ['Tableau', 'SQL', 'Python', 'Clustering'],
            links: { demo: '#', github: '#' }
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 border border-slate-800 hover:border-cyan-500/50 group"
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="text-cyan-400">
                                        <Folder size={40} />
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.links.github} className="text-slate-400 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.links.demo} className="text-slate-400 hover:text-cyan-400 transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-3 mt-auto">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-mono text-cyan-500 px-2 py-1 rounded bg-cyan-500/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
