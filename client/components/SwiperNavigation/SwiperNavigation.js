import React, { useEffect, useRef } from "react";
import { useSwiper } from "swiper/react";

const SwiperNavigation = ({ direction, counter }) => {
  const swiper = useSwiper();

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (direction === "prev") {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
    }
  }, [counter]);

  return <div className="swiper-navigation"></div>;
};

export default SwiperNavigation;
