document.getElementById("btn-withdraw").addEventListener("click", function () {
  // input deposit
  const withdrawField = document.getElementById("withdraw-amount");
  const newWithdrawAmount = parseFloat(withdrawField.value);

  //   deposit total
  const withdrawTotal = document.getElementById("withdraw-total");
  const previousWithdrawTotalAmount = parseFloat(withdrawTotal.innerText);

  // balance total
  const balanceTotalAmount = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotalAmount.innerText);

  if (isNaN(newWithdrawAmount)) {
    alert("Please enter withdraw amount of number");
  } else if (parseFloat(newWithdrawAmount) > previousBalanceTotal) {
    alert("Your Balance is Low!!!");
  }
  // else if (typeof newWithdrawNumber === "string") {
  //   alert("Please enter number of amount");
  // }
  else {
    withdrawTotal.innerText =
      parseFloat(previousWithdrawTotalAmount) + parseFloat(newWithdrawAmount);

    balanceTotalAmount.innerText =
      parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
  }

  withdrawField.value = "";
});
