import { Folder } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
    // TODO: These are internal Johnson Electric projects. Add screenshots or public
    // GitHub/demo links here only if they can be shared publicly.
    const projects = [
        {
            title: 'Product Knowledge AI Agent',
            status: 'Agentic AI · Production',
            description: 'Agentic chatbot on Azure OpenAI GPT-5 for ~600 users (500 engineering, 100 quality) to query product information on motors and actuators.',
            points: [
                'Product data modeled in a Neo4j knowledge graph.',
                'Agent functions exposed as FastMCP (Model Context Protocol) tools, orchestrated with Tiny Agents.',
                'LLM observability with Arize Phoenix; Grafana dashboards for usage, token cost and token expiry.'
            ],
            tags: ['Azure OpenAI GPT-5', 'Neo4j', 'FastMCP', 'Tiny Agents', 'Arize Phoenix', 'Grafana']
        },
        {
            title: 'PLM Support Chatbot',
            status: 'GenAI · Production',
            description: 'End-to-end chatbot over SharePoint pages and wiki docs extracted via Microsoft Graph API. Rolled out to 3,000 users, ~500 active.',
            points: [
                'Started as RAG with Marqo vector DB, Azure OpenAI, LangGraph and FastAPI.',
                'Redesigned to LLM-based retrieval to improve accuracy: GPT-4o mini selects relevant JSON chunks, a GPT-4 agent answers.',
                'Open WebUI front end with in-chat ticket creation; Power BI usage dashboard.',
                'Validated with the L1 support team, resulting in fewer tickets raised.'
            ],
            tags: ['Azure OpenAI', 'LangGraph', 'FastAPI', 'Marqo', 'Open WebUI', 'Microsoft Graph API', 'Power BI']
        },
        {
            title: 'Water Pump Defect Prediction',
            status: 'Production',
            description: 'Kalman filter-based predictive model on real-time time-series test data.',
            points: [
                'Earlier defect detection and reduced test time.'
            ],
            tags: ['Kalman Filter', 'Time-Series']
        },
        {
            title: 'Actuator Endurance Failure Prediction',
            status: 'Proof of Concept',
            description: 'LSTM model predicting the cycle count at which actuators fail, from endurance test logs.',
            points: [],
            tags: ['LSTM', 'Time-Series']
        }
    ];

    return (
        <section id="projects" className="py-20 bg-slate-950">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                    Featured Projects
                </motion.h2>
                <p className="text-center text-slate-500 mb-16">Johnson Electric</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900 rounded-xl overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-300 border border-slate-800 hover:border-cyan-500/50 group"
                        >
                            <div className="p-6 sm:p-8 flex flex-col h-full">
                                <div className="flex justify-between items-start gap-4 mb-6">
                                    <div className="text-cyan-400">
                                        <Folder size={40} />
                                    </div>
                                    <span className="text-xs font-mono text-purple-300 px-2 py-1 rounded bg-purple-500/10 text-right">
                                        {project.status}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                {project.points.length > 0 && (
                                    <ul className="text-slate-400 text-sm space-y-2 list-disc mb-6">
                                        {project.points.map((point, i) => (
                                            <li key={i} className="ml-4">{point}</li>
                                        ))}
                                    </ul>
                                )}

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
