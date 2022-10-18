import PromptSync from "prompt-sync";
const prompt = PromptSync();

let location = prompt("Where are you? ")
switch(location){
    case "America":
        console.log("Hello Alexandar");
        break;
    case "Chicago":
        console.log("Hello John");
        break;
    case "Australia":
        console.log("Hello Sushi");  
        break;
    case "Pakistan":
        console.log("Hello Hamza Bhai");  
        break;   
    default:
        console.log("Please Re-Enter your country name!")    
        break;
}

//if we have 4 to 5 conditions, use if else
//if we have more than 4 to 5 conditions, then come to switch case