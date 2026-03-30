import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

function useAnimateProductShocase() {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    function setupMarquee(track: HTMLDivElement, direction: "ltr" | "rtl") {
      const itemWidth = (
        track.children[0] as HTMLElement
      ).getBoundingClientRect().width;
      const halfWidth = itemWidth * (track.children.length / 2);

      gsap.set(track, { x: direction === "rtl" ? -halfWidth : 0 });

      gsap.to(track, {
        x: direction === "rtl" ? 0 : -halfWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      });
    }

    if (topRef.current) setupMarquee(topRef.current, "ltr");
    if (bottomRef.current) setupMarquee(bottomRef.current, "rtl");
  }, []);

  return {
    topRef,
    bottomRef,
  };
}

export default useAnimateProductShocase;
