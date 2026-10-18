import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 600);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.a
                    href="#home"
                    aria-label="Back to top"
                    initial={{ opacity: 0, scale: 0.6, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.6, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom,0px))] sm:right-8 sm:bottom-8 z-50 p-3 rounded-full bg-brand hover:bg-brand-hover text-on-brand shadow-lg shadow-glow/30"
                >
                    <ArrowUp size={20} />
                </motion.a>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
