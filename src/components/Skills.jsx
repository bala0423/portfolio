import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
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

                <div className="max-w-5xl mx-auto space-y-10">
                    {skillGroups.map((group, groupIndex) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIndex * 0.05, duration: 0.4 }}
                        >
                            <h3 className="text-cyan-400 font-medium tracking-wider text-sm uppercase mb-4 text-center">
                                {group.title}
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {group.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="px-4 py-2 sm:px-6 sm:py-3 bg-slate-800/50 rounded-full border border-slate-700 text-slate-300 text-sm sm:text-base hover:text-white hover:border-cyan-500 hover:bg-cyan-500/10 transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
