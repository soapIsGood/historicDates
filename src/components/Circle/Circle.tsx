import React, { useEffect, useRef, useState } from 'react';
import './Circle.scss';
import gsap from 'gsap';
import PeriodTitle from '../PeriodTitle/PeriodTitle';
import { timelineData } from '../../data/timelineData';

interface Props {
  points: number;
  activeIndex: number;
  onChange?: (i: number) => void;
  size?: number;
}

const Circle: React.FC<Props> = ({ points, activeIndex, onChange, size = 530 }) => {
  const circleRef = useRef<HTMLDivElement | null>(null);
  const angleStep = 360 / points;
  const baseOffset = -60;
  const pointSize = 6;
  const radius = size / 2 - pointSize / 10;

  const [rotation, setRotation] = useState(0);
  const [title, setTitle] = useState(timelineData[activeIndex].title);
  const [titlePos, setTitlePos] = useState({ x: 0, y: 0 });

  // вычисление координат точки без учета анимации
  const calcActivePosition = (index: number, rot: number) => {
    const angle = ((index * angleStep + baseOffset) * Math.PI) / 180;
    const rotRad = (rot * Math.PI) / 180;
    const x = size / 2 + radius * Math.cos(angle + rotRad);
    const y = size / 2 + radius * Math.sin(angle + rotRad);
    return { x, y };
  };

  useEffect(() => {
    const pos = calcActivePosition(activeIndex, rotation);
    setTitlePos(pos);
  }, []);

  useEffect(() => {
    const pos = calcActivePosition(activeIndex, rotation);
    setTitlePos(pos);
    setTitle(timelineData[activeIndex].title);

    if (!circleRef.current) return;
    const targetRotation = -activeIndex * angleStep;
    gsap.to(circleRef.current, {
      duration: 0.8,
      ease: 'power2.inOut',
      '--circle-rotation': `${targetRotation}deg`,
      rotation: targetRotation,
      onUpdate() {
        const r = (circleRef.current as any)._gsTransform?.rotation ?? targetRotation;
        setRotation(r);
        setTitlePos(calcActivePosition(activeIndex, r));
      },
    });
  }, [activeIndex]);
  return (
    <div className="Circle" style={{ width: size, height: size }}>
      <div
        className="circle"
        ref={circleRef}
        style={{ transformOrigin: '50% 50%', ['--circle-rotation' as any]: 0 }}
      >
        {Array.from({ length: points }).map((_, i) => {
          const angle = ((i * angleStep + baseOffset) * Math.PI) / 180;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          const isActive = i === activeIndex;

          return (
            <div
              key={i}
              className={`point ${isActive ? 'active' : ''}`}
              style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
              onClick={() => onChange && onChange(i)}
            >
              <div className="point-wrapper">
                <span className="label">{i + 1}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Плавно меняющийся тайтл */}
      <PeriodTitle title={title} x={titlePos.x} y={titlePos.y} offsetX={50} />
    </div>
  );
};

export default Circle;
