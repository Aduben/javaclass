//ternary operator is used as alternative to if-else statments when you need to choose between two expressions
const sales = 300;
const commissionAmt = sales >300? `You are entitled for ${sales *.02}`:"You are not entitled for any commission";
console.log(commissionAmt);    