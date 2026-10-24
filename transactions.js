const revenue_updt = document.getElementById("rev");//input id

const update = document.getElementById("updt_rev");//button id

const revenue = document.getElementById("revenue");//para id
const description = document.getElementById("desc"); //getting description as an input
let totalRevenue = 0;
const transactions = [];// array to store the transactions


update.addEventListener("click" , function(){

   if (revenue_updt.value === ""){
    console.log("No value");
   }else if(Number(revenue_updt.value) < 0){

   console.log("Invalid amount");
   }else{
   console.log(revenue_updt.value); 
   const tran = Number(revenue_updt.value);
   
   const desc = description.value;
   if(desc.trim() === ""){
    alert("Please enter a description");
   }else{
   transactions.push(({description :desc   , amount : tran}));
        }
   totalRevenue += tran;
   revenue.textContent = totalRevenue;
   console.log(totalRevenue);
   console.log(transactions);
   }
});
revenue_updt.value = "";
description.value = "";



