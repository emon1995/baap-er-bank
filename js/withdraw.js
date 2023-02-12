document.getElementById("btn-withdraw").addEventListener("click", function () {
  // input deposit
  const withdrawField = document.getElementById("withdraw-amount");
  const newWithdrawAmount = withdrawField.value;

  //   deposit total
  const withdrawTotal = document.getElementById("withdraw-total");
  const previousWithdrawTotalAmount = parseFloat(withdrawTotal.innerText);

  // balance total
  const balanceTotalAmount = document.getElementById("balance-total");
  const previousBalanceTotal = parseFloat(balanceTotalAmount.innerText);

  if (newWithdrawAmount === "") {
    alert("Please enter withdraw amount");
  } else if (parseFloat(newWithdrawAmount) > previousBalanceTotal) {
    alert("Your Balance is Low!!!");
  } else {
    withdrawTotal.innerText =
      parseFloat(previousWithdrawTotalAmount) + parseFloat(newWithdrawAmount);

    balanceTotalAmount.innerText =
      parseFloat(previousBalanceTotal) - parseFloat(newWithdrawAmount);
  }

  withdrawField.value = "";
});
