
/////////////challenge start
let splitBill=(amount,numPeople) => `Each person needs to pay ${amount/ numPeople} `;
console.log(splitBill(10,5))
console.log(splitBill(10,4))

//////////////stretch goal start



   let countdown=(startingNumber,step)=>{
      let countFromNum = startingNumber + step
      let decrease=()=>{
         countFromNum -=step;
         return countFromNum
      }
      return decrease
   }
   const countingDown =countdown(20,2);
   
   console.log(countingDown());
  console.log(countingDown());