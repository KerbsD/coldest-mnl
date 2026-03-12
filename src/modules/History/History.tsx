"use client";

import styles from "./History.module.scss";
import useAnimateHistory from "./useAnimateHistory";

const historyItems = [
  {
    text: "Coldest was founded in 2020 by Carl Dioneda, a visionary, leader, and eager individual based in Antipolo City, Rizal.",
    position: "topLeft",
  },
  {
    text: "Started as reseller for off-brand clothing and by early 2022, Coldest transition on creating original pieces",
    position: "middleRight",
  },
  {
    text: "Today, Coldest was widely popular and worn by many including local artist such as Gelo Buensa, Uncle Dags and many more.",
    position: "bottomLeft",
  },
];

function splitWords(text: string) {
  return text.split(" ").map((word, i) => (
    <span key={i} className={styles.word} style={{ marginRight: "0.3em" }}>
      {word}
    </span>
  ));
}

function History() {
  const { containerRef, itemRefs } = useAnimateHistory();

  return (
    <section ref={containerRef} className={styles.history}>
      <div className={styles.stage}>
        {historyItems.map((item, i) => (
          <div
            key={i}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className={`${styles.item} ${styles[item.position]}`}
          >
            <p className={styles.text}>{splitWords(item.text)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default History;
