import { imageItems } from "@/constants/hero";
import styles from "./Products.module.scss";
import useAnimateProducts from "./useAnimateProducts";
import useAnimateProductShocase from "./useAnimateProductShocase";

function Products() {
  const {
    spotlightRef,
    projectIndexRef,
    projectImgsRef,
    projectImagesContainerRef,
    projectNamesRef,
    projectNamesContainerRef,
  } = useAnimateProducts();

  const { topRef, bottomRef } = useAnimateProductShocase();

  return (
    <section id="products-section" className={styles["products-section"]}>
      <div className={styles["intro"]}>
        {["products", "showcase"].map((word, i) => (
          <div style={{ overflow: "hidden" }} key={word}>
            <div
              ref={i === 0 ? topRef : bottomRef}
              style={{ display: "flex", width: "max-content" }}
            >
              {Array(6)
                .fill(word)
                .map((w, j) => (
                  <span key={j} className={styles.marqueeWord}>
                    {w}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div ref={spotlightRef} className={styles["spotlight"]}>
        <div className={styles["project-index"]}>
          <h1 ref={projectIndexRef}>01/05</h1>
        </div>
        <div
          ref={projectImagesContainerRef}
          className={styles["project-images"]}
        >
          {imageItems.map((img, index) => (
            <div
              key={index}
              ref={(el) => {
                projectImgsRef.current[index] = el;
              }}
              className={styles["project-img"]}
            >
              <img src={img.src} alt={`${index + 1}`} />
            </div>
          ))}
        </div>
        <div ref={projectNamesContainerRef} className={styles["project-names"]}>
          {[
            "Script Glitter",
            "Pink Salmon Arch",
            "Raw Denim",
            `"I'M TOO COLD"`,
            "BLUEFLAMES",
          ].map((name, index) => (
            <p
              key={index}
              ref={(el) => {
                projectNamesRef.current[index] = el;
              }}
            >
              {name}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
