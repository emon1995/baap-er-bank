document.getElementById("btn-deposit").addEventListener("click", function () {
  // input deposit
  const depositField = document.getElementById("deposit-amount");
  const newDepositAmount = parseFloat(depositField.value);

  //   deposit total
  const depositTotal = document.getElementById("deposit-total");
  const previousDepositTotalAmount = depositTotal.innerText;

  // balance total
  const balanceTotalAmount = document.getElementById("balance-total");
  const previousBalanceTotal = balanceTotalAmount.innerText;

  if (isNaN(newDepositAmount)) {
    alert("Please enter deposit amount of number");
  } else {
    depositTotal.innerText =
      parseFloat(previousDepositTotalAmount) + parseFloat(newDepositAmount);

    balanceTotalAmount.innerText =
      parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);
  }

  depositField.value = "";
});
