import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Palette, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Keep keys and colours in sync with the themes in src/index.css and the head script in index.html.
const THEMES = [
    { key: 'midnight', label: 'Midnight', swatch: ['#090e1a', '#34d399'], meta: '#090e1a' },
    { key: 'mint', label: 'Mint', swatch: ['#ffffff', '#16a34a'], meta: '#f0fdf4' },
    { key: 'sunset', label: 'Sunset', swatch: ['#fffbf5', '#ea580c'], meta: '#fff7ed' },
    { key: 'lavender', label: 'Lavender', swatch: ['#ffffff', '#7c3aed'], meta: '#f5f3ff' },
];
const DEFAULT_THEME = 'midnight';
const STORAGE_KEY = 'theme';

const subscribe = (callback) => {
    const observer = new MutationObserver(callback);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
};
const getSnapshot = () => document.documentElement.dataset.theme || DEFAULT_THEME;
const getServerSnapshot = () => DEFAULT_THEME;

const applyTheme = (key) => {
    document.documentElement.dataset.theme = key;
    const meta = document.querySelector('meta[name="theme-color"]');
    const theme = THEMES.find((t) => t.key === key);
    if (meta && theme) meta.setAttribute('content', theme.meta);
    try {
        localStorage.setItem(STORAGE_KEY, key);
    } catch {
        // Storage can be blocked (private mode); the theme still applies for this visit.
    }
};

const ThemePicker = () => {
    const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // Close when clicking outside or pressing Escape.
    useEffect(() => {
        if (!open) return;
        const onPointer = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        const onKey = (e) => {
            if (e.key === 'Escape') setOpen(false);
        };
        document.addEventListener('pointerdown', onPointer);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('pointerdown', onPointer);
            document.removeEventListener('keydown', onKey);
        };
    }, [open]);

    return (
        <div ref={ref} className="relative">
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-label="Change colour theme"
                aria-expanded={open}
                aria-haspopup="menu"
                className="p-2 rounded-full text-body hover:text-primary hover:bg-tint transition-colors"
            >
                <Palette size={20} />
            </button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        role="menu"
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-2 w-48 p-2 rounded-xl bg-surface border border-line-strong shadow-xl shadow-glow/10 z-50"
                    >
                        <p className="px-2 pt-1 pb-2 text-xs uppercase tracking-wider text-muted">Theme</p>
                        {THEMES.map((theme) => (
                            <button
                                key={theme.key}
                                type="button"
                                role="menuitemradio"
                                aria-checked={current === theme.key}
                                onClick={() => {
                                    applyTheme(theme.key);
                                    setOpen(false);
                                }}
                                className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg text-sm transition-colors ${current === theme.key ? 'bg-tint text-ink' : 'text-body hover:bg-tint/60'}`}
                            >
                                <span
                                    aria-hidden="true"
                                    className="w-5 h-5 rounded-full border border-line-strong shrink-0"
                                    style={{ background: `linear-gradient(135deg, ${theme.swatch[0]} 50%, ${theme.swatch[1]} 50%)` }}
                                />
                                <span className="flex-1 text-left">{theme.label}</span>
                                {current === theme.key && <Check size={16} className="text-primary" />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemePicker;
