import { useEffect, useState } from 'react';
import { Mail, Linkedin, Send, Phone, MapPin, Copy, Check, Briefcase, Code, Users, Hand, PartyPopper, ExternalLink, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const EMAIL = 'balakumaranrinfo@gmail.com';
const MAX_MESSAGE = 1000;
const TOPICS = [
    { label: 'Job Opportunity', icon: Briefcase },
    { label: 'Freelance Project', icon: Code },
    { label: 'Collaboration', icon: Users },
    { label: 'Just Saying Hi', icon: Hand },
];
const EMPTY_FORM = { name: '', email: '', message: '' };

const validate = ({ name, email, message }) => {
    const errors = {};
    if (!name.trim()) errors.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Please enter a valid email';
    if (message.trim().length < 10) errors.message = 'Message should be at least 10 characters';
    return errors;
};

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const [topic, setTopic] = useState(TOPICS[0].label);
    const [form, setForm] = useState(EMPTY_FORM);
    const [errors, setErrors] = useState({});
    const [sent, setSent] = useState(false);
    const [msgCopied, setMsgCopied] = useState(false);

    const subject = `${topic} — from ${form.name.trim()}`;
    const body = `Hi Bala,\n\n${form.message.trim()}\n\n— ${form.name.trim()}\n${form.email.trim()}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    useEffect(() => {
        if (!msgCopied) return;
        const id = setTimeout(() => setMsgCopied(false), 2000);
        return () => clearTimeout(id);
    }, [msgCopied]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
        if (errors[name]) setErrors((errs) => ({ ...errs, [name]: undefined }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate(form);
        setErrors(errs);
        if (Object.keys(errs).length) return;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSent(true);
    };

    const copyMessage = async () => {
        try {
            await navigator.clipboard.writeText(`To: ${EMAIL}\nSubject: ${subject}\n\n${body}`);
            setMsgCopied(true);
        } catch {
            // clipboard unavailable; Gmail link remains as a fallback
        }
    };

    const resetForm = () => {
        setForm(EMPTY_FORM);
        setErrors({});
        setSent(false);
    };

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

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-6 bg-surface rounded-2xl border border-line"
                    >
                        <AnimatePresence mode="wait">
                            {sent ? (
                                <motion.div
                                    key="sent"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="text-center py-6 space-y-4"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: 'spring', stiffness: 260, damping: 15 }}
                                        className="mx-auto w-16 h-16 rounded-full bg-tint text-primary flex items-center justify-center"
                                    >
                                        <PartyPopper size={30} />
                                    </motion.div>
                                    <h3 className="text-xl font-semibold text-ink">Your message is ready!</h3>
                                    <p className="text-soft text-sm">
                                        If your email app didn't open, use one of these instead:
                                    </p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        <a
                                            href={gmailUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-line-strong text-body hover:border-primary hover:text-primary transition-colors text-sm"
                                        >
                                            <ExternalLink size={16} /> Open in Gmail
                                        </a>
                                        <button
                                            type="button"
                                            onClick={copyMessage}
                                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-line-strong text-body hover:border-primary hover:text-primary transition-colors text-sm"
                                        >
                                            {msgCopied ? <Check size={16} /> : <Copy size={16} />}
                                            {msgCopied ? 'Copied' : 'Copy message'}
                                        </button>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary transition-colors"
                                    >
                                        <RotateCcw size={14} /> Write another message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    noValidate
                                    className="space-y-5"
                                >
                                    <div>
                                        <p className="text-ink font-semibold mb-3">What brings you here?</p>
                                        <div className="flex flex-wrap gap-2">
                                            {TOPICS.map((t) => {
                                                const active = topic === t.label;
                                                return (
                                                    <motion.button
                                                        key={t.label}
                                                        type="button"
                                                        whileTap={{ scale: 0.95 }}
                                                        onClick={() => setTopic(t.label)}
                                                        aria-pressed={active}
                                                        className={`inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm border transition-colors ${active ? 'bg-tint border-primary text-primary-strong' : 'border-line-strong text-soft hover:border-primary/60 hover:text-primary'}`}
                                                    >
                                                        <t.icon size={16} />
                                                        {t.label}
                                                    </motion.button>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {[
                                        { name: 'name', type: 'text', label: 'Your Name' },
                                        { name: 'email', type: 'email', label: 'Your Email' },
                                    ].map(({ name, type, label }) => (
                                        <div key={name}>
                                            <input
                                                type={type}
                                                name={name}
                                                value={form[name]}
                                                onChange={handleChange}
                                                placeholder={label}
                                                aria-label={label}
                                                aria-invalid={!!errors[name]}
                                                className={`w-full px-4 py-3 bg-surface border rounded-lg focus:ring-1 outline-none text-body transition-all ${errors[name] ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-line-strong focus:border-primary focus:ring-primary'}`}
                                            />
                                            {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
                                        </div>
                                    ))}

                                    <div>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Your Message"
                                            aria-label="Your Message"
                                            aria-invalid={!!errors.message}
                                            rows="4"
                                            maxLength={MAX_MESSAGE}
                                            className={`w-full px-4 py-3 bg-surface border rounded-lg focus:ring-1 outline-none text-body transition-all resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-line-strong focus:border-primary focus:ring-primary'}`}
                                        ></textarea>
                                        <div className="flex justify-between text-xs mt-1">
                                            <span className="text-red-500">{errors.message}</span>
                                            <span className="text-muted">{form.message.length}/{MAX_MESSAGE}</span>
                                        </div>
                                    </div>

                                    <motion.button
                                        type="submit"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-3 bg-gradient-to-r from-grad-from to-grad-to hover:from-grad-from hover:to-primary-strong text-on-brand font-semibold rounded-lg shadow-lg hover:shadow-glow/25 transition-all flex items-center justify-center gap-2"
                                    >
                                        <Send size={18} />
                                        Send Message
                                    </motion.button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
