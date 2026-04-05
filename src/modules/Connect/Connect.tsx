import Link from "next/link";
import styles from "./Connect.module.scss";

const FOOTER_LINKS = [
  { label: "Faqs", href: "#" },
  { label: "Return & Exchange", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Condition", href: "#" },
];

const SOCIAL_ICONS = [
  {
    href: "https://www.facebook.com/coldestmnl",
    ariaLabelAlt: "Facebook",
    src: "/social-icons/facebook.svg",
  },
  {
    href: "https://www.instagram.com/coldestworldwide",
    ariaLabelAlt: "Instagram",
    src: "/social-icons/instagram.svg",
  },
  {
    href: "https://www.tiktok.com/@coldestworldwide",
    ariaLabelAlt: "Tiktok",
    src: "/social-icons/tiktok.svg",
  },
  {
    href: "https://www.facebook.com/coldestmnl",
    ariaLabelAlt: "Shopee",
    src: "/social-icons/shopee.svg",
  },
];

function SocialIcons() {
  const iconClass = styles["social-icon"];
  return (
    <div className={styles["social-row"]} aria-label="Social links">
      {SOCIAL_ICONS.map(({ href, ariaLabelAlt, src }) => (
        <a
          href={href}
          target="_blank"
          className={iconClass}
          aria-label={ariaLabelAlt}
        >
          <img src={src} alt={ariaLabelAlt} />
        </a>
      ))}
    </div>
  );
}

function Connect() {
  return (
    <section id="connect-section" className={styles.connect}>
      <div className={styles.hero}>
        <div className={styles["hero-cta"]}>
          <h2 className={styles["hero-title"]}>Be a member</h2>
          <Link href="/register" className={styles["register-btn"]}>
            Register here.
          </Link>
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
