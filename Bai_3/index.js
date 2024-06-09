document.addEventListener("DOMContentLoaded", function () {
    var convertCurrencyBtn = document.getElementById("convertCurrency");

    function convert() {
        const amount = parseFloat(document.getElementById("amount").value);
        const currency = document.getElementById("currency").value;
        let convertCurrency;
        let rate;
        if(!isNaN(amount)){
            switch (currency) {
                case "choseUSD":
                    rate = 25.413;
                    convertCurrency = amount * rate;
                    document.getElementById("result").innerText = `${amount} ${currency} = ${convertCurrency.toFixed(2)} VND`;
                    break;
                case "choseEUR":
                    rate = 27.451;
                    convertCurrency = amount * rate;
                    document.getElementById("result").innerText = `${amount} ${currency} = ${convertCurrency.toFixed(2)} VND`;
                    break;
                case "choseCNY":
                    rate = 3.506;
                    convertCurrency = amount * rate;
                    document.getElementById("result").innerText = `${amount} ${currency} = ${convertCurrency.toFixed(2)} VND`;
                    break;
                case "choseJPY":
                    rate = 16.211;
                    convertCurrency = amount * rate;
                    document.getElementById("result").innerText = `${amount} ${currency} = ${convertCurrency.toFixed(2)} VND`;
                    break;
                default:
                    document.getElementById("result").innerText = "Mời chọn loại tiền để đổi"
                    break;
            }
        }
        else{
            document.getElementById("result").innerText = "Mời bạn nhập số tiền"
        }
    }
    convertCurrencyBtn.addEventListener("click", convert);

});
