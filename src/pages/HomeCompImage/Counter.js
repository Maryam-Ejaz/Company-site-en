import React, { useEffect } from 'react';
import $ from 'jquery';

const Counter = ({ id, end, duration }) => {
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

    $(`#${id}`).jQuerySimpleCounter({ end, duration });
  }, [id, end, duration]);

  return <p id={id} className="number">0</p>;
};

export default Counter;
