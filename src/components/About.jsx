import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-surface">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-grad-from to-grad-to">
                        About Me
                    </h2>

                    <div className="max-w-4xl mx-auto text-body leading-relaxed space-y-6 text-lg">
                        <p>
                            <span className="text-primary font-semibold">AI Engineer</span> with <span className="font-semibold text-ink">8 years</span> of experience across generative AI, machine learning and data engineering.
                        </p>
                        <p>
                            Currently at <span className="font-semibold text-ink">Johnson Electric</span>, building production <span className="text-primary font-semibold">LLM and agentic AI systems</span>: a PLM support chatbot, and an MCP-based AI agent on Azure OpenAI GPT-5 with a Neo4j knowledge graph serving engineering and quality users.
                        </p>
                        <p>
                            Strong data engineering foundation in <span className="text-ink">Databricks, PySpark, Kafka and Airflow</span>. Mentors junior engineers and works directly with business stakeholders.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
