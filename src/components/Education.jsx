import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
    const degrees = [
        {
            degree: 'M.E., Systems Engineering and Operations Research',
            institution: 'College of Engineering, Guindy (CEG), Anna University, Chennai',
            year: '2018',
            score: '79%'
        },
        {
            degree: 'B.E., Computer Science and Engineering',
            institution: 'Meenakshi Academy of Higher Education and Research, Chennai',
            year: '2015',
            score: '80%'
        }
    ];

    return (
        <section id="education" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500"
                >
                    Education
                </motion.h2>

                <div className="max-w-3xl mx-auto space-y-6">
                    {degrees.map((item) => (
                        <motion.div
                            key={item.degree}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-green-50/70 p-6 sm:p-8 rounded-2xl border border-green-200 flex items-start gap-6 hover:border-green-400 transition-colors"
                        >
                            <div className="bg-green-100 p-4 rounded-xl text-green-600 hidden sm:block">
                                <GraduationCap size={40} />
                            </div>

                            <div>
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{item.degree}</h3>
                                <p className="text-green-600 text-lg mb-2">{item.institution}</p>
                                <p className="text-slate-600 font-mono text-sm">{item.year} · {item.score}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
