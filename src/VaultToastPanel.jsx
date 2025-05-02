// src/VaultToastPanel.jsx import { useEffect, useState } from 'react'; import { motion, AnimatePresence } from 'framer-motion'; import useSound from 'use-sound'; import toastSound from '../assets/sfx/toast.mp3';

export default function VaultToastPanel({ toasts = [] }) { const [visibleToasts, setVisibleToasts] = useState([]); const [play] = useSound(toastSound, { volume: 0.5 });

useEffect(() => { if (toasts.length > 0) { const newToast = toasts[toasts.length - 1]; setVisibleToasts(prev => [...prev, newToast]); play(); setTimeout(() => { setVisibleToasts(prev => prev.slice(1)); }, 4000); } }, [toasts]);

const getToastStyle = toast => { if (toast.includes('XP')) return 'bg-yellow-700 text-yellow-100'; if (toast.includes('Achievement')) return 'bg-purple-700 text-purple-100'; if (toast.includes('Relic')) return 'bg-blue-700 text-blue-100'; if (toast.includes('Tam:')) return 'bg-green-800 text-green-100'; return 'bg-green-900 text-green-100'; };

return ( <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50"> <AnimatePresence> {visibleToasts.map((toast, idx) => ( <motion.div key={idx} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 50 }} transition={{ duration: 0.4 }} className={px-4 py-2 rounded-lg shadow-lg text-sm font-mono border border-green-600 ${getToastStyle(toast)}} > {toast} </motion.div> ))} </AnimatePresence> </div> ); }

