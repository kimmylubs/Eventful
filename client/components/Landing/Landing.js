import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectEvents } from "../../store";
import EventCard from "../EventCard";

import "./Landing.scss";

const Landing = () => {
  const events = useSelector(selectEvents);

  const randomEvents = useMemo(() => {
    const randomEvents = [];
    while (randomEvents.length < Math.min(events.length, 3)) {
      const randomIndex = Math.floor(Math.random() * events.length);
      if (!randomEvents.includes(randomIndex)) {
        randomEvents.push(randomIndex);
      }
    }
    return randomEvents.map((i) => events[i]);
  }, [events]);

  return (
    <div className="landing-page">
      <section className="landing-hero">
        <div className="hero-left">
          <p>Join events and enjoy summer!</p>
          <button>create your account</button>
        </div>
        <div className="hero-right">
          <img className="hero-img" />
        </div>
      </section>
      <section className="random-events">
        <div className="random-events-title">
          <span className="text">Find your local events or create your own events </span>
          <span className="event-link-btn">
            <Link to="/events">check out events in NYC</Link>
          </span>
        </div>
        <div className="random-events-cards">
          {randomEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>
      <section className="landing-footer">
        <div className="footer-left">
          <img className="footer-img" />
        </div>
        <div className="footer-right">connect with your friends</div>
      </section>
    </div>
  );
};

export default Landing;
