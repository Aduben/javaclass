

const prompt = require("prompt-sync");
const userInput=prompt();
const saleAmount = userInput("What was the sale amount? ");
isSalaried = userInput(" Are you salaried? Please respond either yes or no: ")
startingCommission = saleAmount * 0.01;
advancedCommission = saleAmount * 0.02;
professionalsCommission = saleAmount * 0.03;
if (isSalaried==='yes'){
    if (saleAmount >300 && saleAmount <=500){
        console.log(`Your commision amount is $${startingCommission}`)
        }
    else if(saleAmount >500){
        console.log(`Your commision amount is $${admvancedCommission}`)
    }
    else console.log("Sorry there is no sales commission for You at this point in time")    
}
else if(isSalaried==='no'){
    if (saleAmount >300 && saleAmount <=500){
        console.log(`Your commision amount is $${advancedCommission}`)
    }
    else if(saleAmount >500){
        console.log(`Your commision amount is $${professionalsCommission}`)
    }
    else console.log("Sorry there is no sales commission for You at this point in time")  
}