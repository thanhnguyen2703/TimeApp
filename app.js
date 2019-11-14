function getTime() {
    let time = new Date();
    let hour = 0 + time.getHours().toString();
    let minute = 0 + time.getMinutes().toString();
    let second = 0 + time.getSeconds().toString();
    return hour.slice(-2) + ":" + minute.slice(-2) + ":" + second.slice(-2)
};

function setTime () {
    document.getElementById("timing").textContent = getTime();
}

setInterval(() => {
    setTime();
    setGreeting();
    1000
    
});

function getGreeting() {
    let time = new Date();
    let hour = time.getHours();
    if (hour < 12) return "morning";
    if (hour >= 12 && hour < 16 ) return "afternoon";
    if (hour >= 18) return "evening";

    
}
function setGreeting() {
    document.getElementById("greeting").textContent = getGreeting();
}