import { motion, MotionValue, useSpring } from "framer-motion";

export function ProgressBar({ value, }: { value: MotionValue<number> }) {
    const width = useSpring(value, { damping: 20 });
    return (
        <div className="flex items-center gap-4">
            <motion.div className="flex h-6 w-full flex-row items-start justify-start">
                <motion.div
                    className="h-full w-full bg-green-500"
                    style={{ scaleX: width, originX: 0 }}
                    transition={{ ease: 'easeIn' }}
                />
            </motion.div>
        </div>
    );
}