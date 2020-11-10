const { Tone } = require("tone/build/esm/core/Tone");

let loopBeat;
let bassSynth;

function setup() {
    bassSynth = new Tone.MembraneSynth().toMaster();
    //4n = quarter note
    loopBeat = new Tone.Loop(song, '4n');
    Tone.Transport.bpm.value = 140;
    Tone.Transport.start();
    loopBeat.start(0);
}

function song(time) {
    //                   note, duration, time
    bassSynth.triggerAttackRelease('c1', '8n', time);
}