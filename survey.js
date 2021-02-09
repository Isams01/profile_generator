const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let person = {
  name: "",
  favActivity: "",
  favMusic: "",
  favMeal: "",
  favFood: "",
  favSport: "",
  superPower: ""
}

// 
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!

rl.question('What\'s your name? Nicknames are also acceptable :)\n', (answer) => {
  person.name = answer;
  
  rl.question('What\'s an activity you like doing?\n', (answer) => {
    person.favActivity = answer;

    rl.question('What do you listen to while doing that?\n', (answer) => {
      person.favMusic = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?\n', (answer) => {
        person.favMeal = answer;
        rl.question('What\'s your favourite thing to eat for that meal?\n', (answer) => {
          person.favFood = answer;
          rl.question('Which sport is your absolute favourite?\n', (answer) => {
            person.favSport = answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!\n', (answer) => {
              person.superPower = answer;
              console.log(`Hi ${person.name}, your favorite activity is ${person.favActivity}. You like to listen to ${person.favMusic} while doing that.
Your favorite meal time is ${person.favMeal} where you like to eat ${person.favFood}. Your favorite sport is ${person.favSport} and your super power is ${person.superPower}.
`)
              rl.close();
            });
          });
        });
      });
    });
  });
});

