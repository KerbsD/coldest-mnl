import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import gsap from "gsap";
import { CustomEase, SplitText, ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(CustomEase, SplitText, ScrollTrigger);
CustomEase.create("hop", "0.85, 0, 0.15, 1");

export default function App({ Component, pageProps }: AppProps) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = cursorRef.current;
    if (!dot) return;

    const onMove = (event: MouseEvent) => {
      gsap.to(dot, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.12,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <span ref={cursorRef} className="app-cursor-dot" />
      <Component {...pageProps} />
    </>
  );
}
