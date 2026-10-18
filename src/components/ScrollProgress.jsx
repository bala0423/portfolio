import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    return (
        <motion.div
            aria-hidden="true"
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-green-600 via-green-500 to-lime-400 z-[60]"
        />
    );
};

export default ScrollProgress;
