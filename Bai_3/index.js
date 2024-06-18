document.addEventListener("DOMContentLoaded", function () {
    var convertCurrencyBtn = document.getElementById("convertCurrency");


    // Input: amount, currency
    // Process: convertCurrency = amount * rate;
    // Output: convertCurrency
    function convert() {
        var amount = parseFloat(document.getElementById("amount").value);
        var currency = document.getElementById("currency").value;
        let convertCurrency;
        let rate;
        if (!isNaN(amount)) {
            switch (currency) {
                case "choseUSD":
                    rate = 25413;
                    convertCurrency = amount * rate;
                    document.getElementById("result").innerText = `${amount} USD sang VND = ${convertCurrency.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND`;
                    break;
                case "choseEUR":
                    rate = 27451;
                    convertCurrency = amount * rate;
                    document.getElementById("result").innerText = `${amount} EUR sang VND = ${convertCurrency.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND`;
                    break;
                case "choseCNY":
                    rate = 3506;
                    convertCurrency = amount * rate;
                    document.getElementById("result").innerText = `${amount} CNY sang VND = ${convertCurrency.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND`;
                    break;
                case "choseJPY":
                    rate = 161;
                    convertCurrency = amount * rate;
                    document.getElementById("result").innerText = `${amount} JPY sang VND = ${convertCurrency.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VND`;
                    break;
                default:
                    document.getElementById("result").innerText = "Mời chọn loại tiền để đổi";
                    break;
            }
        } else {
            document.getElementById("result").innerText = "Mời bạn nhập số tiền";
        }
    }
    
    convertCurrencyBtn.addEventListener("click", convert);

});
