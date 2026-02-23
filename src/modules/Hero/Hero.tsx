import styles from "./Hero.module.scss";
import useAnimateHero from "./useAnimateHero";
import ShuffleText from "@/components/ShuffleText";
import clsx from "clsx";
import { navItems, imageItems } from "@/constants/hero";

function Hero() {
  const { counterRef } = useAnimateHero();

  return (
    <section id="hero">
      <nav className={styles.nav}>
        <div className={styles["nav-logo"]}>
          <a href="#">
            <ShuffleText>COLDEST</ShuffleText>
          </a>
        </div>
        <div className={styles["nav-items"]}>
          {navItems.map(({ href, text }) => (
            <a key={text} href={href}>
              <ShuffleText>{text}</ShuffleText>
            </a>
          ))}
        </div>
      </nav>

      <div className={styles.hero}>
        <div className={styles["hero-overlay"]}>
          <div className={styles.counter}>
            <h1 ref={counterRef}>0</h1>
          </div>

          <div className={styles["overlay-text-container"]}>
            <div className={styles["overlay-text"]}>
              <p>Stun</p>
              <p>Shine</p>
              <p>Dream</p>
            </div>
          </div>
        </div>

        <div className={styles["hero-images"]}>
          {imageItems.map((img, index) => (
            <div
              key={index}
              className={clsx(styles.img, { [styles["hero-img"]]: img.isHero })}
            >
              <img
                className={styles["hero-images-showcase"]}
                src={img.src}
                alt={`${index + 1}`}
              />
            </div>
          ))}
        </div>

        <div className={styles["hero-header"]}>
          <h1>Too cool for weird Kids!</h1>
        </div>
      </div>
    </section>
  );
}

export default Hero;
