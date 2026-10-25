const revenue_updt = document.getElementById("rev");//input of amount 
const update = document.getElementById("updt_rev");//the button id
const revenue = document.getElementById("revenue");//the above element id of revenue
const description = document.getElementById("desc"); //getting description as an input
const tran_hist = document.getElementById("history");//getting transaction history
const amt_type = document.getElementById("type");//getting to drop down menu id


let totalRevenue = 0;
const transactions = [];// array to store the transactions


function validatetransaction(amount,desc){


   if(!Number.isFinite(Number(amount))){
      console.log("number is not finite");
      return false;
   }

   
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

function addtransaction(desc,tran,type){
   transactions.push(({description :desc.trim() , amount : tran , transaction_type : type }));
}


function updateDisplay(tran,type){
   if(type === "income"){
      totalRevenue += tran;
   }else if(type === "expense"){
      totalRevenue -= tran;
   }
      
  revenue.textContent = totalRevenue;
  
}

function rendertransaction(transactions){
 tran_hist.innerHTML = "";
 transactions.forEach(function(transaction){
       
      const new_list= document.createElement("li");
      new_list.textContent = `${transaction.description}- rs${transaction.amount} - Transaction type ${transaction.transaction_type}`;
      tran_hist.appendChild(new_list);




 })


}

update.addEventListener("click" , function(){
   const tran = Number(revenue_updt.value);
   const amount = revenue_updt.value;
   const desc = description.value;
   const type= amt_type.value;
  
   

   if(!validatetransaction(amount,desc)){
      return;
   }

   addtransaction(desc,tran ,type);
   updateDisplay(tran,type);
   rendertransaction(transactions);

   revenue_updt.value="";
   description.value="";
   
   


});




