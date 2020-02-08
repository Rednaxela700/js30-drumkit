const secondsHand = document.getElementById("second");
const minutesHand = document.getElementById("minute");
const hoursHand = document.getElementById("hour");

function countTime() {
  const today = new Date();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  secondsHand.style.transform = `rotate(${seconds * 6}deg)`;
  minutesHand.style.transform = `rotate(${minutes * 6}deg)`;
  hoursHand.style.transform = `rotate(${hours * 30}deg)`;
}
const t = setInterval(countTime, 1000);
