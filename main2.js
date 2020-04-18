/* File : main .js
 Project : synthesizer
Author : Corey Safinuk
Date : March 16th 2020
Description : The code that enables the synthesizer project

All sounds sourced from feesounds.com
Sources for music:emotional piano riff by rom2014, birds singing forest by burghrecords , suspense by woodmoose, scary suspense by tyops, superhappycheesyloop2 by luckylittleraven.
*/



//gets the audio context from the browser
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
//sets up the gain for normalising
var gainey = audioCtx.createGain();

var bufftest = 0;
var bufftest2 = 0;

var source;
var source1;
var source2;
var source3;
var source4;
var source5;
var source6;
var source7;
var source8;
var source9;
function getSad() {
    //creates the buffer for the source so it can be loaded into
    source = audioCtx.createBufferSource();
    var request = new XMLHttpRequest();

    request.open('GET', 'SadPiano.wav', true);

    request.responseType = 'arraybuffer';

    //when the request loads the file it decodes the audio into an arraybuffer, then uses gain node to normalise at 48%
    //then connects the source to gain and the gain to the destination, a function in place in case of error
    request.onload = function () {
        var audioData = request.response;

        audioCtx.decodeAudioData(audioData, function (buffer) {
            if (!source.buffer) {
                source.buffer = buffer;
            }
            gainey.gain.value = document.getElementById('Volume').value / 100;
            source.connect(gainey);
            gainey.connect(audioCtx.destination);

            source.loop = true;
        },

            function (e) { console.log("Error with decoding audio data" + e.err); });

    }
    document.body.style.backgroundColor = "gray";

    bufftest = 0;
    request.send();
}
function getTense() {
    //creates the buffer for the source so it can be loaded into
    var request = new XMLHttpRequest();

    source1 = audioCtx.createBufferSource();

    request.open('GET', 'suspense.wav', true);

    request.responseType = 'arraybuffer';

    //when the request loads the file it decodes the audio into an arraybuffer, then uses gain node to normalise at 48%
    //then connects the source to gain and the gain to the destination, a function in place in case of error
    request.onload = function () {
        var audioData = request.response;

        audioCtx.decodeAudioData(audioData, function (buffer) {
            if (!source1.buffer) {
                source1.buffer = buffer;
            }
            gainey.gain.value = document.getElementById('Volume').value / 100;
            source1.connect(gainey);
            gainey.connect(audioCtx.destination);

            source1.loop = true;
        },

            function (e) { console.log("Error with decoding audio data" + e.err); });

    }
    document.body.style.backgroundColor = "black";

    bufftest = 1;
    request.send();
}
function getTriumph() {
    //creates the buffer for the source so it can be loaded into
    var request = new XMLHttpRequest();

    source2 = audioCtx.createBufferSource();

    request.open('GET', 'triumph.wav', true);

    request.responseType = 'arraybuffer';

    //when the request loads the file it decodes the audio into an arraybuffer, then uses gain node to normalise at 48%
    //then connects the source to gain and the gain to the destination, a function in place in case of error
    request.onload = function () {
        var audioData = request.response;

        audioCtx.decodeAudioData(audioData, function (buffer) {
            if (!source2.buffer) {
                source2.buffer = buffer;
            }
            gainey.gain.value = document.getElementById('Volume').value / 100;
            source2.connect(gainey);
            gainey.connect(audioCtx.destination);

            source2.loop = true;
        },

            function (e) { console.log("Error with decoding audio data" + e.err); });

    }
    document.body.style.backgroundColor = "gold";

    bufftest = 2;
    request.send();
}
function getCalm() {
    //creates the buffer for the source so it can be loaded into
    var request = new XMLHttpRequest();

    source3 = audioCtx.createBufferSource();

    request.open('GET', 'CalmingBirds.wav', true);

    request.responseType = 'arraybuffer';

    //when the request loads the file it decodes the audio into an arraybuffer, then uses gain node to normalise at 48%
    //then connects the source to gain and the gain to the destination, a function in place in case of error
    request.onload = function () {
        var audioData = request.response;

        audioCtx.decodeAudioData(audioData, function (buffer) {
            if (!source3.buffer) {
                source3.buffer = buffer;
            }
            gainey.gain.value = document.getElementById('Volume').value / 100;
            source3.connect(gainey);
            gainey.connect(audioCtx.destination);

            source3.loop = true;
        },

            function (e) { console.log("Error with decoding audio data" + e.err); });

    }
    document.body.style.backgroundColor = "blue";

    bufftest = 3;
    request.send();
}
function getAfraid() {
    //creates the buffer for the source so it can be loaded into
    var request = new XMLHttpRequest();

    source4 = audioCtx.createBufferSource();

    request.open('GET', 'scary.webm', true);

    request.responseType = 'arraybuffer';

    //when the request loads the file it decodes the audio into an arraybuffer, then uses gain node to normalise at 48%
    //then connects the source to gain and the gain to the destination, a function in place in case of error
    request.onload = function () {
        var audioData = request.response;

        audioCtx.decodeAudioData(audioData, function (buffer) {
            if (!source4.buffer) {
                source4.buffer = buffer;
            }
            gainey.gain.value = document.getElementById('Volume').value/100;
            source4.connect(gainey);
            gainey.connect(audioCtx.destination);

            source4.loop = true;
        },

            function (e) { console.log("Error with decoding audio data" + e.err); });

    }
    document.body.style.backgroundColor = "red";

    bufftest = 4;
    request.send();
}
function getSad2() {
    //creates the buffer for the source so it can be loaded into
    source = audioCtx.createBufferSource();
    var request = new XMLHttpRequest();

    request.open('GET', 'SadPiano.wav', true);

    request.responseType = 'arraybuffer';

    //when the request loads the file it decodes the audio into an arraybuffer, then uses gain node to normalise at 48%
    //then connects the source to gain and the gain to the destination, a function in place in case of error
    request.onload = function () {
        var audioData = request.response;

        audioCtx.decodeAudioData(audioData, function (buffer) {
            if (!source5.buffer) {
                source5.buffer = buffer;
            }
            gainey.gain.value = document.getElementById('Volume2').value / 100;
            source5.connect(gainey);
            gainey.connect(audioCtx.destination);

            source5.loop = true;
        },

            function (e) { console.log("Error with decoding audio data" + e.err); });

    }

    bufftest2 = 0;
    request.send();
}
function getTense2() {
    //creates the buffer for the source so it can be loaded into
    var request = new XMLHttpRequest();

    source6 = audioCtx.createBufferSource();

    request.open('GET', 'suspense.wav', true);

    request.responseType = 'arraybuffer';

    //when the request loads the file it decodes the audio into an arraybuffer, then uses gain node to normalise at 48%
    //then connects the source to gain and the gain to the destination, a function in place in case of error
    request.onload = function () {
        var audioData = request.response;

        audioCtx.decodeAudioData(audioData, function (buffer) {
            if (!source6.buffer) {
                source6.buffer = buffer;
            }
            gainey.gain.value = document.getElementById('Volume2').value / 100;
            source6.connect(gainey);
            gainey.connect(audioCtx.destination);

            source6.loop = true;
        },

            function (e) { console.log("Error with decoding audio data" + e.err); });

    }

    bufftest2 = 1;
    request.send();
}
function getTriumph2() {
    //creates the buffer for the source so it can be loaded into
    var request = new XMLHttpRequest();

    source7 = audioCtx.createBufferSource();

    request.open('GET', 'triumph.wav', true);

    request.responseType = 'arraybuffer';

    //when the request loads the file it decodes the audio into an arraybuffer, then uses gain node to normalise at 48%
    //then connects the source to gain and the gain to the destination, a function in place in case of error
    request.onload = function () {
        var audioData = request.response;

        audioCtx.decodeAudioData(audioData, function (buffer) {
            if (!source7.buffer) {
                source7.buffer = buffer;
            }
            gainey.gain.value = document.getElementById('Volume2').value / 100;
            source7.connect(gainey);
            gainey.connect(audioCtx.destination);

            source7.loop = true;
        },

            function (e) { console.log("Error with decoding audio data" + e.err); });

    }

    bufftest2 = 2;
    request.send();
}
function getCalm2() {
    //creates the buffer for the source so it can be loaded into
    var request = new XMLHttpRequest();

    source8 = audioCtx.createBufferSource();

    request.open('GET', 'CalmingBirds.wav', true);

    request.responseType = 'arraybuffer';

    //when the request loads the file it decodes the audio into an arraybuffer, then uses gain node to normalise at 48%
    //then connects the source to gain and the gain to the destination, a function in place in case of error
    request.onload = function () {
        var audioData = request.response;

        audioCtx.decodeAudioData(audioData, function (buffer) {
            if (!source8.buffer) {
                source8.buffer = buffer;
            }
            gainey.gain.value = document.getElementById('Volume2').value / 100;
            source8.connect(gainey);
            gainey.connect(audioCtx.destination);

            source8.loop = true;
        },

            function (e) { console.log("Error with decoding audio data" + e.err); });

    }

    bufftest2 = 3;
    request.send();
}
function getAfraid2() {
    //creates the buffer for the source so it can be loaded into
    var request = new XMLHttpRequest();

    source9 = audioCtx.createBufferSource();

    request.open('GET', 'scary.webm', true);

    request.responseType = 'arraybuffer';

    //when the request loads the file it decodes the audio into an arraybuffer, then uses gain node to normalise at 48%
    //then connects the source to gain and the gain to the destination, a function in place in case of error
    request.onload = function () {
        var audioData = request.response;

        audioCtx.decodeAudioData(audioData, function (buffer) {
            if (!source9.buffer) {
                source9.buffer = buffer;
            }
            gainey.gain.value = document.getElementById('Volume2').value / 100;
            source9.connect(gainey);
            gainey.connect(audioCtx.destination);

            source9.loop = true;
        },

            function (e) { console.log("Error with decoding audio data" + e.err); });

    }

    bufftest2 = 4;
    request.send();
}

