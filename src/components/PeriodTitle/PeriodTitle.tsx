import React, { useEffect, useRef, useState } from 'react';
import './PeriodTitle.scss';
import gsap from 'gsap';

interface Props {
  title: string;
  x: number;
  y: number;
  offsetX?: number;
}

const PeriodTitle: React.FC<Props> = ({ title, x, y, offsetX = 20 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [displayTitle, setDisplayTitle] = useState(title);
  const [pos, setPos] = useState({ x, y });

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        setDisplayTitle(title);
        setPos({ x, y });

        gsap.to(ref.current!, { opacity: 1, duration: 0.3 });
      },
    });
  }, [title, x, y]);

  return (
    <div
      ref={ref}
      className="periodTitle"
      style={{
        position: 'absolute',
        top: pos.y,
        left: pos.x + offsetX,
        transform: 'translateY(-50%)',
        whiteSpace: 'nowrap',
        opacity: 1,
        pointerEvents: 'none',
      }}
    >
      {displayTitle}
    </div>
  );
};

export default PeriodTitle;
