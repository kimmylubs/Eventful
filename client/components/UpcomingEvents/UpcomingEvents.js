import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import SwiperNavigation from "../SwiperNavigation";
import { selectUser } from "../../store";
import { parseTime, parseDate, getDayOfWeek } from "../../utils";

import "swiper/css/bundle";

import "./UpcomingEvents.scss";

const UpcomingEvents = (props) => {
  const [prevCounter, setPrevCounter] = useState(0);
  const [nextCounter, setNextCounter] = useState(0);
  const user = useSelector(selectUser);
  const joinedEvents = user.joinedEvents;

  const handlePrev = () => setPrevCounter(prevCounter + 1);
  const handleNext = () => setNextCounter(nextCounter + 1);

  const eventDateSorter = (a, b) => new Date(a.localStart) - new Date(b.localStart);

  return (
    <div className="upcoming-events">
      <h2 className="header">Upcoming Events</h2>
      <div className="slider-img">
        <ChevronLeftIcon slot="container-start" onClick={handlePrev} />
        <Swiper modules={[Navigation]} navigation spaceBetween={25} slidesPerView={4}>
          {joinedEvents?.sort(eventDateSorter).map((event) => (
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
