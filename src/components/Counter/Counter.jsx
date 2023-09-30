import { animate, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export default function Counter({ from, to }) {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, {once:true})
    useEffect(() => {
        const node = nodeRef.current;
        const controls = animate(from, to, {
            duration: 1,
            onUpdate(value) {
                node.textContent = value.toFixed(0);
            }
        }, [from,to]);

        return () => controls.stop();
    }, [isInView]);

    return <span className="inline-block" ref={nodeRef} />;
}