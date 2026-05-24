'use client';
import { useEffect, useState } from 'react';

export function useCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    let frame: number;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }));
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return pos;
}
