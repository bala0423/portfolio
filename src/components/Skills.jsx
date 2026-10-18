import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const skillGroups = [
    {
        title: 'GenAI & LLMs',
        skills: ['Azure OpenAI (GPT-5, GPT-4, GPT-4o mini)', 'Azure AI Foundry', 'RAG', 'LLM-based retrieval', 'Agentic AI', 'LangChain', 'LangGraph', 'MCP', 'FastMCP', 'Tiny Agents']
    },
    {
        title: 'LLM Apps & Observability',
        skills: ['Open WebUI', 'Chainlit', 'Streamlit', 'Arize Phoenix', 'Grafana']
    },
    {
        title: 'Machine Learning',
        skills: ['Time-series modeling', 'LSTM', 'Kalman filter', 'NLP', 'Rasa NLU', 'TensorFlow', 'scikit-learn', 'Pandas', 'NumPy']
    },
    {
        title: 'Data Engineering',
        skills: ['Azure Databricks', 'PySpark', 'Delta Lake', 'Kafka', 'Airflow', 'Azure Data Factory', 'Snowflake', 'AWS Glue', 'BigQuery']
    },
    {
        title: 'Databases',
        skills: ['Neo4j', 'Marqo', 'ChromaDB', 'MongoDB', 'PostgreSQL', 'MySQL', 'MS SQL Server']
    },
    {
        title: 'Languages & APIs',
        skills: ['Python', 'SQL', 'FastAPI', 'Flask', 'REST APIs', 'Microsoft Graph API']
    },
    {
        title: 'Cloud & DevOps',
        skills: ['Azure', 'AWS', 'GCP', 'Docker', 'Jenkins', 'CI/CD', 'Linux']
    },
    {
        title: 'BI',
        skills: ['Power BI']
    }
];

const tabs = ['All', ...skillGroups.map((g) => g.title)];

const Skills = () => {
    const [active, setActive] = useState('All');
    const shown = active === 'All' ? skillGroups : skillGroups.filter((g) => g.title === active);

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
                    className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                    Technical Skills
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-5xl mx-auto">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => setActive(tab)}
                            aria-pressed={active === tab}
                            className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${active === tab ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                            {active === tab && (
                                <motion.span
                                    layoutId="skill-tab"
                                    className="absolute inset-0 rounded-full bg-cyan-600/80 shadow-lg shadow-cyan-500/20"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative">{tab}</span>
                        </button>
                    ))}
                </div>

                <div className="max-w-5xl mx-auto space-y-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.25 }}
                            className="space-y-10"
                        >
                            {shown.map((group) => (
                                <div key={group.title}>
                                    {active === 'All' && (
                                        <h3 className="text-cyan-400 font-medium tracking-wider text-sm uppercase mb-4 text-center">
                                            {group.title}
                                        </h3>
                                    )}
                                    <div className="flex flex-wrap justify-center gap-3">
                                        {group.skills.map((skill, i) => (
                                            <motion.div
                                                key={skill}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: Math.min(i * 0.03, 0.3), duration: 0.25 }}
                                                whileHover={{ y: -4, scale: 1.05 }}
                                                className="px-4 py-2 sm:px-6 sm:py-3 bg-slate-800/50 rounded-full border border-slate-700 text-slate-300 text-sm sm:text-base hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-colors cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                                            >
                                                {skill}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Skills;
