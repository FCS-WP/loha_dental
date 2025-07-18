// import { DisplayLabel } from './components/DisplayLabel';

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
  updateTimeOptions();
  $('#form-field-home_booking_day').on('change', function () {
    updateTimeOptions();
  });
});

function updateTimeOptions() {
  const $selectValue = $("#form-field-home_booking_time_select");
  $selectValue.empty();
  const bookingDate = $("#form-field-home_booking_day").val();
  const date = new Date(bookingDate || Date.now());
  const day = date.getDay();

  var minTime, maxTime;
  if (day === 2) {
    minTime = 840; // 14:00
    maxTime = 1200; // 20:00
  } else if (day === 6) {
    minTime = 540; // 09:00
    maxTime = 780; // 13:00
  } else {
    minTime = 540; // 09:00
    maxTime = 1080; // 18:00
  }
  
  function convertToTime(time) {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    const hoursStr = hours < 10 ? "0" + hours : hours;
    const minsStr = mins < 10 ? "0" + mins : mins;

    return hoursStr + ":" + minsStr;
  }

  const step = 30;

  for (var i = minTime; i <= maxTime; i += step) {
    const timeStr = convertToTime(i);
    $selectValue.append(`<option value="${timeStr}">${timeStr}</option>`);
  }
}
