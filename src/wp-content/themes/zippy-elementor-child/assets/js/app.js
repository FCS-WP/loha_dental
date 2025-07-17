// import { DisplayLabel } from './components/DisplayLabel';
import "../lib/flatpickr/flatpickr.min.js";

let Main = {
  init: async function () {
    // initialize demo javascript component - async/await invokes some
    //  level of babel transformation
    const displayLabel = new DisplayLabel();
    await displayLabel.init();
  },
};

// Main.init();
jQuery(document).ready(function ($) {
  function initFlatpickr() {
    const $pickUp = $("#form-field-home_booking_time");
    if (typeof flatpickr !== "undefined") {
      if ($pickUp.length) {
        $pickUp.flatpickr({
          enableTime: true,
          noCalendar: true,
          time_24hr: true,
          minuteIncrement: 15,
          onChange: function (selectedDates, dateStr, instance) {
            updateTimeRange(instance);
          },
          onOpen: function (selectedDates, dateStr, instance) {
            updateTimeRange(instance);
          },
          onReady: function (selectedDates, dateStr, instance) {
            updateTimeRange(instance);
          },
        });

        function updateTimeRange(instance) {
          const bookingDate = $("#form-field-home_booking_day").val();
          const date = new Date(bookingDate || Date.now());
          const day = date.getDay();

          if (day === 2) {
            instance.set("minTime", "14:00");
            instance.set("maxTime", "20:00");
          } else if (day === 6) {
            instance.set("minTime", "09:00");
            instance.set("maxTime", "13:00");
          } else {
            instance.set("minTime", "09:00");
            instance.set("maxTime", "18:00");
          }
        }
      }
    } else {
      setTimeout(initFlatpickr, 300);
    }
  }

  initFlatpickr();
});