//a test to ensure the start/stop works right
var playing = 0;
var lastbuff = 0;
var playing2 = 0;
var lastbuff2 = 0;
/*simply start and stop the audio, the playing variable ensures it does the opposite of what it is currently doing */
function Play() {

    if (playing === 0) {
        playing = 1;
        if (bufftest == 0) {
            getSad();
            lastbuff = 0;
            source.start(0);
        }
        else if (bufftest == 1) {
            getTense();
            source1.start(0);
            lastbuff = 1;
        }
        else if (bufftest == 2) {
            getTriumph();
            source2.start(0);
            lastbuff = 2;
        }
        else if (bufftest == 3) {
            getCalm();
            source3.start(0);
            lastbuff = 3;
        }
        else if (bufftest == 4) {
            getAfraid();
            source4.start(0);
            lastbuff = 4;
        }
    }
    else {
        playing = 0;
        if (lastbuff == 0) {
            source.stop(0);
        }
        else if (lastbuff == 1) {
            source1.stop(0);
        }
        else if (lastbuff == 2) {
            source2.stop(0);
        }
        else if (lastbuff == 3) {
            source3.stop(0);
        }
        else if (lastbuff == 4) {
            source4.stop(0);
        }
    }
}

function Play2() {

    if (playing2 === 0) {
        playing2 = 1;
        if (bufftest2 == 0) {
            getSad2();
            lastbuff2 = 0;
            source5.start(0);
        }
        else if (bufftest2 == 1) {
            getTense2();
            source6.start(0);
            lastbuff2 = 1;
        }
        else if (bufftest2 == 2) {
            getTriumph2();
            source7.start(0);
            lastbuff2 = 2;
        }
        else if (bufftest2 == 3) {
            getCalm2();
            source8.start(0);
            lastbuff2 = 3;
        }
        else if (bufftest2 == 4) {
            getAfraid2();
            source9.start(0);
            lastbuff2 = 4;
        }
    }
    else {
        playing2 = 0;
        if (lastbuff2 == 0) {
            source5.stop(0);
        }
        else if (lastbuff2 == 1) {
            source6.stop(0);
        }
        else if (lastbuff2 == 2) {
            source7.stop(0);
        }
        else if (lastbuff2 == 3) {
            source8.stop(0);
        }
        else if (lastbuff2 == 4) {
            source9.stop(0);
        }
    }
}


function VolumeChange() {
    document.getElementById('VolumeDis').innerHTML = document.getElementById('Volume').value;
}
function VolumeChange2() {
    document.getElementById('VolumeDis2').innerHTML = document.getElementById('Volume2').value;
}