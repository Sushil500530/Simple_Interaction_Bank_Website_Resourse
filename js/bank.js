//  step-1: addEventListener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log('click deposit')
    // step -2 : get the deposit input field
    // to input field use .value to the value inside the input field 
    const deposit = document.getElementById('input-deposit');
    const newDepositAmountString = deposit.value ;
    const newDepositAmount = parseFloat(newDepositAmountString)
    // console.log(newDepositAmount)
    // console.log(depositAmount)
    // step -3 : get the current deposit total 
    // for none input(element other than input,textArea ) use innerText to get the text 
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText ;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    // console.log(typeof previousDepositTotal)
    // step -4 : add number total the deposit
    const total = previousDepositTotal + newDepositAmount ;
    // set the deposit total 
    depositTotalElement.innerText = total ;
    // console.log(total)
    // step -5 : get balance total add  
      const balanceElement = document.getElementById('balance-total') ;
      const balanceTotalString = balanceElement.innerText;
      const balanceTotal = parseFloat(balanceTotalString);

      //step -6 : calculate current total balance
      const currentBalanceTotal = balanceTotal + newDepositAmount ;
      // set the balance total 
    balanceElement.innerText = currentBalanceTotal ;
    // step - : clear the deposit field 
    deposit.value ='' ;
})

