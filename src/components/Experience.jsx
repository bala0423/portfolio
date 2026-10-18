import { useRef } from 'react';
import { Briefcase } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Experience = () => {
    const timelineRef = useRef(null);
    // Fill the timeline line as the visitor scrolls through it.
    const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start 70%', 'end 60%'] });
    const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    const experiences = [
        {
            company: 'Johnson Electric',
            location: 'Chennai (Hybrid)',
            role: 'Data Science Engineer',
            duration: 'Jan 2024 - Present',
            description: '',
            achievements: [
                'Mentor a team of 3 junior engineers; present solutions to stakeholders and work directly with business users.',
                'Built and run the PLM Support Chatbot and Product Knowledge AI Agent (see Featured Projects).',
                'Built predictive models on time-series test data.'
            ]
        },
        {
            company: 'Career Break',
            location: 'Health and well-being',
            role: 'Career Break',
            duration: 'Aug 2023 - Jan 2024',
            description: '',
            achievements: []
        },
        {
            company: 'Resulticks',
            location: 'Chennai',
            role: 'Software Engineer',
            duration: 'May 2023 - Aug 2023',
            description: '',
            achievements: [
                'Built ETL pipelines on Google Cloud Platform, loading and processing data in BigQuery.'
            ]
        },
        {
            company: 'bitsCrunch (Germany)',
            location: 'Remote from India',
            role: 'Data Engineer',
            duration: 'Jun 2022 - Apr 2023',
            description: '',
            achievements: [
                'Built real-time Kafka streaming pipelines ingesting multi-chain blockchain data (NFTs, digital assets) into Azure Blob Storage.',
                'Cleaned and preprocessed blockchain data with PySpark on Azure Databricks.',
                "Maintained Airflow pipelines supporting the company's NFT analytics platform."
            ]
        },
        {
            company: 'OptiSol Business Solutions',
            location: 'Chennai',
            role: 'Data Engineer',
            duration: 'Sep 2021 - Jun 2022',
            description: 'Nutrien (Australia) enterprise data lake.',
            achievements: [
                'Built Spark pipelines on Azure Databricks migrating data from SAP, Plasma, FMIS, Rewards, PostgreSQL and AWS S3 into Delta Lake tables.',
                'Built data dictionaries.'
            ]
        },
        {
            company: 'OptiSol Business Solutions',
            location: 'Chennai',
            role: 'Machine Learning Engineer',
            duration: 'Aug 2019 - Sep 2021',
            description: '',
            achievements: [
                'MachineVantage (USA): Flask REST APIs on AWS with Jenkins, ~1 TB of MongoDB data, Airflow pipelines and API monitoring.',
                'MachineVantage (USA): Azure Data Factory ETL and OLAP cubes with Power BI.',
                'E-Watercooler (USA): Rasa NLU chatbot in Microsoft Teams using Microsoft Graph API to schedule group calls; Docker, Jenkins, Azure Key Vault.'
            ]
        },
        {
            company: 'Trumatics Software Labs',
            location: 'Chennai',
            role: 'Software Engineer',
            duration: 'Jun 2018 - Jul 2019',
            description: '',
            achievements: [
                'Decision tree price prediction model in Python, served via Flask API on Linux and Heroku.',
                'Selenium API testing.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-surface-alt overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-grad-from to-grad-to"
                >
                    Professional Experience
                </motion.h2>

                <div ref={timelineRef} className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-tint rounded-full"></div>
                    <motion.div
                        aria-hidden="true"
                        style={{ scaleY: fill }}
                        className="absolute left-0 md:left-[calc(50%-2px)] h-full w-1 origin-top rounded-full bg-gradient-to-b from-grad-from via-grad-to to-grad-end shadow-[0_0_12px_rgb(var(--glow)/0.6)]"
                    ></motion.div>

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
                            <motion.div
                                initial={{ scale: 0.4 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true, margin: '-30% 0px' }}
                                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                                className="absolute left-[-11px] md:left-1/2 md:-ml-3 w-6 h-6 bg-brand rounded-full border-4 border-surface-alt z-10 shadow-[0_0_15px_rgb(var(--glow)/0.5)]"
                            ></motion.div>

                            <div className="flex-1 w-full md:w-1/2 pl-6 md:pl-0">
                                <div className={`bg-surface p-6 rounded-2xl border border-line hover:border-primary/60 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgb(var(--glow)/0.35)] transition-all duration-300${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                        <Briefcase className="text-primary" size={20} />
                                        <h3 className="text-xl font-bold text-ink">{exp.role}</h3>
                                    </div>
                                    {exp.company !== exp.role && (
                                        <h4 className="text-lg text-primary mb-1">{exp.company}</h4>
                                    )}
                                    <p className="text-sm text-muted mb-4 font-mono">
                                        {exp.duration}{exp.location ? ` · ${exp.location}` : ''}
                                    </p>
                                    {exp.description && (
                                        <p className="text-soft mb-4 text-sm leading-relaxed">{exp.description}</p>
                                    )}
                                    {exp.achievements.length > 0 && (
                                        <ul className={`text-soft text-sm space-y-2 list-disc inline-block text-left ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                                            {exp.achievements.map((item, i) => (
                                                <li key={i} className="ml-4">{item}</li>
                                            ))}
                                        </ul>
                                    )}
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
