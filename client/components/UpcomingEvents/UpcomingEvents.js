import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import SwiperNavigation from "../SwiperNavigation";

import "swiper/css/bundle";

import "./UpcomingEvents.scss";

const events = [
  { id: 1, title: "event 1" },
  { id: 2, title: "event 2" },
  { id: 3, title: "event 3" },
  { id: 4, title: "event 4" },
  { id: 5, title: "event 5" },
  { id: 6, title: "event 6" },
  { id: 7, title: "event 7" },
  { id: 8, title: "event 8" },
  { id: 9, title: "event 9" },
];

const UpcomingEvents = (props) => {
  const [prevCounter, setPrevCounter] = useState(0);
  const [nextCounter, setNextCounter] = useState(0);

  const handlePrev = () => setPrevCounter(prevCounter + 1);
  const handleNext = () => setNextCounter(nextCounter + 1);

  return (
    <div className="upcoming-events">
      <h2 className="header">Upcoming Events</h2>
      <div className="slider-img">
        <ChevronLeftIcon slot="container-start" onClick={handlePrev} />
        <Swiper modules={[Navigation]} navigation spaceBetween={20} slidesPerView={4}>
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <div className="event">{event.title}</div>
            </SwiperSlide>
          ))}
          <SwiperNavigation direction="prev" counter={prevCounter} />
          <SwiperNavigation direction="next" counter={nextCounter} />
        </Swiper>
        <ChevronRightIcon slot="container-end" onClick={handleNext} />
      </div>
      <hr />
    </div>
  );
};

export default UpcomingEvents;
