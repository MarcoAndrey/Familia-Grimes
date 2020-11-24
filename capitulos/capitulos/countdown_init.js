const efcc_countdown = new countdown({
  target: '.countdown',
  dayWord: ' days',
  hourWord: ' hours',
  minWord: ' mins',
  secWord: ' secs'
});

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}