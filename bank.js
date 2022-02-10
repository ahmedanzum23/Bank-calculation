//handle deposite button event

document.getElementById('deposit-button').addEventListener('click', function () {


    //update deposite total
    const depositInput = document.getElementById('deposit-input');
    const newdepositAmountText = depositInput.value;
    const newdepositAmount = parseFloat(newdepositAmountText);

    const depositTotal = document.getElementById('deposit-total')


    const previousDepositText = depositTotal.innerText
    const previousDepositAmount = parseFloat(previousDepositText)


    const newdepositTotal = previousDepositAmount + newdepositAmount

    depositTotal.innerText = newdepositTotal




    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newdepositAmount;
    balanceTotal.innerText = newBalanceTotal;










    // clear the value
    depositInput.value = '';

}

)