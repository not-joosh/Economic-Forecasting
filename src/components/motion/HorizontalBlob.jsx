import { AnimatePresence, motion } from "framer-motion";
export const HorizontalBlob = () => {
    return (
        <AnimatePresence>
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-40  bg-stone-800'
                initial={{x:'100%', width: '100%'}}
                animate={{x:'0%', width: '0%'}}
                transition={{duration: 0.8, ease:'easeInOut'}}
            />
            <motion.div         
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-30  bg-stone-700'
                initial={{x:'100%', width: '100%'}}
                animate={{x:'0%', width: '0%'}}
                transition={{delay:0.2, duration: 0.8, ease:'easeInOut'}}
            />
            <motion.div
                className='fixed top-0 bottom-0 right-full w-screen h-screen z-20  bg-stone-500'
                initial={{x:'100%', width: '100%'}}
                animate={{x:'0%', width: '0%'}}
                transition={{delay:0.4, duration: 0.8, ease:'easeInOut'}}
            />
        </AnimatePresence>
    );
};