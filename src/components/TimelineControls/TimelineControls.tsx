import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './TimelineControls.scss';

interface Props {
  activeIndex: number;
  points: number;
  onPrev: () => void;
  onNext: () => void;
}

const TimelineControls: React.FC<Props> = ({ activeIndex, points, onPrev, onNext }) => {
  return (
    <div className="timelineControls">
      <div className="counter">
        {String(activeIndex + 1).padStart(2, '0')}/{String(points).padStart(2, '0')}
      </div>
      <div className="buttons">
        <button onClick={onPrev} disabled={activeIndex === 0}>
          <FaChevronLeft size={14} color="#42567A" />
        </button>
        <button onClick={onNext} disabled={activeIndex === points - 1}>
          <FaChevronRight size={14} color="#42567A" />
        </button>
      </div>
    </div>
  );
};

export default TimelineControls;
