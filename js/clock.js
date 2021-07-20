function askName() {
    var name = prompt("İsminizi Giriniz:");
    document.getElementById("myName").innerHTML = name;
}


function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var days = date.getDay();

    if (days == 1 ) {
        days = "Pazartesi";
    }else if (days == 2 ) {
        days = "Salı";
    }else if (days == 3 ) {
        days = "Çarşamba";
    }else if (days == 4 ) {
        days = "Perşembe";
    }else if (days == 5 ) {
        days = "Cuma";
    }else if (days == 6 ) {
        days = "Cumartesi";
    }else if (days == 7 ) {
        days = "Pazar";
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var time = hours + ":" + minutes + ":" + seconds + " " + days;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000); 

}

showTime();
askName();