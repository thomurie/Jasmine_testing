window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM. DONE
// Put some default values in the inputs DONE
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const amount = document.getElementById("loan-amount");
  const years = document.getElementById("loan-years");
  const rate = document.getElementById("loan-rate");
  amount.value = 1400;
  years.value = 1;
  rate.value = 1.0;
  return update();
}

// Get the current values from the UI DONE
// Update the monthly payment DONE
function update() {
  return updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string DONE
// that always has 2 decimal places. DONE
function calculateMonthlyPayment(values) {
  const p = values.amount;
  const i = values.rate / 100 / 12;
  const n = Math.floor(values.years * 12);
  const topofEquation = p * i;
  const bottomofEquation = (1 + i) ** -n;
  const equationSolution = topofEquation / (1 - bottomofEquation);
  const monthlyPayment = String(
    Math.round((equationSolution + Number.EPSILON) * 100) / 100
  );
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPaymentElem = document.getElementById("monthly-payment");
  return (monthlyPaymentElem.innerText = monthly);
}
