#! /usr/bin/env node
// import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
async function invitation() {
    let rainbowText = chalkAnimation.rainbow("============ Word Converter ============");
    await sleep();
    rainbowText.stop();
}
async function askQuestion() {
    let que = await inquirer.prompt([{
            type: "input",
            name: "str",
            message: chalk.rgb(187, 143, 207)(`Write a paragraph you want to convert: `)
        }
    ]);
    const word = que.str.split(" ");
    console.log(word);
    console.log(`Word in paragraph: ${word.length}`);
    const chr_withoutspace = que.str.replace(/ /g, "");
    console.log(`Total character in paragraph: ${chr_withoutspace.length}`);
}
async function continuegame() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            name: 'restart',
            type: 'input',
            message: chalk.rgb(185, 144, 208)("Do you want to continue?"),
        });
    } while (again.restart == 'y' || again.restart == 'Y' || again.restart == 'YES' || again.restart == 'yes');
}
await invitation();
await continuegame();
