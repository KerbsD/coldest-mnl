import Hero from "@/modules/Hero/Hero";
import Products from "@/modules/Products/Products";
import History from "@/modules/History/History";
import Connect from "@/modules/Connect/Connect";

import { useLoadingStore } from "@/store/isLoadingStore";

export default function Home() {
  const isAnimationComplete = useLoadingStore(
    (state) => state.isAnimationComplete,
  );

  return (
    <>
      <Hero />
      {isAnimationComplete && (
        <>
          <Products />
          <History />
          <Connect />
        </>
      )}
    </>
  );
}
