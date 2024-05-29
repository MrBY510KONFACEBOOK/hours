const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

function setTime() {
  const now = new Date();
  const hours = now.getHours() % 12;
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourDegrees = (hours / 12) * 360 + (minutes / 60) * 30;
  const minuteDegrees = (minutes / 60) * 360;
  const secondDegrees = (seconds / 60) * 360;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  
  // Smooth second hand movement with a slight tick
  secondHand.style.transition = 'none'; // Remove smooth transition briefly
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  setTimeout(() => {
    secondHand.style.transition = 'transform 0.2s ease-in-out'; // Restore smooth transition
  }, 0);
}

setInterval(setTime, 1000);
setTime(); // Set initial time
