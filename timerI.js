const out = (input) => {
  input.splice(0,2);
  let output = [];
  for (let i of input) {
    i = parseInt(i);
    if (parseInt(i) && i > 0) {
      i *= 1000;
      input = output.push(i);
    }
  }
  output.sort((a,b) => a - b);
  timer(output);
};

const timer = (output) => {
  for (let o of output) {
    setTimeout(() => {
      process.stdout.write('\x07');
    },o);
  }
};

let input = process.argv;
out(input);