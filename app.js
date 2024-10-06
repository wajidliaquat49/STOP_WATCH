var minutes_html = document.getElementById("minutes");
var seconds_html = document.getElementById("seconds");
var milliseconds_html = document.getElementById("milliseconds");

var minutes_jv = 0
var seconds_jv = 0
var milliseconds_jv = 0
var watchInterval;
function start() {
    watchInterval = setInterval(function () {
        milliseconds_jv++
        if (milliseconds_jv >= 1000) {
            seconds_jv++
            milliseconds_jv = 0
        }
        if (seconds_jv >= 60) {
            minutes_jv++
            seconds_jv = 0
        }
        milliseconds_html.innerText = milliseconds_jv
        seconds_html.innerText = seconds_jv < 10 ? "0" + seconds_jv : seconds_jv
        minutes_html.innerText = minutes_jv < 10 ? "0" + minutes_jv : minutes_jv
    }, 1)
}
function stop() {
    clearInterval(watchInterval)
}
function reset() {
    clearInterval(watchInterval)
    minutes_jv = 0
    seconds_jv = 0
    milliseconds_jv = 0
    minutes_html.innerText = 0;
    seconds_html.innerText = 0;
    milliseconds_html.innerText = 0;
};
