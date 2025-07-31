


const countSeconds = (start = 0) => {
    let number = start;
    return () => {
        number++;
        document.body.textContent = `${number} sekund`;
    }
}


const countTime = countSeconds();

setInterval(countTime, 1000);