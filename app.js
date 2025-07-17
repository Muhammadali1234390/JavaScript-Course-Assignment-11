let colors = [];
for (let i = 0; i < 10; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbColor = "rgb(" + r + ", " + g + ", " + b + ")";
    colors.push(rgbColor);
}

let randomIndex = Math.floor(Math.random() * colors.length);
let oneColor = colors[randomIndex];

document.writeln(oneColor);
