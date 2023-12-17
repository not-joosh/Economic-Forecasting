import { motion } from "framer-motion";

const quote = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.08,
        },
    },
};

const statement = {
    initial: {
        opacity: 0,
        y: 50,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
        },
    },
};

export const AnimatedText = ({ text, csName, typeText }) => {
    if (typeText.toLowerCase() === "h") {
        return (
            <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
                <motion.h1
                    className={`inline-block w-ful ${csName} capitalize text-6xl`}
                    variants={quote}
                    initial="initial"
                    animate="animate"
                >
                    {text.split(" ").map((word, index) => {
                        return (
                            <motion.span key={word + "-" + index} className="inline-block" variants={statement}>
                                {word}&nbsp;
                            </motion.span>
                        );
                    })}
                </motion.h1>
            </div>
        );
    } else if (typeText.toLowerCase() === "p") {
        return (
            <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
                <motion.h1
                    className={`inline-block w-full ${csName} font-semibold text-sm`}
                    initial="initial"
                    animate="animate"
                >
                    {text.split(" ").map((word, index) => {
                        return (
                            <motion.span key={word + "-" + index} className="inline-block" variants={statement}>
                                {word}&nbsp;
                            </motion.span>
                        );
                    })}
                </motion.h1>
            </div>
        );
    } else {
        return (
            <div className="w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden">
                <motion.h1
                    className={`inline-block w-full ${csName} font-semibold text-sm`}
                    initial="initial"
                    animate="animate"
                >
                    {text.split(" ").map((word, index) => {
                        return (
                            <motion.span key={word + "-" + index} className="inline-block" variants={statement}>
                                {word}&nbsp;
                            </motion.span>
                        );
                    })}
                </motion.h1>
            </div>
        );
    }
};
