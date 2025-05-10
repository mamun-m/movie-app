import React, { ReactNode, useRef, useState } from "react";

const PlayingRIght: React.FC<{ children: ReactNode }> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setisDragging] = useState(false);
  const [startX, setstartX] = useState(0);
  const [scrollLeft, setscrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setisDragging(true);
    setstartX(e.pageX - scrollRef.current.offsetLeft);
    setscrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseLeaveOrUp = () => {
    setisDragging(false);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className={`trending-right ${isDragging ? "dragging" : ""}`}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeaveOrUp}
      onMouseUp={handleMouseLeaveOrUp}
      onMouseMove={handleMouseMove}
      ref={scrollRef}
    >
      {children}
    </div>
  );
};

export default PlayingRIght;
