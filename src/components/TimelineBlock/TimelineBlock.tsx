import React, { useState, useEffect, useRef } from 'react';
import './TimelineBlock.scss';
import { timelineData, TimelineItem } from '../../data/timelineData';
import Circle from '../Circle/Circle';
import EventsSwiper from '../EventSwiper/EventSwiper';
import gsap from 'gsap';
import TimelineControls from '../TimelineControls/TimelineControls';

const TimelineBlock: React.FC = () => {
  const [active, setActive] = useState<number>(0);

  const startYearRef = useRef<HTMLDivElement | null>(null);
  const endYearRef = useRef<HTMLDivElement | null>(null);
  const eventsWrapperRef = useRef<HTMLDivElement | null>(null);

  const [displayEvents, setDisplayEvents] = useState<TimelineItem['events']>(
    timelineData[0].events,
  );

  // Анимации числа
  const animateYear = (ref: HTMLDivElement | null, from: number, to: number) => {
    if (!ref) return;
    const obj = { val: from };
    gsap.to(obj, {
      val: to,
      duration: 0.6,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (ref) ref.textContent = Math.round(obj.val).toString();
      },
    });
  };

  // Анимация смены событий
  const animateEvents = (newEvents: TimelineItem['events']) => {
    if (!eventsWrapperRef.current) return;

    gsap.to(eventsWrapperRef.current, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setDisplayEvents(newEvents);
        gsap.to(eventsWrapperRef.current, { opacity: 1, duration: 0.3 });
      },
    });
  };

  useEffect(() => {
    const prevStart = Number(startYearRef.current?.textContent) || timelineData[active].startYear;
    const prevEnd = Number(endYearRef.current?.textContent) || timelineData[active].endYear;

    animateYear(startYearRef.current, prevStart, timelineData[active].startYear);
    animateYear(endYearRef.current, prevEnd, timelineData[active].endYear);

    animateEvents(timelineData[active].events);
  }, [active]);

  const handlePrev = () => setActive((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setActive((prev) => Math.min(prev + 1, timelineData.length - 1));

  return (
    <section className="timelineBlock">
      {/* Lines */}
      <div className="line vertical left" />
      <div className="line vertical center" />
      <div className="line vertical right" />
      <div className="line horizontal" />
      <div className="historical-line-wrapper">
        <div className="historical-line" />
        <div className="historical-text">Исторические даты</div>
      </div>

      {/* Circle */}
      <div className="circle-wrapper">
        <Circle
          points={timelineData.length}
          activeIndex={active}
          onChange={(i: number) => setActive(i)}
          size={503}
        />
      </div>

      {/* Years */}
      <div className="years">
        <div className="startYear" ref={startYearRef}>
          {timelineData[0].startYear}
        </div>
        <div className="endYear" ref={endYearRef}>
          {timelineData[0].endYear}
        </div>
      </div>
      <div className="timelineControlsWrapper">
        <TimelineControls
          activeIndex={active}
          points={timelineData.length}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>

      {/* EventsSwiper */}
      <div className="events" ref={eventsWrapperRef}>
        <EventsSwiper events={displayEvents} activeIndex={active} />
      </div>
    </section>
  );
};

export default TimelineBlock;
