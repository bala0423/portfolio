import { useEffect, useRef } from 'react';
import { motion, animate, useInView, useMotionValue, useTransform, useReducedMotion } from 'framer-motion';

// Figures come straight from the resume.
const stats = [
    { value: 8, label: 'Years of experience' },
    { value: 3000, label: 'PLM chatbot users' },
    { value: 500, prefix: '~', label: 'Active chatbot users' },
    { value: 600, prefix: '~', label: 'AI agent users' },
];

const Counter = ({ value, prefix = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-40px' });
    const reduceMotion = useReducedMotion();
    // Starts at the real value so pre-rendered HTML shows correct numbers.
    const count = useMotionValue(value);
    const text = useTransform(count, (v) => `${prefix}${Math.round(v).toLocaleString('en-US')}`);

    useEffect(() => {
        if (reduceMotion) return;
        if (!inView) {
            count.set(0);
            return;
        }
        const controls = animate(count, value, { duration: 1.6, ease: 'easeOut' });
        return () => controls.stop();
    }, [inView, value, count, reduceMotion]);

    return <motion.span ref={ref}>{text}</motion.span>;
};

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
                        About Me
                    </h2>

                    <div className="max-w-4xl mx-auto text-slate-700 leading-relaxed space-y-6 text-lg">
                        <p>
                            <span className="text-green-600 font-semibold">AI Engineer</span> with <span className="font-semibold text-slate-900">8 years</span> of experience across generative AI, machine learning and data engineering.
                        </p>
                        <p>
                            Currently at <span className="font-semibold text-slate-900">Johnson Electric</span>, building production <span className="text-emerald-600 font-semibold">LLM and agentic AI systems</span>: a PLM support chatbot rolled out to <span className="text-slate-900">3,000 users (~500 active)</span>, and an MCP-based AI agent on Azure OpenAI GPT-5 with a Neo4j knowledge graph serving <span className="text-slate-900">~600 engineering and quality users</span>.
                        </p>
                        <p>
                            Strong data engineering foundation in <span className="text-slate-900">Databricks, PySpark, Kafka and Airflow</span>. Mentors junior engineers and works directly with business stakeholders.
                        </p>
                    </div>
                </motion.div>

                <div className="max-w-4xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="p-5 rounded-2xl bg-white border border-green-200 hover:border-green-400 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition-colors text-center"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                                <Counter value={stat.value} prefix={stat.prefix} />
                            </div>
                            <p className="mt-2 text-xs sm:text-sm text-slate-600 uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
