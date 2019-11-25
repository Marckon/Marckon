import { useEffect, useState } from 'react';

interface UseScrollState {
  /* 窗口scroll bar的位置 */
  windowTop: number;
  windowLeft: number;
  /* 传入的element scroll 位置 */
  elementTop?: number;
  elementLeft?: number;
}

/* 获取scroll的位置 */
export function useScroll(element?: HTMLElement): UseScrollState {
  const [position, setPosition] = useState<UseScrollState>({
    windowTop: 0,
    windowLeft: 0,
  });

  useEffect(() => {
    function scrollCb(e: Event) {
      setPosition({
        windowTop: window.scrollY,
        windowLeft: window.scrollX,
        elementTop: element ? element.getBoundingClientRect().top : undefined,
        elementLeft: element ? element.getBoundingClientRect().left : undefined,
      });
    }

    document.addEventListener('scroll', scrollCb);

    return () => {
      document.removeEventListener('scroll', scrollCb);
    };
  }, [element]);

  return position;
}
