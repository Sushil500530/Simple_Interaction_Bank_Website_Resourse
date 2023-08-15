/*
1. add event handler with the withdrow button
2. get the withdrow amount from the withdrow input field
2-5 . also make sure t convert the input into a number by using parseFloat()
3. get previous withdrow total
4.calculate total withdrow amount
4-5. set taotal witdrow amount
5. get the previous balance total
6. calculate new balance
6-5 . set the new balance total
7. clear the input field
*/
// step -1 :
document.getElementById('btn-withdrow').addEventListener('click',function(){
    // step -2 :
    const withdrowField = document.getElementById('input-withdrow')
    const newWithdrowAmountString = withdrowField.value ;
    const newWithdrowAmount = parseFloat(newWithdrowAmountString)
    // console.log(typeof newWithdrowAmount) 

    // step -3 :
    const withdrowTotalElement= document.getElementById('withdrow-total') ;
    const withdrowTotalString = withdrowTotalElement.innerText;
    const previousWithdrowTotal = parseFloat(withdrowTotalString) ;
    // console.log(previousWithdrowTotal)

    // step-4 :
     const currentWithdrowTotal = previousWithdrowTotal + newWithdrowAmount ;
     withdrowTotalElement.innerText = currentWithdrowTotal;

    // step -5 
    const balanceTotalElement = document.getElementById('balance-total') ;
    const previousBalanceTotalString = balanceTotalElement.innerText ;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString)
    // console.log(typeof previousBalanceTotal)

    // step -6 
    const totalWithdrow = previousBalanceTotal - newWithdrowAmount ;
    balanceTotalElement.innerText = totalWithdrow
    //  step -7 : clear the input field 
     withdrowField.value = '' ;
})