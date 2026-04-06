import Link from "next/link";
import styles from "./register.module.scss";
import useAnimateRegister from "./useAnimateRegister";

const TICKER_ITEMS = [
  "Coldest MNL",
  "Too Cool for Weird Kids",
  "Members Only",
  "Proof of Purchase Required",
  "Manila Philippines",
  "Exclusive Drop",
];

const Register = () => {
  const {
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
  } = useAnimateRegister();

  // ── Notify submit ────────────────────────────────────────────────────────
  const handleNotify = () => {
    if (!email.trim() || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <div className={styles.root}>
      {/* Background layers */}
      <div className={styles.noise} />
      <div className={styles.gridLines} />
      <div className={styles.iceBar} />

      {/* Custom cursor */}
      <div ref={cursorRef} className={styles.cursorDot} />

      {/* Nav */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            coldest<span>®</span>
          </Link>
        </div>
        <div className={styles.navTag}>Est. Manila — PH</div>
      </nav>

      {/* Main content */}
      <main className={styles.main}>
        <div ref={eyebrowRef} className={styles.eyebrow}>
          — Something cold is coming
        </div>

        <h1 ref={headlineRef} className={styles.headline}>
          Coming
          <br />
          <span className={styles.outline}>Soon.</span>
        </h1>

        <p ref={subRef} className={styles.sub}>
          We're crafting something exclusive.
          <br />
          Too cool for the impatient.
          <br />
          Drop your email — be the first to know.
        </p>

        {!submitted ? (
          <div ref={formRef} className={styles.notifyForm}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleNotify()}
            />
            <button onClick={handleNotify}>Notify Me</button>
          </div>
        ) : (
          <div ref={successRef} className={styles.successMsg}>
            ✦ &nbsp;You're on the list. Stay cold.
          </div>
        )}

        <div ref={floatT1Ref} className={`${styles.floatTag} ${styles.t1}`}>
          Members only / 2025
        </div>
        <div ref={floatT2Ref} className={`${styles.floatTag} ${styles.t2}`}>
          Dropping soon
        </div>
      </main>

      {/* Rotating badge */}
      <div ref={cornerRef} className={styles.cornerDeco}>
        <svg className={styles.rotatingText} viewBox="0 0 130 130">
          <defs>
            <path
              id="circ"
              d="M 65,65 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
            />
          </defs>
          <text
            fontFamily="Space Mono, monospace"
            fontSize="9"
            fill="rgba(240,237,230,0.3)"
            letterSpacing="5.5"
          >
            <textPath href="#circ">
              EXCLUSIVE · MEMBERS ONLY · COLDEST MNL · STAY COOL ·&nbsp;
            </textPath>
          </text>
        </svg>
        <div className={styles.centerCross} />
      </div>

      {/* Ticker */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {/* Duplicated twice for seamless loop */}
          {[
            ...TICKER_ITEMS,
            ...TICKER_ITEMS,
            ...TICKER_ITEMS,
            ...TICKER_ITEMS,
          ].map((item, i) => (
            <span key={i} className={styles.tickerItem}>
              {item}
              <span className={styles.tickerDot}> ✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Register;
