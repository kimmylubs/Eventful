import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
  const events = useSelector((state) => state.events);

  const handlePrev = () => setPrevCounter(prevCounter + 1);
  const handleNext = () => setNextCounter(nextCounter + 1);

  const parseTime = (time) => {
    if (!time) return "";

    const hrs = +time.substring(0, 2);
    const hh = ((+hrs + 11) % 12) + 1;
    const mm = time.substring(3, 5);
    return `${hh}:${mm} ${hrs > 11 ? "PM" : "AM"}`;
  };

  return (
    <div className="upcoming-events">
      <h2 className="header">Upcoming Events</h2>
      <div className="slider-img">
        <ChevronLeftIcon slot="container-start" onClick={handlePrev} />
        <Swiper modules={[Navigation]} navigation spaceBetween={20} slidesPerView={4}>
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <Link to={`/event/${event.id}`} className="event">
                <div className="img"></div>
                <div className="text">
                  <div className="event-name">{event.name}</div>
                  <div className="event-date">
                    {event.date}, {parseTime(event.time)}
                  </div>
                  <div className="event-place">
                    {event.address}, {event.city}
                  </div>
                </div>
              </Link>
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
