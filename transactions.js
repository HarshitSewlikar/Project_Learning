const revenue_updt = document.getElementById("rev");//input id
const update = document.getElementById("updt_rev");//button id
const revenue = document.getElementById("revenue");//para id
const description = document.getElementById("desc"); //getting description as an input
const tran_hist = document.getElementById("history");//getting transaction history
const expense = document.getElementById("expense"); //getting the expense

let totalRevenue = 0;
const transactions = [];// array to store the transactions


function Validatetransaction(amount,desc){
   
   if (amount === ""){
   console.log("No value");
   return false;
   }else if(amount <= 0){

   console.log("Invalid amount");
   return false;
   }
   
   
   if(desc.trim() === ""){
   alert("Please enter a description");
   return false;
   }
   return true;
}

function addtransaction(desc,tran,exp){
   transactions.push(({description :desc.trim() , amount : tran , expense: exp}));
}


function updateDisplay(tran,exp){
      
   totalRevenue += tran;
   totalRevenue -=exp;

   revenue.textContent = totalRevenue;
  
}

function rendertransaction(transactions){
 tran_hist.innerHTML = "";
 transactions.forEach(function(transaction){
       
      const new_list= document.createElement("li");
      new_list.textContent = `${transaction.description}- rs${transaction.amount}- expsense${transaction.expense}`;
      tran_hist.appendChild(new_list);




 })


}

update.addEventListener("click" , function(){
   const tran = Number(revenue_updt.value);
   const amount = revenue_updt.value;
   const desc = description.value;
   const exp = Number(expense.value);

   if(!Validatetransaction(amount,desc)){
      return;
   }

   addtransaction(desc,tran,exp);
   updateDisplay(tran,exp);
   rendertransaction(transactions);

   revenue_updt.value="";
   description.value="";
   expense.value="";
   


});




