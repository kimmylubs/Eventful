import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import SwiperNavigation from "../SwiperNavigation";

import "swiper/css/bundle";

import "./UpcomingEvents.scss";

const UpcomingEvents = (props) => {
  const [prevCounter, setPrevCounter] = useState(0);
  const [nextCounter, setNextCounter] = useState(0);
  const events = useSelector(state => state.events);

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
              <div className="event">
                <div className="img"></div>
                <div className="text">
                  <div className="event-name">{event.name}</div>
                  <div className="event-date">{event.date}, {event.time}</div>
                  <div className="event-place">{event.address}, {event.city}</div>
                </div>
              </div>
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
