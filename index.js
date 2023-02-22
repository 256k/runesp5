console.log("hello runes")

// let's treat this like a norns / lua file but in js

const STEPS = 8;
const tracks = [];
const PARAMSKEYS = ["step", "note", "oct", "prob", "clkdiv" ];

// class track {
//     constructor(step, note, octave, probability, clkdiv) {
//       this.step = step;
//       this.note = note;
//       this.octave = octave;
//       this.probability = probability;
//       this.clkdiv = clkdiv;
//     }

//     draw() {
//         // draw stuff
//     }
//   }
  
let track = {step: [], note:[], oct: [], prob:[], clkdiv: []}


for (let param = 0; param < Object.keys(track).length; param++) {
    for (let stepIndex = 0; stepIndex < STEPS; stepIndex++) {
        track[PARAMSKEYS[param]][stepIndex] = "|";
    }
}
track.step[2] = 0;
track.step[5] = 0;
track.step[7] = 0;

function runStep(trackStep) {
    if(track.step[trackStep] === "O") {
        
    }
}

console.log(track)