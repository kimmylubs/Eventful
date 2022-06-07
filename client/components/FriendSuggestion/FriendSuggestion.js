import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import SwiperNavigation from "../SwiperNavigation";

import "swiper/css/bundle";

import "./FriendSuggestion.scss";

const friends = [
  { id: 1, title: "friend 1" },
  { id: 2, title: "friend 2" },
  { id: 3, title: "friend 3" },
  { id: 4, title: "friend 4" },
  { id: 5, title: "friend 5" },
  { id: 6, title: "friend 6" },
  { id: 7, title: "friend 7" },
  { id: 8, title: "friend 8" },
  { id: 9, title: "friend 9" },
]

const FriendSuggestion = (props) => {
  const [prevCounter, setPrevCounter] = useState(0);
  const [nextCounter, setNextCounter] = useState(0);

  const handlePrev = () => setPrevCounter(prevCounter + 1);
  const handleNext = () => setNextCounter(nextCounter + 1);

  return (
    <div className="friend-suggestion">
      <h2 className="header">Haven't met your friends recently?</h2>
      <div className="slider-friend">
        <ChevronLeftIcon slot="container-start" onClick={handlePrev} />
        <Swiper modules={[Navigation]} navigation spaceBetween={20} slidesPerView={4}>
          {friends.map((friend) => (
            <SwiperSlide key={friend.id}>
              <div className="friend">
                <div className="avatar">{friend.title}</div>
                <div className="user-name">user name</div>
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

export default FriendSuggestion;
