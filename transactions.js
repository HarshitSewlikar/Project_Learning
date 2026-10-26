const revenue_updt = document.getElementById("rev");//input of amount 
const update = document.getElementById("updt_rev");//the button id
const revenue = document.getElementById("revenue");//the above element id of revenue
const description = document.getElementById("desc"); //getting description as an input
const tran_hist = document.getElementById("history");//getting transaction history
const amt_type = document.getElementById("type");//getting to drop down menu id
const search_desc = document.getElementById("search");//getting the search filter desc


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

function rendertransaction(filteredTransaction){
 tran_hist.innerHTML = "";
 filteredTransaction.forEach(function(transaction){
       
      const new_list= document.createElement("li");
      const deleteButton = document.createElement("button")
     
      new_list.textContent = `${transaction.description}- rs${transaction.amount} - Transaction type ${transaction.transaction_type}`;
      deleteButton.textContent = `delete`
      tran_hist.appendChild(deleteButton);
      tran_hist.appendChild(new_list);
       deleteButton.addEventListener("click", function() {
    const result = confirm("Do you want to delete this transaction?");

    if (result === true) {
        const index = transactions.indexOf(transaction);

        if (index === -1) {
            return;
        }

        transactions.splice(index, 1);

        if (transaction.transaction_type === "income") {
            totalRevenue -= transaction.amount;
        } else if (transaction.transaction_type === "expense") {
            totalRevenue += transaction.amount;
        }

        revenue.textContent = totalRevenue;

        rendertransaction(getFilteredTransaction());
    } else {
        return;
    }
});



       })


}


function getFilteredTransaction(){
 const filter = search_desc.value.trim().toLowerCase();

 return transactions.filter(t => t.description.toLowerCase().includes(filter))

}


search_desc.addEventListener("input",function(){
     const filteredTransaction = getFilteredTransaction();
     rendertransaction(filteredTransaction);


});

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




