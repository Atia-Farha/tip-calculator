const billAmount = document.getElementById('billAmount');
const tipPercentage = document.getElementById('tipPercentage');
const btn_calculate = document.getElementById('btn_calculate');
const btn_reset = document.getElementById('btn_reset');
const warning = document.getElementById('warning');
const tip_amount = document.getElementById('tip_amount');
const total_bill_amount = document.getElementById('total_bill_amount');

btn_calculate.addEventListener("click", (e) => {
    e.preventDefault();

    const billAmountValue = parseFloat(billAmount.value);
    const tipPercentageValue = parseFloat(tipPercentage.value);

    if (billAmount.value === '' || tipPercentage.value === '') {
        warning.textContent = 'Please fill all the input fields';

        return;
    }
    else if (billAmountValue < 0.01) {
        warning.textContent = 'Bill Amount must be greater than 0.01';

        return;
    }
    else if (tipPercentageValue > 100 || tipPercentageValue < 0) {
        warning.textContent = 'Tip Percentage must be between 0 and 100';

        return;
    }
    else {
        warning.textContent = '';
    }

    let tipAmountValue = (billAmountValue * tipPercentageValue) / 100;
    let totalBillAmountValue = billAmountValue + tipAmountValue;

    tipAmountValue = Number.isInteger(tipAmountValue) ? tipAmountValue : tipAmountValue.toFixed(2);
    totalBillAmountValue = Number.isInteger(totalBillAmountValue) ? totalBillAmountValue : totalBillAmountValue.toFixed(2);

    tip_amount.textContent = `$ ${tipAmountValue}`;
    total_bill_amount.textContent = `$ ${totalBillAmountValue}`;
});

const inputs = document.querySelectorAll('input');
inputs.forEach((input) => {
    input.addEventListener('input', () => {
        tip_amount.textContent = '';
        total_bill_amount.textContent = '';

        if (parseFloat(billAmount.value) < 0.01) {
            warning.textContent = 'Bill Amount must be greater than 0.01';
        }
        else if (parseFloat(tipPercentage.value) > 100 || parseFloat(tipPercentage.value) < 0) {
            warning.textContent = 'Tip Percentage must be between 0 and 100';
        } else {
            warning.textContent = '';
        }
    })
})

btn_reset.addEventListener("click", (e) => {
    e.preventDefault();

    billAmount.value = '';
    tipPercentage.value = '';
    tip_amount.textContent = '';
    total_bill_amount.textContent = '';
    warning.textContent = '';
});