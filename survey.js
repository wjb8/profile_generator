const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {};

const survey = function() {
  rl.question(`What's your name? `, (answer) => {
    
    profile.userName = answer;

    rl.question(`What's an activity you like doing, ${profile.userName}? `, (answer) => {
      
      profile.activity = answer;

      rl.question(`What do you listen to while doing that? `, (answer) => {

        profile.music = answer;

        rl.question(`Which meal is your favourite? `, (answer) => {

          profile.meal = answer;

          rl.question(`What's your favourite food to have for ${profile.meal}? `, (answer) => {

            profile.food = answer;

            rl.question(`What's your favourite sport? `, (answer) => {

              profile.sport = answer;

              rl.question(`What is your superpower? `, (answer) => {

                profile.superpower = answer;

                rl.close();
                console.log(`${profile.userName} loves listening to ${profile.music} while ${profile.activity}, suckin' down ${profile.food} for ${profile.meal}, loves ${profile.sport}, and is amazing at ${profile.superpower}.`);

              });
            });
          });
        });
      });
    });
  });
};

survey();