import { useEffect, useState } from 'react';
import React, { useState } from 'react';  // useState import
import { useInView } from 'react-intersection-observer';  // useInView import


function useParallax(offset = 0) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset - offset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return offsetY;
}

export default useParallax;
