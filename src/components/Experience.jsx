import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: 'Johnson Electric',
            role: 'Data Science Engineer',
            duration: 'Jan 2024 - Present',
            description: 'Leading data science initiatives to optimize manufacturing processes and improve quality control. Developing predictive maintenance models and leveraging GenAI/LLMs for internal automation and knowledge systems.',
            achievements: [
                'Spearheaded the development of machine learning models for anomaly detection and predictive quality control.',
                'Implemented end-to-end data pipelines using Azure and Databricks to process high-velocity telemetry data.',
                'Created Generative AI-powered search tools to extract insights from engineering documentation.'
            ]
        },
        {
            company: 'Resulticks',
            role: 'Software Engineer',
            duration: 'May 2023 - Aug 2023',
            description: 'Contributed to the development of real-time marketing automation platforms, focusing on high-throughput data processing and application reliability.',
            achievements: [
                'Optimized API performance and reduced latency for high-traffic messaging endpoints.',
                'Enhanced core features of the marketing automation pipeline using Node.js and SQL/NoSQL databases.',
                'Participated in database schema design and optimized query execution paths for customer profiles.'
            ]
        },
        {
            company: 'bitsCrunch',
            role: 'Data Engineer',
            duration: 'Jun 2022 - Apr 2023',
            description: 'Designed and built scalable data infrastructure for blockchain analytics, focused on processing decentralized data and NFT transaction histories.',
            achievements: [
                'Architected high-throughput data ingestion pipelines to index and process blockchain transactions.',
                'Engineered real-time and batch pipelines using Python, Apache Spark, and cloud data warehouses.',
                'Ensured data quality and consistency across multi-chain data sources for wash trading detection.'
            ]
        },
        {
            company: 'Optisol Business Solutions',
            role: 'Data Engineer',
            duration: 'Sep 2021 - Jun 2022',
            description: 'Developed robust ETL/ELT pipelines and managed cloud data warehouse solutions for enterprise clients.',
            achievements: [
                'Designed data integration workflows to migrate legacy databases to AWS/Azure cloud platforms.',
                'Optimized complex SQL queries and data transformations to reduce processing costs and execution time.',
                'Implemented comprehensive data validation frameworks to monitor pipeline health.'
            ]
        },
        {
            company: 'Optisol Business Solutions',
            role: 'Machine Learning Engineer',
            duration: 'Aug 2019 - Sep 2021',
            description: 'Built, evaluated, and deployed machine learning models to solve business problems in computer vision and natural language processing.',
            achievements: [
                'Trained and deployed object detection and classification models for automated visual inspection.',
                'Developed NLP pipelines using BERT and custom transformer architectures for document parsing.',
                'Created Flask/FastAPI microservices to serve model predictions in production environments.'
            ]
        },
        {
            company: 'Trumatics Software labs',
            role: 'Software Engineer',
            duration: 'Jun 2018 - Jul 2019',
            description: 'Started professional journey by developing web applications and backend systems using Python and Java.',
            achievements: [
                'Developed RESTful APIs and backend services using Django/Spring Boot frameworks.',
                'Collaborated on frontend interface development with React and modern JavaScript.',
                'Participated in agile ceremonies, writing unit tests and code documentation to improve codebase reliability.'
            ]
        }
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
