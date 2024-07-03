#!/usr/bin/env node
import readline from 'readline-sync';

import chalk from 'chalk';
const Portfolio={
    name:"Aditya Pande",
    about:"I am Aditya Pande, pursuing my B.Tech in Computer Science.\nI am a Full Stack Developer based in India and have been coding since 2022.Since my childhood,\n I have had a huge interest in technology. \nChanneling this interest towards computer science has been a good decision for me as I learn something new about technology every day.",
    skills:["C/C++","Javascript","Java","Python","Typescript","React.js","Node.js","Express","Docker","Android","Git","Mongodb","PostgreSql","Prisma","Tailwind"],
    
};
const Contacts={
    email:"adityaspande1@gmail.com",
    linkedIn:"https://www.linkedin.com/in/aditya-pande-716862213/",
    github:"https://github.com/adityaspande1"
}
console.log(chalk.blue(`

    
    
██╗░░██╗██╗  ████████╗██╗░░██╗███████╗██████╗░███████╗ ██╗██╗
██║░░██║██║  ╚══██╔══╝██║░░██║██╔════╝██╔══██╗██╔════╝ ██║██║
███████║██║  ░░░██║░░░███████║█████╗░░██████╔╝█████╗░░ ██║██║
██╔══██║██║  ░░░██║░░░██╔══██║██╔══╝░░██╔══██╗██╔══╝░░ ╚═╝╚═╝
██║░░██║██║  ░░░██║░░░██║░░██║███████╗██║░░██║███████╗ ██╗██╗
╚═╝░░╚═╝╚═╝  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝ ╚═╝╚═╝`))
console.log("\n");
console.log("I am Aditya and this is my cli portfolio.")
const menu=`
${chalk.blue("Wnat to Explore?:\n")}
${chalk.green("1.aboutme")}
${chalk.green("2.skills")}
${chalk.green("3.contactme")}
${chalk.red("4.EXIT")}
`

let isRunning=true;
async function main(){
while(isRunning){
    console.log(menu);
    const choice=await readline.question("Enter your choice: ");
    switch(choice){
        case "aboutme":
            console.log(chalk.blue("\nAbout me:\n"));
            console.log(chalk.yellow(Portfolio.about));
            break;
        case "skills":
            console.log(chalk.blue(`
        █▀ █▄▀ █ █░░ █░░ █▀
        ▄█ █░█ █ █▄▄ █▄▄ ▄█`));
            
            Portfolio.skills.forEach(skill => console.log(chalk.yellow(`- ${skill}`)));
            break;
        case "contactme":
            console.log(chalk.blue("\nContacts:\n"));
            console.log(chalk.yellow("Email: "+Contacts.email));
            console.log(chalk.yellow("LinkedIn: "+Contacts.linkedIn));
            console.log(chalk.yellow("Github: "+Contacts.github));
            break;
        case "EXIT":
            console.log(chalk.yellowBright(`
█▀▄▀█ █▀▀ █▀ █▀ ▄▀█ █▀▀ █▀▀
█░▀░█ ██▄ ▄█ ▄█ █▀█ █▄█ ██▄`))

            console.log(chalk.greenBright("\nThanks for visiting my cli. Hope you liked it.\n Please feel free to contact me. "));
            isRunning=false;
            break;

        default:
            console.log(chalk.redBright("Invalid Input .Please Try again."));

    }
    console.log("\n");
}
}
main();