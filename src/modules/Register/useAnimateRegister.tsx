import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

function useAnimateRegister() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Refs for GSAP targets
  const cursorRef    = useRef<HTMLDivElement>(null)
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const floatT1Ref = useRef<HTMLDivElement>(null);
  const floatT2Ref = useRef<HTMLDivElement>(null);
  const cornerRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLDivElement>(null);

  // ── Entrance animations ──────────────────────────────────────────────────
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      eyebrowRef.current,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.7 },
      0.3,
    )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.5,
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.8,
      )
      .fromTo(
        formRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.7 },
        1.0,
      )
      .fromTo(
        cornerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        1.2,
      )
      .fromTo(
        countRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        1.4,
      )
      .fromTo(
        [floatT1Ref.current, floatT2Ref.current],
        { opacity: 0 },
        { opacity: 1, duration: 1.5, stagger: 0.1 },
        1.5,
      );

    return () => {
      tl.kill();
    };
  }, []);

  // ── Success animation ────────────────────────────────────────────────────
  useEffect(() => {
    if (!submitted || !successRef.current) return;

    gsap.fromTo(
      successRef.current,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
    );
  }, [submitted]);

  return {
    cursorRef,
    email,
    submitted,
    eyebrowRef,
    headlineRef,
    subRef,
    formRef,
    successRef,
    floatT1Ref,
    floatT2Ref,
    cornerRef,
    setEmail,
    setSubmitted,
  };
}

export default useAnimateRegister;
