import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import SwiperNavigation from "../SwiperNavigation";
import { selectFriends } from "../../store";

import "swiper/css/bundle";

import "./FriendSuggestion.scss";

const FriendSuggestion = () => {
  const [prevCounter, setPrevCounter] = useState(0);
  const [nextCounter, setNextCounter] = useState(0);
  const friends = useSelector(selectFriends);

  const handlePrev = () => setPrevCounter(prevCounter + 1);
  const handleNext = () => setNextCounter(nextCounter + 1);

  return (
    <div className="friend-suggestion">
      <h2 className="header">Available Friends</h2>
      <div className="slider-friend">
        <ChevronLeftIcon slot="container-start" onClick={handlePrev} />
        <Swiper modules={[Navigation]} navigation spaceBetween={20} slidesPerView={5}>
          {friends.map((friend) => (
            <SwiperSlide key={friend.id}>
              <div className="friend">
                {/* <div className="text">Last seen:</div> */}
                <div className="avatar">
                  <img src={friend.imageUrl} alt={friend.username} />
                </div>
                <div className="user-name">{friend.username}</div>
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
