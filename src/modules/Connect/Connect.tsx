import styles from "./Connect.module.scss";

function Connect() {
  return (
    <section id="connect-section" className={styles["connect"]}>
      <div className={styles["be-member-btn"]}>
        <h5>Be a member</h5>
        <a href="#" className={styles["register-btn"]}>
          <span className={styles["btn-hover"]}></span>
          <span>
            Register <br /> here.
          </span>
        </a>
      </div>
      <div className={styles["connect-content"]}>
        <div className={styles["connect-content-main"]}>
          <div className={styles["brand"]}>
            <span className={styles["brand-name"]}>coldest</span>
            <span className={styles["brand-mark"]}>®</span>
          </div>
          <div className={styles["social-columns"]}>
            <a href="#" aria-label="Visit Instagram">
              Instagram ↗
            </a>
            <a href="#" aria-label="Visit Facebook">
              Facebook ↗
            </a>
            <a href="#" aria-label="Visit Tiktok">
              Tiktok ↗
            </a>
            <a href="#" aria-label="Visit Shopee">
              Shopee ↗
            </a>
          </div>
        </div>
        <hr />
        <div className={styles["footer-bottom"]}>
          <span>{new Date().getFullYear()}</span>
          <span>All Rights Reserved © Website by KerbsDev</span>
        </div>
      </div>
    </section>
  );
}

export default Connect;
