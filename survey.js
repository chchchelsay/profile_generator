const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const q = {
name: "What's your name? Nicknames are also acceptable :)",
hobby: "What's an activity you like doing?",
music: "What do you listen to while doing that?",
meal: "Which meal is your favourite? (eg: dinner, brunch, etc.)",
dish: "What's your favourite thing to eat for that meal?",
sport: "Which sport is your absolute favourite?",
power: "What is your superpower? In a few words, tell us what you are amazing at!",
}

const questions = [q.name, q.hobby, q.music, q.meal, q.dish, q.sport, q.power]
let result = ' ';
let a = [];

function ask (i) {
  if (i < questions.length) {
    rl.question(questions[i], (answer) => {
      result += '\n' + answer;
      a.push(answer);
      ask(i + 1);
    });
  } else {
    console.log(`${a[0]} loves listening to${a[2]} while${a[1]}, devouring ${a[4]} 
    for${a[3]}, prefers ${a[5]} over any other sport, 
    and is amazing at ${a[6]}`);
    rl.close();
  }
};
ask(0);

