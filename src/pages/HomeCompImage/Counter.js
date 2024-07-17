import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

const Counter = ({ id, end, duration }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    $.fn.jQuerySimpleCounter = function (options) {
      const settings = $.extend(
        {
          start: 0,
          end: 100,
          easing: 'swing',
          duration: 400,
          complete: '',
        },
        options
      );

      const thisElement = $(this);

      $({ count: settings.start }).animate(
        { count: settings.end },
        {
          duration: settings.duration,
          easing: settings.easing,
          step: function () {
            const mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
          },
          complete: settings.complete,
        }
      );
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          $(`#${id}`).jQuerySimpleCounter({ end, duration });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Adjust this threshold as needed
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [id, end, duration]);

  return <p ref={counterRef} id={id} className="number">0</p>;
};

export default Counter;
