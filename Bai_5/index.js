document.addEventListener("DOMContentLoaded", function () {
    var countSum = document.getElementById("count");
    var resultDigits = document.getElementById("result");

    function calculateDigits() {
        const valNumber = parseInt(document.getElementById("number").value);
        const numberInput = document.getElementById("number").value.trim();
        var notiNumber = document.getElementById("notiNumber");
        let unit = valNumber % 10;
        let dozens = Math.floor((valNumber % 100) / 10);
        let hundreds = Math.floor((valNumber % 1000) / 100);
        let thousands = Math.floor((valNumber % 10000) / 1000);
        let tensOfThousands = Math.floor((valNumber % 100000) / 10000);
        let hundredsOfThousands = Math.floor(valNumber / 100000);
        let sum = 0;

        resultDigits.innerText = "";
        notiNumber.innerText = "*";
        notiNumber.style.color = "black";


        if (numberInput === "" || isNaN(valNumber)) {
            notiNumber.innerText = "Mời nhập ký số.";
            notiNumber.style.color = "red";
            return;
        } else if (parseInt(valNumber) <= 0) {
            notiNumber.innerText = "Mời nhập số nguyên dương lớn hơn 0.";
            notiNumber.style.color = "red";
            return;
        } else {
            const numberOfDigits = Math.floor(Math.log10(valNumber)) + 1;
            if (numberOfDigits == 1) {
                resultDigits.innerText = "Tổng 1 ký số = " + valNumber;
            } else if (numberOfDigits == 2) {
                sum = unit + dozens;
                resultDigits.innerText = "Tổng 2 ký số = " + sum;
            } else if (numberOfDigits == 3) {
                sum = unit + dozens + hundreds;
                resultDigits.innerText = "Tổng 3 ký số = " + sum;
            } else if (numberOfDigits == 4) {
                sum = unit + dozens + hundreds + thousands;
                resultDigits.innerText = "Tổng 4 ký số = " + sum;
            } else if (numberOfDigits == 5) {
                sum = unit + dozens + hundreds + thousands + tensOfThousands;
                resultDigits.innerText = "Tổng 5 ký số = " + sum;
            } else if (numberOfDigits == 6) {
                sum = unit + dozens + hundreds + thousands + tensOfThousands + hundredsOfThousands;
                resultDigits.innerText = "Tổng 6 ký số = " + sum;
            } else {
                notiNumber.innerText = "Bạn đã nhập quá 6 số";
                notiNumber.style.color = "red";
                return;
            }
        }
    }
    countSum.addEventListener("click", calculateDigits);
});