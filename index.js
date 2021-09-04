setInterval(function () {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    date = d.getDate();
    month = d.getMonth();
    year = d.getFullYear();
    day = d.getDay();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;
    document.getElementById("minute").style.transform = `rotate(${mrotation}deg)`;
    document.getElementById("second").style.transform = `rotate(${srotation}deg)`;
    var mn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var dd = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var x1 = date + " " + mn[month] + " " + year;
    document.getElementById('date').innerHTML = x1;
    var x5 = dd[day] + ",";
    document.getElementById('day').innerHTML = x5;
    var hours, minutes, seconds;
    if (htime >= 12) {
        var ampm = ' PM';
    } else {
        var ampm = ' AM'
    }
    if (htime > 12) {
        hours = htime - 12;
    } else {
        hours = htime;
    }

    if (hours.toString().length == 1) {
        hours = '0' + hours.toString();
    }
    if (mtime.toString().length == 1) {
        minutes = '0' + mtime;
    }
    else {
        minutes = mtime
    }
    if (stime.toString().length == 1) {
        // alert();
        seconds = '0' + stime;
    }
    else {
        seconds = stime;
    }
    x2 = hours + ":" + minutes + ":" + seconds + " " + ampm;
    document.getElementById('time').innerHTML = x2;
}, 1000);

$(document).ready(function () {
    $("#digital").hide();
    $("#Container").click(function () {
        $("#Container").hide();
        $("#digital").fadeIn("slow");
    })
    $("#digital").click(function () {
        $("#digital").hide();
        $("#Container").fadeIn("slow");
    })

})