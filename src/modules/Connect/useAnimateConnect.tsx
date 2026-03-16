import styles from "./Connect.module.scss";

function useAnimateConnect() {
  const button = document.querySelector<HTMLElement>(
    `.${styles["register-btn"]}`,
  );

  if (!button) return;

  const handleMouseMove = function (this: HTMLElement, evt: MouseEvent) {
    const movX = evt.clientX - this.getBoundingClientRect().x;
    gsap.to(`.${styles["btn-hover"]}`, {
      x: movX,
      scale: 30,
      backgroundColor: "black",
      duration: 0.3,
    });
  };

  const handleMouseLeave = function (this: HTMLElement, evt: MouseEvent) {
    const movX = evt.clientX - this.getBoundingClientRect().x;
    gsap.to(`.${styles["btn-hover"]}`, {
      x: movX,
      scale: 0,
      duration: 0.3,
    });
  };

  button.addEventListener("mousemove", handleMouseMove);
  button.addEventListener("mouseleave", handleMouseLeave);
}

export default useAnimateConnect;
