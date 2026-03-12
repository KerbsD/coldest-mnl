import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./History.module.scss";

function useAnimateHistory() {
  const containerRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!items.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "+=140%",
          pin: true,
          pinSpacing: true,
          scrub: 1,
          toggleActions: "play none none reverse",
        },
      });

      items.forEach((itemEl, index) => {
        const words = itemEl.querySelectorAll(`.${styles.word}`);
        tl.from(
          words,
          {
            opacity: 0,
            y: 0,
            stagger: 0.06,
            duration: 0.4,
            ease: "power2.out",
          },
          index === 0 ? 0 : `+=0.35`,
        );
      });
    },
    { scope: containerRef },
  );

  return { containerRef, itemRefs };
}

export default useAnimateHistory;

