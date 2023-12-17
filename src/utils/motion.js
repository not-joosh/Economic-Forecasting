import { motion, AnimatePresence } from "framer-motion";

export const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export const slideInFromRightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
};

export const slideInFromTopVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
};

export const slideInFromBottomVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
};
