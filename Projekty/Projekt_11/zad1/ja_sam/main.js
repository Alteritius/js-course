
const clock = () => {
const time = new Date();

// console.log(time.toLocaleString()); // 10.01.2025, 13:17:45
// console.log(time.toLocaleDateString()); // 10.01.2025

const seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
const minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();


    document.querySelector(".clock span").textContent = `${hours}:${minutes}:${seconds}`;

}



setInterval(clock, 1000);