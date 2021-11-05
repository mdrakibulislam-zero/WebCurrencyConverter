const currencyElement_one = document.getElementById('currency-one');
const amountElement_one = document.getElementById('amount-one');
const currencyElement_two = document.getElementById('currency-two');
const amountElement_two = document.getElementById('amount-two');
const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');


function Calculate() {
    const currency_one = currencyElement_one.value;
    const currency_two = currencyElement_two.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
        .then(res => res.json())
        .then(data => {
            const rate = data.rates[currency_two];
            rateElement.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
            amountElement_two.value = (amountElement_one.value * rate).toFixed(2);
        });
}


currencyElement_one.addEventListener('change', Calculate);
amountElement_one.addEventListener('input', Calculate);
currencyElement_two.addEventListener('change', Calculate);
amountElement_two.addEventListener('input', Calculate);

swap.addEventListener('click', function () {
    const temp = currencyElement_one.value;
    currencyElement_one.value = currencyElement_two.value;
    currencyElement_two.value = temp;
    Calculate();
});

Calculate();
