import React from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-slate-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <span className="text-cyan-400 font-medium tracking-wider text-sm uppercase">Get in Touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                        Let's Work Together
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start gap-4">
                            <div className="bg-slate-800 p-3 rounded-lg text-cyan-400">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-1">Email Me</h3>
                                <a href="mailto:balakumaranrinfo@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                    balakumaranrinfo@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-slate-800 p-3 rounded-lg text-cyan-400">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold mb-1">LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/bala0423/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                    linkedin.com/in/bala0423
                                </a>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 mt-8">
                            <p className="text-slate-300 italic">
                                "Data is the new oil. It's valuable, but if unrefined it cannot really be used."
                            </p>
                            <p className="text-slate-500 mt-4 text-sm">— Clive Humby</p>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                        action="mailto:balakumaranrinfo@gmail.com"
                        method="POST"
                        enctype="text/plain"
                    >
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-slate-100 transition-all"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-slate-100 transition-all"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none text-slate-100 transition-all resize-none"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2"
                        >
                            <Send size={18} />
                            Send Message
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
