import { useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Keep in sync with the themes in src/index.css and the head script in index.html.
const DARK = 'midnight';
const LIGHT = 'mint';
const META_COLOR = { [DARK]: '#090e1a', [LIGHT]: '#f0fdf4' };
const STORAGE_KEY = 'theme';

const subscribe = (callback) => {
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
};
const getSnapshot = () => (document.documentElement.dataset.theme === LIGHT ? LIGHT : DARK);
const getServerSnapshot = () => DARK;

const applyTheme = (key) => {
    document.documentElement.dataset.theme = key;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLOR[key]);
    try {
        localStorage.setItem(STORAGE_KEY, key);
    } catch {
        // Storage can be blocked (private mode); the theme still applies for this visit.
    }
};

const ThemeToggle = () => {
    const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const isDark = theme === DARK;

    return (
        <button
            type="button"
            onClick={() => applyTheme(isDark ? LIGHT : DARK)}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            title={isDark ? 'Light theme' : 'Dark theme'}
            className="relative w-9 h-9 flex items-center justify-center rounded-full text-body hover:text-primary hover:bg-tint transition-colors overflow-hidden"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={theme}
                    initial={{ y: -16, opacity: 0, rotate: -90 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 16, opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </motion.span>
            </AnimatePresence>
        </button>
    );
};

export default ThemeToggle;
