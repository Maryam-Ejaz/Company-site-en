import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

const Counter = ({ id, end, duration }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    // Define the jQuerySimpleCounter plugin function
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

    // Intersection observer callback function
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Call the jQuerySimpleCounter once when it comes into view
          $(`#${id}`).jQuerySimpleCounter({ end, duration });

          // Unobserve the target element after it's animated once
          observer.unobserve(entry.target);
        }
      });
    };

    // Create the IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1, // Adjust this threshold as needed
    });

    // Start observing the counter element
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    // Clean up by unobserving when component unmounts or dependencies change
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [id, end, duration]); // Depend on id, end, and duration for useEffect to re-run on prop changes

  return <p ref={counterRef} id={id} className="number">0</p>;
};

export default Counter;
