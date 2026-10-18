import { useEffect, useState } from 'react';
import { Mail, Linkedin, Send, Phone, MapPin, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const EMAIL = 'balakumaranrinfo@gmail.com';

const Contact = () => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const id = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(id);
    }, [copied]);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    return (
        <section id="contact" className="py-20 bg-surface-alt relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <span className="text-primary font-medium tracking-wider text-sm uppercase">Get in Touch</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-ink to-grad-from">
                        Let's Work Together
                    </h2>
                    <p className="text-soft text-lg max-w-2xl mx-auto">
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
                            <div className="bg-tint p-3 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-ink font-semibold mb-1">Email Me</h3>
                                <div className="flex flex-wrap items-center gap-2">
                                    <a href="mailto:balakumaranrinfo@gmail.com" className="text-soft hover:text-primary transition-colors break-all">
                                        balakumaranrinfo@gmail.com
                                    </a>
                                    <button
                                        type="button"
                                        onClick={copyEmail}
                                        aria-label="Copy email address"
                                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs border transition-colors ${copied ? 'border-primary text-primary-strong' : 'border-line-strong text-soft hover:text-primary hover:border-primary/60'}`}
                                    >
                                        {copied ? <Check size={14} /> : <Copy size={14} />}
                                        <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-tint p-3 rounded-lg text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-ink font-semibold mb-1">Phone</h3>
                                <a href="tel:+919677266036" className="text-soft hover:text-primary transition-colors">
                                    +91 96772 66036
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-tint p-3 rounded-lg text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-ink font-semibold mb-1">Location</h3>
                                <p className="text-soft">Chennai, India | Open to Relocation</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-tint p-3 rounded-lg text-primary">
                                <Linkedin size={24} />
                            </div>
                            <div>
                                <h3 className="text-ink font-semibold mb-1">LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/bala0423/" target="_blank" rel="noopener noreferrer" className="text-soft hover:text-primary transition-colors">
                                    linkedin.com/in/bala0423
                                </a>
                            </div>
                        </div>

                        <div className="p-6 bg-surface rounded-2xl border border-line mt-8">
                            <p className="text-body italic">
                                "Data is the new oil. It's valuable, but if unrefined it cannot really be used."
                            </p>
                            <p className="text-muted mt-4 text-sm">— Clive Humby</p>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                        action="mailto:balakumaranrinfo@gmail.com"
                        method="POST"
                        encType="text/plain"
                    >
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 bg-surface border border-line-strong rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body transition-all"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 bg-surface border border-line-strong rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body transition-all"
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                className="w-full px-4 py-3 bg-surface border border-line-strong rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none text-body transition-all resize-none"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-grad-from to-grad-to hover:from-grad-from hover:to-primary-strong text-on-brand font-semibold rounded-lg shadow-lg hover:shadow-glow/25 transition-all flex items-center justify-center gap-2"
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
