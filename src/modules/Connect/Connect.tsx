import styles from "./Connect.module.scss";

const FOOTER_LINKS = [
  { label: "Faqs", href: "#" },
  { label: "Return & Exchange", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Condition", href: "#" },
] as const;

function SocialIcons() {
  const iconClass = styles["social-icon"];
  return (
    <div className={styles["social-row"]} aria-label="Social links">
      <a href="#" className={iconClass} aria-label="Facebook">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="2.75"
            y="2.75"
            width="18.5"
            height="18.5"
            rx="4.25"
            stroke="currentColor"
            strokeWidth="1.35"
          />
          <path
            fill="currentColor"
            d="M13.35 7.75h2.05v2.35h-1.65c-.45 0-.65.18-.65.68v1.22h2.15l-.28 2.35h-1.87V21h-2.85v-6.65H8.9v-2.35h1.42V9.35c0-1.95 1.15-3.1 3-3.1.45 0 .88.04 1.03.06v1.44Z"
          />
        </svg>
      </a>
      <a href="#" className={iconClass} aria-label="Instagram">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.35"
          />
          <circle
            cx="12"
            cy="12"
            r="4.25"
            stroke="currentColor"
            strokeWidth="1.35"
          />
          <circle cx="17" cy="7" r="1.15" fill="currentColor" />
        </svg>
      </a>
      <a href="#" className={iconClass} aria-label="TikTok">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.5 17.5V6l10.5-2v11" />
          <circle cx="7" cy="17.5" r="2.65" />
          <circle cx="18" cy="15.5" r="2.65" />
        </svg>
      </a>
      <a href="#" className={iconClass} aria-label="Shopee">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 10 7 6.5h10L17 10v8.5a1.75 1.75 0 0 1-1.75 1.75H6.75A1.75 1.75 0 0 1 5 18.5V10Z"
          />
          <path
            fill="currentColor"
            d="M12 9.35c.95 0 1.55.48 1.55 1.2 0 .58-.38.95-.98 1.02l-.62.08c-.28.04-.4.14-.4.3s.18.28.48.28c.38 0 .62-.18.68-.48h.95c-.08.78-.82 1.28-1.68 1.28-.92 0-1.52-.48-1.52-1.22 0-.55.35-.9.9-.98l.62-.08c.3-.04.45-.16.45-.34 0-.22-.22-.38-.55-.38-.4 0-.68.22-.75.58h-.9c.1-.85.78-1.35 1.72-1.35Z"
          />
        </svg>
      </a>
      <a href="#" className={iconClass} aria-label="Package">
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinejoin="round"
            d="m12 4 8 4.5v7L12 20l-8-4.5v-7L12 4Z"
          />
          <path
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinejoin="round"
            d="m4 8.5 8 4.5 8-4.5M12 13v7"
          />
        </svg>
      </a>
    </div>
  );
}

function Connect() {
  return (
    <section id="connect-section" className={styles.connect}>
      <div className={styles.hero}>
        <div className={styles["hero-cta"]}>
          <h2 className={styles["hero-title"]}>Be a member</h2>
          <a href="#" className={styles["register-btn"]}>
            Register here.
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles["footer-inner"]}>
          <div className={styles["footer-brand"]}>
            <div className={styles.brand}>
              <span className={styles["brand-name"]}>coldest</span>
              <span className={styles["brand-mark"]}>®</span>
            </div>
            <p className={styles.tagline}>Too cool for weird kids.</p>
            <p className={styles.copyright}>@2028 coldest</p>
            <SocialIcons />
          </div>
          <nav className={styles["footer-nav"]} aria-label="Footer">
            {FOOTER_LINKS.map(({ label, href }) => (
              <a key={label} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </footer>
    </section>
  );
}

export default Connect;
