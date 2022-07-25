let userName = prompt("Adınızı Giriniz").toUpperCase();
document.querySelector("#myName").innerHTML = `${userName}`;

let timeDiv = document.getElementById("myClock");
function showTime() {
    const days = [
        "Pazar",
        "Pazartesi",
        "Salı",
        "Çarşamba",
        "Perşembe",
        "Cuma",
        "Cumartesi",        
    ];

    var time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds(),
        day = days[time.getDay()];

    timeDiv.innerHTML = `
    ${watch(hours)}:${watch(minutes)}:${watch(seconds)} ${day}
    `;
    function watch(standIn) {
        if(standIn < 10) {
            standIn = "0" + standIn;
        }
        return standIn;
    }

}
setInterval(showTime, 1000);