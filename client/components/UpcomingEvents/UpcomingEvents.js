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
  const user = useSelector(state => state.auth);
  const events = user.joinedEvents;

  const handlePrev = () => setPrevCounter(prevCounter + 1);
  const handleNext = () => setNextCounter(nextCounter + 1);

  const parseTime = (time) => {
    if (!time) return "";

    const hh = time.substring(11, 13);
    const hhs = ((+hh + 11) % 12) + 1;
    const mm = time.substring(14, 16);
    return `${hhs}:${mm} ${hh > 11 ? "PM" : "AM"}`;
  };

  const parseDate = (date) => {
    if (!date) return "";

    let year = date.substring(0, 4);
    let month = date.substring(5, 7);
    let day = date.substring(8, 10);
    let newDate = `${month}/${day}/${year}`;

    return newDate;
  };

  const getDayOfWeek = (date) => {
    const weekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    const d = new Date(date);
    let day = weekday[d.getDay()];

    return day;
  };

  return (
    <div className="upcoming-events">
      <h2 className="header">Upcoming Events</h2>
      <div className="slider-img">
        <ChevronLeftIcon slot="container-start" onClick={handlePrev} />
        <Swiper modules={[Navigation]} navigation spaceBetween={30} slidesPerView={4}>
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <Link to={`/event/${event.id}`} className="event">
                <img src={event.logo} className="img" />
                <div className="text">
                  <div className="event-name">{event.name}</div>
                  <div className="event-date">
                    {getDayOfWeek(event.localStart)}, {parseDate(event.localStart)},{" "}
                    {parseTime(event.localStart)}
                  </div>
                  <div className="event-place">{event.localizedArea}</div>
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
