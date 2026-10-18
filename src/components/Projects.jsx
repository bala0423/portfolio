import { useRef, useState } from 'react';
import { Folder } from 'lucide-react';
import { motion, AnimatePresence, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

// TODO: These are internal Johnson Electric projects. Add screenshots or public
// GitHub/demo links here only if they can be shared publicly.
const projects = [
    {
        title: 'Product Knowledge AI Agent',
        category: 'genai',
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
        category: 'genai',
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
        category: 'ml',
        status: 'Production',
        description: 'Kalman filter-based predictive model on real-time time-series test data.',
        points: [
            'Earlier defect detection and reduced test time.'
        ],
        tags: ['Kalman Filter', 'Time-Series']
    },
    {
        title: 'Actuator Endurance Failure Prediction',
        category: 'ml',
        status: 'Proof of Concept',
        description: 'LSTM model predicting the cycle count at which actuators fail, from endurance test logs.',
        points: [],
        tags: ['LSTM', 'Time-Series']
    }
];

const filters = [
    { key: 'all', label: 'All' },
    { key: 'genai', label: 'GenAI & Agentic' },
    { key: 'ml', label: 'Predictive ML' },
];

const TiltCard = ({ children, className = '' }) => {
    const ref = useRef(null);
    const reduceMotion = useReducedMotion();
    const rotateX = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 200, damping: 20 });

    const handleMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty('--x', `${x}px`);
        el.style.setProperty('--y', `${y}px`);
        if (reduceMotion || e.pointerType !== 'mouse') return;
        rotateY.set((x / rect.width - 0.5) * 8);
        rotateX.set((0.5 - y / rect.height) * 8);
    };

    const handleLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onPointerMove={handleMove}
            onPointerLeave={handleLeave}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            className={`card-spotlight ${className}`}
        >
            {children}
        </motion.div>
    );
};

const Projects = () => {
    const [filter, setFilter] = useState('all');
    const visible = projects.filter((p) => filter === 'all' || p.category === filter);

    return (
        <section id="projects" className="py-20 bg-slate-950 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
                >
                    Featured Projects
                </motion.h2>
                <p className="text-center text-slate-500 mb-8">Johnson Electric</p>

                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {filters.map((f) => (
                        <button
                            key={f.key}
                            type="button"
                            onClick={() => setFilter(f.key)}
                            aria-pressed={filter === f.key}
                            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${filter === f.key ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                        >
                            {filter === f.key && (
                                <motion.span
                                    layoutId="project-filter"
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-500/25"
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative">{f.label}</span>
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <AnimatePresence mode="popLayout">
                        {visible.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <TiltCard className="h-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-colors duration-300 group">
                                    <div className="relative p-6 sm:p-8 flex flex-col h-full">
                                        <div className="flex justify-between items-start gap-4 mb-6">
                                            <div className="text-cyan-400 group-hover:rotate-[-8deg] group-hover:scale-110 transition-transform duration-300">
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
                                                <span key={i} className="text-xs font-mono text-cyan-500 px-2 py-1 rounded bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
