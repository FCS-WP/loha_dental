// import { DisplayLabel } from './components/DisplayLabel';
import "../lib/flatpickr/flatpickr.min.js";

let Main = {
  init: async function () {

    // initialize demo javascript component - async/await invokes some 
    //  level of babel transformation 
    const displayLabel = new DisplayLabel();
    await displayLabel.init();

  }
};


// Main.init();
jQuery(document).ready(function ($) {
  const initFlatpickr = function () {
    const $pickUp = $('#form-field-home_booking_time');
    if (typeof flatpickr !== 'undefined') {
      if ($pickUp.length) {
        $pickUp.flatpickr({
          enableTime: true,
          noCalendar: true,
          time_24hr: true,
          minuteIncrement: 15,
        });
      }
    } else {
      setTimeout(initFlatpickr, 300);
    }
  };
  initFlatpickr();
});