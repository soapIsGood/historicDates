import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import gsap from 'gsap';

import 'swiper/css';
import 'swiper/css/navigation';
import './EventSwiper.scss';

interface EventItem {
  date?: string;
  description?: string;
}

interface Props {
  events: EventItem[];
  activeIndex: number;
}

const EventsSwiper: React.FC<Props> = ({ events, activeIndex }) => {
  const swiperRef = useRef<SwiperCore | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [canSlidePrev, setCanSlidePrev] = useState(false);
  const [canSlideNext, setCanSlideNext] = useState(true);

  const updateButtons = () => {
    if (!swiperRef.current) return;
    setCanSlidePrev(!swiperRef.current.isBeginning);
    setCanSlideNext(!swiperRef.current.isEnd);
  };

  // Анимация при смене набора событий
  useEffect(() => {
    if (!wrapperRef.current) return;

    // убиваем старые анимации
    gsap.killTweensOf(wrapperRef.current);

    // мгновенно скрыть
    gsap.set(wrapperRef.current, { opacity: 0 });

    // сброс на первый слайд при смене периода
    swiperRef.current?.slideTo(0, 0);

    // плавное появление
    gsap.to(wrapperRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
    });

    updateButtons();
  }, [events, activeIndex]);

  return (
    <div className="eventsSwiperWrapper" ref={wrapperRef}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateButtons();
        }}
        onSlideChange={updateButtons}
      >
        {events.map((ev, idx) => (
          <SwiperSlide key={idx}>
            <div className="card">
              {ev.date && <div className="date">{ev.date}</div>}
              {ev.description && <p>{ev.description}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev Button */}
      <button
        className="navButton prev"
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={!canSlidePrev}
        style={{ opacity: canSlidePrev ? 1 : 0 }}
      >
        <FaChevronLeft size={14} color="blue" />
      </button>

      {/* Next Button */}
      <button
        className="navButton next"
        onClick={() => swiperRef.current?.slideNext()}
        disabled={!canSlideNext}
        style={{ opacity: canSlideNext ? 1 : 0 }}
      >
        <FaChevronRight size={14} color="blue" />
      </button>
    </div>
  );
};

export default EventsSwiper;
