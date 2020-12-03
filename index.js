const iohook = require('iohook');
const robot = require('robotjs');

var x = false;
iohook.on("keypress", event => {
    event.keychar == 102 ? x = !x : x;
});

iohook.start();

setInterval(function() {
    x ? robot.mouseClick() : x;
}, 1);