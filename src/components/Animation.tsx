import { useEffect, useRef, ReactNode } from "react";
import { motion, useInView, useAnimation, AnimationControls } from "framer-motion";

interface RevealProps {
  children: ReactNode; 
}

const Reveal: React.FC<RevealProps> = ({ children }) => {

  const ref = useRef<HTMLDivElement | null>(null);

  const isInView: boolean = useInView(ref, { once: true });
 
  const mainControls: AnimationControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
