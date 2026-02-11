import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                        About Me
                    </h2>

                    <div className="max-w-4xl mx-auto text-slate-300 leading-relaxed space-y-6 text-lg">
                        <p>
                            I am a passionate <span className="text-cyan-400 font-semibold">Data Scientist</span> with over <span className="font-semibold text-white">7 years</span> of experience in turning data into strategic assets. Currently working at <span className="font-semibold text-white">Johnson Electric</span>, I specialize in building robust machine learning models and deploying them to solve real-world problems.
                        </p>
                        <p>
                            My expertise spans across the entire data science lifecycle — from data engineering and exploratory analysis to model development and deployment. I have a strong foundation in <span className="text-white">Python, Machine Learning, and Deep Learning</span>, with a recent focus on <span className="text-purple-400 font-semibold">Generative AI and LLMs</span>.
                        </p>
                        <p>
                            I hold a Master's degree in Engineering from the prestigious <span className="text-white">CEG Anna University, Guindy</span>. I am constantly learning and staying up-to-date with the latest advancements in AI to deliver cutting-edge solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
